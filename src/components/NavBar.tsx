
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <MessageCircle size={28} className="text-infy-500 mr-2" />
          <span className="text-2xl font-bold">Infy<span className="text-infy-500">Comm</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors">How It Works</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors">Use Cases</a>
            <a href="#pricing" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors">Pricing</a>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Log In</Button>
            <Button>Request Demo</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-md transition-colors" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-md transition-colors" onClick={toggleMenu}>How It Works</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-md transition-colors" onClick={toggleMenu}>Use Cases</a>
            <a href="#pricing" className="text-gray-300 hover:text-white py-2 px-3 hover:bg-white/5 rounded-md transition-colors" onClick={toggleMenu}>Pricing</a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
