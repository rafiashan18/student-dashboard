import React, { useState, useEffect } from 'react';
import { Search, Bell, RotateCcw } from 'lucide-react';
import { useBellAnimation } from '../../hooks/useFloatingAnimations';

const TopBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { bellRef } = useBellAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full flex items-center justify-between  py-4 bg-transparent theme-transition">
      {/* Left - Dashboard Title */}
      <div className="flex items-center">
        <h1 className=" text-xs sm:text-2xl font-bold text-default">My Dashboard</h1>
      </div>

      {/* Right - Action Icons */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className=" hidden sm:block sm:text-sm text-default font-bold">
              {formatDate(currentDateTime)}
            </p>
          </div>
        </div>

        {/* Notification Bell with breathing animation */}
        <button className="bg-surface relative p-2 rounded-lg hover:bg-surface-secondary theme-transition group">
          <Bell 
            ref={bellRef}
            className="w-5 h-5 text-secondary group-hover:text-default transition-colors" 
          />
          {/* Notification dot */}
          <span className="absolute top-1.5 -right w-2 h-2 bg-error rounded-full"></span>
        </button>

        {/* Search Icon */}
        <button className="bg-surface p-2 rounded-lg hover:bg-surface-secondary theme-transition group">
          <Search className="w-5 h-5 text-secondary group-hover:text-default transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;