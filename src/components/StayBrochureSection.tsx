import React from 'react';
import { ArrowRight, CheckCircle2, Images, Sparkles } from 'lucide-react';
import { ACCOMMODATIONS, RESORT_INFO } from '../data/resortData';
import { PageId } from '../types';

interface StayBrochureSectionProps {
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
  onNavigate?: (page: PageId) => void;
  className?: string;
}

export const StayBrochureSection: React.FC<StayBrochureSectionProps> = ({
  onOpenBooking,
  onNavigate,
  className = ""
}) => {
  const deluxeIncludes = [
    "All 4 Buffet Meals Included (Lunch, Hi-Tea, Dinner, Breakfast)",
    "High-efficiency Split AC",
    "Modern Ensuite Washroom with 24/7 Hot Shower",
    "Full Swimming Pool & Rain Dance Access",
    "20+ Rope Courses, Zipline & Sky Cycle",
    "Evening Campfire & Music"
  ];

  const nonAcIncludes = [
    "All 4 Buffet Meals (Lunch, Hi-Tea, Dinner, Breakfast)",
    "Natural Teakwood Ventilation & Ceiling Fans",
    "Designer Marble Ensuite Washroom with Geyser",
    "Full Swimming Pool & Rain Dance Access",
    "Adventure Ropes & Outdoor Turf Sports",
    "Evening Campfire by the Lawn"
  ];

  const familyIncludes = [
    "All 4 Grand Buffet Meals Included",
    "Multiple Double Beds & Attached Bathrooms",
    "Spacious Common Lounging & Veranda",
    "Full Access to Pool & Rain Dance",
    "All Adventure Rope Courses & Lawn Cricket",
    "Evening Campfire by the Grove"
  ];

  const tentIncludes = [
    "All 4 Buffet Meals Included",
    "Heavy-Duty Weatherproof Camping Tent",
    "Comfortable Mattresses, Clean Linens & Pillows",
    "Full Swimming Pool & Rain Dance Access",
    "Adventure Ropes & Bonfire Access",
    "Dedicated Sanitized Washrooms nearby"
  ];

  const deluxeRoom = ACCOMMODATIONS.find(a => a.id === 'deluxe-ac-rooms')!;
  const nonAcRoom = ACCOMMODATIONS.find(a => a.id === 'premium-non-ac-rooms')!;
  const familyRoom = ACCOMMODATIONS.find(a => a.id === 'family-rooms')!;
  const tentRoom = ACCOMMODATIONS.find(a => a.id === 'camping-tents')!;

  return (
    <div className={`w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-lg border border-[#E8DFC8] relative overflow-hidden ${className}`}>
      {/* Top Header matching Brochure Style */}
      <div className="text-center mb-12 space-y-1">
        <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
          Overnight Nature Escapes
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B1810] tracking-tight">
          Stay Packages Preview
        </h2>
        <p className="text-xs sm:text-sm text-[#8B6B4E] font-medium max-w-xl mx-auto">
          All-inclusive overnight stays amidst Bangalore’s teak groves. Includes check-in 1:00 PM, check-out 11:00 AM, 4 grand buffet meals, swimming pool, rain dance & 20+ adventure activities.
        </p>
      </div>

      <div className="relative space-y-12">
        {/* ROOM 1: DELUXE AC ROOMS (Single pristine image) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Single Hero Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFC8] bg-[#FAF7F2] shadow-sm group">
              <img
                src={deluxeRoom.image}
                alt="Deluxe AC Room Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#5C3A21] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                2 Sharing · Split AC
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#8B6B4E] font-medium">
                    Check-in: 1:00 PM · Check-out: 11:00 AM
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                    Deluxe AC Rooms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                    Spacious air-conditioned master suite with king bed, cozy leather couch, flat-screen TV, ceiling fan, and garden door. Includes a modern beige-tiled ensuite bathroom with illuminated LED mirror and 24/7 hot rain shower.
                  </p>
                </div>

                {/* Orange Price Capsule Button */}
                <button
                  type="button"
                  onClick={() => onOpenBooking('stay', 'deluxe-ac-rooms')}
                  className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                      PER HEAD
                    </div>
                    <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                      Rs. 3,499<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>

              {/* Includes Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-serif font-medium text-[#2B1810]">
                  Includes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {deluxeIncludes.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-3.5 py-1 rounded-full shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery link */}
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5C3A21] hover:text-[#E65100] font-semibold transition-colors cursor-pointer pt-1"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>View Ensuite Bathroom & Balcony Photos in Gallery →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot */}
        <div className="relative flex items-center py-2" aria-hidden="true">
          <div className="h-[2.5px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* ROOM 2: PREMIUM NON-AC ROOMS (Single pristine image) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Single Hero Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFC8] bg-[#FAF7F2] shadow-sm group">
              <img
                src={nonAcRoom.image}
                alt="Premium Non-AC Room Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#2E7D32] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                3 Sharing · Natural Breeze
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#8B6B4E] font-medium">
                    Check-in: 1:00 PM · Check-out: 11:00 AM
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                    Premium Non-AC Rooms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                    Designed with warm timber flooring and direct garden-view doors capturing natural teakwood breezes. Features an ensuite luxury dark marble-tiled bathroom with instant geyser and backlit mirror.
                  </p>
                </div>

                {/* Orange Price Capsule Button */}
                <button
                  type="button"
                  onClick={() => onOpenBooking('stay', 'premium-non-ac-rooms')}
                  className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                      PER HEAD
                    </div>
                    <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                      Rs. 3,199<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>

              {/* Includes Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-serif font-medium text-[#2B1810]">
                  Includes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {nonAcIncludes.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-3.5 py-1 rounded-full shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery link */}
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5C3A21] hover:text-[#E65100] font-semibold transition-colors cursor-pointer pt-1"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>View Marble Bathroom & Garden Door Photos in Gallery →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot */}
        <div className="relative flex items-center py-2" aria-hidden="true">
          <div className="h-[2.5px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* ROOM 3: FAMILY ROOMS (Single pristine image - Attached image 4) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Single Hero Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFC8] bg-[#FAF7F2] shadow-sm group">
              <img
                src={familyRoom.image}
                alt="Family Dormitory Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#5C3A21] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                10 Sharing · Group Suite
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#8B6B4E] font-medium">
                    Check-in: 1:00 PM · Check-out: 11:00 AM
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                    Family Rooms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                    Spacious multi-bed dormitory with 4+ large double beds, red drapes, warm wood flooring, flat TV, and ceiling fans. Features an ensuite luxury marble washroom with potted plants. Ideal for family gatherings and corporate teams.
                  </p>
                </div>

                {/* Orange Price Capsule Button */}
                <button
                  type="button"
                  onClick={() => onOpenBooking('stay', 'family-rooms')}
                  className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                      PER HEAD
                    </div>
                    <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                      Rs. 2,999<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>

              {/* Includes Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-serif font-medium text-[#2B1810]">
                  Includes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {familyIncludes.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-3.5 py-1 rounded-full shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery link */}
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5C3A21] hover:text-[#E65100] font-semibold transition-colors cursor-pointer pt-1"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>View Family Suite Lounge & Marble Bathroom in Gallery →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot */}
        <div className="relative flex items-center py-2" aria-hidden="true">
          <div className="h-[2.5px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* ROOM 4: TENT STAY (Single pristine image - Attached image 5) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Single Hero Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFC8] bg-[#FAF7F2] shadow-sm group">
              <img
                src={tentRoom.image}
                alt="Night Garden Camping Tents"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#E65100] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                2 Sharing · Starlit Camping
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#8B6B4E] font-medium">
                    Check-in: 1:00 PM · Check-out: 11:00 AM
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#2B1810] font-normal tracking-tight">
                    Camping Tents (Tent Stay)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                    Adventure-style night camping under the stars pitched on soft manicured green lawns beside illuminated resort villas and palm trees. Includes comfortable mattresses, fresh linens, clean washroom access, and all 4 buffet meals.
                  </p>
                </div>

                {/* Orange Price Capsule Button */}
                <button
                  type="button"
                  onClick={() => onOpenBooking('stay', 'camping-tents')}
                  className="self-start inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                      PER HEAD
                    </div>
                    <div className="text-lg sm:text-xl font-bold leading-none tracking-tight">
                      Rs. 2,299<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>

              {/* Includes Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-serif font-medium text-[#2B1810]">
                  Includes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {tentIncludes.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-3.5 py-1 rounded-full shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery link */}
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5C3A21] hover:text-[#E65100] font-semibold transition-colors cursor-pointer pt-1"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>View Night Lawn Camping Photos in Gallery →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8B6B4E] border-t border-[#E8DFC8]/60">
          <span className="italic">
            T&C Apply : Clear transparent pricing based on sharing & meals. Check-in 1:00 PM / Check-out 11:00 AM.
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
