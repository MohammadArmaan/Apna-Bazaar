import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Support",
  description: "Customer support for Apna Bazaar",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        {/* Customer Care Section */}
        <h2 className="py-5 text-3xl">CUSTOMER CARE</h2>
        <p>
          At Apna Bazaar, we prioritize your shopping experience by offering
          dedicated customer support for any inquiries, product guidance, or
          after-sales assistance. Our customer care team is available to ensure
          a seamless shopping journey and provide solutions tailored to your
          needs.
        </p>
        <p>
          For assistance, reach us via email at{" "}
          <Link href="mailto:support@apnabazaar.com" className="text-blue-500">
            support@apnabazaar.com
          </Link>{" "}
          or call our customer care hotline at{" "}
          <Link href="tel:+919036286806" className="text-blue-500">
            +91 9036286806
          </Link>
          . Our team is here to help with issues related to orders, deliveries,
          returns, and refunds.
        </p>

        {/* Store Location Section */}
        <h2 className="mt-10 py-5 text-3xl">STORE LOCATION</h2>
        <p>Visit us at our store located at:</p>
        <p className="font-semibold">
          178, 8th Cross Rd, <br />
          Chandra Layout, Laripalya, <br />
          Deepanjali Nagar, <br />
          Bangalore, Karnataka, India
        </p>
      </div>
    </main>
  );
}
