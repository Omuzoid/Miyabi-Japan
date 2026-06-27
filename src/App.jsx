import { useState, useEffect, useRef, useMemo } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationsGrid from "./components/DestinationsGrid";
import DestinationDetailSlider from "./components/DestinationDetailSlider";
import ExperienceAndMap from "./components/ExperienceAndMap";
import JourneyPassport from "./components/JourneyPassport";
import Footer from "./components/Footer";

// Sound Synthesizer using Web Audio API for offline, 100% reliable, zero-loading Japanese Wind Chimes!
class WindChimeSynth {
  constructor() {
    this.ctx = null;
    this.timer = null;
    this.scale = [220.00, 246.94, 277.18, 329.63, 369.99, 440.00, 493.88, 554.37, 659.25, 739.99]; // Japanese Pentatonic Scale (A major / Insen/Hirajoshi hybrid)
  }

  start() {
    if (this.ctx) return;
    
    // Initialize Audio Context on user gesture
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContextClass();
    
    const playChime = () => {
      if (!this.ctx || this.ctx.state === "suspended") return;
      
      const now = this.ctx.currentTime;
      // Play 1-2 random notes from scale
      const numNotes = Math.floor(Math.random() * 2) + 1;
      
      for (let i = 0; i < numNotes; i++) {
        const noteFreq = this.scale[Math.floor(Math.random() * this.scale.length)];
        const delay = i * 0.15; // slightly arpeggiated
        
        // Osc 1 (Sine wave for fundamental warm tone)
        const osc1 = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(noteFreq, now + delay);
        
        // Osc 2 (Triangle wave with high frequency offset for metal chime ring)
        const osc2 = this.ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(noteFreq * 2 + 3, now + delay);
        
        // Lowpass filter to keep it soft
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1200, now + delay);

        // Envelope: slow attack, long decay
        gainNode.gain.setValueAtTime(0.0001, now + delay);
        gainNode.gain.linearRampToValueAtTime(0.08, now + delay + 0.05); // low volume
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + delay + 3.0); // 3 second ring
        
        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(filter);
        filter.connect(this.ctx.destination);
        
        osc1.start(now + delay);
        osc2.start(now + delay);
        osc1.stop(now + delay + 3.0);
        osc2.stop(now + delay + 3.0);
      }

      // Schedule next play at random intervals
      const nextTime = 4000 + Math.random() * 5000; // every 4-9 seconds
      this.timer = setTimeout(playChime, nextTime);
    };

    // Play first chime
    playChime();
  }

  stop() {
    if (this.timer) clearTimeout(this.timer);
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sliderId, setSliderId] = useState(1);
  const [soundOn, setSoundOn] = useState(false);
  
  // Ref to the synth
  const synthRef = useRef(null);
  const lenisRef = useRef(null);

  // Mouse position states for cursor
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorFollowerPos, setCursorFollowerPos] = useState({ x: -100, y: -100 });

  // Stable Floating Sakura Petals using useMemo to prevent unmounting and jittering on mouse move!
  const petals = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 95}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${16 + Math.random() * 12}s`, // Drift slowly (16s to 28s)
      scale: 0.4 + Math.random() * 0.7
    }));
  }, []);

  // Handle Sound Toggle
  const toggleSound = () => {
    if (!synthRef.current) {
      synthRef.current = new WindChimeSynth();
    }
    
    if (soundOn) {
      synthRef.current.stop();
    } else {
      synthRef.current.start();
    }
    setSoundOn(!soundOn);
  };

  // Track Mouse movement for Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });
      
      // Delay follower cursor slightly
      setTimeout(() => {
        setCursorFollowerPos({ x: clientX, y: clientY });
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium slide scroll
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll spy to update Navbar active section
  useEffect(() => {
    const sections = ["home", "places", "details", "experience", "passport", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // triggers when section dominates screen viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll callback when navbar is clicked
  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -20,
        immediate: false
      });
    }
  };

  // Explore specific place from card grid
  const handleExplorePlace = (id) => {
    setSliderId(id);
    handleNavClick("details");
  };

  // Clean sound synth on unmount
  useEffect(() => {
    return () => {
      if (synthRef.current) synthRef.current.stop();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Custom Smooth Circular Cursor */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />
      <div
        className="custom-cursor-follower hidden md:block"
        style={{
          left: `${cursorFollowerPos.x}px`,
          top: `${cursorFollowerPos.y}px`
        }}
      />

      {/* 2. Floating Sakura Petals Layer (Full Screen Background) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute text-lg select-none pointer-events-none animate-sakura-fall"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              transform: `scale(${petal.scale})`,
              opacity: 0.6
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* 3. Floating Sound Manager (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
        <button
          onClick={toggleSound}
          className={`glass-panel px-4 py-3 rounded-full flex items-center gap-2 border shadow-lg hover:scale-105 transition-all select-none ${
            soundOn 
              ? "bg-rose-50 border-rose-200 text-rose-500" 
              : "bg-white/80 border-rose-100 text-gray-500 hover:text-rose-500"
          }`}
          onMouseEnter={() => document.body.classList.add("hovering")}
          onMouseLeave={() => document.body.classList.remove("hovering")}
        >
          <span className="text-base">🎐</span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest font-outfit">
            {soundOn ? "Chimes On" : "Chimes Muted"}
          </span>
          {soundOn && (
            <div className="flex gap-0.5 items-end h-3 select-none">
              <span className="w-0.5 h-2 bg-rose-400 rounded-full animate-pulse" />
              <span className="w-0.5 h-3 bg-rose-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
              <span className="w-0.5 h-1 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
          )}
        </button>
      </div>

      {/* 4. Global Sticky Navbar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* 5. Website Sections */}
      <main>
        <div id="home">
          <Hero onStartJourney={() => handleNavClick("places")} />
        </div>
        
        <div id="places">
          <DestinationsGrid onExplorePlace={handleExplorePlace} />
        </div>

        <div id="details">
          <DestinationDetailSlider initialId={sliderId} onExploreMore={(id) => handleNavClick("passport")} />
        </div>

        <div id="experience">
          <ExperienceAndMap />
        </div>

        <div id="passport">
          <JourneyPassport />
        </div>
      </main>

      {/* Global Footer & Contact */}
      <Footer />
    </div>
  );
}
