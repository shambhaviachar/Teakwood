import React from 'react';
import { PageId } from '../types';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Phone, Mail, Clock, Compass, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24160E] text-[#E8DCCF] border-t border-[#3B261A]">
      {/* Top Banner / Callout */}
      <div className="border-b border-[#3B261A] py-12 px-4 sm:px-6 lg:px-8 bg-[#1E120B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5EBE1]">
              Ready for a Serene Teakwood Getaway?
            </h3>
            <p className="text-sm text-[#C8B6A4] mt-1 max-w-xl">
              Escape Bangalore's bustle. Enjoy pristine swimming pool, rain dance with live DJ, 20+ adventure sports, and grand multi-cuisine buffet spreads.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C29D29] text-[#1E120B] font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Book Stay or Day Outing
            </button>
            <a
              href={`tel:${RESORT_INFO.phoneRaw}`}
              className="px-5 py-3 border border-[#8D6B52] hover:border-[#D4AF37] text-[#FAF7F2] font-medium text-sm rounded-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+91 88611 38889</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Nature Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={RESORT_INFO.logoUrl}
                alt="Teakwood Resort"
                className="w-12 h-12 rounded-full object-cover border border-[#C4A480]/50"
              />
              <div>
                <span className="text-xl font-serif font-bold text-[#FAF7F2] tracking-tight block">
                  Teakwood Resort
                </span>
                <span className="text-[11px] font-serif italic text-[#D4AF37]">
                  Nature Stays with a Soul
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#BDB0A3]">
              An eco-conscious nature sanctuary set across mature teak tree groves in Dasanapura Hobli, North Bengaluru. Designed for rejuvenating weekend stays, full-day picnics, and energizing corporate team offsites.
            </p>
            <div className="pt-2 text-xs text-[#9B8C7E] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Safe, clean, and certified eco-hospitality</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              Explore Resort
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('stay')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Accommodations (from ₹2,299)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('day-outing')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Day Outings (Teak Venture & Pulse)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('activities')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Adventure, Sky Cycle & Pool
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Photo & Video Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blogs')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Travel & Outing Guides
                </button>
              </li>
              <li>
                <a 
                  href={RESORT_INFO.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline font-semibold block"
                >
                  Download Official Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Operating Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              Package Timings
            </h4>
            <div className="space-y-3 text-xs text-[#C8B6A4]">
              <div className="border-b border-[#3B261A] pb-2">
                <span className="font-semibold text-[#FAF7F2] block">Overnight Stay:</span>
                <span>Check-in: From 1:00 PM</span>
                <br />
                <span>Check-out: At 11:00 AM</span>
              </div>
              <div className="border-b border-[#3B261A] pb-2">
                <span className="font-semibold text-[#FAF7F2] block">Day Outing Packages:</span>
                <span>Teak Pulse: 09:00 AM – 06:00 PM</span>
                <br />
                <span>Teak Venture: 10:00 AM – 06:00 PM</span>
              </div>
              <div>
                <span className="font-semibold text-[#FAF7F2] block">Front Desk & Security:</span>
                <span>Open 24/7 for Guest Assistance</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              Reach Teakwood Resort
            </h4>
            <div className="space-y-3 text-xs text-[#C8B6A4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {RESORT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${RESORT_INFO.phoneRaw}`} className="hover:text-[#D4AF37] text-[#FAF7F2] font-medium">
                  {RESORT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#D4AF37]">
                  {RESORT_INFO.email}
                </a>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B261A] hover:bg-[#4E3323] text-xs text-[#FAF7F2] rounded border border-[#5A3B2A] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={RESORT_INFO.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5C3A21] hover:bg-[#724829] text-xs text-[#FAF7F2] rounded border border-[#8B5A2B] transition-colors font-medium"
                >
                  <span>PDF Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with zero-pill clean typographic separator */}
        <div className="mt-12 pt-8 border-t border-[#3B261A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B8C7E]">
          <div>
            © {new Date().getFullYear()} Teakwood Resort, Bengaluru. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => handleNav('about-us')} className="hover:text-[#FAF7F2]">Sustainability</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('stay')} className="hover:text-[#FAF7F2]">Tariff Plans</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('contact-us')} className="hover:text-[#FAF7F2]">Directions & Route</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
