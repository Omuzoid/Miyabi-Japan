import { useState } from "react";
import { PLACES } from "./DestinationsGrid";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Compass, Mountain } from "lucide-react";

export default function DestinationDetailSlider({ initialId = 1, onExploreMore }) {
  const [activeIndex, setActiveIndex] = useState(initialId - 1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === PLACES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? PLACES.length - 1 : prev - 1));
  };

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  const activePlace = PLACES[activeIndex];

  return (
    <section id="details" className="py-24 px-6 bg-gradient-to-b from-[#fff7ed]/40 to-[#faf8ff] select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/50 mb-3">
            <span>🗺️</span>
            <span>Discover More</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 font-poppins tracking-tight mt-1">
            Destination Showcase
          </h2>
        </div>

        {/* Detailed Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Facts Card & Detailed Description (Grid span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div 
              className="rounded-3xl p-8 glass-panel-pink flex-1 flex flex-col justify-between"
              style={{
                animation: "fadeIn 0.6s ease-out"
              }}
            >
              <div>
                {/* Big number index and kanji */}
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-rose-200/80 font-poppins leading-none">
                    {activePlace.num}
                  </span>
                  <span className="text-2xl font-semibold text-rose-400 font-serifJp">
                    {activePlace.kanji}
                  </span>
                </div>

                {/* Place Name and Tagline */}
                <h3 className="text-3xl font-extrabold text-gray-800 font-poppins mt-4 leading-tight">
                  {activePlace.name}
                </h3>
                <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider font-outfit mt-1">
                  {activePlace.tagline}
                </p>

                {/* Long description */}
                <p className="text-gray-600 text-sm leading-relaxed mt-5 font-outfit font-medium">
                  {activePlace.desc}
                </p>

                {/* Key Facts list */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                      <Mountain size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-outfit">Height</div>
                      <div className="text-xs font-bold text-gray-700 font-poppins">{activePlace.facts.height}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-outfit">Location</div>
                      <div className="text-xs font-bold text-gray-700 font-poppins">{activePlace.facts.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                      <Calendar size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-outfit">Best Time</div>
                      <div className="text-xs font-bold text-gray-700 font-poppins">{activePlace.facts.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                      <Compass size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-outfit">Famous For</div>
                      <div className="text-xs font-bold text-gray-700 font-poppins">{activePlace.facts.famousFor}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-rose-100/50 flex justify-between items-center">
                <button
                  onClick={() => onExploreMore && onExploreMore(activePlace.id)}
                  className="px-6 py-3 rounded-2xl text-white font-bold text-xs bg-gradient-to-r from-rose-500 to-purple-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
                  onMouseEnter={() => document.body.classList.add("hovering")}
                  onMouseLeave={() => document.body.classList.remove("hovering")}
                >
                  <span>Explore More</span>
                  <span>🎏</span>
                </button>

                <div className="text-center">
                  <span className="text-3xl filter drop-shadow-sm block animate-float-slow">
                    {activePlace.chibi.substring(0, 2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Large Image with Carousel Selectors (Grid span 7) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-rose-100 min-h-[400px] flex items-stretch">
            
            {/* Main Picture */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={activePlace.image}
                alt={activePlace.name}
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
                style={{
                  transform: "scale(1.02)"
                }}
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Float details indicator */}
            <div className="absolute bottom-6 left-6 text-white z-10 hidden sm:block">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-rose-500/80 px-2.5 py-1 rounded-full border border-rose-400/30">
                {activePlace.num} · Scenic Spot
              </span>
              <h4 className="text-2xl font-black font-poppins mt-2">{activePlace.name}</h4>
              <p className="text-white/80 text-xs font-outfit mt-1">{activePlace.sub}</p>
            </div>

            {/* Circular Thumbnail Selectors on the Right Edge */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
              {PLACES.map((place, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={place.id}
                    onClick={() => selectSlide(index)}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 relative group flex items-center justify-center ${
                      isActive ? "border-rose-500 scale-110 shadow-lg" : "border-white/60 hover:border-rose-300"
                    }`}
                    onMouseEnter={() => document.body.classList.add("hovering")}
                    onMouseLeave={() => document.body.classList.remove("hovering")}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent" />
                    
                    {/* Floating mini info card on hover */}
                    <span className="absolute right-14 bg-white text-gray-800 text-[10px] font-bold py-1 px-2.5 rounded-lg border border-rose-100 shadow-md scale-0 group-hover:scale-100 transition-all origin-right pointer-events-none whitespace-nowrap">
                      {place.emoji} {place.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Left & Right Circle Arrows at Bottom Right */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md border border-rose-100 flex items-center justify-center hover:-translate-x-0.5 transition-all"
                onMouseEnter={() => document.body.classList.add("hovering")}
                onMouseLeave={() => document.body.classList.remove("hovering")}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md border border-rose-100 flex items-center justify-center hover:translate-x-0.5 transition-all"
                onMouseEnter={() => document.body.classList.add("hovering")}
                onMouseLeave={() => document.body.classList.remove("hovering")}
              >
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
