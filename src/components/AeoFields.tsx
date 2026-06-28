"use client";
import { useEffect } from "react";

/**
 * AEO traffic-source capture (additive + invisible).
 * Renders two hidden inputs inside a form and sets them on load:
 *   traffic_source — utm_source / ref / referrer hostname / "direct"
 *   landing_url    — full landing URL
 * Submitted with the form (forms read the DOM via FormData) so every lead carries its source.
 */
export function AeoFields() {
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (!src) src = "direct";
      const s = document.getElementById("__aeo_src") as HTMLInputElement | null;
      if (s) s.value = src;
      const u = document.getElementById("__aeo_url") as HTMLInputElement | null;
      if (u) u.value = window.location.href;
    } catch {}
  }, []);

  return (
    <>
      <input type="hidden" name="traffic_source" id="__aeo_src" defaultValue="" />
      <input type="hidden" name="landing_url" id="__aeo_url" defaultValue="" />
    </>
  );
}
