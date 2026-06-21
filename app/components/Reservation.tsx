"use client";
import { useState } from "react";

export default function Reservation() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  return (
    <section id="reservations" className="py-20 bg-stone-950 text-white">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* SECTION 1: FEEDBACK */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 border-b border-stone-800 pb-4">Share Your Feedback</h2>
          <form className="space-y-4">
            <textarea 
              className="w-full p-4 bg-stone-900 border border-stone-800 rounded focus:border-amber-500 outline-none text-white h-32"
              placeholder="We'd love to hear about your experience..."
            />
            <button type="submit" className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded transition">
              Send Feedback
            </button>
          </form>
        </div>

        {/* SECTION 2: BOOKING */}
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6 border-b border-stone-800 pb-4">Book A Table</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-stone-900 border border-stone-800 rounded text-white" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-stone-900 border border-stone-800 rounded text-white" required />
            <input type="date" className="w-full p-3 bg-stone-900 border border-stone-800 rounded text-white" required />
            <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded transition-all uppercase tracking-widest">
              Confirm Reservation
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}