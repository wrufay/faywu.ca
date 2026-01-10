"use client";

import { useEffect } from "react";

export default function ViewerTracker() {
  useEffect(() => {
    const trackViewer = async () => {
      // Check if we've already tracked this session
      const hasTracked = sessionStorage.getItem("viewerTracked");

      if (hasTracked) {
        return; // Already tracked this session, skip
      }

      try {
        await fetch("/api/viewers", {
          method: "POST",
        });
        // Mark as tracked for this session
        sessionStorage.setItem("viewerTracked", "true");
      } catch (error) {
        console.error("Failed to track viewer:", error);
      }
    };

    trackViewer();
  }, []);

  return null; // This component doesn't render anything
}
