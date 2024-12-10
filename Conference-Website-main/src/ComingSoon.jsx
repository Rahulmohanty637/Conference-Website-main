import BannerImg1 from "./assets/3.webp";
import Navbar from "./components/Navbar/Navbar";

const ComingSoon = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImg1})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white animate-pulse">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-white animate-pulse">
            We will update soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
