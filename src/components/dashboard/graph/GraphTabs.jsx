import React, { useState } from "react";
import GraphChart from "./GraphChart";

import { weeklyData, monthlyData } from "../../../constants/index";

export default function GraphTabs() {
  const [activeView, setActiveView] = useState("weekly");
  const currentData = activeView === "weekly" ? weeklyData : monthlyData;

  return (
    <div className="transition-all duration-500 ease-in-out">
      {/* Toggle Buttons */}
      <div className="flex pl-5 sm:pl-10 items-center justify-start gap-1">
        <button
          onClick={() => setActiveView("weekly")}
          className={`h-11 rounded-t-2xl w-fit text-white px-1 sm:px-6 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 ${
            activeView === "weekly"
              ? "bg-graph shadow-lg"
              : "bg-surface hover:bg-graph text-default"
          }`}
        >
          Weekly Progress
        </button>
        <button
          onClick={() => setActiveView("monthly")}
          className={`h-11 rounded-t-2xl w-fit text-white px-1 sm:px-6 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 ${
            activeView === "monthly"
              ? "bg-graph shadow-lg"
              : "bg-surface hover:bg-graph text-default"
          }`}
        >
          Monthly Progress
        </button>
      </div>

      {/* Graph Component */}
      <GraphChart data={currentData} key={activeView} />
    </div>
  );
}
