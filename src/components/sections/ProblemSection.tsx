import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Activity, Calendar } from 'lucide-react';
interface ProblemSectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}
export function ProblemSection({
  onBookDemo,
  onTryAI
}: ProblemSectionProps) {
  return <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#20215A]/30 to-[#6233EA]/20" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#E536C1]" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>The Growth Bottleneck</h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[#D3D4FF] mb-8 sm:mb-10 md:mb-12" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>Why successful companies hit revenue walls at $1-$5M</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
            <CardHeader>
              <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Your Closers Are Stuck Qualifying
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>
                Your $100K closer spends half his day asking 'Do you have budget?' instead of closing deals. Meanwhile, that $45K prospect from Friday is calling your competitor who actually has systems to handle qualification properly.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
            <CardHeader>
              <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                You Can't Scale Ad Spend Profitably
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Marketing wants to double the budget, but you're already drowning. You can only touch each lead once or twice before your team gets overwhelmed. Studies show it takes 7-12 touches to convert - you're leaving 70% of revenue on the table.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <CardHeader>
              <Calendar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Leads Fall Through the Cracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>That hot prospect from your trade show? No one followed up for 5 days. Your CRM shows 200 'maybe' leads that never got touched. You're sitting on a goldmine but don't have systems to mine it.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}