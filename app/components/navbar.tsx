export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-stone-950/80 to-transparent backdrop-blur-sm px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        {/* Brand Logo */}
        <div className="font-serif text-xl font-bold tracking-wide text-stone-100">
          A La Vie<span className="text-amber-500">.</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider text-stone-300 uppercase">
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
        </div>

        {/* Reservation CTA Button */}
        <div>
          <button className="border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-stone-950 text-xs tracking-widest uppercase font-semibold px-4 py-2 rounded transition-all duration-300">
            Book Table
          </button>
        </div>

      </div>
    </nav>
  );
}