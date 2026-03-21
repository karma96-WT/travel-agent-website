"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // 1. Extract Data
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const tourType = formData.get("tourType") as string;
  const accommodation = formData.get("accommodation") as string;
  const day = formData.get("day") as string;
  const month = formData.get("month") as string;
  const year = formData.get("year") as string;
  const isEmail = contact.includes("@");
  const isPhone = /^\+?[0-9\s\-]{7,15}$/.test(contact);
  const budget = formData.get("budget") as string;
  const requests = formData.get("requests") as string;
  
  if (!isEmail && !isPhone) {
    return { 
      success: false, 
      error: "Please provide a valid email or phone number so we can reach you." 
    };
  }

  // 2. Server-Side Validation
  if (!name || !contact || !tourType || !accommodation) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["karmawangchukt69@gmail.com"],
      subject: `New Inquiry from ${name}`,
      // inside resend.emails.send({ ... })
html: `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
    <div style="background-color: #059669; padding: 20px; text-align: center;">
      <h2 style="color: white; margin: 0; font-size: 24px;">New Trip Inquiry</h2>
      <p style="color: #d1fae5; margin: 5px 0 0 0;">Bhutan Happiness Tours</p>
    </div>
    
    <div style="padding: 24px; background-color: #ffffff;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 40%;">Customer Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Contact Info</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${contact}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Travel Date</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${day} / ${month} / ${year}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Number of Guests</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${formData.get("guests")} People</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Tour Category</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${tourType}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Accommodation</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${accommodation}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Budget Estimate</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${formData.get("budget") || "Not provided"}</td>
        </tr>
      </table>

      <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
        <h4 style="margin: 0 0 8px 0; color: #475569;">Special Requests:</h4>
        <p style="margin: 0; color: #1e293b; line-height: 1.5;">${formData.get("requests") || "No special requests mentioned."}</p>
      </div>
    </div>

    <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
      This inquiry was sent from your website's inquery form.
    </div>
  </div>
`
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}