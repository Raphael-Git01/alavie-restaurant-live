import type { FormEvent } from "react";

export default function Reservation() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // handle form submission
  }

  // ... your state code remains the same ...

  return (
    <section id="reservations" className="py-20 bg-stone-950 text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Changed title to be more welcoming */}
        <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">RESERVATION & FEEDBACK</h3>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book or Share Thoughts</h2>
        <p className="text-stone-400 mb-10">Join us for an exceptional culinary experience. Reserve your seating or share your feedback below.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1">Your Name</label>
            <input type="text" className="w-full p-3 bg-stone-900 border border-stone-800 rounded focus:border-amber-500 outline-none" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1">Your Email</label>
            <input type="email" className="w-full p-3 bg-stone-900 border border-stone-800 rounded focus:border-amber-500 outline-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1">Special Requests or Feedback</label>
            <textarea 
              className="w-full p-3 bg-stone-900 border border-stone-800 rounded focus:border-amber-500 outline-none h-32"
              placeholder="Tell us about your plans or leave a review..."
            />
          </div>

          <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded transition-all uppercase tracking-widest">
            Submit Request/Feedback
          </button>
        </form>
      </div>
    </section>
  );
}