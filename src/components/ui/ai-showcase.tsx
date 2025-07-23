import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { showcaseItems } from "./ai-showcase/data";
import { ShowcaseCard } from "./ai-showcase/ShowcaseCard";

export function AIShowcase() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [bufferingId, setBufferingId] = useState<string | null>(null); // NEW: Buffering state
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

  const handlePlayPause = (id: string, audioUrl?: string) => {
    if (!audioUrl) {
      console.log("No audio URL provided");
      return;
    }

    console.log("Attempting to play audio:", audioUrl);
    const audio = audioRefs.current[id];

    if (playingId === id) {
      // Pause current audio
      if (audio) {
        audio.pause();
        console.log("Audio paused");
      }
      setPlayingId(null);
      setBufferingId(null); // Reset buffering
    } else {
      // Stop any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
        audioRefs.current[playingId].currentTime = 0;
      }

      // Create or get audio element
      if (!audio) {
        console.log("Creating new audio element for:", audioUrl);
        const newAudio = new Audio(audioUrl);
        newAudio.addEventListener("ended", () => {
          console.log("Audio ended");
          setPlayingId(null);
          setBufferingId(null);
        });
        newAudio.addEventListener("error", (e) => {
          console.error("Audio error:", e);
          setPlayingId(null);
          setBufferingId(null);
        });
        newAudio.addEventListener("loadstart", () => {
          console.log("Audio load started");
          setBufferingId(id);
        });
        newAudio.addEventListener("waiting", () => {
          console.log("Audio buffering...");
          setBufferingId(id);
        });
        newAudio.addEventListener("canplay", () => {
          console.log("Audio can play");
          setBufferingId(null);
        });
        newAudio.addEventListener("playing", () => {
          setBufferingId(null);
        });
        audioRefs.current[id] = newAudio;
      } else {
        // Attach buffering listeners if not already
        const a = audioRefs.current[id];
        a.onwaiting = () => setBufferingId(id);
        a.oncanplay = () => setBufferingId(null);
        a.onplaying = () => setBufferingId(null);
        a.onloadstart = () => setBufferingId(id);
      }

      // Play new audio
      console.log("Attempting to play audio...");
      audioRefs.current[id]
        .play()
        .then(() => {
          console.log("Audio playback started successfully");
          setPlayingId(id);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
          setPlayingId(null);
          setBufferingId(null);
        });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/30 to-[#6233EA]/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#00E5D6]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#E536C1]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Volume2 className="h-4 w-4 text-[#00E5D6]" />
            <span
              className="text-sm font-medium text-white/80"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              🎯 AI Agent Showcase
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-[#00E5D6]"
            style={{
              fontFamily: "Audiowide, sans-serif",
            }}
          >
            See Our AI Agents In Action
          </h2>

          <p
            className="text-xl text-[#D3D4FF] max-w-3xl mx-auto"
            style={{
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Listen to real examples of our AI agents handling calls across
            different industries. Each agent is custom-built for specific
            business needs.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard
              key={item.id}
              item={item}
              index={index}
              isPlaying={playingId === item.id}
              isBuffering={bufferingId === item.id} // NEW PROP
              onPlayPause={handlePlayPause}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
