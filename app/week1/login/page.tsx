"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Week1Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/week1-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/week1");
    } else {
      setError("Wrong password.");
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-grow flex-col items-center justify-center">
      <div className="fade-in-bounce flex flex-col items-center gap-6 w-full max-w-xs">
        <div className="text-center">
          <p className="coding-regular text-xs text-gray-400 mb-1">Week 1 · DFO Internship</p>
          <h1 className="serif-bold text-gray-800 text-xl">Password required</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm serif-regular text-gray-700 focus:outline-none focus:border-gray-400 bg-white"
            autoFocus
          />
          {error && (
            <p className="text-xs text-center coding-regular text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-gray-800 text-white text-sm serif-regular rounded-lg py-2 hover:bg-gray-700 disabled:opacity-40"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}
