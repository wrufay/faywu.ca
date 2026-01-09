"use client";

import { useState, useEffect } from "react";

interface PaintingLikeCounterProps {
  paintingId: string;
}

export default function PaintingLikeCounter({ paintingId }: PaintingLikeCounterProps) {
  const [likes, setLikes] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/paintings/${paintingId}`);
        const data = await response.json();
        setLikes(data.likes || 0);
      } catch (error) {
        console.error("Failed to fetch likes:", error);
        setLikes(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [paintingId]);

  const handleLike = async () => {
    setIsAnimating(true);

    // Optimistically update the UI
    setLikes((prev) => prev + 1);

    try {
      const response = await fetch(`/api/paintings/${paintingId}`, {
        method: "POST",
      });
      const data = await response.json();

      console.log("POST response:", data);

      if (data.error) {
        console.error("API error:", data);
        // Revert on error
        setLikes((prev) => Math.max(0, prev - 1));
      } else {
        setLikes(data.likes || 0);
      }
    } catch (error) {
      console.error("Failed to increment likes:", error);
      // Revert on error
      setLikes((prev) => Math.max(0, prev - 1));
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isLoading) {
    return <span className="text-gray-400">...</span>;
  }

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-1 text-gray-500 hover:text-[var(--crimson-red)] cursor-pointer transition-colors"
    >
      <span className={isAnimating ? "animate-bounce" : ""}>♡</span>
      <span className="coding-regular">{likes}</span>
    </button>
  );
}
