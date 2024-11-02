import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Apna Bazaar and our mission.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <div className="space-y-10 text-center">
        {/* About Us Header */}
        <h1 className="py-5 text-4xl font-bold">ABOUT US</h1>
        <p className="leading-7">
          Welcome to Apna Bazaar, a community-centric marketplace founded by
          Tabassum and Alim. Our journey began after the pandemic, driven by the
          desire to create a vibrant space for locals to shop, connect, and
          thrive. We are passionate about offering high-quality products while
          supporting local artisans and businesses.
        </p>
        <p className="leading-7">
          At Apna Bazaar, we believe in the power of community and strive to
          provide a welcoming environment for all our customers. Whether
          you&pos;re looking for everyday essentials or unique finds, we are
          here to cater to your needs with excellent service and dedication.
        </p>

        {/* Grid Layout for Team Information */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Meet Tabassum</h2>
            <p className="mt-3 leading-6">
              As a co-founder, Tabassum brings her expertise in customer
              relations and a passion for community engagement. Her vision for
              Apna Bazaar is to foster connections among customers and local
              vendors.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Meet Alim</h2>
            <p className="mt-3 leading-6">
              Alim, also a co-founder, leverages his background in supply chain
              management to ensure our products are always fresh and available.
              He is committed to delivering the best shopping experience to
              every visitor at Apna Bazaar.
            </p>
          </div>
        </div>

        {/* Store Location and Contact Information */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold">VISIT US</h2>
          <p className="mt-2">Our store is located at:</p>
          <p className="font-semibold">
            178, 8th Cross Rd, Chandra Layout, Laripalya, Deepanjali Nagar,
            Bangalore, Karnataka, India
          </p>
          <p className="mt-2">
            For inquiries, reach us at{" "}
            <Link href="tel:+919036286806" className="text-blue-500">
              +91 9036286806
            </Link>
            .
          </p>
        </div>

        {/* Placeholder for Images */}
        {/* <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex h-40 items-center justify-center rounded-md bg-gray-200">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="flex h-40 items-center justify-center rounded-md bg-gray-200">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div> */}
      </div>
    </main>
  );
}
