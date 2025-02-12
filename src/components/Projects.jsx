import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 } // Counter starts when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const projects = [
    { title: 'VegoBike', link: 'https://play.google.com/store/apps/details?id=com.vegobike', image: '/project/vegobike.jpeg', category: 'Commercial', id: 3 },
    { title: 'World Globe', link: '#', image: '/Eptiq clients/world globe.png', category: 'Commercial', id: 18 },
    { title: 'Mali vishva', link: 'https://akenterprisess.in', image: '/Eptiq clients/matrimoni.png', category: 'Commercial', id: 19 },
    
    { title: 'Padcorp', link: 'https://padcorp.shop/', image: '/project/padcorp.jpeg', category: 'Commercial', id: 2 },
    { title: 'DT Care', link: 'https://pandvesdeltaforce.com', image: '/Eptiq clients/DT care.png', category: 'Commercial', id: 21 },
    { title: 'Owlsale Windo', link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer', image: '/project/owlsalewindo.jpeg', category: 'Commercial', id: 8 },
    { title: 'OK Bikes', link: 'https://okbikes.eptiqos.com/', image: '/project/okbikes.jpeg', category: 'Commercial', id: 9 },
    { title: 'Offerlearning', link: 'https://offerlearning.com/', image: '/Eptiq clients/offer learning2.png', category: 'Commercial', id: 1 },
    { title: 'Electrodigit', link: '#', image: '/Eptiq clients/ELECTRODIGIT.jpeg', category: 'MES', id: 10 },
    { title: 'harkalstudios', link: 'https://harkalstudios.in', image: '/project/harkalstudios.jpeg', category: 'Commercial', id: 20 },
    { title: 'SB Industries', link: '#', image: '/Eptiq clients/SBI.jpg', category: 'ERP', id: 16 },
    { title: 'AVS Engineering', link: '#', image: '/Eptiq clients/AVS.png', category: 'MES', id: 12 },
    { title: 'Falcon Automation', link: '#', image: '/Eptiq clients/Falcon.jpeg', category: 'Automation', id: 13 },
    { title: 'Global tek', link: '#', image: '/Eptiq clients/Globaltek.jpeg', category: 'MES', id: 14 },
    { title: 'Powerica', link: '#', image: '/Eptiq clients/Powerica.jpg', category: 'OFS', id: 15 },
    { title: 'ANTB', link: '#', image: '/Eptiq clients/ANTB.png', category: 'MES', id: 17 },
    { title: 'Sasha Clothings', link: 'https://sashaclothings.in', image: '/project/sashaclothings.jpeg', category: 'Commercial', id: 4 },
    { title: 'AK Enterprises', link: 'https://akenterprisess.in', image: '/project/akenterprises.jpeg', category: 'Commercial', id: 5 },
    { title: 'Harkal Studios', link: 'https://harkalstudios.in', image: '/project/harkalstudios.jpeg', category: 'Commercial', id: 6 },
    { title: 'Pandvesdeltaforce', link: 'https://pandvesdeltaforce.com', image: '/project/pandvesdeltaforce.jpeg', category: 'Commercial', id: 7 },
    
    
    ];

    const testimonials = [
      { name: 'Ashwini Dolas',designation:"CEO Vego Bike", feedback: 'Eptiq Technologies transformed our vision into reality by developing an intuitive mobile app and website for Vego Bike Rental. The platform is seamless, user-friendly, and has made booking rentals effortless for our customers. Their teams professionalism, creativity, and technical expertise have been outstanding. I highly recommend them for any digital transformation needs.', image: '/clients/ashwini dolas.jpeg' },
      { name: 'Sarang Pardeshi', designation:"Manager Padcorp", feedback: 'Eptiq Technologies has been an incredible partner in bringing our eCommerce vision to life. They developed a sleek, user-friendly platform for PadCorp that has revolutionized our online shopping experience. The seamless navigation, fast-loading pages, and secure payment gateway have significantly increased customer satisfaction and sales. Their team was attentive to our needs and delivered beyond our expectations.', image: '/clients/sarang pardeshi.jpeg' },
      { name: 'Vilas Hingode', designation:"Founder AVS", feedback: 'Eptiq Technologies delivered a comprehensive ERP solution tailored to the unique needs of AVS Manufacturing. The system has streamlined our operations, from inventory management to production scheduling, and provided us with real-time insights to make better business decisions. Their team demonstrated exceptional professionalism, technical expertise, and a deep understanding of our industry', image: '/clients/vilas hingode.jpeg' },
      { name: 'Tausif Ali',designation:"Operations Manager", feedback: 'Eptiq Technologies has been instrumental in transforming our operations. Their customized solutions and prompt support have significantly improved our efficiency and productivity. Highly recommended', image: '/clients/tausifAli.jpg' },
      { name: 'Suresh Patel', designation:"Managing Director", feedback: 'Working with Eptiq Technologies has been a game-changer for our business. Their innovative approach and attension to detail have deliverd exceptional results, helping us achieve our goals seamlessly', image: '/clients/SureshPatel.jpg' },
      { name: 'Prashant Desai', designation:"IT Head", feedback: 'The team at Eptiq Technologies is highly professional and skilled. Their experties is developing tailored solutions has not only met our expectatios but also exceeded them. A great partner to work with ', image: '/clients/PrashantDesai.jpg' },
    ];

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative bg-blue-500 text-white py-16 px-6 min-h-screen flex flex-col">
      <div className="text-center space-y-8 w-full">
        <h2 className="text-4xl font-extrabold animate-fadeInUp sticky top-0 z-10 bg-blue-500 py-2">
          Our Projects
        </h2>

        <div ref={counterRef} className="flex flex-wrap justify-center gap-8 my-8">
          {[
            { label: 'Total Projects', end: 30 },
            { label: 'Total Clients', end: 70 },
            { label: (<span>Years<br />of Experience</span>), end: 4 }

          ].map((item, index) => (
            <div
              key={index}
              className="relative w-40 h-40 flex items-center justify-center rounded-full bg-white shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute w-full h-full border-4 border-blue-300 rounded-full animate-spin-slow"></div>
              <div className="text-center z-10">
                <h3 className="text-4xl font-bold text-blue-600">
                  {startCounter ? <CountUp end={item.end} duration={3} /> : 0}+
                </h3>
                <p className="text-lg text-gray-800">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Menu */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {['All', 'IoT', 'Automation', 'MES', 'ERP', 'Commercial', 'OFS'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                        ${activeCategory === category ? 'bg-blue-900 text-white' : 'bg-white text-blue-600'} 
                        hover:bg-blue-900 hover:text-white focus:outline-none mb-2`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 9).map((project) => (
            <Link
              to={`/projectdetails/${project.id}`}
              key={project.id}
              className="block text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md shadow-md transition-all duration-500 transform hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-center space-x-4">
                <FaLink className="text-gray-700 text-2xl hover:text-blue-600 cursor-pointer" />
              </div>
            </Link>
          ))}
        </div>

         {/* Testimonials Section */}
          <div className="mt-16 bg-white text-gray-800 py-12 px-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">What Our Clients Say</h2>
          <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
          >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center p-8 bg-gray-100 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-blue-500 mx-auto" />
              <p className="text-lg italic text-gray-700 leading-relaxed">"{testimonial.feedback}"</p>
              <h4 className="mt-4 text-xl font-semibold text-blue-600">{testimonial.name}</h4>
              <p className="mt-1 text-sm text-gray-500">{testimonial.designation}</p>
              <div className="mt-4 w-16 h-1 bg-blue-500 rounded-full"></div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default Projects;
