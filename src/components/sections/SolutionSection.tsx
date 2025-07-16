import React from 'react';
import { Button } from "@/components/ui/button";
import { Grid2x2, Calendar, Phone } from 'lucide-react';
interface SolutionSectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}
export function SolutionSection({
  onBookDemo,
  onTryAI
}: SolutionSectionProps) {
  return <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-[#6233EA]/20 to-[#20215A]/30" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#00E5D6]" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>
          The AI Solution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#E536C1]" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>AI Agents That Handle What's Holding You Back!</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
              <li className="flex items-start">
                <span className="text-[#00E5D6] mr-2 sm:mr-3 text-lg">✓</span>
                Answer every call within 2 rings - even at 3 AM on Christmas
              </li>
              <li className="flex items-start">
                <span className="text-[#00E5D6] mr-2 sm:mr-3 text-lg">✓</span>
                Qualify leads with perfect consistency using YOUR exact criteria
              </li>
              <li className="flex items-start">
                <span className="text-[#00E5D6] mr-2 sm:mr-3 text-lg">✓</span>
                Book appointments directly into your calendar (no double-bookings)
              </li>
              <li className="flex items-start">
                <span className="text-[#00E5D6] mr-2 sm:mr-3 text-lg">✓</span>
                Send SMS follow-ups automatically within 60 seconds
              </li>
              <li className="flex items-start">
                <span className="text-[#00E5D6] mr-2 sm:mr-3 text-lg">✓</span>
                Integrate seamlessly with your existing CRM (zero headaches)
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-[#6233EA]/30 to-[#20215A]/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-[#00E5D6]/30">
            <Grid2x2 className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-[#FEDD4D] mx-auto mb-4 sm:mb-6" />
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#00E5D6]" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
              Custom Built For Your Business
            </h4>
            <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>Every AI agent learns your industry lingo, knows your pricing, and follows your exact sales process. While competitors use generic chatbots, you get an AI that sounds like your best salesperson – but never calls in sick. From AI implementation to strategic consulting, we're your complete growth partner.</p>
          </div>
        </div>

        {/* CTA After Solution Section */}
        <div className="text-center">
          <p className="text-lg sm:text-xl text-[#D3D4FF] mb-4 sm:mb-6 px-4" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>Get Your Custom AI Demo</p>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
            <Button size="lg" className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base w-full" style={{
            fontFamily: 'Audiowide, sans-serif'
          }} onClick={onBookDemo}>
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Book Free Demo
            </Button>
            <Button size="lg" className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base w-full" style={{
            fontFamily: 'Audiowide, sans-serif'
          }} onClick={onTryAI}>
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Get AI Demo Call
            </Button>
          </div>
        </div>
      </div>
    </section>;
}