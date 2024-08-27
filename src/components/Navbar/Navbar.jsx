import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#E4ECED] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/logo.svg" 
              alt="logo" 
              className="h-14 scale-[1.75] w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row absolute lg:relative left-0 top-full lg:top-auto bg-[#E4ECED] w-full lg:w-auto`}>
          <Link to="/about" className="text-[#397A59] text-xl py-2 lg:py-0 px-4 font-semibold cursor-pointer">
            About Ayush
          </Link>
          <Link to="/explore" className="text-[#397A59] text-xl py-2 lg:py-0 px-4 font-semibold cursor-pointer">
            Explore
          </Link>
          <Link to="/virtual-tour" className="text-[#397A59] text-xl py-2 lg:py-0 px-4 font-semibold cursor-pointer">
            Virtual Tour
          </Link>
        </div>

        {/* Login button, stays the same */}
        <div className="text-[#397A59] rounded-xl text-3xl font-semibold cursor-pointer">
          Login
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
