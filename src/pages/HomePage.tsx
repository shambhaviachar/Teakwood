import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  RESORT_INFO, 
  RESORT_IMAGES, 
  RESORT_HIGHLIGHTS, 
  KEY_AMENITIES, 
  ACCOMMODATIONS, 
  ACTIVITIES_DATA, 
  TESTIMONIALS, 
  PAGE_SUMMARIES 
} from '../data/resortData';
import { FAQSection } from '../components/FAQSection';
import { DayOutingBrochureSection } from '../components/DayOutingBrochureSection';
import { ActivitiesBrochureSection } from '../components/ActivitiesBrochureSection';
import { StayBrochureSection } from '../components/StayBrochureSection';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Check, 
  Clock, 
  Star, 
  ShieldCheck, 
  Waves, 
  Compass, 
  Coffee, 
  Music, 
  Utensils,
  FileText
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeActivityTab, setActiveActivityTab] = useState<'all' | 'adventure' | 'water' | 'outdoor' | 'indoor'>('all');
  
  // Quick bar state
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [quickDate, setQuickDate] = useState(tomorrow.toISOString().split('T')[0]);
  const [quickType, setQuickType] = useState<'stay' | 'day-outing'>('stay');
  const [quickGuests, setQuickGuests] = useState<number>(2);

  const filteredActivities = activeActivityTab === 'all'
    ? ACTIVITIES_DATA.slice(0, 6)
    : ACTIVITIES_DATA.filter(a => a.category === activeActivityTab).slice(0, 6);

  const handleQuickCheck = () => {
    onOpenBooking(quickType);
  };

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#24160E] text-[#FAF7F2]">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.hero}
            alt="Teakwood Resort Bengaluru Campus"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-in fade-in duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24160E] via-[#24160E]/70 to-[#24160E]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 lg:pt-24 lg:pb-36">
          <div className="max-w-3xl space-y-6">
            {/* Official Logo Lockup & Tagline */}
            <div className="flex items-center gap-3">
              <img
                src={RESORT_INFO.logoUrl}
                alt="Teakwood Resort Logo"
                className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-[#D4AF37]/80"
              />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Official Nature Sanctuary
                </div>
                <div className="text-sm font-serif italic text-[#FAF7F2]/90">
                  {RESORT_INFO.tagline}
                </div>
              </div>
            </div>

            {/* Location unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#D4AF37]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Dasanapura Hobli, North Bengaluru</span>
              <span aria-hidden="true">·</span>
              <span>Near Tumkur Road</span>
              <span aria-hidden="true">·</span>
              <span>Check-in: 1:00 PM · Check-out: 11:00 AM</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FAF7F2] leading-tight" style={{ textWrap: 'balance' }}>
              Where Bengaluru’s Teak Groves Meet Unhurried Luxury
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#E3D4C4] leading-relaxed max-w-2xl font-light">
              Escape into a tranquil 10-acre teak forest. Offering Deluxe AC Rooms, Family Suites, and Camping Tents, complete with Swimming Pool, Rain Dance, Zipline, Sky Cycle, spacious Conference Hall, and all-inclusive buffet feasts.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking('stay')}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C29D29] text-[#1E120B] font-semibold text-sm rounded-lg shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Stay (From ₹2,299)</span>
              </button>

              <button
                onClick={() => onOpenBooking('day-outing')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 backdrop-blur-sm font-medium text-sm rounded-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Day Outings (From ₹1,299)</span>
              </button>

              <a
                href={RESORT_INFO.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] border border-[#8B5A2B] font-medium text-sm rounded-lg transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>View Brochure</span>
              </a>

              <a
                href={`tel:${RESORT_INFO.phoneRaw}`}
                className="px-3 py-3.5 text-[#D4AF37] hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>{RESORT_INFO.phone}</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-[#C8B6A4]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Welcome Drinks, Breakfast, Lunch & Dinner Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Pet-Friendly Nature Campus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Free Pool, Rain Dance & Sky Cycle Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAST AVAILABILITY & TARIFF CALCULATOR STRIP */}
      <section className="-mt-14 relative z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl shadow-xl border border-[#D5C4AC]/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-[11px] font-semibold text-[#6D584B] uppercase tracking-wider mb-1.5">
                Experience
              </label>
              <select
                value={quickType}
                onChange={(e) => setQuickType(e.target.value as 'stay' | 'day-outing')}
                className="w-full px-3 py-2.5 bg-white border border-[#D5C4AC] rounded-lg text-sm font-medium text-[#2B1810] focus:ring-1 focus:ring-[#5C3A21] focus:outline-none"
              >
                <option value="stay">Overnight Stay (Villas & Cottages)</option>
                <option value="day-outing">Day Outing (9 AM – 6 PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#6D584B] uppercase tracking-wider mb-1.5">
                Visit Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-[#D5C4AC] rounded-lg text-sm text-[#2B1810] focus:ring-1 focus:ring-[#5C3A21] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#6D584B] uppercase tracking-wider mb-1.5">
                Guests
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white border border-[#D5C4AC] rounded-lg text-sm font-medium text-[#2B1810] focus:ring-1 focus:ring-[#5C3A21] focus:outline-none"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests (Couple)</option>
                <option value={4}>4 Guests (Family)</option>
                <option value={8}>8 Guests (Small Group)</option>
                <option value={15}>15+ Guests (Corporate / Reunion)</option>
                <option value={30}>30+ Guests (Large Offsite)</option>
              </select>
            </div>

            <div>
              <button
                onClick={handleQuickCheck}
                className="w-full py-2.5 px-4 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESORT HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
            Nature Sanctuary
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
            Crafted for Relaxation, Thrill & Genuine Rest
          </h2>
          <p className="text-sm text-[#6D584B]">
            Conveniently situated in Dasanapura Hobli on the tranquil fringe of Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESORT_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-[#E8DFC8] shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="text-xs font-mono text-[#8B6B4E] font-semibold">
                0{idx + 1}.
              </div>
              <h3 className="text-lg font-serif font-bold text-[#2B1810]">
                {item.title}
              </h3>
              <p className="text-xs text-[#6D584B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STAY ACCOMMODATIONS PREVIEW (BROCHURE DESIGN WITH SINGLE HERO IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StayBrochureSection onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </section>

      {/* 5. DAY OUTING PACKAGES PREVIEW (BROCHURE DESIGN MATCHING IMAGE 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DayOutingBrochureSection onOpenBooking={onOpenBooking} />
      </section>

      {/* 6. KEY AMENITIES */}
      <section className="bg-[#F3EDE2] py-16 border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Resort Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
              Everything You Need for Fun & Leisure
            </h2>
            <p className="text-sm text-[#6D584B]">
              Identical authentic facilities as Kalaravaa Farms: swimming pool, DJ rain dance floor, 20+ adventure courses, and indoor recreation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white p-5 rounded-xl border border-[#E8DFC8] space-y-2.5 shadow-sm"
              >
                <div className="text-[11px] font-semibold text-[#8B6B4E] uppercase tracking-wide">
                  {amenity.category}
                </div>
                <h3 className="text-base font-serif font-bold text-[#2B1810]">
                  {amenity.title}
                </h3>
                <p className="text-xs text-[#6D584B] leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESORT ACTIVITIES PREVIEW (BROCHURE DESIGN MATCHING IMAGE 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActivitiesBrochureSection onOpenBooking={() => onOpenBooking('day-outing')} />
      </section>

      {/* 8. POPULAR ACTIVITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Activity Guides
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
              Explore Detailed Activity Descriptions
            </h2>
            <p className="text-sm text-[#6D584B]">
              From canopy ziplining and Burma bridges to snooker lounges and volleyball courts.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#EFE7D8] rounded-lg">
            {(['all', 'adventure', 'water', 'outdoor', 'indoor'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveActivityTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer capitalize ${
                  activeActivityTab === tab
                    ? 'bg-white text-[#2B1810] shadow-sm font-semibold'
                    : 'text-[#6D584B] hover:text-[#2B1810]'
                }`}
              >
                {tab === 'all' ? 'All Activities' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white p-6 rounded-xl border border-[#E8DFC8] space-y-3 hover:border-[#D5C4AC] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#8B6B4E]">
                  <span className="capitalize">{act.category}</span>
                  {act.highlight && (
                    <span className="text-[10px] font-semibold bg-[#D4AF37]/20 text-[#6A5210] px-2 py-0.5 rounded">
                      {act.highlight}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#2B1810]">
                  {act.title}
                </h3>
                <p className="text-xs text-[#6D584B] leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8DFC8] flex items-center justify-between text-[11px] text-[#7A695B]">
                <span>{act.suitableFor}</span>
                <span className="font-medium text-[#2E5A36]">{act.safetyLevel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('activities')}
            className="px-6 py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore All 25+ Activities with Schedules</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. QUICK LINKS WITH ALL PAGES SHORT SUMMARIES (Requested explicitly) */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Explore Everything
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
              Discover All Sections of Teakwood Resort
            </h2>
            <p className="text-sm text-[#6D584B]">
              Quick navigation and comprehensive overviews for each page on our website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAGE_SUMMARIES.map((page) => (
              <div
                key={page.id}
                onClick={() => onNavigate(page.id as PageId)}
                className="bg-white p-6 rounded-xl border border-[#E8DFC8] hover:border-[#5C3A21] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[#8B6B4E]">
                    {page.kicker}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#2B1810] group-hover:text-[#5C3A21] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-[#6D584B] leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-xs font-semibold text-[#5C3A21] group-hover:text-[#432A17]">
                  <span>{page.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS FROM PREVIOUS GUESTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
            Guest Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
            Stories from Our Guests
          </h2>
          <p className="text-sm text-[#6D584B]">
            From corporate tech teams to relaxed multi-generational family getaways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-[#E8DFC8] shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <div className="text-xs text-[#8B6B4E] font-medium">
                  {t.occasion}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3B32] italic leading-relaxed">
                "{t.comment}"
              </p>

              <div className="pt-3 border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#7A695B]">
                <div>
                  <div className="font-semibold text-[#2B1810]">{t.guestName}</div>
                  <div>{t.roleOrLocation}</div>
                </div>
                <div className="text-[11px] text-[#9B8C7E]">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-[#FAF7F2] py-12 border-y border-[#E8DFC8]">
        <FAQSection
          title="Resort FAQs & Guest Policies"
          subtitle="Everything you need to know about check-in/check-out timings, pet friendliness, swimming attire, and dining inclusions at Teakwood Resort."
          showBrochureCta={true}
        />
      </section>

      {/* 10. LOCATION & DIRECT CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C1810] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              Location & Quick Reservations
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Visit Us at Ravuthanahalli, Dasanapura Hobli
            </h2>
            <p className="text-sm text-[#E0D2C3] leading-relaxed">
              Located at <strong>{RESORT_INFO.address}</strong>. Direct highway access via Tumkur Road / NH 48 with smooth approach roads. Call our booking desk at <strong>{RESORT_INFO.phone}</strong> for quick route guidance or instant reservations.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C29D29] text-[#1E120B] font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Open Google Maps Route</span>
              </a>

              <a
                href={`tel:${RESORT_INFO.phoneRaw}`}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call +91 88611 38889</span>
              </a>

              <button
                onClick={() => onNavigate('contact-us')}
                className="px-4 py-3 text-xs text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              >
                View Full Route Guide & FAQ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
