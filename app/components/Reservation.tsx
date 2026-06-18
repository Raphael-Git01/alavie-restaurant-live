"use client";

import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to a database or restaurant email
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="bg-stone-950 py-20 px-6 md:px-12 border-t border-stone-900 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
       
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Reservation
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-100">
            Book A Table
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto pt-1"></div>
          <p className="text-stone-400 font-light text-sm">
            Join us for an exceptional culinary experience. Reserve your seating in advance.
          </p>
        </div>

        {submitted ? (
          <div className="bg-stone-900/50 border border-amber-500/30 rounded-lg p-8 text-center space-y-3">
            <h3 className="font-serif text-2xl text-amber-400 font-semibold">Reservation Requested!</h3>
            <p className="text-stone-300 text-sm max-w-md mx-auto">
              Thank you, {formData.name}. Your request for {formData.guests} guests on {formData.date} at {formData.time} has been logged. The restaurant will confirm via phone shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-semibold uppercase text-stone-400 hover:text-amber-400 transition-colors"
            >
              Book another table
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-stone-900/20 border border-stone-800/60 rounded-xl p-6 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +233..."
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Number of Guests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6+ People</option>
                </select>
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Time</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

            </div>

            {/* Special Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Special Requests / Dietary Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Birthday celebration, window seating, allergies..."
                className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold uppercase tracking-widest text-xs py-3 rounded transition-all duration-200 shadow-lg shadow-amber-500/10"
            >
              Book Appointment
            </button>

          </form>
        )}

      </div>
    </section>
  );
}