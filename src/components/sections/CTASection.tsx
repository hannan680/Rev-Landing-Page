import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, ExternalLink } from 'lucide-react';
interface CTASectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}
export function CTASection({
  onBookDemo,
  onTryAI
}: CTASectionProps) {
  return <section id="cta-section" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#E536C1]" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>Ready to Break Through Your Growth Bottleneck?</h2>
        <p className="text-base sm:text-lg md:text-xl text-[#D3D4FF] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>See exactly how AI agents solve the capacity constraints holding your company back. Choose your preferred way to experience the solution.</p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Schedule Demo Card */}
          <Card className="bg-[#20215A]/30 border-[#00E5D6]/30 backdrop-blur-sm hover:border-[#00E5D6]/50 transition-all duration-300 group">
            <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00E5D6] to-[#6233EA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0D0D0D]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D6] mb-3 sm:mb-4" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Schedule a Demo
              </h3>
              <p className="text-[#D3D4FF] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Book a no-pressure demo where we'll show you exactly how AI agents work for companies doing $1-15M in revenue. No sales pitch - just proof it solves your specific bottlenecks.</p>
              <Button size="lg" className="w-full bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 sm:py-4 text-sm sm:text-base mt-auto" style={{
              fontFamily: 'Audiowide, sans-serif'
            }} onClick={onBookDemo}>
                Book Demo Call
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Try AI Card */}
          <Card className="bg-[#20215A]/30 border-[#E536C1]/30 backdrop-blur-sm hover:border-[#E536C1]/50 transition-all duration-300 group">
            <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#E536C1] to-[#FEDD4D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0D0D0D]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#E536C1] mb-3 sm:mb-4" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Try AI Agent Now
              </h3>
              <p className="text-[#D3D4FF] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Want proof it actually works? Our AI will call you within 5 minutes to demonstrate exactly how it would handle prospects for your business. Hear the difference yourself.</p>
              <Button size="lg" className="w-full bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-3 sm:py-4 text-sm sm:text-base mt-auto" style={{
              fontFamily: 'Audiowide, sans-serif'
            }} onClick={onTryAI}>
                Get Live AI Demo
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[#D3D4FF]/80 text-xs sm:text-sm px-4" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </div>
    </section>;
}