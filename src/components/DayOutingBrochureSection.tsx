import React from 'react';
import { ArrowRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface DayOutingBrochureSectionProps {
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
  className?: string;
}

export const DayOutingBrochureSection: React.FC<DayOutingBrochureSectionProps> = ({
  onOpenBooking,
  className = ""
}) => {
  const ventureIncludes = [
    "Welcome drinks",
    "Lunch + hi-tea",
    "Activity access",
    "Pool & rain dance",
    "Ideal for short corporate outings and family gatherings"
  ];

  const pulseIncludes = [
    "Breakfast + lunch + hi-tea",
    "Full access to activities",
    "Relaxation zones",
    "Best for team outings and large group celebrations"
  ];

  return (
    <div className={`w-full max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-lg border border-[#E8DFC8] relative overflow-hidden ${className}`}>
      {/* Top Header matching Brochure Page 4 */}
      <div className="text-center mb-10 space-y-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B1810] tracking-tight">
          Day Outing Packages Preview
        </h2>
        <p className="text-xs sm:text-sm text-[#8B6B4E] font-medium">
          Transparent, all-inclusive day picnic experiences on the outskirts of Bangalore
        </p>
      </div>

      {/* Main Packages Stack with Climber Illustration Accent */}
      <div className="relative space-y-10">
        {/* Package 1: Teak Venture */}
        <div className="space-y-4 relative">
          {/* Authentic Rock Climber Cutout from Image 2 */}
          <div className="hidden md:block absolute -right-2 -top-4 w-44 lg:w-56 pointer-events-none z-10 drop-shadow-sm select-none">
            <img
              src="/assets/aistudio/climber_clean.png"
              alt="Rock Climbing at Teakwood Resort"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 max-w-xl md:max-w-[62%]">
            <div className="space-y-1.5">
              <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                Teak Venture
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Perfect for a quick adventure day outing near Bangalore, Ideal for family day outings or corporate team-building events at resorts
              </p>
            </div>

            {/* Orange Price Capsule Button */}
            <button
              type="button"
              onClick={() => onOpenBooking('day-outing', 'teak-venture')}
              className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                  PER HEAD
                </div>
                <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                  Rs. 1,299<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Includes list with rounded orange border chips */}
          <div className="space-y-2 pt-2 max-w-xl md:max-w-[65%]">
            <div className="text-sm sm:text-base font-serif font-medium text-[#2B1810]">
              Includes:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ventureIncludes.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-4 py-1.5 rounded-full shadow-xs hover:border-[#F57C00] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot from Brochure */}
        <div className="relative flex items-center py-2" aria-hidden="true">
          <div className="h-[2.5px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* Package 2: Teak Pulse */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-xl">
              <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                Teak Pulse
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Enjoy a full day of fun and adventure at one of the best adventure resorts in Bangalore
              </p>
            </div>

            {/* Orange Price Capsule Button */}
            <button
              type="button"
              onClick={() => onOpenBooking('day-outing', 'teak-pulse')}
              className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                  PER HEAD
                </div>
                <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                  Rs. 1,499<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Includes list with rounded orange border chips */}
          <div className="space-y-2 pt-2">
            <div className="text-sm sm:text-base font-serif font-medium text-[#2B1810]">
              Includes:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {pulseIncludes.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-4 py-1.5 rounded-full shadow-xs hover:border-[#F57C00] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8B6B4E] border-t border-[#E8DFC8]/60">
          <span className="italic">
            T&C Apply : Clear pricing based on adults and kids
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#2E5A36] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Free Parking & Wi-Fi</span>
            </span>
            <span>·</span>
            <a
              href={RESORT_INFO.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C3A21] hover:underline font-semibold"
            >
              View Full PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
