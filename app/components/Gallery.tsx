import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/food1.jpg", alt: "Signature dish" },
    { src: "/images/food2.jpg", alt: "Dining area" },
    // Add all your file names here
  ];

  return (
    <section className="py-16 bg-stone-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        {images.map((img, index) => (
          <div key={index} className="relative h-64 w-full">
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}