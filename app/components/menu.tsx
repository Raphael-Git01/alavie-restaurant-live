import Image from "next/image";

// Sample array of genuine premium dishes tailored for A La Vie
const MENU_ITEMS = [
  {
    id: 1,
    name: "Signature Assorted Jollof",
    description: "Rich, deeply smoky Ghanaian Jollof rice tossed with tender beef chunks, chicken, and fresh veggies.",
    price: "GH₵ 120",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=600",
  },
  {
    id: 2,
    name: "Grilled Tilapia & Kelewele",
    description: "Fresh water tilapia marinated in local herbs, charcoal-grilled, served alongside spicy fried plantain cubes.",
    price: "GH₵ 140",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
  },
  {
    id: 3,
    name: "Premium T-Bone Steak",
    description: "A thick, juicy cut grilled to perfection over flame, brushed with a rich garlic herb compound butter.",
    price: "GH₵ 280",
    category: "Steaks",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
  },
  {
    id: 4,
    name: "The Blohum Sunset Cocktail",
    description: "Crafted house gin shaken with fresh passion fruit juice, hibiscus syrup, mint infusion, and lime juice.",
    price: "GH₵ 55",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600",
  },
];

export default function Menu() {
  return (

    <section id="menu" className="bg-stone-900 py-20 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
       
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Culinary Highlights
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-100">
            Our Signature Menu
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto pt-1"></div>
          <p className="text-stone-400 font-light text-sm">
            A masterful curation of international flavor techniques paired cleanly with vibrant local essence.
          </p>
        </div>

        {/* Menu Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-stone-950/40 border border-stone-800/50 hover:border-amber-500/20 transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative w-full sm:w-28 h-28 shrink-0 bg-stone-900 rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="112px"
                />
              </div>

              {/* Text content details */}
              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-medium text-stone-200 text-lg">
                      {item.name}
                    </h3>
                    <span className="text-amber-500 font-semibold text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs font-light leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold self-start bg-stone-900 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}