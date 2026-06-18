import Image from "next/image";
import Navbar from "./components/navbar";
import Menu from "./components/menu";

function About() {
  return (
    <section id="about" className="bg-stone-900 text-stone-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">About & Location</h2>
        <p className="text-stone-400 mb-6">
          A La Vie Restaurant offers an elegant dining experience in the heart of Accra. Visit us for handcrafted dishes and a warm atmosphere.
        </p>
        <div className="text-sm text-stone-500">
          <p>Address: Blohum Road, Accra</p>
          <p>Hours: Mon–Sun, 10:00 AM – 11:00 PM</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Floating Header */}
      <Navbar />

      {/* HERO SECTION */}
      <main className="relative flex min-h-screen flex-col lg:flex-row bg-stone-950 text-white selection:bg-amber-500 selection:text-black">
       
        {/* LEFT SIDE: Text and Brand Info */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 pt-28 lg:pt-16 z-10">
          <div className="max-w-xl space-y-6">
            <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/5 inline-block">
              Blohum Road, Accra
            </span>
           
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-stone-100">
              A La Vie Restaurant
            </h1>
           
            <div className="w-16 h-[2px] bg-amber-500"></div>
           
            <p className="text-stone-400 text-base md:text-lg leading-relaxed font-light">
              Welcome to a sanctuary of elegance and calm where global cuisine meets soul and sophistication. Experience exceptional international dishes and signature specialties in the heart of Accra.
            </p>

            <div className="text-sm text-stone-500 border-t border-stone-900 pt-4 space-y-1">
              <p>• Try our signature Assorted Jollof & Grilled Seafood</p>
              <p>• Premium T-Bone Steaks & Cocktails</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-medium px-6 py-3 rounded transition-all duration-200 shadow-lg shadow-amber-500/10 text-center flex items-center justify-center">
                Explore Our Menu
              </a>
              <button className="border border-stone-700 hover:border-stone-500 text-stone-300 font-medium px-6 py-3 rounded transition-all duration-200">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Atmospheric Image */}
        <div className="flex-1 relative min-h-[45vh] lg:min-h-screen w-full bg-stone-900">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200"
            alt="A La Vie Restaurant Elegance"
            fill
            priority
            className="object-cover opacity-80 contrast-105"
            sizes="(max-w-7xl) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-950 via-transparent to-transparent"></div>
        </div>
      </main>

      {/* MENU SECTION */}
      <Menu />

      {/* ABOUT & LOCATION SSECTION */}
      <About /> {/* <-- 2. Render it under the menu */}
    </>
  );
}