import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 md:ml-20">
          <h1 className="text-4xl font-bold">JIVIKA</h1>
        </div>

       
        <ul className="text-center md:text-left space-y-4 md:space-y-2">
          <li><a href="#" className="hover:text-gray-300">HOME</a></li>
          <li><a href="#" className="hover:text-gray-300">ABOUT AYUSH</a></li>
          <li><a href="#" className="hover:text-gray-300">EXPLORE</a></li>
          <li><a href="#" className="hover:text-gray-300">VIRTUAL TOUR</a></li>
          <li><a href="#" className="hover:text-gray-300">COMMUNITY</a></li>
          <li><a href="#" className="hover:text-gray-300">REMEDIES & BENEFITS</a></li>
          <li><a href="#" className="hover:text-gray-300">SEED STORES NEAR YOU</a></li>
        </ul>

       
        <div className="mt-8 md:mt-0 md:mr-20">
          <h2 className="text-xl mb-4">Socials</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i> </a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i> </a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i> </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
