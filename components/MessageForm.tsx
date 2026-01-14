"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(formData.email)) {
      Swal.fire({
        title: "Error",
        text: "You entered an invalid email address.",
        icon: "error",
        confirmButtonColor: "#ef5f33",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Thank you!",
          icon: "success",
          confirmButtonColor: "#0466c8",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef5f33",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col gap-3 sm:gap-5 sm:gap-5 fade-in"
    >
      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="name" className="text-base sm:text-lg pen-regular text-gray-700">
          Your name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="px-4 py-2.5 border border-gray-300 text-sm  sm:text-base rounded-lg bg-white focus:outline-none focus:border-[var(--aritzia-blue)]"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="email" className="text-base sm:text-lg pen-regular text-gray-700">
          Your email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="px-4 py-2.5 border text-sm  sm:text-base border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[var(--aritzia-blue)] "
          placeholder="johndoe@email.com"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label
          htmlFor="message"
          className="text-base sm:text-lg pen-regular text-gray-700"
        >
        Your message
        </label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={6}
          className="px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[var(--aritzia-blue)] resize-none"
          placeholder="Lorem ipsum dolor sit amet..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="sm:px-5 px-4 mt-2 py-2 cursor-pointer sm:py-2.5 self-center bg-[var(--sunny-yellow)]/15 hover:bg-[var(--sunny-yellow)]/30  border border-gray-300 text-gray-800 rounded-lg hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 coding-regular text-xs sm:text-sm"
      >
        {isSubmitting ? (
          "sending..."
        ) : (
          <>
            <span className="text-[var(--aritzia-blue)] coding-bold">Send</span>
            
          </>
        )}
      </button>
    </form>
    </main>
  );
}
