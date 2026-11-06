import React, { useState } from 'react';
import { PageId } from '../types';
import { RESORT_INFO } from '../data/resortData';
import { Phone, Menu, X, Calendar, MessageCircle, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'stay', label: 'Stay' },
    { id: 'day-outing', label: 'Day Outing' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#2C1810] text-[#E8D8C8] text-xs py-2 px-4 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">Ravuthanahalli, Dasanapura Hobli, Bengaluru 562130</span>
            <span className="hidden md:inline text-[#8D6B52]">·</span>
            <span className="hidden md:inline text-[#E8D8C8]/80">45 Mins from Yeshwanthpur</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-medium">
            <a 
              href={`tel:${RESORT_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{RESORT_INFO.phone}</span>
            </a>
            <span className="text-[#8D6B52]">·</span>
            <a 
              href={RESORT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left group shrink-0 flex items-center gap-3 cursor-pointer"
          >
            <img
              src={RESORT_INFO.logoUrl}
              alt="Teakwood Resort Official Logo"
              className="w-12 h-12 rounded-full object-cover shadow-sm border border-[#C4A480]/60 group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2B1810] group-hover:text-[#5C3A21] transition-colors whitespace-nowrap">
                Teakwood Resort
              </div>
              <div className="text-[11px] italic font-serif text-[#8B6B4E] leading-tight font-medium">
                Nature Stays with a Soul
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#4A3B32]">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#5C3A21] font-semibold' 
                      : 'hover:text-[#5C3A21]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5C3A21] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Brochure */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={RESORT_INFO.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-[#5C3A21] bg-[#EFE7D8] hover:bg-[#E5DBC7] border border-[#D5C4AC] rounded-lg transition-colors whitespace-nowrap"
            >
              Brochure (PDF)
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#5C3A21] hover:bg-[#432A17] active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Visit</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-[#FAF7F2] bg-[#5C3A21] rounded-lg cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3B32] hover:text-[#2B1810] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E8DFC8]">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-left text-sm rounded-md transition-colors cursor-pointer ${
                    currentPage === item.id
                      ? 'bg-[#EFE7D8] text-[#5C3A21] font-semibold'
                      : 'text-[#4A3B32] hover:bg-[#F4ECE0]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('stay');
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-[#FAF7F2] bg-[#5C3A21] rounded-lg cursor-pointer"
              >
                Book Stay Accommodation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('day-outing');
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-[#5C3A21] bg-[#EFE7D8] border border-[#D5C4AC] rounded-lg cursor-pointer"
              >
                Book Day Outing Package
              </button>
              <a
                href={RESORT_INFO.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 text-center text-xs font-semibold text-[#5C3A21] bg-white border border-[#D5C4AC] rounded-lg flex items-center justify-center gap-1.5"
              >
                <span>View Official Brochure (PDF)</span>
              </a>
              <a
                href={`tel:${RESORT_INFO.phoneRaw}`}
                className="w-full py-2 text-center text-xs font-medium text-[#4A3B32] hover:underline flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#5C3A21]" />
                Call +91 88611 38889
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
