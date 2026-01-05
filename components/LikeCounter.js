"use client";

import { useState, useEffect } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch likes from database on mount
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch('/api/likes');
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error('Failed to fetch likes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();

    // Check if user has already liked
    const userHasLiked = localStorage.getItem("userHasLiked");
    if (userHasLiked === "true") {
      setHasLiked(true);
    }
  }, []);

  const handleLike = async () => {
    if (hasLiked) return; // Prevent multiple likes

    setIsAnimating(true);
    setHasLiked(true);

    // Optimistically update UI
    setLikes(prev => prev + 1);

    try {
      // Save to database
      const response = await fetch('/api/likes', {
        method: 'POST',
      });
      const data = await response.json();
      setLikes(data.likes); // Use actual count from server

      // Save to localStorage to prevent multiple likes
      localStorage.setItem("userHasLiked", "true");
    } catch (error) {
      console.error('Failed to increment likes:', error);
      // Revert on error
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span>♡</span>
        <span className="coding-regular">...</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={`flex items-center gap-2 text-xs ${
        hasLiked
          ? "text-gray-400 cursor-default"
          : "text-gray-500 hover:text-[var(--crimson-red)] cursor-pointer"
      } transition-colors`}
    >
      <span className={isAnimating ? "animate-bounce" : ""}>
        {hasLiked ? "♥" : "♡"}
      </span>
      <span className="coding-regular">
        {likes} {likes === 1 ? "like" : "likes"}
      </span>
    </button>
  );
}
