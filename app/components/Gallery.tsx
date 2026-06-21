import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/entrance.jpg", alt: "Restaurant Entrance" },
    { src: "/images/interior.jpg", alt: "Dining Interior" },
    { src: "/images/bartender.jpg", alt: "Bartender preparing drinks" },
    { src: "/images/dining.jpg", alt: "Dining area setting" },
  ];

  return (
    <section id="gallery" className="py-20 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-10 text-white">Our Atmosphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative h-72 w-full overflow-hidden rounded-lg">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}