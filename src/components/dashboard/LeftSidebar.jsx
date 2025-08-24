import React, { useState } from "react";
import { X } from "lucide-react";
import Navbar from "../common/Navbar";
import ThemeToggle from "../common/ThemeToggle";
import SupportCard from "../common/SupportCard";
import logo from "../../assets/images/logo.png";

const LeftSidebar = ({ onClose, showCloseButton = false }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <aside className="h-screen w-56 p-2 flex flex-col gap-2 rounded-2xl">
      <div className="bg-gradient-sidebar text-default flex flex-col gap-3 justify-between rounded-2xl h-full shadow-lg border border-default">
        <div>
          {/* Mobile Close Button */}
          {showCloseButton && (
            <div className="flex  justify-end p-2 lg:hidden">
              <button
                onClick={onClose}
                className="p-1 rounded-md bg-white z-50 hover:bg-gray-100 transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5 text-gray-800" /> 
              </button>
            </div>
          )}

          <div className="flex justify-center pt-0 md:pt-4">
          
            <img
              src={logo}
              alt="Logo"
              className={`md:h-28 h-20 w-auto transition-transform duration-300 hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'
                }`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />

          </div>
          <Navbar />
        </div>
        <ThemeToggle />
      </div>
     <div className="hidden sm:block">
       <SupportCard />
     </div>
    </aside>
  );
};

export default LeftSidebar;