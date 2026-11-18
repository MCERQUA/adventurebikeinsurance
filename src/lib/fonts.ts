import localFont from "next/font/local";

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
