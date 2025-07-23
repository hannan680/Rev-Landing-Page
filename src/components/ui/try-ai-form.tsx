import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface TryAIFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TryAIForm({ open, onOpenChange }: TryAIFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save form submission to Supabase
      const { error } = await supabase.from("form_submissions").insert({
        first_name: formData.firstName,
        last_name: formData.lastName || null,
        phone: formData.phone,
        email: formData.email,
        company: formData.company || null,
      });

      if (error) {
        throw error;
      }

      // Send data to webhook
      console.log("Sending data to webhook...");
      try {
        const webhookData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          timestamp: new Date().toISOString(),
          source: "AI Demo Form",
        };

        console.log("Webhook payload:", webhookData);

        const webhookResponse = await fetch(
          "https://services.leadconnectorhq.com/hooks/MDB4H4sAI71Jzos2up6b/webhook-trigger/8b489481-513b-4b6d-8081-14573202f3c0",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(webhookData),
          }
        );

        console.log("Webhook response status:", webhookResponse.status);
        console.log("Webhook sent successfully");
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the form submission if webhook fails
      }

      // Close the dialog and redirect to thank you page
      onOpenChange(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
      });

      // Track conversion events on successful form submission
      console.log(
        "🎯 CONVERSION TRACKING - Environment:",
        window.location.hostname
      );
      console.log("🎯 CONVERSION TRACKING - User Agent:", navigator.userAgent);
      console.log(
        "🎯 CONVERSION TRACKING - Timestamp:",
        new Date().toISOString()
      );

      if (typeof window !== "undefined" && window.gtag) {
        console.log("📊 Firing Google Analytics conversion event...");
        window.gtag("event", "conversion", {
          send_to: "AW-16840970681/eFOOCLGo3egaELmjs94-",
        });
        console.log("✅ Google Analytics conversion tracked!");
      } else {
        console.log("❌ Google Analytics (gtag) not found");
      }

      // Track Facebook Pixel conversion
      if (typeof window !== "undefined" && window.fbq) {
        console.log("📘 Firing Facebook Pixel conversion event...");
        window.fbq("track", "Lead");
        console.log("✅ Facebook Pixel conversion tracked!");
      } else {
        console.log("❌ Facebook Pixel (fbq) not found");
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Error saving form submission:", error);
      toast({
        title: "Error",
        description: "Failed to schedule demo call. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#20215A] border-[#00E5D6]/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle
            className="text-2xl font-bold text-[#00E5D6] flex items-center gap-2"
            style={{
              fontFamily: "Audiowide, sans-serif",
            }}
          >
            <Phone className="w-6 h-6" />
            Try Our AI Agent
          </DialogTitle>
          <DialogDescription
            className="text-[#D3D4FF]"
            style={{
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Enter your details and our AI will call you within 5 minutes to
            demonstrate its capabilities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="firstName"
                className="text-[#00E5D6] font-semibold"
              >
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => updateFormData("firstName", e.target.value)}
                className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="lastName"
                className="text-[#00E5D6] font-semibold"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => updateFormData("lastName", e.target.value)}
                className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="company" className="text-[#00E5D6] font-semibold">
              Company
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => updateFormData("company", e.target.value)}
              className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
              placeholder="ABC Corp"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#00E5D6] font-semibold">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#00E5D6] font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
              placeholder="john@company.com"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-[#E536C1] text-[#E536C1] hover:bg-[#E536C1] hover:text-[#0D0D0D]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold"
              style={{
                fontFamily: "Audiowide, sans-serif",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Scheduling...
                </>
              ) : (
                "Get AI Demo Call"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
