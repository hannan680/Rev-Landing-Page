import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from 'lucide-react';

interface CalendarBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarBookingDialog({ open, onOpenChange }: CalendarBookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#20215A] border-[#00E5D6]/30 text-white max-w-5xl w-[95vw] h-[95vh] max-h-none p-0 flex flex-col">
        <div className="p-6 border-b border-[#00E5D6]/30 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-[#00E5D6] flex items-center gap-2" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            <Calendar className="w-6 h-6" />
            Book Your Free Demo
          </DialogTitle>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/hmsTZfGshsOlQ4X3LNJn" 
            className="w-full h-full border-none"
            scrolling="yes" 
            id="calendar-booking-iframe"
            title="Calendar Booking"
            allow="camera; microphone; geolocation"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}