"use client";

import { useState, useEffect } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch("/api/likes");
        const data = await response.json();
        setLikes(data.likes);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();

    // get from local storage to prevent multiple likes on same server
    const userHasLiked = localStorage.getItem("userHasLiked");
    if (userHasLiked === "true") {
      setHasLiked(true);
    }
  }, []);

  const handleLike = async () => {
    setIsAnimating(true);
    setHasLiked(true);

    setLikes((prev) => prev + 1);

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
      });
      const data = await response.json();
      setLikes(data.likes);

      // save like in localsotrage
      localStorage.setItem("userHasLiked", "true");
    } catch (error) {
      console.error("Failed to increment likes:", error);
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isLoading) {
    return "...";
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={`flex items-center gap-1 text-xs fade-in ${
        hasLiked
          ? "text-gray-400 cursor-default"
          : "text-gray-500 hover:text-[var(--crimson-red)] cursor-pointer"
      } transition-colors`}
    >
      <span className={isAnimating ? "animate-bounce" : ""}>
        {hasLiked ? "♥" : "♡"}
      </span>
      <span className="coding-regular">{likes}</span>
    </button>
  );
}
