import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Action */}
      <a
        href={RESORT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp Us</span>
      </a>

      {/* Call Direct Action */}
      <a
        href={`tel:${RESORT_INFO.phoneRaw}`}
        aria-label="Call Teakwood Resort"
        className="w-12 h-12 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 group"
      >
        <Phone className="w-5 h-5 text-[#D4AF37]" />
        <span className="sr-only">Call +91 88611 38889</span>
      </a>

      {/* Quick Booking Badge Pill (Interactive filter style) */}
      <button
        onClick={onOpenBooking}
        className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#F3EDE2] text-[#2B1810] border border-[#D5C4AC] rounded-full shadow-lg font-semibold text-xs transition-all hover:scale-105 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-[#5C3A21]" />
        <span>Instant Availability</span>
      </button>
    </div>
  );
};
