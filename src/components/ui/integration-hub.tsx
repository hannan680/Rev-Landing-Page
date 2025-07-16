import React from "react";
import {
  Users,
  Settings,
  Headphones,
  Wrench,
  UserCheck,
  Plug,
} from "lucide-react";

export function IntegrationHub() {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
      {/* Minimal styles for the new compact design */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-6xl font-bold mb-6 text-[#00E5D6]"
          style={{
            fontFamily: "Audiowide, sans-serif",
          }}
        >
          We Handle All The Technical Stuff
        </h2>
        <p
          className="text-xl text-[#D3D4FF] mb-12 max-w-4xl mx-auto"
          style={{
            fontFamily: "Manrope, sans-serif",
          }}
        >
          No IT headaches. No setup hassles. No wondering if it will work with
          your systems. Our technical team connects your AI agents to whatever
          platforms you're already using and configures everything to match your
          exact business processes. You focus on growing revenue, we handle the
          tech.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Setup Team */}
          <div className="bg-gradient-to-br from-[#1A1A2E]/80 via-[#16213E]/60 to-[#0D0D0D]/40 rounded-3xl border border-[#00E5D6]/20 p-8 hover:border-[#00E5D6]/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5D6]/20 to-[#00E5D6]/10 flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-[#00E5D6]" />
            </div>
            <h3
              className="text-2xl font-bold mb-4 text-[#00E5D6]"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Your Dedicated Setup Team
            </h3>
            <p
              className="text-[#D3D4FF]/90 leading-relaxed"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Our integration specialists handle all technical setup. No
              learning curves, no troubleshooting, no IT requirements on your
              end.
            </p>
          </div>

          {/* Card 2: Custom Configuration */}
          <div className="bg-gradient-to-br from-[#1A1A2E]/80 via-[#16213E]/60 to-[#0D0D0D]/40 rounded-3xl border border-[#E536C1]/20 p-8 hover:border-[#E536C1]/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E536C1]/20 to-[#E536C1]/10 flex items-center justify-center mb-6 mx-auto">
              <Settings className="w-8 h-8 text-[#E536C1]" />
            </div>
            <h3
              className="text-2xl font-bold mb-4 text-[#E536C1]"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Custom Business Configuration
            </h3>
            <p
              className="text-[#D3D4FF]/90 leading-relaxed"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              We configure your AI agents to match your exact sales process,
              pricing structure, and qualification criteria. Built for your
              business, not generic templates.
            </p>
          </div>

          {/* Card 3: Ongoing Support */}
          <div className="bg-gradient-to-br from-[#1A1A2E]/80 via-[#16213E]/60 to-[#0D0D0D]/40 rounded-3xl border border-[#6233EA]/20 p-8 hover:border-[#6233EA]/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6233EA]/20 to-[#6233EA]/10 flex items-center justify-center mb-6 mx-auto">
              <Headphones className="w-8 h-8 text-[#6233EA]" />
            </div>
            <h3
              className="text-2xl font-bold mb-4 text-[#6233EA]"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Ongoing Technical Support
            </h3>
            <p
              className="text-[#D3D4FF]/90 leading-relaxed"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Direct line to our technical team whenever you need adjustments.
              No ticket systems, no waiting - just white-glove support.
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A2E]/40 backdrop-blur-sm rounded-2xl border border-[#00E5D6]/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5D6]/20 to-[#00E5D6]/10 flex items-center justify-center mb-4 mx-auto">
              <Wrench className="w-6 h-6 text-[#00E5D6]" />
            </div>
            <div
              className="text-xl font-bold text-[#00E5D6] mb-2"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Done-For-You Implementation
            </div>
            <div className="text-sm text-[#D3D4FF]/80">
              Complete setup handled by our team
            </div>
          </div>
          <div className="bg-[#1A1A2E]/40 backdrop-blur-sm rounded-2xl border border-[#E536C1]/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E536C1]/20 to-[#E536C1]/10 flex items-center justify-center mb-4 mx-auto">
              <UserCheck className="w-6 h-6 text-[#E536C1]" />
            </div>
            <div
              className="text-xl font-bold text-[#E536C1] mb-2"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Dedicated Account Manager
            </div>
            <div className="text-sm text-[#D3D4FF]/80">
              Your direct contact for all technical needs
            </div>
          </div>
          <div className="bg-[#1A1A2E]/40 backdrop-blur-sm rounded-2xl border border-[#6233EA]/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6233EA]/20 to-[#6233EA]/10 flex items-center justify-center mb-4 mx-auto">
              <Plug className="w-6 h-6 text-[#6233EA]" />
            </div>
            <div
              className="text-xl font-bold text-[#6233EA] mb-2"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Custom Integrations Available
            </div>
            <div className="text-sm text-[#D3D4FF]/80">
              We connect to any system you use
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
