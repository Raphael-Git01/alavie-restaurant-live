import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Background */}
      <section 
        id="hero" 
        className="relative flex min-h-screen flex-col items-center justify-center p-6 text-center"
        style={{
          backgroundImage: "url('/images/herobg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            A La Vie
          </h1>
          <p className="text-stone-200 text-lg max-w-lg">
            Experience the finest flavors in the heart of Accra.
          </p>
        </div>
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
      
    
  
