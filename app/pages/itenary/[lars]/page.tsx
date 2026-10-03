// app/pages/itenary/[lars]/page.tsx
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { itinerariesData, type Itinerary } from "@/app/pages/data/itenraydata";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    lars: string;
  }>;
}

export default async function ItineraryDetailPage({ params }: PageProps) {
  const { lars } = await params;

  // Match lars parameter against the item's slug (or lars property)
  const itinerary = itinerariesData.find(
    (item: Itinerary) => item.slug === lars || (item as any).lars === lars,
  );

  if (!itinerary) {
    notFound();
  }

  return (
    <>
      <Navbar isScrolled={true} />
      <div className="bg-gray-50 min-h-screen py-16 px-6 pt-28">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">
            {itinerary.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-amber-900 bg-amber-50 p-4 rounded-xl my-4 border border-amber-200">
            <span>Duration: {itinerary.duration}</span>
            {itinerary.route && (
              <>
                <span>|</span>
                <span>Route: {itinerary.route}</span>
              </>
            )}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {itinerary.overview}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            {itinerary.days?.map((dayItem, index) => (
              <div
                key={index}
                className="border-l-4 border-amber-500 pl-4 py-1"
              >
                <h3 className="text-xl font-bold text-amber-700">
                  {dayItem.day}: {dayItem.title}
                </h3>
                {dayItem.description?.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-600 mt-2 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              href="/pages/tours"
              className="inline-flex items-center text-amber-800 hover:text-amber-900 font-semibold hover:underline transition-colors"
            >
              ← Back to all itineraries
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
