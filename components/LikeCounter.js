"use client";

import { useState, useEffect } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch("/api/likes");
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error("Failed to fetch likes:", error);
      }
    };

    fetchLikes();

    // get from local storage to prevent multiple likes on same server
    // const userHasLiked = localStorage.getItem("userHasLiked");
    // if (userHasLiked === "true") {
    //   setHasLiked(true);
    // }
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
