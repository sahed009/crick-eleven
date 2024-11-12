import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo1 from "../assets/logo.png";
import coin from "../assets/dollar.png";

const Navbar = ({ coins }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md py-8 w-full mx-auto mb-10 sticky top-0 z-50 shadow-lg rounded-lg border border-white/20">
      <div className="w-11/12 px-4 flex justify-between items-center mx-auto">
      <div className="flex items-center">
        <img src={logo1} alt="Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-xl font-bold hidden sm:block">CrickXI</h1>
      </div>

        
        <ul className="hidden sm:flex justify-end items-center gap-6 flex-1 mr-6">
          <li><a href="#" className="text-[#5A5A5A] hover:text-gray-700">Home</a></li>
          <li><a href="#" className="text-[#5A5A5A] hover:text-gray-700">Fixture</a></li>
          <li><a href="#" className="text-[#5A5A5A] hover:text-gray-700">Teams</a></li>
          <li><a href="#" className="text-[#5A5A5A] hover:text-gray-700">Schedules</a></li>
        </ul>

        
        <div className="flex items-center gap-4">
          <div className="border border-gray-300 px-4 py-2 rounded-md font-semibold flex justify-center items-center gap-2">
            <img src={coin} alt="Coin" className="h-5 w-5" />
            {coins} Coin
          </div>

         
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div className="absolute top-20 right-4 w-1/2 bg-gray-100/90 backdrop-blur-lg rounded shadow-xl sm:hidden z-50">
            <ul className="flex flex-col items-center gap-4 p-4">
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg w-full text-center">Home</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg w-full text-center">Fixture</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg w-full text-center">Teams</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg w-full text-center">Schedules</a></li>
            </ul>
          </div>
        )}</div>

    </nav>
  );
};

export default Navbar;
