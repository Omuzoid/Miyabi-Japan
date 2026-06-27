import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { BookOpen, Star } from "lucide-react";
import { PLACES } from "./DestinationsGrid";

export default function JourneyPassport() {
  // Start with 9 places visited to make the passport feel populated (Reference image shows 4/5)
  // Now we have 10, so 8/10 or 9/10 visited matches the vibe.
  const [visited, setVisited] = useState(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  const toggleStamp = (id) => {
    const next = new Set(visited);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setVisited(next);
  };

  useEffect(() => {
    // Fire confetti celebration when all 10 stamps are collected!
    if (visited.size === 10) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [visited]);

  return (
    <section id="passport" className="py-24 px-6 bg-[#fff7ed]/30 select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50 mb-3">
            <span>📕</span>
            <span>Passport Booklet</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 font-poppins tracking-tight mt-1">
            Your Journey Passport
          </h2>
          <p className="text-gray-500 font-outfit mt-2 max-w-md mx-auto text-sm sm:text-base font-medium">
            Collect stamps as you explore each beautiful destination. Click stamps to unlock!
          </p>
        </div>

        {/* Passport Layout Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-amber-200/40"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left side: Passport Booklet Cover */}
            <div
              className="md:w-56 flex-shrink-0 flex flex-col justify-between items-center p-8 text-center border-r border-amber-100/50 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c2d12, #451a03)",
              }}
            >
              {/* Gold foil corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-300/30 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-300/30 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-300/30 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-300/30 rounded-br-lg" />

              <div>
                <BookOpen size={40} className="text-amber-300/80 mx-auto animate-pulse" />
                <h4 className="text-lg font-black text-amber-200 uppercase tracking-widest mt-4 font-poppins">
                  Japan
                </h4>
                <p className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest font-outfit mt-1">
                  Journey Passport
                </p>
              </div>

              {/* Progress Ring / Counter */}
              <div className="my-8 relative">
                <div className="text-4xl font-extrabold text-amber-300 font-poppins">
                  {visited.size} / 10
                </div>
                <div className="text-[9px] font-bold text-amber-400 uppercase tracking-wider font-outfit mt-1">
                  Stamps Collected
                </div>
              </div>

              {/* Daruma doll icon sticker */}
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center border-4 border-amber-300 shadow-md">
                <div className="text-3xl select-none animate-bounce" style={{ animationDuration: '4s' }}>
                  👹
                </div>
              </div>
            </div>

            {/* Right side: Stamps Progress */}
            <div className="flex-1 p-8 flex flex-col justify-between bg-amber-50/20">
              
              {/* Stamps Grid - wraps into two clean rows of 5 cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {PLACES.map((place, i) => {
                  const isVisited = visited.has(place.id);
                  return (
                    <div
                      key={place.id}
                      onClick={() => toggleStamp(place.id)}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => document.body.classList.add("hovering")}
                      onMouseLeave={() => document.body.classList.remove("hovering")}
                    >
                      {/* Stamp Circle Container */}
                      <div
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl shadow-sm transition-all duration-500 relative ${
                          isVisited
                            ? `bg-white ${place.borderColor} rotate-[-8deg] scale-105 shadow-md`
                            : "bg-gray-100/60 border-dashed border-gray-300 grayscale"
                        }`}
                      >
                        <span>{place.emoji}</span>
                        {/* Red circle border inside when stamped */}
                        {isVisited && (
                          <div className="absolute inset-1 rounded-full border border-dashed border-rose-400/50 pointer-events-none" />
                        )}
                      </div>

                      {/* Labels */}
                      <span className="text-[10px] font-extrabold text-gray-700 font-outfit mt-2 group-hover:text-rose-500 transition-colors">
                        {place.name}
                      </span>
                      <span className="text-[8px] font-bold text-gray-400 font-serifJp">
                        {place.kanji}
                      </span>
                      
                      {isVisited ? (
                        <span className="text-[7px] font-bold text-rose-500 uppercase font-outfit mt-0.5 tracking-wider">
                          ✓ Stamped
                        </span>
                      ) : (
                        <span className="text-[7px] font-bold text-gray-400 uppercase font-outfit mt-0.5 tracking-wider">
                          Locked
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Area containing Traveler Mascot and Shin-chan Mascot */}
              <div className="mt-8 pt-6 border-t border-amber-100/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <h5 className="text-sm font-extrabold text-amber-800 font-poppins flex items-center gap-1.5 justify-center sm:justify-start">
                    <Star size={12} className="text-amber-500 fill-amber-500 animate-spin" style={{ animationDuration: '6s' }} /> 
                    {visited.size === 10 ? "Passport Complete!" : "Explore to Earn Stamps"}
                  </h5>
                  <p className="text-[11px] text-gray-500 font-outfit mt-1 leading-relaxed">
                    {visited.size === 10
                      ? "Arigatou! You've unlocked all 10 virtual destination stamps. You're officially a Japan travel expert!"
                      : "Earn stamps automatically as you scroll down and read through each destination details page."}
                  </p>
                </div>

                {/* Chibi characters area (Chibi Girl Traveler + Shin-chan next to her) */}
                <div className="flex items-end gap-3 flex-shrink-0">
                  {/* Subtle Shin-chan Mascot (Floating next to traveler) */}
                  <div 
                    className="w-14 h-16 relative animate-float-slow drop-shadow-md select-none cursor-pointer hover:scale-105 transition-transform"
                    title="Shin-chan says hello!"
                    onMouseEnter={() => document.body.classList.add("hovering")}
                    onMouseLeave={() => document.body.classList.remove("hovering")}
                  >
                    <img src="/shinchan.png" alt="Shin-chan" className="w-full h-full object-contain" />
                  </div>

                  {/* Chibi traveler girl mascot */}
                  <div className="w-12 h-16 relative animate-float bg-amber-100 rounded-2xl flex flex-col justify-between p-1 items-center border border-amber-200 shadow-sm">
                    {/* Head */}
                    <div className="w-8 h-8 rounded-full bg-[#ffe8db] border border-orange-100 flex flex-col items-center relative">
                      {/* Straw hat */}
                      <div className="absolute -top-2 w-12 h-3 bg-amber-500 rounded-full border border-amber-600" />
                      {/* Bangs */}
                      <div className="absolute top-0 left-0 right-0 h-3 bg-[#4e3629] rounded-b-sm" />
                      {/* Eyes */}
                      <div className="flex justify-between w-5 mt-3">
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <div className="w-1 h-1 bg-black rounded-full" />
                      </div>
                    </div>

                    {/* Backpack */}
                    <div className="absolute -left-2 top-6 w-3 h-8 bg-amber-700 rounded-sm border border-amber-800" />

                    {/* Body */}
                    <div className="w-8 h-8 bg-sky-200 border-t border-sky-300 rounded-b-md flex flex-col items-center">
                      <div className="flex justify-around w-6 mt-1 text-[8px]">👢👢</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
