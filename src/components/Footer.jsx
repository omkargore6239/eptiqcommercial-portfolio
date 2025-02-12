import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 border to-white text-white py-10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h3 className="text-xl font-semibold">Connect with Us</h3>
        <div className="flex justify-center space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eptiq-technologies-8832b533a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transform hover:scale-125 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/eptiq.in/profilecard/?igsh=bnp0NWtqYWtqcWxk "
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transform hover:scale-125 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transform hover:scale-125 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          {/* Email */}
          <a
            href="mailto:info@eptiq.in"
            className="text-white text-2xl transform hover:scale-125 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-100">&copy; {new Date().getFullYear()} Eptiq Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
