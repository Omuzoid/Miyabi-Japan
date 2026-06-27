import { useState } from "react";
import { Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden select-none bg-gradient-to-b from-[#100c2a] to-[#08051a] text-white pt-24 pb-12">
      
      {/* 1. Hanging Sakura branches (Background Vector elements) */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 text-rose-400 text-7xl flex items-start justify-end p-6">
        🌸
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20 text-rose-400 text-7xl flex items-start justify-start p-6">
        🌸
      </div>

      {/* 2. Floating lanterns (Backdrop) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[20, 45, 75, 90].map((x, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-lantern-float"
            style={{
              left: `${x}%`,
              top: `${15 + i * 18}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`
            }}
          >
            🏮
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Quote and Shiba Inu (Grid span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
                <span>🏮</span>
                <span>Stay Connected</span>
              </div>

              {/* Main quote */}
              <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight font-poppins">
                Japan is not just a place,<br />
                <span className="italic font-serifJp text-rose-300 font-light">it's a feeling.</span>
              </h3>
              <p className="text-gray-400 text-sm mt-4 max-w-sm leading-relaxed font-outfit">
                Come for the views, stay for the soul. Let the serenity of Japan inspire your everyday life.
              </p>
            </div>

            {/* Shiba Inu mascot & Social icons */}
            <div className="mt-10 flex items-center gap-4">
              
              {/* Cute Shiba Inu illustration (CSS vector mockup) */}
              <div className="w-16 h-16 relative flex-shrink-0 animate-float bg-amber-500 rounded-2xl p-1 border-2 border-amber-600 flex flex-col justify-between items-center shadow-md">
                {/* Shiba face details */}
                <div className="w-full flex justify-between px-1">
                  {/* Ears */}
                  <div className="w-3.5 h-3.5 bg-amber-600 rounded-t-full rotate-[-15deg] -mt-2" />
                  <div className="w-3.5 h-3.5 bg-amber-600 rounded-t-full rotate-[15deg] -mt-2" />
                </div>
                {/* White cheeks */}
                <div className="w-10 h-7 bg-white rounded-full flex flex-col justify-center items-center -mt-1 relative border border-amber-100 shadow-sm">
                  {/* Face details */}
                  <div className="flex gap-2.5">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                  <div className="w-1.5 h-1 bg-black rounded-full mt-0.5" />
                </div>
                <span className="text-[9px] font-bold text-white uppercase tracking-wider font-outfit mt-0.5">
                  🐕 Shiba
                </span>
              </div>

              {/* Social icons with custom SVGs */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500 hover:text-white transition-all duration-300 border border-white/10"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500 hover:text-white transition-all duration-300 border border-white/10"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500 hover:text-white transition-all duration-300 border border-white/10"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500 hover:text-white transition-all duration-300 border border-white/10"
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

            </div>
          </div>

          {/* Right Column: Newsletter Subscription (Grid span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div
              className="rounded-3xl p-8 border border-white/15"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <h4 className="text-xl font-bold font-poppins">Let's Stay in Touch</h4>
              <p className="text-gray-400 text-xs mt-1.5 font-outfit font-medium">
                Get travel tips, guides & updates straight to your inbox.
              </p>

              {subscribed ? (
                <div className="mt-6 p-4 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-center animate-fade-in">
                  <span className="text-2xl block mb-1">🌸</span>
                  <div className="text-sm font-bold text-rose-300 font-poppins">Arigatou Gozaimasu!</div>
                  <p className="text-[11px] text-gray-300 font-outfit mt-1">
                    Check your inbox soon for your virtual traveler stamps!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 placeholder-white/30 text-white text-sm focus:outline-none focus:border-rose-400 focus:bg-white/10 transition-all font-outfit"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-bold text-white text-xs bg-gradient-to-r from-rose-500 to-purple-500 hover:shadow-lg hover:shadow-rose-500/20 transition-all flex items-center justify-center gap-1.5 select-none"
                    onMouseEnter={() => document.body.classList.add("hovering")}
                    onMouseLeave={() => document.body.classList.remove("hovering")}
                  >
                    <span>Subscribe</span>
                    <Send size={12} />
                  </button>
                </form>
              )}

              {/* Sweet Dango Skewer Icon illustration at bottom right of card */}
              <div className="mt-4 flex justify-end gap-2 items-center text-[10px] text-gray-500 font-outfit">
                <span>Shiba approves 🐾</span>
                <div className="flex flex-col items-center">
                  {/* Skewer Dango */}
                  <div className="w-5 h-10 flex flex-col items-center relative select-none">
                    <div className="w-4.5 h-4.5 rounded-full bg-rose-300 shadow-sm" />
                    <div className="w-4.5 h-4.5 rounded-full bg-white shadow-sm -mt-0.5" />
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-300 shadow-sm -mt-0.5" />
                    <div className="w-0.5 h-6 bg-amber-700/80 -mt-1 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Wave graphics & copyright (Footer Bottom) */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          {/* Wave SVG illustration */}
          <div className="w-24 h-6 text-gray-700 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 20" className="w-full h-full fill-current">
              <path d="M 0 10 Q 25 5, 50 10 T 100 10 L 100 20 L 0 20 Z" />
            </svg>
          </div>
          
          <div className="text-center sm:text-right font-outfit">
            &copy; 2026 Journey Through Japan · Made with 🌸 and 抹茶
          </div>
        </div>

      </div>
    </footer>
  );
}
