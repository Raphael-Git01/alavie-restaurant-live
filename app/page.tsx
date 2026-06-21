import Navbar from "./components/navbar";
import Menu from "./components/menu"; // Ensure file is named Menu.tsx
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation"; // Ensure file is named Reservation.tsx
import About from "./components/About"; // Ensure file is named About.tsx
// import Gallery from "./components/Gallery"; // Uncomment this if you added the gallery

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">A La Vie Restaurant</h1>
        <p className="text-stone-400 text-lg max-w-lg">
          Experience the finest flavors in the heart of Accra.
        </p>
      </section>

      {/* 3. Menu Section */}
      <section id="menu">
        <Menu />
      </section>

      {/* 3. Atmosphere Gallery */}
      <Gallery />

      {/* 5. Reservation & Feedback Section */}
      <section id="reservations">
        <Reservation />
      </section>

      {/* 6. Footer / About Section */}
      <section id="about">
        <About />
      </section>
    </main>
  );
}