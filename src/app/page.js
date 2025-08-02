export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-md">EAP Landscaping LLC</h1>
        <p className="text-xl text-green-600 mt-3">
          West Hartford’s Trusted Lawn, Landscape, and Snow Professionals – Year Round
        </p>
      </header>

      <nav className="flex justify-center space-x-8 text-green-800 font-medium text-lg mb-12">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#services" className="hover:underline">Our Services</a>
        <a href="#about" className="hover:underline">About</a>
      </nav>

      <section id="home" className="text-center mb-20">
        <div className="w-full max-w-4xl mx-auto mb-6 overflow-hidden rounded-xl shadow-md">
          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory p-2">
            <img src="/spring.jpeg" alt="Gallery 1" className="w-full max-w-[300px] h-[200px] object-cover rounded-md snap-center" />
            <img src="/summer.jpeg" alt="Gallery 2" className="w-full max-w-[300px] h-[200px] object-cover rounded-md snap-center" />
            <img src="/fall.jpeg" alt="Gallery 3" className="w-full max-w-[300px] h-[200px] object-cover rounded-md snap-center" />
            <img src="/winter.jpeg" alt="Gallery 4" className="w-full max-w-[300px] h-[200px] object-cover rounded-md snap-center" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-green-800 mb-4">Welcome to EAP Landscaping LLC</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          At EAP Landscaping, we’re committed to keeping your property beautiful and safe through all four seasons.
          From lush summer lawns to dependable snow removal, we deliver quality, reliability, and care for every job—big or small.
        </p>
      </section>

      <section id="services" className="mb-20">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Our Services by Season</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="shadow-lg p-4 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
            <img src="/spring.jpeg" alt="Spring services" className="w-full h-[200px] object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Spring</h3>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Spring cleanups</li>
              <li>Mulch installation</li>
              <li>Pruning & edging</li>
            </ul>
          </div>

          <div className="shadow-lg p-4 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
            <img src="/summer.jpeg" alt="Summer services" className="w-full h-[200px] object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Summer</h3>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Weekly/Bi-weekly mowing</li>
              <li>Trimming & edging</li>
              <li>Weed control & bed maintenance</li>
            </ul>
          </div>

          <div className="shadow-lg p-4 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
            <img src="/fall.jpeg" alt="Fall services" className="w-full h-[200px] object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Fall</h3>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Leaf removal</li>
              <li>Fall cleanups</li>
              <li>Final mow & fertilization</li>
            </ul>
          </div>

          <div className="shadow-lg p-4 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
            <img src="/winter.jpeg" alt="Winter services" className="w-full h-[200px] object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Winter</h3>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Snow plowing</li>
              <li>Salting & de-icing</li>
              <li>Seasonal contracts available</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="text-center mb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          EAP Landscaping LLC is a locally owned and operated business serving West Hartford and surrounding areas.
          We pride ourselves on reliability, attention to detail, and building long-term relationships with our clients.
          Whether you need weekly lawn care or seasonal cleanup, we’re here to help your landscape thrive.
        </p>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Schedule a Free Estimate</h2>
        <p className="text-gray-700 mb-4 text-lg">Call or text us at <a href="tel:8603728467" className="text-green-700 font-semibold hover:underline">(860) 372-8467</a></p>
        <a href="tel:8603728467">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-green-700">
            Book Now
          </button>
        </a>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="bg-white shadow p-4 rounded-md text-gray-700 italic">
            “Evan and his crew are always on time and leave our lawn looking perfect. Highly recommend!”
          </blockquote>
          <blockquote className="bg-white shadow p-4 rounded-md text-gray-700 italic">
            “EAP Landscaping made our fall cleanup hassle-free. Great communication and fair pricing.”
          </blockquote>
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Service Areas</h2>
        <p className="text-gray-700 text-lg">
          Proudly serving West Hartford, Farmington, Avon, Bloomfield, and surrounding towns.
        </p>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6">FAQs</h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          <div>
            <h3 className="font-semibold text-green-700">Are you licensed and insured?</h3>
            <p className="text-gray-700">Yes! EAP Landscaping LLC is fully licensed and insured in the state of Connecticut.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700">How do I get an estimate?</h3>
            <p className="text-gray-700">Just call or text us at (860) 372-8467 and we’ll schedule a quick walkthrough of your property.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700">Do I need to be home during service?</h3>
            <p className="text-gray-700">Nope! As long as we have access to your yard, we’ll take care of everything.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} EAP Landscaping LLC. All rights reserved.
      </footer>
    </div>
  );
}
