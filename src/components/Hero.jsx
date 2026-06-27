import { useEffect, useState, useRef } from "react";

export default function Hero({ onStartJourney }) {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates to [-0.5, 0.5]
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setMousePos({ x, y });
  };

  // Reset parallax on mouse leave
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 select-none"
      style={{
        background: "linear-gradient(180deg, #bfe1ff 0%, #ffd6e0 60%, #fff7eb 100%)",
      }}
    >
      {/* 1. Deep Background: Sky Rays and Soft Sun */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
        }}
      >
        {/* Soft morning glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-20 blur-[120px]" />
      </div>

      {/* 2. Background Clouds (behind Mount Fuji) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out animate-cloud-move-slow"
        style={{
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 8}px)`,
        }}
      >
        <svg viewBox="0 0 1000 400" className="absolute top-[10%] w-[120%] left-[-10%] opacity-40 fill-white">
          <ellipse cx="200" cy="150" rx="120" ry="40" />
          <ellipse cx="800" cy="100" rx="140" ry="48" />
        </svg>
      </div>

      {/* 3. Mount Fuji & Background Mountains */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-end justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 12}px)`,
        }}
      >
        {/* SVG containing Mount Fuji, Lake Mirror, Pagoda and background hills */}
        <svg viewBox="0 0 1920 1080" className="w-full h-full object-cover origin-bottom scale-[1.08] translate-y-[2%]">
          {/* Distant Hills */}
          <path d="M 0 850 Q 300 700 700 800 T 1500 750 Q 1700 700 1920 850 L 1920 1080 L 0 1080 Z" fill="#b9d0ea" opacity="0.6" />
          
          {/* Mount Fuji */}
          <g>
            {/* Base */}
            <path d="M 450 850 L 960 220 L 1470 850 Z" fill="url(#fujiGradient)" />
            {/* Snowcap */}
            <path d="M 830 380 Q 960 410 1090 380 L 960 220 Z" fill="#ffffff" />
            <path d="M 830 380 L 850 430 L 890 410 L 910 460 L 950 420 L 970 470 L 1000 420 L 1030 450 L 1060 400 L 1090 380 Z" fill="#ffffff" />
            {/* Soft pink shade on Snowcap */}
            <path d="M 960 220 L 1090 380 Q 1020 395 960 380 Z" fill="#ffdce5" opacity="0.4" />
          </g>

          {/* Traditional Pagoda on Right (Detailed vector) */}
          <g transform="translate(1420, 280) scale(0.95)" className="opacity-90">
            {/* Ground Base */}
            <rect x="180" y="550" width="160" height="20" rx="4" fill="#695668" />
            
            {/* Ground floor */}
            <rect x="200" y="470" width="120" height="80" fill="#ae485a" />
            <rect x="235" y="470" width="50" height="80" fill="#2d2031" /> {/* Door */}
            
            {/* First Roof */}
            <path d="M 160 470 Q 260 430 360 470 L 330 460 Q 260 430 190 460 Z" fill="#2d2031" />
            
            {/* First floor */}
            <rect x="210" y="380" width="100" height="80" fill="#c35166" />
            <rect x="245" y="380" width="30" height="80" fill="#2d2031" />
            
            {/* Second Roof */}
            <path d="M 170 380 Q 260 345 350 380 L 320 370 Q 260 345 200 370 Z" fill="#2d2031" />
            
            {/* Second floor */}
            <rect x="220" y="290" width="80" height="90" fill="#ae485a" />
            
            {/* Third Roof */}
            <path d="M 180 290 Q 260 260 340 290 L 310 280 Q 260 260 210 280 Z" fill="#2d2031" />
            
            {/* Pagoda Finial (Spire) */}
            <line x1="260" y1="280" x2="260" y2="150" stroke="#2d2031" strokeWidth="6" strokeLinecap="round" />
            <circle cx="260" cy="180" r="12" fill="#d4af37" />
            <circle cx="260" cy="210" r="9" fill="#d4af37" />
            <circle cx="260" cy="235" r="7" fill="#d4af37" />
            
            {/* Hanging Lanterns */}
            <circle cx="185" cy="480" r="5" fill="#fba8bc" />
            <circle cx="335" cy="480" r="5" fill="#fba8bc" />
            <circle cx="195" cy="390" r="5" fill="#fba8bc" />
            <circle cx="325" cy="390" r="5" fill="#fba8bc" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="fujiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4f6e9c" />
              <stop offset="60%" stopColor="#8d94ba" />
              <stop offset="100%" stopColor="#cca1b9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. Midground: Lake Reflection Overlay & Trees */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out flex items-end justify-center"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 18}px)`,
        }}
      >
        {/* Mirror Lake Reflection Gradient */}
        <div className="absolute bottom-0 w-full h-[35vh] bg-gradient-to-t from-[#ffd9e5]/80 via-[#c3dcff]/50 to-transparent opacity-90 blur-sm" />
        
        {/* Soft cherry blossom tree vectors on the left & right bank */}
        <svg viewBox="0 0 1920 1080" className="w-full h-full object-cover scale-[1.05] translate-y-[2%]">
          {/* Left Bank Hills & Sakura Trees */}
          <path d="M 0 920 Q 200 880 400 950 L 400 1080 L 0 1080 Z" fill="#99b2d4" opacity="0.75" />
          <circle cx="150" cy="880" r="80" fill="#fca5a5" opacity="0.7" />
          <circle cx="240" cy="900" r="60" fill="#f87171" opacity="0.6" />
          <circle cx="80" cy="920" r="50" fill="#fba8bc" opacity="0.8" />
          
          {/* Right Bank Hills & Sakura Trees */}
          <path d="M 1500 950 Q 1700 900 1920 920 L 1920 1080 L 1500 1080 Z" fill="#99b2d4" opacity="0.75" />
          <circle cx="1650" cy="900" r="90" fill="#fca5a5" opacity="0.7" />
          <circle cx="1780" cy="890" r="70" fill="#f87171" opacity="0.6" />
          <circle cx="1580" cy="920" r="60" fill="#fba8bc" opacity="0.8" />

          {/* Flying birds vector */}
          <path d="M 300 250 Q 305 240 310 250 Q 315 240 320 250" stroke="#6b7280" strokeWidth="2.5" fill="none" opacity="0.5" />
          <path d="M 340 230 Q 345 220 350 230 Q 355 220 360 230" stroke="#6b7280" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M 280 270 Q 285 260 290 270 Q 295 260 300 270" stroke="#6b7280" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* 5. Foreground: Traditional Wooden Railing, Chibi Girl & Waving Mascot */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-end justify-between transition-transform duration-700 ease-out z-20"
        style={{
          transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 22}px)`,
        }}
      >
        {/* Left Side Social Bar with Inline Custom SVGs */}
        <div className="absolute left-6 bottom-[25vh] hidden md:flex flex-col gap-5 pointer-events-auto z-40">
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 hover:bg-rose-500 text-gray-600 hover:text-white shadow-md border border-rose-100/50 hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 hover:bg-rose-500 text-gray-600 hover:text-white shadow-md border border-rose-100/50 hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 hover:bg-rose-500 text-gray-600 hover:text-white shadow-md border border-rose-100/50 hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500 text-gray-600 hover:text-white shadow-md border border-rose-100/50 hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* Pikachu Mascot (Bottom Left, Subtle, peaking above railing) */}
        <div 
          className="absolute left-6 bottom-[8vh] w-14 h-16 opacity-30 hover:opacity-85 transition-opacity duration-300 pointer-events-auto cursor-pointer animate-float z-30 hidden md:block"
          title="Pikachu greets you!"
          onMouseEnter={() => document.body.classList.add("hovering")}
          onMouseLeave={() => document.body.classList.remove("hovering")}
        >
          <img src="/pikachu.png" alt="Pikachu" className="w-full h-full object-contain" />
        </div>

        {/* The Wooden bridge/fence at bottom foreground */}
        <div className="absolute bottom-0 w-full h-[8vh] flex flex-col justify-end pointer-events-auto">
          {/* Woven Wooden Posts */}
          <div className="w-full flex items-end justify-around px-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-4 h-16 bg-[#51433f] border-t-2 border-r-2 border-[#76635d] rounded-t-sm shadow-md" />
            ))}
          </div>
          {/* Railing beam */}
          <div className="w-full h-4 bg-[#63534d] border-b border-[#3c312e] shadow-lg" />
        </div>

        {/* Anime Kimono Girl and Waving Lucky Cat Mascot (Bottom Right) */}
        <div className="absolute right-[4%] bottom-[6vh] flex items-end gap-3 z-30 pointer-events-auto">
          {/* 1. Lucky Cat Mascot */}
          <div className="w-16 h-20 relative select-none animate-float-fast flex flex-col justify-end items-center drop-shadow-md">
            {/* White Body */}
            <div className="w-12 h-14 bg-white border border-gray-100 rounded-full flex flex-col justify-between p-1 items-center relative">
              {/* Ears */}
              <div className="absolute -top-1 left-1 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-rose-300 rounded-tl-xs" />
              </div>
              <div className="absolute -top-1 right-1 w-3 h-3 bg-white border-t border-r border-gray-100 -rotate-45 rounded-tr-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-rose-300 rounded-tr-xs" />
              </div>
              {/* Face */}
              <div className="flex gap-3 mt-1.5">
                <div className="w-1 h-1 bg-black rounded-full" />
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
              <div className="w-1.5 h-1 bg-pink-400 rounded-full -mt-0.5" />
              <div className="w-2.5 h-1 bg-[#d4af37] rounded-full border border-gray-200 mt-0.5" /> {/* Bell */}
              
              {/* Gold coin (Hold in lap) */}
              <div className="w-6 h-6 rounded-full bg-[#fcd34d] border border-amber-400 flex items-center justify-center text-[8px] font-bold text-amber-800 -mb-1 shadow-inner select-none font-gothicJp">
                日本
              </div>
            </div>
            {/* Waving Paw */}
            <div 
              className="absolute right-0 top-3 w-4 h-6 bg-white border border-gray-100 rounded-full origin-bottom" 
              style={{
                animation: "windSway 2.5s ease-in-out infinite"
              }}
            />
          </div>

          {/* 2. Anime Kimono Girl (Chibi Artwork Style) */}
          <div className="w-28 md:w-36 h-36 md:h-44 relative animate-float-slow select-none drop-shadow-lg flex flex-col items-center">
            {/* Hair back */}
            <div className="absolute top-1 w-24 md:w-28 h-20 bg-[#4e3629] rounded-t-full rounded-b-2xl" />
            
            {/* Kimono Collar/Body */}
            <div className="w-16 md:w-20 h-24 bg-[#fba8bc] border-t-2 border-rose-200 rounded-t-3xl rounded-b-lg flex flex-col items-center justify-between p-1 mt-[48px] md:mt-[60px] relative">
              {/* Red Sash/Obi */}
              <div className="w-full h-5 bg-[#ec4899] border-t border-b border-rose-400 mt-4 flex items-center justify-center">
                <div className="w-6 h-3 bg-yellow-300 rounded-sm" />
              </div>
              {/* Sleeve Left */}
              <div className="absolute -left-3 top-2 w-5 h-16 bg-[#fba8bc] rounded-xl rotate-[15deg] origin-top border-l border-rose-300" />
              {/* Sleeve Right (Waving) */}
              <div className="absolute -right-3 top-1 w-5 h-16 bg-[#fba8bc] rounded-xl -rotate-[35deg] origin-bottom-left border-r border-rose-300" />
            </div>

            {/* Chibi Head */}
            <div className="absolute top-2 w-16 md:w-20 h-16 md:h-20 bg-[#ffe8db] rounded-full border border-orange-100 flex flex-col items-center p-1">
              {/* Hair bangs */}
              <div className="absolute -top-1 left-0 right-0 h-7 bg-[#4e3629] rounded-t-full rounded-b-lg" />
              {/* Large anime eyes */}
              <div className="flex justify-between w-10 mt-6 z-10">
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3 bg-[#3a271d] rounded-full flex justify-center items-start pt-0.5">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3 bg-[#3a271d] rounded-full flex justify-center items-start pt-0.5">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              {/* Cheeks blush */}
              <div className="flex justify-between w-12 -mt-1">
                <div className="w-2.5 h-1 bg-rose-300 rounded-full opacity-60 blur-xs" />
                <div className="w-2.5 h-1 bg-rose-300 rounded-full opacity-60 blur-xs" />
              </div>
              {/* Smile */}
              <div className="w-2.5 h-1.5 border-b-2 border-rose-600 rounded-full mt-0.5" />
            </div>

            {/* Flowers in hair */}
            <div className="absolute top-3 right-2 text-rose-400 text-lg z-20 animate-spin" style={{ animationDuration: '8s' }}>🌸</div>
            <div className="absolute top-5 left-1 text-yellow-300 text-sm z-20">✿</div>
          </div>
        </div>
      </div>

      {/* 6. Hero Text Overlay / Cinematic Content (Top/Center) */}
      <div 
        className={`relative z-30 text-center px-6 max-w-4xl mx-auto flex flex-col items-center transition-all duration-[1.2s] ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Animated Badge */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold mb-6 shadow-sm border border-rose-200/50 cursor-pointer hover:scale-105 transition-transform"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "#db2777"
          }}
          onMouseEnter={() => document.body.classList.add("hovering")}
          onMouseLeave={() => document.body.classList.remove("hovering")}
        >
          <span>🌸</span>
          <span className="font-outfit uppercase tracking-widest text-[10px] sm:text-xs">
            Discover the Ten Most Beautiful Places in Japan
          </span>
          <span>🌸</span>
        </div>

        {/* Large Cinematic Title */}
        <h1
          className="leading-none mb-4 font-bold select-none text-center"
          style={{
            fontSize: "clamp(46px, 9.5vw, 110px)",
            background: "linear-gradient(135deg, #be185d 0%, #db2777 30%, #7c3aed 70%, #2563eb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.03em"
          }}
        >
          <span className="font-poppins block font-extrabold tracking-tight">Journey</span>
          <span className="font-serif-jp italic font-light text-[0.62em] tracking-normal text-rose-500 block leading-[0.7] py-2">
            Through
          </span>
          <span className="font-poppins block font-extrabold tracking-tight">Japan</span>
        </h1>

        {/* Japanese Subtitle overlay */}
        <div className="font-serif-jp text-rose-400 font-light text-2xl tracking-widest mb-4">
          日本の美しい旅
        </div>

        {/* Description paragraph */}
        <p className="text-gray-600/90 text-sm sm:text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed font-outfit font-medium">
          Enter a peaceful, dream-like animated world. Explore magical landscapes, 
          centuries of culture, and ten unforgettable destinations.
        </p>

        {/* Buttons and CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* Main CTA */}
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-base shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition-all select-none hover:shadow-rose-400/30"
            style={{
              background: "linear-gradient(135deg, #f43f5e, #ec4899, #c084fc)",
              boxShadow: "0 10px 30px rgba(244, 63, 94, 0.35)",
            }}
            onMouseEnter={() => {
              document.body.classList.add("hovering");
            }}
            onMouseLeave={() => {
              document.body.classList.remove("hovering");
            }}
          >
            <span>Start Your Journey</span>
            <span className="text-lg">🌸</span>
          </button>

          {/* Secondary Video Button */}
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-rose-600 bg-white/80 hover:bg-white backdrop-blur border border-rose-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            onMouseEnter={() => document.body.classList.add("hovering")}
            onMouseLeave={() => document.body.classList.remove("hovering")}
          >
            <span>Explore Places</span>
            <span>🎏</span>
          </button>
        </div>

        {/* Scroll indicator mouse */}
        <div className="mt-14 flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-outfit">
            Scroll to explore
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-rose-300 flex justify-center p-1">
            <div className="w-1 h-2 bg-rose-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
