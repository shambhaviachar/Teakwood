import React from 'react';
import { DAY_OUTING_PACKAGES, RESORT_INFO } from '../data/resortData';
import { DayOutingBrochureSection } from '../components/DayOutingBrochureSection';
import { 
  Clock, 
  Check, 
  Utensils, 
  Users, 
  Sparkles, 
  Phone, 
  Waves, 
  Music, 
  Award,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface DayOutingPageProps {
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
}

export const DayOutingPage: React.FC<DayOutingPageProps> = ({ onOpenBooking }) => {
  const scheduleItems = [
    { time: "09:00 AM", title: "Arrival & Breakfast Spread", desc: "Enjoy steaming hot idlis, vadas, dosas, and filter coffee (Teak Pulse package)." },
    { time: "10:00 AM", title: "Welcome Drinks & Briefing", desc: "Chilled fresh fruit welcome drink, activity band allocation, and locker access." },
    { time: "10:30 AM", title: "Adventure Courses & Lawn Sports", desc: "Tackle the Zipline, Burma bridge, commando net, cricket turf, and volleyball." },
    { time: "01:00 PM", title: "Grand Buffet Feast", desc: "Multi-cuisine spread with authentic Karnataka curries, biryani, tandoori rotis, and desserts." },
    { time: "02:30 PM", title: "Indoor Recreation & Lounge", desc: "Cool off in the games pavilion with Snooker, Table Tennis, Foosball, and Carrom." },
    { time: "03:30 PM", title: "Swimming Pool & DJ Rain Dance", desc: "High-energy beats from our in-house DJ accompanied by refreshing overhead rain mist." },
    { time: "05:00 PM", title: "Evening High-Tea & Hot Snacks", desc: "Crispy fritters/bajjis with freshly brewed tea, coffee, and evening group photos." },
    { time: "06:00 PM", title: "Departure with Happy Memories", desc: "Wrap up the day refreshed, energized, and ready for the week ahead." }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            Day Packages & Picnics
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Day Outing at Teakwood Resort
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B6] max-w-2xl leading-relaxed font-light">
            Spend a day filled with laughter, adventure ropes, crystal swimming pool, and high-energy DJ rain dance. Includes lavish buffet meals and access to all games.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E8DFC8]">
            <span className="font-semibold text-[#D4AF37]">Teak Pulse: 9:00 AM – 6:00 PM · Teak Venture: 10:00 AM – 6:00 PM</span>
            <span aria-hidden="true" className="text-[#8D6B52]">·</span>
            <span>All Buffet Meals & Snacks Included</span>
            <span aria-hidden="true" className="text-[#8D6B52]">·</span>
            <a
              href={RESORT_INFO.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline font-semibold"
            >
              Download Brochure (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Primary Brochure Design View matching Image 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DayOutingBrochureSection onOpenBooking={onOpenBooking} />
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
            Package Comparison
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
            Detailed Day Outing Inclusions
          </h2>
          <p className="text-sm text-[#6D584B]">
            Compare meals, activities, and timings for Teak Venture, Teak Pulse, and Corporate Outings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DAY_OUTING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between p-6 sm:p-8 ${
                pkg.popular 
                  ? 'border-[#5C3A21] ring-2 ring-[#5C3A21]/20 shadow-md relative' 
                  : 'border-[#E8DFC8] shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-[#E8DFC8] pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8B6B4E] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.timing}</span>
                    </span>
                    {pkg.badge && (
                      <span className="text-[10px] font-semibold bg-[#5C3A21] text-[#FAF7F2] px-2.5 py-0.5 rounded">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2B1810]">
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-3xl font-serif font-bold text-[#5C3A21] tabular-nums">
                      ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#7A695B]">
                      {pkg.taxNote}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#6D584B] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Meals */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#2B1810] uppercase tracking-wide">
                    Buffet Meals Included
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#5C4A3E]">
                    {pkg.mealsIncluded.map((meal, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Utensils className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{meal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Inclusions */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#2B1810] uppercase tracking-wide">
                    Package Inclusions
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#5C4A3E]">
                    {pkg.keyInclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2E5A36] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-[#E8DFC8] space-y-2 mt-6">
                <button
                  onClick={() => onOpenBooking('day-outing', pkg.id)}
                  className="w-full py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Book This Package
                </button>
                <div className="text-center text-[10px] text-[#8B6B4E]">
                  Recommended for: {pkg.recommendedFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typical Day Itinerary */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8DFC8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Sample Flow
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
              How Your Day Unfolds
            </h2>
            <p className="text-xs sm:text-sm text-[#6D584B]">
              A balance of active play, culinary indulgence, and laid-back relaxation.
            </p>
          </div>

          <div className="space-y-6">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-xl border border-[#E8DFC8] flex items-start gap-4 shadow-sm"
              >
                <div className="px-3 py-1.5 bg-[#F3EDE2] text-[#5C3A21] text-xs font-mono font-bold rounded-lg shrink-0">
                  {item.time}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#2B1810]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6D584B] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Outing Details Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24160E] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#3E2419]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                Corporate Team Outings
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                Boost Team Morale & Connection
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C7B6] leading-relaxed">
                Whether you have a team of 15 or 300, our spacious lawn spaces, sound setup, and team facilitators ensure smooth execution. We provide corporate GST invoices, vegetarian/non-vegetarian customization, and private presentation areas.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${RESORT_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#C29D29] text-[#1E120B] font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Corporate Desk: +91 88611 38889</span>
                </a>
                <button
                  onClick={() => onOpenBooking('day-outing', 'corporate-summit-outing')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Request Bulk Quote
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-base font-serif font-bold text-[#D4AF37]">200+</div>
                <div className="text-[#FAF7F2] font-semibold">Corporate Groups</div>
                <div className="text-[#BDB0A3] text-[11px]">Hosted smoothly in 2026</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-base font-serif font-bold text-[#D4AF37]">PA System</div>
                <div className="text-[#FAF7F2] font-semibold">Audio & Microphones</div>
                <div className="text-[#BDB0A3] text-[11px]">For addresses and awards</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-base font-serif font-bold text-[#D4AF37]">Cricket Turf</div>
                <div className="text-[#FAF7F2] font-semibold">Tournament Ready</div>
                <div className="text-[#BDB0A3] text-[11px]">With match kits provided</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-base font-serif font-bold text-[#D4AF37]">Live DJ</div>
                <div className="text-[#FAF7F2] font-semibold">Rain Dance Floor</div>
                <div className="text-[#BDB0A3] text-[11px]">High-energy dance sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
