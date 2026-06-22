"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafaf9] via-[#fff7ed] to-[#fafaf9]" />

      {/* Floating ember orbs */}
      <div
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(194,65,12,0.14) 0%, transparent 70%)",
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          animation: "float-slow 11s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          animation: "float 13s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Topographic contour motif */}
      <div className="absolute inset-0 topo-pattern opacity-60" />

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
