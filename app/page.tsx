"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Page() {
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.to(boxesRef.current, {
      duration: 1,
      scale: 1.5,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      {["from-violet-600", "from-fuchsia-600", "from-teal-400"].map((fromColor, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          className={`w-24 h-24 bg-gradient-to-r ${fromColor} to-pink-500 rounded-lg`}
        />
      ))}
    </div>
  );
}
