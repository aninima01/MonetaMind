import { statsData } from "@/data/landing";
import React from "react";

const StatsData = () => {
  return (
    <section className="py-20 bg-[#9D4EDD]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((statsData, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#3C096C] mb-2">
                {statsData.value}
              </div>
              <div className="text-gray-800">{statsData.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsData;
