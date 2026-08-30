import { toursData, type Tour } from "@/app/pages/data/toursData";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths for all tours (optional but recommended)
export async function generateStaticParams() {
  return toursData.map((tour) => ({
    slug: tour.slug,
  }));
}

// Define page params type – Next.js 15+ expects `params` as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
  // Await the params (required in Next.js 15+)
  const { slug } = await params;

  const tour: Tour | undefined = toursData.find((t) => t.slug === slug);

  // If no tour matches, show 404
  if (!tour) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12 px-6 pt-20">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {tour.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{tour.shortDescription}</p>
          <div
            className="prose prose-lg max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: tour.fullContent }}
          />
          <div className="mt-8">
            <Link
              href="/pages/tours"
              className="text-[#063b1a] hover:underline font-medium"
            >
              ← Back to all tours
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
