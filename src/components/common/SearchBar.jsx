import React, { useState } from "react";
import { Mic, Send } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <div className="relative flex items-center">  
        <div className="relative flex-1 shadow-md rounded-xl shadow-primary">
          <Mic className="absolute left-1 md:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-default" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What can I help you find today?"
            className="w-full pl-6 md:pl-10 pr-6 md:pr-10 py-2 md:py-4 border border-search rounded-xl text-default placeholder-muted focus:outline-none  focus:border-primary theme-transition"
          />
        </div>
        <button
          type="submit"
          className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 md:p-2 hover:bg-surface-tertiary rounded-lg theme-transition group"
          aria-label="Search"
        >
          <Send className=" w-4 h-4 md:w-5 md:h-5 text-default group-hover:text-primary transition-colors" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
