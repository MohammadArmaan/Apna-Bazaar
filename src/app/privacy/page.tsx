import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Apna Bazaar",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        {/* Privacy Policy Header */}
        <h2 className="py-5 text-3xl">PRIVACY POLICY</h2>
        <p>
          At Apna Bazaar, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website and use our services.
        </p>

        {/* Information Collection Section */}
        <h2 className="mt-10 py-5 text-3xl">INFORMATION COLLECTION</h2>
        <p>
          We collect various types of information to provide and improve our services:
        </p>
        <ul className="list-disc list-inside">
          <li>Personal Information: Name, email address, phone number, and other contact details.</li>
          <li>Order Information: Details about the products you purchase, including delivery address and payment information.</li>
          <li>Usage Data: Information about how you interact with our website, such as IP address, browser type, and pages visited.</li>
        </ul>

        {/* Information Usage Section */}
        <h2 className="mt-10 py-5 text-3xl">USE OF INFORMATION</h2>
        <p>
          We use your information for the following purposes:
        </p>
        <ul className="list-disc list-inside">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you regarding your orders and provide customer support.</li>
          <li>To improve our services and enhance your shopping experience.</li>
          <li>To send promotional content, updates, and other information that may be of interest to you (you can opt out at any time).</li>
        </ul>

        {/* Data Security Section */}
        <h2 className="mt-10 py-5 text-3xl">DATA SECURITY</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. All sensitive information you provide is encrypted and transmitted via Secure Socket Layer (SSL) technology. 
        </p>

        {/* Your Rights Section */}
        <h2 className="mt-10 py-5 text-3xl">YOUR RIGHTS</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc list-inside">
          <li>Access and update your personal information.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Withdraw consent for processing your data at any time.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <Link href="mailto:support@apnabazaar.com" className="text-blue-500">support@apnabazaar.com</Link>.
        </p>

        {/* Changes to This Policy Section */}
        <h2 className="mt-10 py-5 text-3xl">CHANGES TO THIS POLICY</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this policy periodically for any updates.
        </p>
        
        {/* Contact Us Section */}
        <h2 className="mt-10 py-5 text-3xl">CONTACT US</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:support@apnabazaar.com" className="text-blue-500">support@apnabazaar.com</Link> or call us at <Link href="tel:+919036286806" className="text-blue-500">+91 9036286806</Link>.
        </p>
      </div>
    </main>
  );
}
