/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BannerImg1 from "../../assets/1.webp";
import BannerImg2 from "../../assets/2.webp";
import BannerImg3 from "../../assets/3.webp";

const images = [BannerImg1, BannerImg2, BannerImg3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const typewriterText =
    "Responsible, Generative and Explainable AI (ResGenXAI)";

  // Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < typewriterText.length) {
        // Add a character
        setTypedText(typewriterText.substring(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        // Remove a character
        setTypedText(typewriterText.substring(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === typewriterText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText.length === 0) {
        // Reset and start typing again
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % typewriterText.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
    <div className="relative z-10 flex mt-[150px] justify-center h-full text-center text-white px-4">
  <div className="space-y-5">
    <p className="text-white font-bold text-2xl" data-aos="fade-up">
      IEEE Conference Record #64788
    </p>
    <p className="text-white font-bold text-2xl" data-aos="fade-up">
      2025 International Conference on
    </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-5xl md:text-4xl font-bold"
          >
            {typedText}
            <span className="animate-blink">|</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-2xl md:text-2xl lg:text-3xl"
          >
            Advancing AI with Responsibility, Creativity, and Transparency
          </p>
          <h3
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-2xl md:text-2xl lg:text-3xl"
          >
            September 10 - September 12, 2025 | Bhubaneswar, Odisha
          </h3>
          {/* Uncomment if a button is needed */}
          {/* <button
            data-aos="fade-up"
            data-aos-delay="700"
            className="primary-btn"
          >
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
