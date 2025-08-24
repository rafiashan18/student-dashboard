import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GraphChart({ data }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-6xl bg-surface rounded-3xl overflow-hidden shadow-sm p-3 transition-all duration-500 ease-in-out hover:shadow-2xl">
        
        {/* Chart */}
        <div className="h-40 transition-all duration-500 ease-in-out text-default">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={40} barCategoryGap="40%">
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--color-text)" }}
                className="transition-all duration-300 text-black"
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              />
              <Bar
                dataKey="learning"
                stackId="a"
                fill="#d1d5db"
                radius={[0, 0, 20, 20]}
                animationDuration={800}
              />
              <Bar
                dataKey="listening"
                stackId="a"
                fill="#60a5fa"
                animationDuration={800}
                animationBegin={100}
              />
              <Bar
                dataKey="reading"
                stackId="a"
                fill="#4338ca"
                animationDuration={800}
                animationBegin={200}
              />
              <Bar
                dataKey="presentation"
                stackId="a"
                fill="#f87171"
                radius={[40, 40, 0, 0]}
                barSize={20}
                animationDuration={800}
                animationBegin={300}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center justify-end gap-x-6">
          {[
            { color: "bg-rose-400", label: "Presentation" },
            { color: "bg-gray-300", label: "Learning" },
            { color: "bg-blue-300", label: "Listening" },
            { color: "bg-indigo-600", label: "Reading" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span
                className={`w-3 h-3 rounded-full ${item.color} transition-all duration-300 hover:scale-125`}
              ></span>
              <span className="text-sm text-default font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
