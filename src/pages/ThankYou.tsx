import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track Facebook Pixel Lead event when thank you page loads
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png"
            alt="RevSquared AI Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
        </div>

        <Card className="bg-[#20215A]/50 border-[#00E5D6]/30 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#00E5D6] to-[#6233EA] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#0D0D0D]" />
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#00E5D6]"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              Thank You!
            </h1>

            <p
              className="text-lg sm:text-xl text-[#D3D4FF] mb-8"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Your information has been successfully submitted.
            </p>

            <div className="bg-[#0D0D0D]/50 rounded-xl p-6 mb-8 border border-[#E536C1]/30">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-[#E536C1] mr-3" />
                <Clock className="w-8 h-8 text-[#FEDD4D]" />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#E536C1] mb-3"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                }}
              >
                Our AI Agent Will Call You Shortly
              </h3>
              <p
                className="text-[#D3D4FF] text-sm sm:text-base"
                style={{
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Expect a call within the next 5 minutes to demonstrate our AI
                capabilities. Make sure your phone is nearby and ready to
                answer!
              </p>
            </div>

            <div
              className="space-y-4 text-left text-[#D3D4FF] text-sm sm:text-base mb-8"
              style={{
                fontFamily: "Manrope, sans-serif",
              }}
            >
              <div className="flex items-start">
                <span className="text-[#00E5D6] mr-3 text-lg">✓</span>
                Our AI will introduce itself and explain the demonstration
              </div>
              <div className="flex items-start">
                <span className="text-[#00E5D6] mr-3 text-lg">✓</span>
                You'll experience how it handles real prospect conversations
              </div>
              <div className="flex items-start">
                <span className="text-[#00E5D6] mr-3 text-lg">✓</span>
                The call will last approximately 3-5 minutes
              </div>
            </div>

            <Button
              onClick={() => navigate("/")}
              className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 px-6"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
