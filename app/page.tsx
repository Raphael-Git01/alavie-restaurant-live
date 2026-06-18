import Image from "next/image";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Reservation from "./components/Reservation";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* 1. FLOATING NAVIGATION HEADER */}
      <Navbar />

      {/* 2. HERO INTRODUCTION SECTION */}
      <main className="relative flex min-h-screen flex-col lg:flex-row bg-stone-950 text-stone-100">
       
        {/* LEFT SIDE: Text and Brand Info */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl space-y-6">
            <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
              Blohum Road, Accra
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              A La Vie Restaurant
            </h1>
            <div className="w-16 h-[2px] bg-amber-500"></div>
            <p className="text-stone-400 text-base md:text-lg leading-relaxed">
              Welcome to a sanctuary of elegance and calm where global flavors meet local artistry.
            </p>
            <div className="text-sm text-stone-500 border-t border-stone-900 pt-4">
              <p>• Try our signature Assorted Jollof & Grilled Seafood</p>
              <p>• Premium T-Bone Steaks & Cocktails</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold uppercase tracking-widest text-xs py-3.5 px-6 rounded text-center transition-all">
                Explore Our Menu
              </a>
              <a href="#reservations" className="border border-stone-700 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-semibold uppercase tracking-widest text-xs py-3.5 px-6 rounded text-center transition-all">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>

 {/* RIGHT SIDE: Atmospheric Cover Image */}
        <div className="flex-1 relative min-h-[45vh] lg:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947"
            alt="A La Vie Restaurant Elegance"
            fill
            priority
            className="object-cover opacity-80 contrast-105"
            sizes="(max-w-7xl) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-stone-950 to-transparent pointer-events-none" />
        </div>

      </main>

      {/* 3. MENU SECTION */}
      <Menu />

      {/* 4. RESERVATION SECTION */}
      <Reservation />

      {/* 5. ABOUT & LOCATION SECTION */}
      <About />
    </>
  );
}