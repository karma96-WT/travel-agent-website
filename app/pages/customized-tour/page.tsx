"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import { sendEmail } from "@/app/action";

import {
  Send,
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Home,
  Wallet,
} from "lucide-react";

const BookingForm = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // 3. Call the Server Action directly
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus("success");
      } else {
        console.error("Resend Error:", result.error);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-10 rounded-3xl text-center max-w-2xl mx-auto my-12">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <Send size={32} />
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
        <p className="text-green-700">
          Your Bhutan trip inquiry has been sent to our agents. We will contact
          you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-green-800 font-semibold underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto p-8 bg-white dark:bg-white shadow-2xl rounded-3xl border border-slate-100 my-12">
        <div className="mb-8 border-b pb-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Customize Your Bhutan Dream Trip
          </h2>
          <p className="text-slate-500 mt-2">
            Fill out the form below and Bhutan Happiness Tours will build your
            perfect itinerary.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700  flex items-center gap-2">
              <Users size={16} /> Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              className="p-3 border rounded-xl dark:text-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>

          {/* Email / Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700 flex items-center gap-2">
              <Mail size={16} /> Email or Phone
            </label>
            <input
              required
              name="contact"
              type="email"
              pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[0-9\s\-]{7,15})$"
              title="Please enter a valid email address or phone number (e.g., +975 17112233)"
              placeholder="email@example.com or +975..."
              className="p-3 dark:text-slate-700 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>

          {/* Travel Dates */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-semibold text-slate-700 flex items-center gap-2">
              <Calendar size={16} /> Travel Date (Day / Month / Year)
            </label>
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <input
                required
                name="day"
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              {/* Month */}
              <input
                required
                name="month"
                type="number"
                min="1"
                max="12"
                placeholder="MM"
                className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              {/* Year*/}
              <input
                required
                name="year"
                type="number"
                min="2026"
                max="2030"
                placeholder="YYYY"
                className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Number of People */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700 flex items-center gap-2">
              <Users size={16} /> Number of People
            </label>
            <input
              required
              name="guests"
              type="number"
              min="1"
              placeholder="2"
              className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>

          {/* Type of Tour Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700 flex items-center gap-2">
              <MapPin size={16} /> Type of Tour
            </label>
            <select
              name="tourType"
              required
              defaultValue=""
              className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-white"
            >
              <option value="" disabled>
                Select a tour type...
              </option>
              <option>Cultural Tour</option>
              <option>Trekking Adventure</option>
              <option>Spiritual & Wellness</option>
              <option>Photography Tour</option>
              <option>Festival Special</option>
            </select>
          </div>

          {/* Accommodation Preference */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700 flex items-center gap-2">
              <Home size={16} /> Accommodation
            </label>
            <select
              name="accommodation"
              required
              defaultValue=""
              className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition bg-white"
            >
              <option value="" disabled>
                Select accommodation...
              </option>
              <option>Standard (3-Star)</option>
              <option>Luxury (4/5-Star)</option>
              <option>Homestay Experience</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="flex flex-col md:col-span-2 gap-2">
            <label className="font-semibold text-slate-700 dark:text-slate-700 flex items-center gap-2">
              <Wallet size={16} /> Budget Range (Per Person)
            </label>
            <input
              name="budget"
              type="text"
              placeholder="e.g., $2000 - $3000"
              className="p-3 border text-slate-700 dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>

          {/* Special Requests */}
          <div className="flex flex-col md:col-span-2 gap-2">
            <label className="font-semibold text-slate-700 dark:text-slate-700">
              Special Requests / Interests
            </label>
            <textarea
              name="requests"
              rows={4}
              placeholder="Tell us about any specific interests, dietary needs, or celebrations..."
              className="p-3 border dark:text-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-4 rounded-xl font-bold text-white transition shadow-lg flex items-center justify-center gap-2 ${
                status === "submitting"
                  ? "bg-slate-400"
                  : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200"
              }`}
            >
              {status === "submitting" ? "Sending..." : "Submit Inquiry"}
              <Send size={18} />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookingForm;
