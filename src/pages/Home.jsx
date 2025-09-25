import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="text-center py-16 bg-white">
          <h1 className="text-5xl font-serifElegant mb-4">
            Jenny & Jason
          </h1>
          <p className="text-lg leading-relaxed">
            With love and gratitude, we invite you to celebrate our wedding<br />
            <span className="block mt-2 font-semibold">
              Saturday, September 20, 2025
            </span>
            <span className="block">
              The Golden Elm Manor, St. Augustine, New York
            </span>
          </p>
        </section>

        {/* Link card */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          <Link
            to="/our-story"
            className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Our Story</h2>
            <p className="text-sm text-gray-600">How it all began</p>
          </Link>

          <Link
            to="/details"
            className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p className="text-sm text-gray-600">When & Where</p>
          </Link>

          <Link
            to="/rsvp"
            className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">RSVP</h2>
            <p className="text-sm text-gray-600">Join us</p>
          </Link>

          <Link
            to="/registry"
            className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Registry</h2>
            <p className="text-sm text-gray-600">Gifts & Wishes</p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
