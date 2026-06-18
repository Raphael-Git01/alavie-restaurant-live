"use client";

import { useState } from "react";

// Full official menu dataset mapped cleanly with pricing and categories
const MENU_DATA = [
  // STARTERS
  { name: "Spring Rolls", price: "GHS 60.00", category: "Starters", description: "Crispy, golden pastry rolls packed with seasoned vegetables." },
  { name: "Samosa", price: "GHS 60.00", category: "Starters", description: "Savory triangular pastries filled with aromatic spiced fillings." },
  { name: "Prawns Tempura", price: "GHS 180.00", category: "Starters", description: "Light and ultra-crispy battered prawns served with dipping sauce." },
  { name: "Assorted Kelewele", price: "GHS 100.00", category: "Starters", description: "Perfectly spiced and fried ripe plantain cubes." },

  // RICE DISHES
  { name: "Assorted Fried Rice", price: "GHS 130.00", category: "Rice Dishes", description: "Wok-tossed aromatic rice packed with meats and crisp vegetables." },
  { name: "Assorted Jollof", price: "GHS 135.00", category: "Rice Dishes", description: "Our signature rich, smoky Ghanaian Jollof rice loaded with savory meats." },
  { name: "Beef Sauce", price: "GHS 140.00", category: "Rice Dishes", description: "Tender sliced beef simmered in a rich, deeply savory vegetable sauce." },
  { name: "Seafood Fried Rice", price: "GHS 160.00", category: "Rice Dishes", description: "Premium fried rice tossed with fresh, succulent catch from the ocean." },

  // MAINS
  { name: "Lamb Chops (Foreign)", price: "GHS 400.00", category: "Mains", description: "Premium imported cuts seared beautifully, served with a side of your choice." },
  { name: "Lamb Chops (Local)", price: "GHS 220.00", category: "Mains", description: "Tender, locally sourced lamb chops grilled over flame with a choice side." },
  { name: "Grilled Chicken", price: "GHS 150.00", category: "Mains", description: "Perfectly flame-kissed chicken seasoned in rich local marinade with a choice side." },
  { name: "Goat Bites", price: "GHS 200.00", category: "Mains", description: "Savory, intensely flavorful grilled or seasoned goat chunks with a choice side." },
  { name: "Grilled Tilapia", price: "GHS 200.00", category: "Mains", description: "Fresh, large whole tilapia seasoned in local herbs and grilled to perfection." },
  { name: "Pork Ribs", price: "GHS 180.00", category: "Mains", description: "Sticky, tender, slow-glazed rack of ribs charred gently over open flame." },
  { name: "T Bone Steak", price: "GHS 455.00", category: "Mains", description: "A massive premium cut grilled to your satisfaction, brushed with herb butter." },
  { name: "Fish Stew", price: "GHS 150.00", category: "Mains", description: "Traditional, deeply flavorful rich tomato fish stew served alongside a choice side." },

  // FINGER LICKING WINGS
  { name: "6pcs Wings (With A Side)", price: "GHS 110.00", category: "Wings", description: "Six succulent wings tossed in signature glaze, served with your favorite side." },
  { name: "12pcs Wings (With A Side)", price: "GHS 180.00", category: "Wings", description: "Twelve juicy wings drenched in rich flavor profiling, paired with a choice side." },
  { name: "24pcs Wings (With 2 sides)", price: "GHS 380.00", category: "Wings", description: "A feast of twenty-four premium wings accompanied cleanly by two complete side selections." },

  // LOCALS
  { name: "Acheke With Tilapia", price: "GHS 250.00", category: "Locals", description: "Traditional flaky cassava couscous served with grilled whole fresh tilapia and sides." },
  { name: "Banku With Okro", price: "GHS 150.00", category: "Locals", description: "Smooth, hot fermented corn and cassava dough paired with a rich, nutritious okra stew." },
  { name: "Banku With Tilapia", price: "GHS 180.00", category: "Locals", description: "Fresh charcoal-grilled tilapia matched flawlessly with hot balls of authentic banku." },
  { name: "Nkontomire With Boiled Plantain & Yam", price: "GHS 110.00", category: "Locals", description: "Rich cocoyam leaf Abom/stew with boiled tender plantains and yam slices." },
  { name: "Goat Light Soup With Fufu", price: "GHS 140.00", category: "Locals", description: "Pounded smooth fufu swimming beautifully in a fiery, deeply therapeutic goat light soup." },

  // BURGERS & SANDWICHES
  { name: "Chicken Burger", price: "GHS 120.00", category: "Burgers & Sandwiches", description: "Crispy or grilled premium chicken breast topped with fresh lettuce and house sauce." },
  { name: "Beef Burger", price: "GHS 130.00", category: "Burgers & Sandwiches", description: "Flame-grilled thick juicy beef patty layered under premium burger toppings." },
  { name: "Beef, Bacon & Egg Burger", price: "GHS 160.00", category: "Burgers & Sandwiches", description: "The ultimate breakfast style burger loaded with bacon, fried egg, and grilled beef." },
  { name: "BBQ Beef Burger", price: "GHS 130.00", category: "Burgers & Sandwiches", description: "Our gourmet beef patty dripping in rich, smoky, dark sweet barbecue glaze." },
  { name: "Club Sandwich", price: "GHS 130.00", category: "Burgers & Sandwiches", description: "Classic double-decker layered toast stacked with clean poultry layers, egg, and fresh greens." },
  { name: "Tuna Sandwich", price: "GHS 120.00", category: "Burgers & Sandwiches", description: "Flaky creamed tuna spread mixed cleanly with light herbs and crisp vegetables." },
  { name: "Chicken Sandwich", price: "GHS 120.00", category: "Burgers & Sandwiches", description: "Tender pull-chicken chunks tossed gently in gourmet spreads between soft bread." },
  { name: "Club Sandwich Mini", price: "GHS 90.00", category: "Burgers & Sandwiches", description: "A lighter, bite-sized edition of our classic tiered artisan club sandwich toast." },

  // PIZZA
  { name: "Magenta Pizza", price: "GHS 145.00", category: "Pizza", description: "Our premium house specialty recipe crust baked under bubbling cheese." },
  { name: "Pepperoni Pizza", price: "GHS 145.00", category: "Pizza", description: "Zesty, spicy dry cured beef pepperoni discs scattered heavily across premium cheese." },
  { name: "Beef Pizza", price: "GHS 145.00", category: "Pizza", description: "Freshly pulled seasoned minced beef baked tightly into rich signature tomato base crusts." },
  { name: "Chicken Pizza", price: "GHS 140.00", category: "Pizza", description: "Cubed juicy grilled chicken chunks distributed softly across an aromatic baseline." },

  // SKEWERS
  { name: "Beef Skewers", price: "GHS 120.00", category: "Skewers", description: "Flame-charred chunks of marinated beef threaded alongside seasonal sweet peppers." },
  { name: "Chicken Skewers", price: "GHS 100.00", category: "Skewers", description: "Tender, succulent chicken pieces marinated in signature spice arrays and grilled." },
  { name: "Lamb Skewers", price: "GHS 140.00", category: "Skewers", description: "Incredibly savory, rich lamb chunks skewered and grilled over slow-burning charcoal embers." },

  // PANCAKES & WAFFLES
  { name: "Chicken Waffles", price: "GHS 120.00", category: "Sweets & Breakfast", description: "Crispy savory fried chicken sitting elegantly on top of a thick, sweet golden waffle." },
  { name: "Regular Waffles", price: "GHS 90.00", category: "Sweets & Breakfast", description: "Fluffy, classic gridded waffle dusted with fine powdered sugar and sweet syrup syrup syrup." },
  { name: "Pancakes With Fruits", price: "GHS 100.00", category: "Sweets & Breakfast", description: "A stack of light, airy pan-fried cakes ringed with fresh seasonal chopped fruits." },
  { name: "Regular Pancakes", price: "GHS 60.00", category: "Sweets & Breakfast", description: "Simple, nostalgic golden griddle cakes served alongside sweet honey or syrup drips." },
  { name: "Brownies With Ice-Cream", price: "GHS 50.00", category: "Sweets & Breakfast", description: "Warm, fudgy chocolate square coupled softly with a cold scoop of rich ice cream." },
  { name: "Ice Cream", price: "GHS 30.00", category: "Sweets & Breakfast", description: "A refreshing premium cold treat containing smooth, timeless dessert flavor notes." },
  { name: "Fruit Salad", price: "GHS 70.00", category: "Sweets & Breakfast", description: "A bright medley of chilled organic local fruits sliced elegantly for clean finishes." },
  { name: "Waffles & Pancakes", price: "GHS 70.00", category: "Sweets & Breakfast", description: "The ultimate duet featuring a smaller serving of both our griddle favorites." },

  // SALADS
  { name: "Garden Salad", price: "GHS 90.00", category: "Salads", description: "Crisp leafy garden greens dressed gently with fresh cucumber and tomato rounds." },
  { name: "Ghanaian Salad", price: "GHS 110.00", category: "Salads", description: "Rich traditional style toss incorporating baked beans, egg layers, tuna, and crisp greens." },
  { name: "Greek Salad", price: "GHS 110.00", category: "Salads", description: "Tangy block feta cheese tossed softly with black olives, onions, tomatoes, and olive oils." },

  // SIDES
  { name: "Crushed Potatoes", price: "GHS 55.00", category: "Sides", description: "Rustic baby potatoes smashed gently and roasted with skin-on garlic butter oils." },
  { name: "Potato Wedges", price: "GHS 55.00", category: "Sides", description: "Thick hand-cut potato segments seasoned in savory salt herbs and baked crispy." },
  { name: "Vegetable Rice", price: "GHS 50.00", category: "Sides", description: "Steamed premium rice folded elegantly with brightly colored sweet dice peppers." },
  { name: "Jollof Rice (Side Portion)", price: "GHS 55.00", category: "Sides", description: "A singular personal bowl of our deeply beloved rich tomato-smoke Jollof grains." },
  { name: "Yam Chips", price: "GHS 50.00", category: "Sides", description: "Crispy, white-gold fried local yam strips seasoned with salt accents." },
  { name: "French Fries", price: "GHS 50.00", category: "Sides", description: "Timeless golden potato fries cooked to snapping crispy textures." },
  { name: "Vegetable Fried Rice", price: "GHS 50.00", category: "Sides", description: "Quickly wok-charred rice tossed clean with spring greens and aromatic minerals." },
  { name: "Plain Rice", price: "GHS 40.00", category: "Sides", description: "Perfectly balanced, neutral steamed white long grain jasmine rice foundations." },
  { name: "Kelewele (Side)", price: "GHS 45.00", category: "Sides", description: "A smaller side sharing dish of our fiery ginger and chili seasoned plantain cubes." },
];

// Clean category listing for the filter navigation buttons
const CATEGORIES = [
  "All",
  "Starters",
  "Rice Dishes",
  "Mains",
  "Wings",
  "Locals",
  "Burgers & Sandwiches",
  "Pizza",
  "Skewers",
  "Salads",
  "Sweets & Breakfast",
  "Sides"
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically filter items based on chosen category tab
  const filteredItems = activeCategory === "All"
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="bg-stone-900 py-20 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
       
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Culinary Highlights
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-100">
            Our Signature Menu
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto pt-1"></div>
          <p className="text-stone-400 font-light text-sm">
            Discover a masterful curation of international flavor techniques paired cleanly with vibrant local essence.
          </p>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-stone-800/40 pb-6">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs tracking-widest uppercase font-medium px-4 py-2 rounded transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-amber-500 text-stone-950 border-amber-500 font-semibold"
                  : "text-stone-400 border-stone-800 hover:text-stone-200 hover:border-stone-700 bg-stone-950/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 rounded-lg bg-stone-950/40 border border-stone-800/50 hover:border-amber-500/20 transition-all duration-300 group"
            >
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif font-medium text-stone-100 text-lg group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-amber-500 font-mono font-semibold text-sm whitespace-nowrap bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
             
              <div className="mt-4 flex items-center justify-between border-t border-stone-900/60 pt-3">
                <span className="text-[9px] uppercase tracking-widest text-stone-500 font-bold bg-stone-900/60 px-2 py-0.5 rounded">
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