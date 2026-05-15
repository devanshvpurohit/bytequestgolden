import { motion } from "framer-motion";
import { EventBus } from "../game/EventBus";

interface RegistrationFormProps {
  isCredits?: boolean;
}

/* ─── Main Component ─── */
export const RegistrationForm = ({ isCredits }: RegistrationFormProps) => {
  const REGISTRATION_URL = "";

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
              The Code Quest
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
              ₹1,20,000
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
              Registration: ₹799 per team
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
    <div className="flex flex-col gap-6 py-4">
      <div className="bg-black/40 border-2 border-hackathon-primary/30 p-6 rounded-sm relative overflow-hidden">
        {/* Decorative scanline effect */}
        <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />

        <h3 className="text-2xl text-hackathon-primary mb-4 glow-text">
          SYSTEM READY
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed mb-6">
          The Code Quest: Dungeon of Binary is a 30-hour immersive hackathon
          hosted at IARE, Hyderabad. Join hundreds of student innovators for an
          unforgettable retro-themed coding adventure. Competing for a prize
          pool of{" "}
          <span className="text-hackathon-accent font-bold">₹1,20,000</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border-l-2 border-hackathon-secondary pl-3">
            <p className="text-[10px] text-hackathon-secondary uppercase tracking-widest">
              Date
            </p>
            <p className="text-sm text-white">July 17-18, 2026</p>
          </div>
          <div className="border-l-2 border-hackathon-accent pl-3">
            <p className="text-[10px] text-hackathon-accent uppercase tracking-widest">
              Fee
            </p>
            <p className="text-sm text-white">₹799 per Team</p>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="pixel-btn w-full bg-hackathon-primary text-black py-4 text-sm flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(74,222,128,0.2)]"
        >
          <span>🔗</span> REGISTER VIA OFFICIAL PORTAL
        </button>
      </div>

      <div className="text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          Redirecting to iare.ac.in
        </p>
      </div>
    </div>
  );
};
