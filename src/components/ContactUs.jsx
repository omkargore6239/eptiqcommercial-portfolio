import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };
  
  return (
    <section className="bg-blue-900 text-gray-800 pt-24 pb-16 px-6 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-white mb-6">Contact Us</h2>
      
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold">Name</label>
            <input type="text" className="w-full p-2 border rounded-md" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block font-semibold">Phone</label>
            <input type="tel" className="w-full p-2 border rounded-md" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          
          <div>
            <label className="block font-semibold">Message</label>
            <textarea className="w-full p-2 border rounded-md" rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
      
      <div className="mt-12 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center text-white">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <FaPhoneAlt className="text-white text-2xl" />
          <p>+91 9545887885</p>
        </div>
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <FaEnvelope className="text-white text-2xl" />
          <p>info@eptiq.in</p>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-white text-2xl" />
          <p>Wakad, Pune Maharashtra, India</p>
        </div>
      </div>

      {/* Updated Google Maps Embed with Your Exact Location */}
      {/* <div className="mt-8 w-full max-w-4xl">
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.552297318111!2d73.85674371489304!3d18.52043058740016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c068f3e8b3a7%3A0x88c2f31f11b46b9!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1649984345665!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </section>
  );
}

export default ContactUs;
