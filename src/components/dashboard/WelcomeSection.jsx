import React from "react";
import AvatarSection from "../common/AvatarSection";
import WelcomeMessage from "../common/WelcomeMessage";
import SearchBar from "../common/SearchBar";

const WelcomeSection = () => {
  return (
    <div className="bg-surface rounded-2xl border border-default theme-transition shadow-sm">
      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden">
        <div className="flex flex-col justify-center items-center gap-4 p-4 pb-2">
          <AvatarSection />
          <div className="flex-1">
            <WelcomeMessage />
          </div>
        </div>
        <div className="px-4 pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex items-center gap-4 h-[170px]">
        <AvatarSection />
        <div className="flex-1 p-2 w-full">
          <WelcomeMessage />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;