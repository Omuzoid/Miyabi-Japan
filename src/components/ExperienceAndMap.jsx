import { useState } from "react";
import { Compass, CloudSun, MapPin, Plane, Navigation } from "lucide-react";

export default function ExperienceAndMap() {
  const [selectedPin, setSelectedPin] = useState(null);

  const categories = [
    { label: "Delicious Food", icon: "🍜", desc: "Ramen, Sushi, Tempura" },
    { label: "Traditional Culture", icon: "🍵", desc: "Tea Ceremony, Kimono" },
    { label: "Beautiful Temples", icon: "⛩️", desc: "Shrines and Pagodas" },
    { label: "Festivals", icon: "🏮", desc: "Matsuri celebrations" },
    { label: "Cherry Blossoms", icon: "🌸", desc: "Hanami viewing season" },
    { label: "Onsen & Relaxation", icon: "♨️", desc: "Hot springs resorts" },
    { label: "Local Adventures", icon: "🏔️", desc: "Hiking and bullet trains" },
    { label: "And Much More!", icon: "扇", desc: "Origami, anime, culture" } // Used character for fan or origami
  ];

  const pins = [
    { id: "hokkaido", name: "Hokkaido", x: 160, y: 55, weather: "16°C Cloudy", season: "Winter (Snow)", dist: "830 km", guide: "Famous for powder snow, hot springs, and fresh seafood." },
    { id: "tokyo", name: "Tokyo", x: 112, y: 155, weather: "22°C Sunny", season: "Spring (Sakura)", dist: "0 km (Center)", guide: "The mega-metropolis blending ultra-modern and ancient temples." },
    { id: "kyoto", name: "Kyoto", x: 92, y: 162, weather: "20°C Mild", season: "Autumn (Maples)", dist: "370 km", guide: "The cultural capital of traditional shrines, geisha, and gardens." },
    { id: "hiroshima", name: "Miyajima", x: 74, y: 172, weather: "23°C Sunny", season: "Spring / Fall", dist: "680 km", guide: "Home of the floating Torii gate and peace memorial park." },
    { id: "okinawa", name: "Okinawa", x: 45, y: 225, weather: "28°C Tropical", season: "Summer (Beach)", dist: "1,500 km", guide: "Subtropical beaches, coral reefs, and distinct Ryukyu culture." }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#faf8ff] select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Experience Japan (Grid span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="rounded-3xl p-8 glass-panel-pink flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-800 font-poppins tracking-tight mb-2">
                  Experience Japan
                </h3>
                <p className="text-gray-400 text-sm font-outfit font-medium mb-8">
                  Click on categories to discover iconic cultural traditions.
                </p>

                {/* 8 Circular items grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {categories.map((cat, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center text-center cursor-pointer p-3.5 bg-white/70 hover:bg-white border border-rose-100/50 hover:border-rose-300 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      onMouseEnter={() => document.body.classList.add("hovering")}
                      onMouseLeave={() => document.body.classList.remove("hovering")}
                    >
                      {/* Icon Circle */}
                      <div className="w-14 h-14 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {cat.icon === "扇" ? (
                          <svg viewBox="0 0 24 24" className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                            <path d="M12 2V22" />
                            <path d="M17 5L7 19" />
                            <path d="M7 5L17 19" />
                          </svg>
                        ) : (
                          cat.icon
                        )}
                      </div>
                      <span className="text-[11px] font-extrabold text-gray-700 font-outfit mt-3 leading-snug group-hover:text-rose-500 transition-colors">
                        {cat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra banner */}
              <div className="mt-8 pt-4 border-t border-rose-100/50 flex items-center gap-3.5">
                <span className="text-4xl animate-float">🎏</span>
                <div>
                  <h4 className="text-xs font-bold text-gray-700 font-poppins">Ready to plan?</h4>
                  <p className="text-[11px] text-gray-400 font-outfit mt-0.5">Explore guides, flight options, hotel booking tips, and local packing hacks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map (Grid span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="rounded-3xl p-8 glass-panel-pink flex-1 flex flex-col justify-between relative overflow-hidden">
              
              <div>
                <h3 className="text-3xl font-extrabold text-gray-800 font-poppins tracking-tight mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-400 text-sm font-outfit font-medium mb-6">
                  Click a map node to view routing and regional details.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {/* SVG Outline Map of Japan */}
                <div className="relative w-52 h-[260px] bg-sky-50/50 border border-sky-100 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 shadow-inner">
                  
                  {/* Decorative flight path */}
                  <svg viewBox="0 0 200 280" className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Japan mainland curves represented by simplified outlines */}
                    <path
                      d="M 150 40 L 165 60 L 130 90 L 115 130 L 98 170 L 80 185 L 55 210 M 50 205 L 35 220"
                      fill="none"
                      stroke="#bfdbfe"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                    
                    {/* Flight dashes from Okinawa (south) to Hokkaido (north) */}
                    <path
                      d="M 45 225 C 70 210, 80 180, 112 155 C 130 140, 140 100, 160 55"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      className="animate-pulse-subtle"
                    />

                    {/* Cute airplane following path */}
                    <g transform="translate(105, 150) rotate(-40)">
                      <path d="M 0,-5 L 2,0 L 7,-1 L 7,1 L 2,1 L 0,6 L -2,1 L -7,1 L -7,-1 L -2,0 Z" fill="#ec4899" />
                    </g>
                  </svg>

                  {/* Interactive Pin Circles */}
                  {pins.map((pin) => {
                    const isActive = selectedPin?.id === pin.id;
                    return (
                      <button
                        key={pin.id}
                        onClick={() => setSelectedPin(isActive ? null : pin)}
                        className="absolute w-5 h-5 flex items-center justify-center origin-center select-none"
                        style={{
                          left: `${pin.x}px`,
                          top: `${pin.y}px`
                        }}
                        onMouseEnter={() => document.body.classList.add("hovering")}
                        onMouseLeave={() => document.body.classList.remove("hovering")}
                      >
                        <span className={`absolute inset-0 rounded-full bg-rose-400 opacity-40 animate-ping ${isActive ? "scale-150" : ""}`} />
                        <span className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-all ${isActive ? "bg-rose-600 scale-125" : "bg-rose-400"}`} />
                      </button>
                    );
                  })}

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-sky-400 font-bold uppercase tracking-widest font-outfit flex items-center gap-1">
                    <Plane size={8} /> Flight Trails
                  </div>
                </div>

                {/* Info Panel Details */}
                <div className="flex-1 w-full">
                  {selectedPin ? (
                    <div 
                      className="rounded-2xl p-4 bg-white border border-rose-100 shadow-sm"
                      style={{
                        animation: "fadeIn 0.3s ease-out"
                      }}
                    >
                      <div className="flex items-center justify-between border-b border-rose-50 pb-2 mb-2">
                        <span className="font-extrabold text-gray-800 text-sm flex items-center gap-1 font-poppins">
                          <MapPin size={12} className="text-rose-500" /> {selectedPin.name}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase font-outfit">
                          {selectedPin.dist}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500 font-outfit mb-3">
                        <div className="flex items-center gap-1">
                          <CloudSun size={10} className="text-amber-500" /> {selectedPin.weather}
                        </div>
                        <div>
                          🌸 Best: <span className="font-semibold text-rose-500">{selectedPin.season}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-gray-500 leading-relaxed font-outfit font-medium">
                        {selectedPin.guide}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center p-6 border-2 border-dashed border-rose-100 rounded-2xl bg-white/30 flex flex-col items-center justify-center">
                      <Navigation size={28} className="text-rose-300 animate-bounce mb-2" />
                      <p className="text-xs text-gray-400 font-outfit font-semibold leading-relaxed">
                        Select a map node<br />to reveal regional guides.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* View Travel Guide Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setSelectedPin(pins[1])}
                  className="px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                  onMouseEnter={() => document.body.classList.add("hovering")}
                  onMouseLeave={() => document.body.classList.remove("hovering")}
                >
                  View Travel Guide
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
