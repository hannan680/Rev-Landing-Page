import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { AIShowcase } from "@/components/ui/ai-showcase";
import { TryAIForm } from "@/components/ui/try-ai-form";
import { CalendarBookingDialog } from "@/components/ui/calendar-booking-dialog";
import { IntegrationHub } from "@/components/ui/integration-hub";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const { toast } = useToast();
  const [showTryAIForm, setShowTryAIForm] = useState(false);
  const [showCalendarDialog, setShowCalendarDialog] = useState(false);

  const handleBookDemo = () => {
    setShowCalendarDialog(true);
  };

  const handleTryAI = () => {
    setShowTryAIForm(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] overflow-x-hidden">
      <div id="hero-section">
        <HeroSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      </div>
      <div id="problem-section">
        <ProblemSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      </div>
      <div id="solution-section">
        <SolutionSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      </div>
      <div id="ai-showcase-section">
        <AIShowcase />
      </div>
      <IntegrationHub />
      <div id="testimonials-section">
        <PremiumTestimonials />
      </div>
      <CTASection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      <TryAIForm open={showTryAIForm} onOpenChange={setShowTryAIForm} />
      <CalendarBookingDialog
        open={showCalendarDialog}
        onOpenChange={setShowCalendarDialog}
      />
      <Footer />
    </div>
  );
};

export default Index;
