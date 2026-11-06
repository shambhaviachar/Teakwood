import React, { useState } from 'react';
import { ACTIVITIES_DATA, RESORT_INFO } from '../data/resortData';
import { ActivityItem } from '../types';
import { ActivitiesBrochureSection } from '../components/ActivitiesBrochureSection';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle2, 
  Phone, 
  Waves, 
  Flame, 
  Gamepad2, 
  TreePine, 
  Trophy, 
  FileText,
  Bike,
  Mountain,
  Footprints,
  Target,
  CloudRain,
  Zap,
  Crown,
  CircleDot,
  Globe,
  Send,
  Layers
} from 'lucide-react';

interface ActivitiesPageProps {
  onOpenBooking: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'adventure', label: 'Rope & Adventure' },
    { id: 'water', label: 'Water & Rain Dance' },
    { id: 'outdoor', label: 'Outdoor Turf Sports' },
    { id: 'indoor', label: 'Indoor Lounge Games' },
    { id: 'evening', label: 'Campfire & Nature' }
  ];

  const filtered = selectedCategory === 'all'
    ? ACTIVITIES_DATA
    : ACTIVITIES_DATA.filter(a => a.category === selectedCategory);

  const getActivityIcon = (act: ActivityItem) => {
    const title = act.title.toLowerCase();
    if (title.includes('cycle') || title.includes('bike')) return Bike;
    if (title.includes('climb') || title.includes('wall')) return Mountain;
    if (title.includes('archery') || title.includes('target')) return Target;
    if (title.includes('tyre') || title.includes('tire')) return Layers;
    if (title.includes('zipline') || title.includes('wire')) return Send;
    if (title.includes('rope') || title.includes('bridge') || title.includes('burma') || title.includes('commando')) return Footprints;
    if (title.includes('pool') || title.includes('swim')) return Waves;
    if (title.includes('rain') || title.includes('dance')) return CloudRain;
    if (title.includes('cricket') || title.includes('tournament')) return Trophy;
    if (title.includes('volley')) return Globe;
    if (title.includes('badminton')) return Zap;
    if (title.includes('chess')) return Crown;
    if (title.includes('tennis') || title.includes('snooker') || title.includes('ping pong') || title.includes('pickleball')) return CircleDot;
    if (title.includes('campfire') || title.includes('bonfire')) return Flame;
    if (title.includes('foosball') || title.includes('carrom') || title.includes('ludo')) return Gamepad2;
    return Sparkles;
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            Recreation & Adventure
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            25+ Curated Resort Activities
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B6] max-w-2xl leading-relaxed font-light">
            Designed for thrill seekers, sports lovers, and people who simply want to kick off their shoes and dance in the rain. Guided by certified safety instructors.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E8DFC8]">
            <span className="font-semibold text-[#D4AF37]">Included Free in All Packages</span>
            <span aria-hidden="true" className="text-[#8D6B52]">·</span>
            <span>Safety Harnesses & Helmets Provided</span>
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

      {/* Official Brochure Activities Design View matching Image 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActivitiesBrochureSection onOpenBooking={onOpenBooking} />
      </section>

      {/* Filter Tabs & Detailed Modern Cards with Icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h3 className="text-2xl font-serif font-bold text-[#2B1810]">
            Activity Guides & Safety Details
          </h3>
          <p className="text-xs text-[#6D584B]">
            Browse safety protocols and age recommendations for each activity.
          </p>
        </div>
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#5C3A21] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#5C4A3E] border border-[#E8DFC8] hover:border-[#D5C4AC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern Website Activities Grid with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((act) => {
            const IconComp = getActivityIcon(act);

            return (
              <div
                key={act.id}
                className="bg-white p-6 rounded-3xl border border-[#E8DFC8] hover:border-[#F57C00] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8B6B4E]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] text-[#F57C00] flex items-center justify-center group-hover:bg-[#F57C00] group-hover:text-white transition-all shadow-2xs">
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    {act.highlight ? (
                      <span className="text-[10px] font-bold bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2] px-2.5 py-0.5 rounded-full">
                        {act.highlight}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-[#8B6B4E] uppercase tracking-wider">
                        {act.category} Activity
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2B1810] group-hover:text-[#F57C00] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs text-[#5C4A3E] leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#7A695B]">
                    <span>Audience:</span>
                    <span className="font-medium text-[#2B1810]">{act.suitableFor}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#7A695B]">
                    <span>Safety:</span>
                    <span className="font-semibold text-[#2E5A36]">{act.safetyLevel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety & Guidelines Strip */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#2B1810]">
              Guest Safety & Pool Rules
            </h2>
            <p className="text-xs text-[#6D584B]">
              Your security and well-being are paramount at Teakwood Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5C4A3E]">
            <div className="bg-white p-5 rounded-xl border border-[#E8DFC8] space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#2E5A36]" />
              <h4 className="font-semibold text-[#2B1810] text-sm">Certified Equipment</h4>
              <p className="leading-relaxed">
                All cables, harnesses, carabiners, and pulleys undergo mandatory weekly inspections and safety load tests.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#E8DFC8] space-y-2">
              <Waves className="w-5 h-5 text-[#5C3A21]" />
              <h4 className="font-semibold text-[#2B1810] text-sm">Pool Hygiene & Wear</h4>
              <p className="leading-relaxed">
                Nylon/lycra swimwear is required. Our pools are treated with automated multi-stage filtration every day.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#E8DFC8] space-y-2">
              <Users className="w-5 h-5 text-[#D4AF37]" />
              <h4 className="font-semibold text-[#2B1810] text-sm">Trained Instructors</h4>
              <p className="leading-relaxed">
                Experienced marshals assist children and adults at all rope courses, ziplines, and sports zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#2B1810]">
          Ready to Test Your Balance on the Burma Bridge?
        </h3>
        <p className="text-xs sm:text-sm text-[#6D584B] max-w-md mx-auto">
          Book your day outing or overnight stay now and enjoy all 25+ activities included in your package.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            Book Outing with Activities
          </button>
        </div>
      </section>
    </div>
  );
};
