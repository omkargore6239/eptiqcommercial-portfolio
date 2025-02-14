import React from 'react';
import Slider from 'react-slick';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaCheckCircle } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function HeroPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease-in-out',
    pauseOnHover: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          adaptiveHeight: true
        },
      },
    ],
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12 mt-10 sm:mt-0">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6 md:space-y-8 z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-wrap animate-fadeInUp text-shadow-lg">
          <span className="text-cyan-200 animate-pulse-slow">Welcome to</span> 
          <span className="block mt-2">
            <TypeAnimation
              sequence={['Eptiq Technologies', 2000, '', 500,]}
              wrapper="span"
              speed={10}
              deletionSpeed={70} // Erase speed
              repeat={Infinity}
              className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
              cursor={false}
            />
          </span>
        </h2>
        <p className="text-lg md:text-xl font-light md:font-semibold text-shadow-md animate-slideInLeft">
          <span className="font-bold text-yellow-200">Empowering Businesses</span> with Cutting-Edge Digital Solutions
        </p>
        <ul className="text-left space-y-2 animate-fadeIn">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl animate-bounce-slow" /> 
            <span className="text-sm sm:text-base">5+ Years of Industry Experience</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl animate-bounce-slow delay-100" /> 
            <span className="text-sm sm:text-base">30+ Successful Projects Delivered</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl animate-bounce-slow delay-200" /> 
            <span className="text-sm sm:text-base">Trusted by 70+ Clients Worldwide</span>
          </li>
        </ul>
      </div>

      {/* Image Slider */}
      <div className="slider-container mt-10 md:mt-0 md:w-1/2 w-full relative z-10">
        <Slider {...settings}>
          {[
            { 
              img: "/office/Office1.png",
              title: "Website Development",
              icon: <FaLaptopCode className="text-cyan-300 mr-2" />,
              desc: "Smart Manufacturing Solutions"
            },
            { 
              img: "/office/Office2.png",
              title: "App Development",
              icon: <FaMobileAlt className="text-cyan-300 mr-2" />,
              desc: "Real-time Production Control"
            },
            { 
              img: "/office/Office3.png",
              title: "Digital Marketing",
              icon: <FaCloud className="text-cyan-300 mr-2" />,
              desc: "Integrated Business Management"
            }
          ].map((slide, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain md:object-cover rounded-xl transform md:group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                <div className="transform transition-all duration-500 translate-y-5 md:group-hover:translate-y-0 opacity-0 md:group-hover:opacity-100">
                  <p className="text-sm text-cyan-300 font-light mb-1">
                    Featured Solution
                  </p>
                </div>
                <div className="flex items-center transform transition-all duration-300 md:group-hover:translate-y-2">
                  {slide.icon}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-300">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-100 font-light">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .slider-container {
            max-width: 100vw;
            padding: 0 15px;
          }
          
          .slider-container .slick-slide {
            padding: 0 5px;
          }
        }

        @media (min-width: 768px) {
          .slider-container {
            padding: 0;
            max-width: none;
          }
          
          .slider-container .slick-slide {
            padding: 0;
          }
          
          .slider-container img {
            object-position: center center;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
}

export default HeroPage;