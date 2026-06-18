export default function About() {
  return (
    <section id="about" className="bg-stone-950 py-20 px-6 md:px-12 border-t border-stone-900/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
        {/* Left Side: About Text & Story */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Our Story
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-100">
            A Sanctuary of Elegance
          </h2>
          <div className="w-12 h-[1px] bg-amber-500"></div>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
            Nestled beautifully on Blohum Road, A La Vie Restaurant blends global culinary craftsmanship with a smooth, moody upscale atmosphere. Every plate tells a story of meticulously sourced ingredients, sophisticated plating, and an unwavering love for hospitality.
          </p>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
            Whether you are joining us for our rich, smoky signature Assorted Jollof, a premium flame-grilled steak, or bespoke handcrafted cocktails at twilight, we offer an elegant escape from the everyday noise.
          </p>
        </div>

        {/* Right Side: Hours & Physical Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         
          {/* Card 1: Opening Hours */}
          <div className="p-6 rounded-lg bg-stone-900/40 border border-stone-800/80 space-y-4">
            <h3 className="font-serif text-lg font-medium text-stone-200">Opening Hours</h3>
            <div className="text-xs text-stone-400 space-y-2 font-light">
              <p className="flex justify-between border-b border-stone-800/60 pb-1">
                <span>Mon - Thu:</span>
                <span className="text-stone-200">12:00 PM - 11:00 PM</span>
              </p>
              <p className="flex justify-between border-b border-stone-800/60 pb-1">
                <span>Fri - Sat:</span>
                <span className="text-stone-200">12:00 PM - Midnight</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-stone-200">1:00 PM - 10:00 PM</span>
              </p>
            </div>
          </div>

          {/* Card 2: Find Us */}
          <div className="p-6 rounded-lg bg-stone-900/40 border border-stone-800/80 space-y-4">
            <h3 className="font-serif text-lg font-medium text-stone-200">Location</h3>
            <div className="text-xs text-stone-400 space-y-1 font-light">
              <p className="text-stone-200 font-medium">A La Vie Restaurant</p>
              <p>Blohum Road, Airport West</p>
              <p>Accra, Ghana</p>
              <div className="pt-3">
                <span className="text-[10px] text-amber-500 uppercase font-semibold tracking-wider bg-amber-500/5 border border-amber-500/20 px-2 py-1 rounded">
                  Get Directions
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}