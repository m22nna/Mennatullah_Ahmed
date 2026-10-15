import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 left-0  z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-wide text-white courgette-regular"
        >Menna
          <span className="text-amber-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-amber-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-2 rounded-xl transition shadow-md shadow-amber-500/10"
        >
          Contact Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 bg-transparent py-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-amber-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-2 rounded-xl"
          >
            Contact Me
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;