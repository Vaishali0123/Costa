"use client";
import React, { useState, useEffect } from "react";

const AnimatedStats = () => {
  const [counts, setCounts] = useState({
    policies: 0,
    families: 0,
    savings: 0,
  });
  const targets = { policies: 1000, families: 250, savings: 30 };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => ({
        policies: Math.min(
          prev.policies + targets.policies / steps,
          targets.policies
        ),
        families: Math.min(
          prev.families + targets.families / steps,
          targets.families
        ),
        savings: Math.min(
          prev.savings + targets.savings / steps,
          targets.savings
        ),
      }));
    }, stepDuration);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      <div className="text-center group">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 group-hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-orange-600">
            {Math.round(counts.policies)}+
          </div>
          <div className="text-xs text-gray-600 mt-1">Policies Compared</div>
        </div>
      </div>
      <div className="text-center group">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 group-hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-orange-600">
            {Math.round(counts.families)}+
          </div>
          <div className="text-xs text-gray-600 mt-1">Families Helped</div>
        </div>
      </div>
      <div className="text-center group">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 group-hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-orange-600">
            {Math.round(counts.savings)}%
          </div>
          <div className="text-xs text-gray-600 mt-1">Avg. Savings</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
