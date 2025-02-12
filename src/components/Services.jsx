import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaUserTie, FaIndustry, FaPencilRuler, FaBullhorn, FaPalette } from 'react-icons/fa';

// Import Video
import rocketAnimation from '/office/rocketanimation.mp4'; // Adjust path if needed

function Services() {
  const services = [
    { title: 'App Development', description: 'Designing user-friendly mobile applications for Android and iOS platforms.', icon: <FaMobileAlt className="text-blue-600 text-4xl" /> },
    { title: 'Website Development', description: 'Crafting responsive and interactive websites tailored to meet unique business needs.', icon: <FaLaptopCode className="text-blue-600 text-4xl" /> },
    { title: 'Digital Marketing', description: 'Boosting your online presence with targeted marketing strategies and campaigns.', icon: <FaBullhorn className="text-blue-600 text-4xl" /> },
    
    { title: 'Industrial Automation', description: 'Crafting responsive and interactive websites tailored to meet unique business needs.', icon: <FaLaptopCode className="text-blue-600 text-4xl" /> },
    { title: 'ERP Software Solution', description: 'Providing comprehensive enterprise resource planning solutions for seamless operations.', icon: <FaProjectDiagram className="text-blue-600 text-4xl" /> },
    { title: 'MES (Manufacturing Execution System)', description: 'Optimizing manufacturing workflows for increased efficiency and productivity.', icon: <FaIndustry className="text-blue-600 text-4xl" /> },
    { title: 'Intra Networking', description: 'Enhancing seamless communication and collaboration between multiple networks for efficient business operations.', icon: <FaUserTie className="text-blue-600 text-4xl" /> },
    { title: 'Graphic Designing', description: 'Creating visually stunning graphics that effectively communicate your brand message.', icon: <FaPalette className="text-blue-600 text-4xl" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={rocketAnimation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Services Section */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        <h2 className="text-5xl font-extrabold text-purple-500 text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 border rounded-lg shadow-lg bg-white text-gray-800 space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center">{service.title}</h3>
              <p className="text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Services;
