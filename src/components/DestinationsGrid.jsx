import { useState } from "react";
import { motion } from "framer-motion";

export const PLACES = [
  {
    id: 1,
    name: "Mount Fuji",
    kanji: "富士山",
    num: "01",
    tagline: "Japan's sacred crown",
    sub: "Fuji-Hakone-Izu National Park",
    desc: "Japan's iconic symbol and highest peak — a timeless silhouette that has inspired poets, artists, and pilgrims for centuries. At dawn, the snow-capped summit turns rose-gold while the lake below mirrors the sky.",
    facts: {
      height: "3,776 m",
      location: "Honshu Island",
      bestTime: "Oct - Feb",
      famousFor: "Sunrise Views"
    },
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600&q=80",
    emoji: "🏔️",
    chibi: "🎒👧", // Traveler girl
    color: "from-sky-100 via-blue-50 to-pink-100",
    accent: "text-blue-500",
    bgAccent: "bg-blue-50",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-200/40"
  },
  {
    id: 2,
    name: "Kyoto",
    kanji: "京都",
    num: "02",
    tagline: "Golden shrines & bamboo paths",
    sub: "Ancient Capital of Japan",
    desc: "Golden temples shimmer amid bamboo groves and stone-lantern paths. Kyoto is Japan's cultural soul — where geisha still glide through ancient Gion, and tea ceremony remains a living art.",
    facts: {
      height: "311 m",
      location: "Kansai Region",
      bestTime: "Mar - May",
      famousFor: "Bamboo & Temples"
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80",
    emoji: "⛩️",
    chibi: "🐱🏮", // Lucky Cat
    color: "from-amber-100 via-orange-50 to-yellow-100",
    accent: "text-amber-600",
    bgAccent: "bg-amber-50",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-200/40"
  },
  {
    id: 3,
    name: "Shirakawa-go",
    kanji: "白川郷",
    num: "03",
    tagline: "A village from a fairy tale",
    sub: "Traditional Gassho Village",
    desc: "Deep in the Japanese Alps, snow-blanketed farmhouses glow amber in the winter dusk. The steep thatched roofs — called gasshō-zukuri — shed heavy snowfall like praying hands reaching heavenward.",
    facts: {
      height: "400 m",
      location: "Gifu Prefecture",
      bestTime: "Dec - Feb",
      famousFor: "Snow Rooftops"
    },
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600&q=80",
    emoji: "❄️",
    chibi: "🧥👦", // Traveler boy in winter coat
    color: "from-indigo-100 via-slate-50 to-blue-100",
    accent: "text-indigo-600",
    bgAccent: "bg-indigo-50",
    borderColor: "border-indigo-200",
    shadowColor: "shadow-indigo-200/40"
  },
  {
    id: 4,
    name: "Miyajima Island",
    kanji: "宮島",
    num: "04",
    tagline: "The floating shrine gate",
    sub: "Floating Itsukushima Torii",
    desc: "At high tide, the great vermilion torii appears to float on the Seto Inland Sea — one of Japan's three most celebrated views. Sacred deer wander freely, and the evening lanterns turn the water gold.",
    facts: {
      height: "0 m (Sea Level)",
      location: "Hiroshima Bay",
      bestTime: "Apr - Nov",
      famousFor: "Floating Torii"
    },
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80",
    emoji: "🌊",
    chibi: "🦊🎒", // Fox mascot
    color: "from-rose-100 via-red-50 to-orange-100",
    accent: "text-rose-600",
    bgAccent: "bg-rose-50",
    borderColor: "border-rose-200",
    shadowColor: "shadow-rose-200/40"
  },
  {
    id: 5,
    name: "Kanazawa",
    kanji: "金沢",
    num: "05",
    tagline: "Preserved in perfect stillness",
    sub: "Kenroku-en & Samurai Town",
    desc: "Kenroku-en garden — one of Japan's three most celebrated — changes its face with every season. Moss-draped lanterns, stone bridges over koi ponds, and maple trees burning scarlet in autumn make Kanazawa feel outside of time.",
    facts: {
      height: "40 m",
      location: "Ishikawa Prefecture",
      bestTime: "Oct - Nov",
      famousFor: "Koi & Maples"
    },
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
    emoji: "🍃",
    chibi: "🐱🍵", // Lucky cat
    color: "from-emerald-100 via-green-50 to-teal-100",
    accent: "text-emerald-600",
    bgAccent: "bg-emerald-50",
    borderColor: "border-emerald-200",
    shadowColor: "shadow-emerald-200/40"
  },
  {
    id: 6,
    name: "Tokyo",
    kanji: "東京",
    num: "06",
    tagline: "Neon towers & busy streets",
    sub: "Shibuya Crossing & Tokyo Tower",
    desc: "The beating heart of modern Japan. Futuristic neon skyscrapers tower over the world's busiest pedestrian crossing in Shibuya, showing a perfect, high-speed choreography under the city lights.",
    facts: {
      height: "333 m",
      location: "Kanto Region",
      bestTime: "Year-round",
      famousFor: "Shibuya Crossing"
    },
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=1600&q=80",
    emoji: "⚡",
    chibi: "🎒👓", // Urban traveler
    color: "from-purple-100 via-indigo-50 to-pink-100",
    accent: "text-purple-600",
    bgAccent: "bg-purple-50",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-200/40"
  },
  {
    id: 7,
    name: "Nara Park",
    kanji: "奈良",
    num: "07",
    tagline: "Sacred bowing deer & wood temples",
    sub: "Nara Prefecture Sanctuary",
    desc: "A massive, peaceful park where hundreds of friendly, bowing sika deer roam freely beside ancient wooden temples, including the Todai-ji housing the giant bronze Great Buddha.",
    facts: {
      height: "80 m",
      location: "Kansai Region",
      bestTime: "Oct - Nov",
      famousFor: "Bowing Deer"
    },
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=80",
    emoji: "🦌",
    chibi: "🍘🦌", // Feeding deer
    color: "from-amber-100 via-amber-50 to-emerald-100",
    accent: "text-amber-700",
    bgAccent: "bg-amber-50",
    borderColor: "border-amber-300",
    shadowColor: "shadow-amber-300/40"
  },
  {
    id: 8,
    name: "Furano",
    kanji: "富良野",
    num: "08",
    tagline: "Scented violet valleys",
    sub: "Hokkaido Lavender Fields",
    desc: "In mid-summer, Furano's rolling valleys erupt in sweet lavender. Fields of violet flowers drift like soft mist over the hills under Hokkaido's crystal-clear blue skies.",
    facts: {
      height: "230 m",
      location: "Hokkaido Island",
      bestTime: "July - Aug",
      famousFor: "Lavender Hills"
    },
    image: "https://images.unsplash.com/photo-1499591934245-40b55745b905?w=1600&q=80",
    emoji: "🪻",
    chibi: "👒🧺", // Farmer hat
    color: "from-purple-100 via-pink-50 to-blue-100",
    accent: "text-purple-500",
    bgAccent: "bg-purple-50",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-200/40"
  },
  {
    id: 9,
    name: "Osaka Castle",
    kanji: "大阪",
    num: "09",
    tagline: "Feudal fortresses & cherry blossoms",
    sub: "Osaka City Landmark",
    desc: "A massive sixteenth-century fortress rising over stone walls and deep water moats. The castle is surrounded by thousands of cherry trees that transform the grounds into a pink paradise every spring.",
    facts: {
      height: "55 m",
      location: "Kansai Region",
      bestTime: "Late March",
      famousFor: "Castle Keep"
    },
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1600&q=80",
    emoji: "🏯",
    chibi: "🍡🌸", // Eating dango
    color: "from-teal-100 via-emerald-50 to-rose-100",
    accent: "text-teal-600",
    bgAccent: "bg-teal-50",
    borderColor: "border-teal-200",
    shadowColor: "shadow-teal-200/40"
  },
  {
    id: 10,
    name: "Hiroshima Park",
    kanji: "広島",
    num: "10",
    tagline: "Quiet rivers & peace domes",
    sub: "Peace Memorial Sanctuary",
    desc: "A silent green sanctuary in the city center. Dedicated to hope and reconciliation, the park features quiet rivers, the reflective Flame of Peace, and the historic A-Bomb Dome.",
    facts: {
      height: "5 m",
      location: "Chugoku Region",
      bestTime: "Year-round",
      famousFor: "Genbaku Dome"
    },
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1600&q=80",
    emoji: "🕊️",
    chibi: "🪁🎒", // Paper crane child
    color: "from-cyan-100 via-sky-50 to-indigo-100",
    accent: "text-cyan-600",
    bgAccent: "bg-cyan-50",
    borderColor: "border-cyan-200",
    shadowColor: "shadow-cyan-200/40"
  }
];

export default function DestinationsGrid({ onExplorePlace }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="places" className="py-28 px-6 bg-[#fff7ed]/40 relative overflow-hidden select-none">
      {/* Decorative sakura branch at corner */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20 text-rose-300 text-6xl">
        🌸
      </div>

      {/* Floating Doraemon Mascot (Subtle, Top Right) */}
      <div 
        className="absolute top-8 right-12 w-20 h-20 opacity-30 hover:opacity-80 transition-opacity duration-300 pointer-events-auto cursor-pointer animate-float-slow hidden md:block"
        title="Doraemon flying with Bamboo-copter!"
        onMouseEnter={() => document.body.classList.add("hovering")}
        onMouseLeave={() => document.body.classList.remove("hovering")}
      >
        <img src="/doraemon.png" alt="Doraemon" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100/50 mb-3">
            <span>🌸</span>
            <span>Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 font-poppins tracking-tight mt-1">
            10 Beautiful Destinations
          </h2>
          <p className="text-gray-500 font-outfit mt-2 max-w-lg mx-auto text-sm sm:text-base font-medium">
            Explore the most breathtaking, dream-like places Japan has to offer.
          </p>
        </div>

        {/* 10 Tall Cards Grid (Autolayout wrapping) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
          {PLACES.map((place) => {
            const isHovered = hoveredId === place.id;
            return (
              <motion.div
                key={place.id}
                onMouseEnter={() => {
                  setHoveredId(place.id);
                  document.body.classList.add("hovering");
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  document.body.classList.remove("hovering");
                }}
                onClick={() => onExplorePlace(place.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-b ${
                  place.color
                } border-2 ${
                  isHovered ? `${place.borderColor} scale-102` : "border-transparent"
                } shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between`}
                style={{
                  height: isHovered ? "450px" : "410px",
                }}
                layout
              >
                {/* Background Image / Blur cover */}
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  {/* Subtle glass effect cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                </div>

                {/* Floating Kanji and Emoji */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-[10px] font-bold text-gray-700 shadow-sm uppercase font-outfit">
                  {place.emoji} {place.kanji}
                </div>

                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/70 backdrop-blur-md border border-white/50 flex items-center justify-center text-xs font-bold text-gray-700 shadow-sm font-outfit">
                  {place.num}
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between z-10">
                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-gray-800 font-poppins">
                      {place.name}
                    </h3>
                    <p className="text-gray-400 text-[11px] font-semibold font-outfit mt-0.5 uppercase tracking-wider font-medium">
                      {place.sub}
                    </p>
                    <p className="text-gray-500 text-xs font-medium font-outfit leading-relaxed mt-2 line-clamp-3">
                      {place.desc}
                    </p>
                  </div>

                  {/* Mascot / Chibi Drawing & Button */}
                  <div className="flex items-center justify-between mt-4">
                    {/* Waving Mascot Placeholder with Emojis */}
                    <div className="flex flex-col items-center select-none">
                      <span className="text-3xl filter drop-shadow-sm animate-bounce" style={{ animationDuration: "2s" }}>
                        {place.chibi.substring(0, 2)}
                      </span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-outfit">
                        Mascot
                      </span>
                    </div>

                    {/* Explore button */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-rose-500 text-white scale-110 rotate-45"
                          : "bg-white/80 text-gray-600 shadow-sm"
                      }`}
                    >
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => onExplorePlace(1)}
            className="px-8 py-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 select-none"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
          >
            <span>Explore All Places</span>
            <span>🌸</span>
          </button>
        </div>
      </div>
    </section>
  );
}
