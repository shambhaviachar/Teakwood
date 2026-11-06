import React from 'react';
import { RESORT_INFO, RESORT_IMAGES } from '../data/resortData';
import { FAQSection } from '../components/FAQSection';
import { ShieldCheck, Heart, Award, Sparkles, MapPin, Phone, ArrowRight, FileText } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              Our Heritage & Philosophy
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              About Teakwood Resort
            </h1>
            <p className="text-sm sm:text-base text-[#D8C7B6] leading-relaxed font-light">
              Founded with a vision to preserve Bengaluru's indigenous teak groves while providing high-standard eco-hospitality for families and corporate teams. Nature stays with a soul.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
            <img
              src={RESORT_INFO.logoUrl}
              alt="Teakwood Resort Emblem"
              className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-[#D4AF37]"
            />
            <div className="space-y-1">
              <div className="text-sm font-serif font-bold text-[#FAF7F2]">
                Teakwood Resort
              </div>
              <div className="text-xs text-[#D4AF37] italic font-serif">
                {RESORT_INFO.tagline}
              </div>
              <a
                href={RESORT_INFO.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#FAF7F2] bg-[#5C3A21] px-2.5 py-1 rounded hover:bg-[#724829] transition-colors mt-1"
              >
                <FileText className="w-3 h-3 text-[#D4AF37]" />
                <span>Download Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section with 2-col layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
                Rooted in Nature
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
                A Living Sanctuary in Dasanapura Hobli
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed">
              When we first walked through Survey No. 53/9 in Ravuthanahalli, we were captivated by the quiet majesty of hundreds of mature teak trees. Rather than clearing the land for concrete towers, we made a vow: <em>not a single mature teak tree would be cut down</em>.
            </p>

            <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed">
              Every villa, winding garden pathway, swimming pool deck, and adventure suspension bridge was mapped around the existing tree canopy. The result is a cool, oxygen-rich microclimate where temperatures are visibly cooler than downtown Bengaluru, accompanied by birdsong and rustling leaves.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-[#E8DFC8] space-y-1">
                <div className="font-serif font-bold text-2xl text-[#5C3A21] tabular-nums">10+</div>
                <div className="font-semibold text-[#2B1810]">Acres of Teak Canopy</div>
                <div className="text-[#7A695B] text-[11px]">Unspoiled nature preserve</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E8DFC8] space-y-1">
                <div className="font-serif font-bold text-2xl text-[#5C3A21] tabular-nums">500+</div>
                <div className="font-semibold text-[#2B1810]">Mature Teak Trees</div>
                <div className="text-[#7A695B] text-[11px]">Carefully preserved & nurtured</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#E8DFC8]">
            <img
              src={RESORT_IMAGES.hero}
              alt="Teakwood Resort Grounds"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Eco Sustainability Commitments */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Sustainability in Action
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
              How We Protect Our Surroundings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
              <div className="text-sm font-mono text-[#8B6B4E] font-bold">01.</div>
              <h3 className="font-serif font-bold text-lg text-[#2B1810]">Solar Powered Hot Water</h3>
              <p className="text-xs text-[#6D584B] leading-relaxed">
                All guest villas and showers utilize high-capacity solar thermal systems for hot water throughout the year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
              <div className="text-sm font-mono text-[#8B6B4E] font-bold">02.</div>
              <h3 className="font-serif font-bold text-lg text-[#2B1810]">Rainwater Recharging</h3>
              <p className="text-xs text-[#6D584B] leading-relaxed">
                Surface runoff is funneled into dedicated percolation pits to replenish the regional groundwater table.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
              <div className="text-sm font-mono text-[#8B6B4E] font-bold">03.</div>
              <h3 className="font-serif font-bold text-lg text-[#2B1810]">Zero Single-Use Plastic</h3>
              <p className="text-xs text-[#6D584B] leading-relaxed">
                We provide purified drinking water in sanitized glass carafes and reusable eco-friendly cutlery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
              <div className="text-sm font-mono text-[#8B6B4E] font-bold">04.</div>
              <h3 className="font-serif font-bold text-lg text-[#2B1810]">Farm-to-Table Fresh</h3>
              <p className="text-xs text-[#6D584B] leading-relaxed">
                Herbs, greens, and seasonal produce are sourced from neighborhood Dasanapura organic cultivators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Policies & FAQ */}
      <section className="bg-[#FAF7F2] py-6 border-y border-[#E8DFC8]">
        <FAQSection
          title="About Our Policies & Guest Guidelines"
          subtitle="Learn about pet friendliness, check-in timings, swimming pool attire, and eco-initiatives at Teakwood Resort."
          defaultCategory="pets"
          showBrochureCta={true}
        />
      </section>

      {/* Location & Invitation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-[#2B1810]">
            We Look Forward to Welcoming You
          </h3>
          <p className="text-xs sm:text-sm text-[#6D584B] max-w-lg mx-auto">
            Located at Sy.no.53/9, Ravuthanahalli, kithanahalli post, Dasanapura Hobli, Bengaluru 562130. Open all 365 days of the year.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Book Your Experience
          </button>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-6 py-3 border border-[#D5C4AC] text-[#2B1810] hover:bg-[#FAF7F2] font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            Get Location Directions
          </button>
        </div>
      </section>
    </div>
  );
};
