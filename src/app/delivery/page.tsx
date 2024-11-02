import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery Details",
  description: "Delivery details for Apna Bazaar",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        {/* Delivery Details Header */}
        <h2 className="py-5 text-3xl">DELIVERY DETAILS</h2>
        <p>
          At Apna Bazaar, we strive to provide a seamless shopping experience, whether you choose to shop online or visit us in-store. Below are the details for both shopping methods:
        </p>

        {/* Offline Shopping Section */}
        <h2 className="mt-10 py-5 text-3xl">OFFLINE SHOPPING</h2>
        <p>
          Visit our store located at:
        </p>
        <p className="font-semibold">
          178, 8th Cross Rd, Chandra Layout, Laripalya, Deepanjali Nagar, Bangalore, Karnataka, India
        </p>
        <p>
          Our store is open for you to browse and purchase a variety of products. For any inquiries, you can reach us at our customer support number: <Link href="tel:+919036286806" className="text-blue-500">+91 9036286806</Link>.
        </p>

        {/* Online Shopping Section */}
        <h2 className="mt-10 py-5 text-3xl">ONLINE SHOPPING</h2>
        <p>
          Shop online through our website and enjoy the convenience of having products delivered to your doorstep. Our typical delivery time for online orders is 3-5 business days.
        </p>
        <p>
          In addition, if you prefer to pick up your order, you can collect your products from our store prior to the delivery date, provided the items are in stock. Simply call us at <Link href="tel:+919036286806" className="text-blue-500">+91 9036286806</Link> to arrange a pickup.
        </p>

        {/* Conclusion Section */}
        <h2 className="mt-10 py-5 text-3xl">CONTACT US</h2>
        <p>
          If you have any questions regarding your delivery or need assistance with your order, please do not hesitate to reach out to us at <Link href="mailto:support@apnabazaar.com" className="text-blue-500">support@apnabazaar.com</Link> or call us at <Link href="tel:+919036286806" className="text-blue-500">+91 9036286806</Link>.
        </p>
      </div>
    </main>
  );
}
