import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  Phone,
  MessageSquare,
  HeadphonesIcon,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShowcaseItem } from "./types";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
  isPlaying: boolean;
  isBuffering?: boolean; // NEW PROP
  onPlayPause: (id: string, audioUrl?: string) => void;
}

const typeIcons = {
  inbound: Phone,
  outbound: MessageSquare,
  support: HeadphonesIcon,
  "follow-up": AlertTriangle,
};

const typeColors = {
  inbound: "from-[#00E5D6] to-[#6233EA]",
  outbound: "from-[#E536C1] to-[#FEDD4D]",
  support: "from-[#6233EA] to-[#00E5D6]",
  "follow-up": "from-[#FEDD4D] to-[#E536C1]",
};

// Add CSS for loader-circle spinner
const loaderStyle = `
  .loader-circle {
    border: 3px solid #FEDD4D33;
    border-top: 3px solid #FEDD4D;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    background: transparent;
    pointer-events: none;
  }
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export function ShowcaseCard({
  item,
  index,
  isPlaying,
  isBuffering,
  onPlayPause,
}: ShowcaseCardProps) {
  const IconComponent = typeIcons[item.type];

  return (
    <>
      <style>{loaderStyle}</style>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="bg-[#20215A]/30 border-[#00E5D6]/30 backdrop-blur-sm hover:border-[#00E5D6]/50 transition-all duration-300 overflow-hidden group h-full flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${
                  typeColors[item.type]
                } bg-opacity-20`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              {/* Play Button with Click to Play Indicator */}
              <div className="flex flex-col items-center gap-2 relative">
                {/* Circular Loader Overlay */}
                {isBuffering && <span className="loader-circle"></span>}
                <Button
                  onClick={() => onPlayPause(item.id, item.audioUrl)}
                  size="sm"
                  className={`rounded-full w-12 h-12 p-0 transition-all duration-300 ${
                    isPlaying
                      ? "bg-[#E536C1] hover:bg-[#E536C1]/90 scale-110"
                      : "bg-[#00E5D6] hover:bg-[#00E5D6]/90 hover:scale-110"
                  } ${isBuffering ? "opacity-60 pointer-events-none" : ""}`}
                  disabled={isBuffering}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-[#0D0D0D]" />
                  ) : (
                    <Play className="w-5 h-5 text-[#0D0D0D] ml-0.5" />
                  )}
                </Button>
                {!isPlaying && (
                  <motion.div
                    className="text-[#FEDD4D] text-xs font-semibold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                    }}
                  >
                    Click to Play
                  </motion.div>
                )}
              </div>
            </div>

            {/* Content */}
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              {item.title}
            </h3>

            <p
              className="text-[#00E5D6] text-sm font-medium mb-3"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              {item.industry}
            </p>

            <p
              className="text-[#D3D4FF] text-sm mb-4 leading-relaxed flex-grow"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              {item.description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h4
                className="text-white text-sm font-semibold mb-2"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                }}
              >
                Key Features:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {item.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#6233EA]/20 text-[#D3D4FF] text-xs rounded-md border border-[#6233EA]/30 text-center"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-2 mt-auto">
              {item.resultStats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span
                    className="text-[#D3D4FF] text-xs"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    {stat.metric}
                  </span>
                  <span
                    className="text-[#FEDD4D] text-xs font-bold"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Audio Indicator */}
            {isPlaying && (
              <motion.div
                className="mt-4 flex items-center gap-2 text-[#E536C1] text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Volume2 className="w-3 h-3" />
                <span style={{ fontFamily: "Manrope, sans-serif" }}>
                  Playing demo...
                </span>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
