import { useState, useEffect, useRef } from "react";
import phoneImage from "/phoneModel.webp";

const DevicePreview = () => {
  const phoneRef = useRef(null);

  // store target rotation separately from actual rotation
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const phoneEl = phoneRef.current;
      if (!phoneEl) return;

      const rect = phoneEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const diffX = e.clientX - centerX;
      const diffY = e.clientY - centerY;

      // calculate target rotation
      const rotateX = (diffY / rect.height) * -15; // less aggressive
      const rotateY = (diffX / rect.width) * 15;

      targetTilt.current = { x: rotateX, y: rotateY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // animation loop
  useEffect(() => {
    let raf;
    const animate = () => {
      // easing factor
      const ease = 0.1;

      // interpolate currentTilt towards targetTilt
      currentTilt.current.x +=
        (targetTilt.current.x - currentTilt.current.x) * ease;
      currentTilt.current.y +=
        (targetTilt.current.y - currentTilt.current.y) * ease;

      // apply transform
      if (phoneRef.current) {
        phoneRef.current.style.transform = `rotateX(${currentTilt.current.x}deg) rotateY(${currentTilt.current.y}deg) scale(1.05)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative flex justify-center items-center w-full max-w-sm"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-indigo-300/20 dark:from-indigo-600/10 dark:to-indigo-400/10 rounded-3xl blur-lg scale-105 translate-y-6"></div>

      <div
        ref={phoneRef}
        className="transition-transform duration-75 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <img
          src={phoneImage}
          alt="UVER App Preview"
          className="w-full h-auto object-contain rounded-3xl shadow-xl pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default DevicePreview;
