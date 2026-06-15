import { motion } from "framer-motion";
import { EventBus } from "../game/EventBus";

interface RegistrationFormProps {
  isCredits?: boolean;
}

/* ─── Main Component ─── */
export const RegistrationForm = ({ isCredits }: RegistrationFormProps) => {
  const REGISTRATION_URL = "https://iare.ac.in";

  const handleRegister = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  /* ──────── Credits variant ──────── */
  if (isCredits) {
    return (
      <div className="relative overflow-hidden h-[400px] flex flex-col items-center">
        {/* Scrolling Hackathon Details */}
        <motion.div
          initial={{ y: 400 }}
          animate={{ y: -800 }}
          transition={{ duration: 25, ease: "linear" }}
          className="flex flex-col items-center gap-12 text-center pb-20"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl text-hackathon-primary glow-text uppercase">
              Byte Quest
            </h3>
            <p className="text-sm text-hackathon-accent uppercase tracking-widest">
              Dungeon of Binary
            </p>
            <div className="gradient-underline w-32 mx-auto mt-2 rounded-full" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Edition
            </p>
            <p className="text-sm">MONSOON HACKATHON 2026</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Duration
            </p>
            <p className="text-sm text-white">
              30 HOURS OF CONTINUOUS INNOVATION
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Venue
            </p>
            <p className="text-sm text-white">IARE, HYDERABAD</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Prize Pool
            </p>
            <p className="text-lg text-hackathon-primary font-bold">
              ₹60,000
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Hosted By
            </p>
            <p className="text-sm text-white">
              INSTITUTE OF AERONAUTICAL ENGINEERING
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hackathon-secondary text-[10px] tracking-widest uppercase">
              Contact Organizers
            </p>
            <p className="text-[10px] text-white">DEVANSH: 8074237354</p>
            <p className="text-[10px] text-white">ASHRITH: 93909 39091</p>
          </div>

          <div className="mt-12">
            <p className="text-xs text-hackathon-primary glow-text uppercase">
              ★ QUEST COMPLETE ★
            </p>
          </div>
        </motion.div>

        {/* Fixed Registration Action at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-hackathon-surface/95 backdrop-blur-md p-6 border-t-4 border-hackathon-primary shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-10 text-center"
        >
          <p className="text-[10px] text-gray-300 leading-relaxed mb-4">
            The dungeon doors are open July 17-18 at IARE. <br />
            <span className="text-hackathon-accent font-bold uppercase">
              Registration: ₹350 per head
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={handleRegister}
              className="pixel-btn bg-hackathon-primary text-black py-3 px-8 text-xs flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(74,222,128,0.3)]"
            >
              🚀 REGISTER NOW
            </button>
            <button
              onClick={() => EventBus.emit("show-website")}
              className="pixel-btn bg-hackathon-secondary text-black py-3 px-8 text-xs flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              ⊳ VIEW DETAILS
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ──────── Standard variant (used in Website.tsx) ──────── */
  return (
    <div className="flex flex-col gap-6 py-4 max-w-2xl mx-auto w-full">
      <div className="pixel-card border-hackathon-primary/40 bg-black/40 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-hackathon-primary/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-hackathon-primary/20 transition-colors" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-hackathon-primary/20 flex items-center justify-center border-2 border-hackathon-primary/40">
            <span className="text-2xl animate-pulse">⚡</span>
          </div>
          <h3 className="text-xl md:text-3xl text-hackathon-primary glow-text uppercase font-bold tracking-tighter">
            SYSTEM READY
          </h3>
        </div>

        <p className="text-[10px] md:text-sm text-gray-300 leading-loose mb-8 font-orbitron">
          Byte Quest: Dungeon of Binary is a 30-hour immersive quest
          hosted at IARE, Hyderabad. Join hundreds of student innovators for an
          unforgettable retro-themed coding adventure. Competing for a prize
          pool of{" "}
          <span className="text-hackathon-accent font-bold glow-purple">₹60,000</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="border-l-4 border-hackathon-secondary pl-4 py-1 group/item hover:bg-white/5 transition-colors">
            <p className="text-[8px] md:text-[10px] text-hackathon-secondary uppercase tracking-[0.2em] mb-1 font-bold">
              Date
            </p>
            <p className="text-xs md:text-base text-white font-orbitron font-bold">JULY 17-18, 2026</p>
          </div>
          <div className="border-l-4 border-hackathon-accent pl-4 py-1 group/item hover:bg-white/5 transition-colors">
            <p className="text-[8px] md:text-[10px] text-hackathon-accent uppercase tracking-[0.2em] mb-1 font-bold">
              Fee
            </p>
            <p className="text-xs md:text-base text-white font-orbitron font-bold">₹350 PER HEAD</p>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="pixel-btn w-full bg-hackathon-primary text-black py-4 md:py-5 text-[10px] md:text-xs flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(74,222,128,0.25)] pulse-glow"
        >
          <span className="text-xl">⚔</span> REGISTER VIA OFFICIAL PORTAL
        </button>
      </div>

      <div className="text-center">
        <p className="text-[8px] md:text-[10px] text-gray-600 uppercase tracking-[0.3em] font-orbitron animate-pulse">
          Secure redirection to iare.ac.in
        </p>
      </div>
    </div>
  );
};
