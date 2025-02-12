import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-400 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <a href="/" >
        <img
          src="/eptiqlogo.jpeg"
          alt="Eptiq Technologies Logo"
          className="h-8 sm:h-12 transition-all duration-300"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#hero" className="hover:text-gray-300 transition">Home</a>
        <a href="#projects" className="hover:text-gray-300 transition ">Projects</a>
        <a href="#services" className="hover:text-gray-300 transition">Services</a>
        <a href="#contactus" className="hover:text-gray-300 transition">Contact us</a>
      </nav>

      {/* Visit Website Button (Always Visible) */}
      <a
        href="https://eptiq.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-rose-400 hover:bg-rose-500 text-black px-6 py-2 rounded-full shadow-md animate-pulse hidden md:inline-block"
      >
        Visit Website
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#home" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#projects" className="hover:text-gray-300 transition font-bold" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#services" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a
            href="https://eptiq.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-400 hover:bg-rose-500 text-black px-6 py-2 rounded-full shadow-md animate-pulse"
            onClick={() => setIsMenuOpen(false)}
          >
            Visit Website
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
