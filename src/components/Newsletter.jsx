"use client";

export default function Newsletter() {
  return (
    <section className="bg-[#f7f7fc] py-20 px-4">
      
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight">
          Get Early Access
        </h2>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-8 max-w-xl mx-auto">
          Be the first to know when StudyNook launches and get
          exclusive early access.
        </p>

        {/* Form */}
        <form className="mt-10 max-w-xl mx-auto">
          
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 px-5 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />

            {/* Button */}
            <button
              type="submit"
              className="h-14 px-8 rounded-xl bg-black text-white font-semibold hover:bg-[#111827] transition duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          {/* Privacy Text */}
          <p className="mt-5 text-sm text-gray-500 leading-7">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}