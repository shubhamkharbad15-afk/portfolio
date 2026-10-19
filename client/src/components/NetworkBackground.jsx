import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for dynamic constellation wave
    let nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 19000), 70);

    // Mouse tracking
    const mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          // Cluster gently along the wave band
          y: height * 0.25 + Math.random() * (height * 0.55),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          baseRadius: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          colorDark: Math.random() > 0.4 ? "#00F0FF" : "#14B8A6",
          colorLight: Math.random() > 0.4 ? "#0284C7" : "#0D9488",
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw undulating connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Wave motion
        a.x += a.vx;
        a.y += a.vy + Math.sin(time + a.x * 0.003) * 0.22;

        // Wrap edges smoothly
        if (a.x < 0) a.x = width;
        if (a.x > width) a.x = 0;
        if (a.y < height * 0.1) a.y = height * 0.9;
        if (a.y > height * 0.9) a.y = height * 0.1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            a.x -= (dx / dist) * force * 1.5;
            a.y -= (dy / dist) * force * 1.5;
          }
        }

        // Pulse size
        a.pulse += a.pulseSpeed;
        const currentRadius = a.baseRadius + Math.sin(a.pulse) * 0.7;

        // Connect nearby nodes with neural lines
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 125;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 240, 255, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = isDark ? 0.8 : 0.9;
            ctx.stroke();
          }
        }

        // Draw node dot with glow
        ctx.beginPath();
        ctx.arc(a.x, a.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = isDark ? a.colorDark : a.colorLight;
        if (isDark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00F0FF";
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-500"
    >
      {/* Dark Mode: Full 3D Cyan Neural Mesh Image */}
      {isDark ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
            style={{
              backgroundImage: "url('/mesh-bg.png')",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Top & Bottom Vignettes to guarantee sharp typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D]/90 via-transparent to-[#090A0D]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/60 via-transparent to-[#090A0D]/60" />
        </>
      ) : (
        /* Light Mode: Crisp, bright white background with soft cyan/sky ambient glows */
        <>
          <div className="absolute inset-0 bg-[#F8FAFC]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-100/50 via-sky-100/40 to-blue-50/30 blur-[100px] rounded-full" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-100/40 blur-[90px] rounded-full" />
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-sky-100/40 blur-[90px] rounded-full" />
        </>
      )}

      {/* Living Interactive Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default NetworkBackground;
