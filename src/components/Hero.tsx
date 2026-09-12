import bannerStack from '../assets/banner-stack.png'; 

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build Your Ideal{' '}
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#technologies"
                className="brand-gradient text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-pink-200/50 text-center"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 opacity-20 blur-3xl"></div>
              <img
                src={bannerStack}
                alt="Development Stack Illustration"
                className="relative w-full h-auto max-w-sm sm:max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

