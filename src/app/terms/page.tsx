import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using our services",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        {/* Customer Care Section */}
        <h2 className="py-5 text-3xl">CUSTOMER CARE</h2>
        <p>
          At Apna Bazaar, we prioritize your shopping experience by offering dedicated customer support for any inquiries, product guidance, or after-sales assistance. Our customer care team is available to ensure a seamless shopping journey and provide solutions tailored to your needs. 
        </p>
        <p>
          For assistance, reach us via email at support@apnabazaar.com or call our customer care hotline at +123-456-7890. Our team is here to help with issues related to orders, deliveries, returns, and refunds.
        </p>

        {/* Privacy & Safety Section */}
        <h2 className="mt-10 py-5 text-3xl">PRIVACY & SAFETY</h2>
        <p>
          Your privacy and data security are of utmost importance at Apna Bazaar. We are committed to safeguarding your personal information, with robust data protection practices to ensure your data remains secure. 
        </p>
        <p>
          Our privacy policy outlines our procedures for data collection, usage, and security. We only collect essential information required to complete orders, process payments, and improve our services. For detailed information, please refer to our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        {/* Wholesale Inquiries Section */}
        <h2 className="mt-10 py-5 text-3xl">WHOLESALE INQUIRIES</h2>
        <p>
          Apna Bazaar welcomes wholesale partnerships to expand our reach and offer high-quality products at competitive prices. We provide special pricing, bulk order options, and dedicated support for wholesale clients.
        </p>
        <p>
          For wholesale inquiries, contact us at wholesale@apnabazaar.com or call us directly. We look forward to collaborating and building lasting partnerships with you.
        </p>

        {/* Payment Methods Section */}
        <h2 className="mt-10 py-5 text-3xl">PAYMENT METHODS</h2>
        <p>
          Apna Bazaar offers a variety of secure payment methods for your convenience:
          <br /> - Credit / Debit Cards
          <br /> - Offline Payments (available for selected locations)
        </p>
        <p>
          We prioritize secure transactions and follow stringent protocols to ensure your payment information is protected.
        </p>
      </div>
    </main>
  );
}