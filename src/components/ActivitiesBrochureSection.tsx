import React, { useState } from 'react';
import { 
  Target, 
  Dices, 
  Bike, 
  Mountain, 
  Footprints, 
  Trees, 
  ChevronsUp, 
  Waves, 
  CloudRain, 
  Trophy, 
  Globe, 
  Zap, 
  Crown, 
  CircleDot, 
  Square, 
  Sparkles, 
  Layers, 
  Send,
  ArrowRight,
  Info
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface ActivitiesBrochureSectionProps {
  onOpenBooking?: () => void;
  className?: string;
}

interface ActivityItemWithIcon {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const ActivitiesBrochureSection: React.FC<ActivitiesBrochureSectionProps> = ({
  onOpenBooking,
  className = ""
}) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const adventureActivities: ActivityItemWithIcon[] = [
    { name: "Zipline", desc: "Glide across the mature teakwood canopy on a 150m steel cable.", icon: Send, tag: "150m High Wire" },
    { name: "Sky Cycle", desc: "Pedal a bicycle suspended high along an aerial steel wire with safety harness.", icon: Bike, tag: "Canopy Aerial" },
    { name: "Low Rope Course", desc: "Fun balancing obstacle tests close to soft turf for all ages.", icon: Footprints, tag: "Agility Obstacles" },
    { name: "Archery", desc: "Traditional recurve bows and target range guided by certified instructors.", icon: Target, tag: "Precision Bullseye" },
    { name: "Tyre Wall Climbing", desc: "Vertical obstacle wall crafted from rugged vehicle tyres.", icon: Layers, tag: "Strength & Grip" },
    { name: "Wall Climbing", desc: "Steep climbing wall with multiple hand/foot holds and safety rope belay.", icon: Mountain, tag: "Vertical Belay" },
    { name: "Ladder climbing", desc: "Suspended rope ladder climb testing balance and agility.", icon: ChevronsUp, tag: "Rope Agility" },
    { name: "High Rope Course", desc: "Elevated aerial bridges and rope challenges nestled high in the treetops.", icon: Trees, tag: "Treetop Challenge" }
  ];

  const outdoorFun: ActivityItemWithIcon[] = [
    { name: "Swimming Pool", desc: "Crystal clear water pool with wooden sun loungers and umbrella deck.", icon: Waves, tag: "Adult & Kids Pool" },
    { name: "Rain Dance", desc: "High energy mist showers with curated DJ party music.", icon: CloudRain, tag: "DJ Mist Arena" },
    { name: "Cricket", desc: "Open green turf with tournament bats, balls & stumps provided.", icon: Trophy, tag: "Turf Pitch" },
    { name: "Volleyball", desc: "Soft sand court for lively group and corporate matches.", icon: Globe, tag: "Beach Sand Court" },
    { name: "Badminton", desc: "Dedicated court with responsive racquets and shuttles provided.", icon: Zap, tag: "Racquet Court" }
  ];

  const indoorGames: ActivityItemWithIcon[] = [
    { name: "Chess", desc: "Classic strategic board game sets in the shaded breeze lounge.", icon: Crown, tag: "Grandmaster Boards" },
    { name: "Table Tennis", desc: "Championship ping pong tables with high-spin paddles.", icon: CircleDot, tag: "Fast Rallies" },
    { name: "Ludo", desc: "Beloved multiplayer board game for nostalgic family fun.", icon: Dices, tag: "Classic Family" },
    { name: "Carrom", desc: "Tournament grade carrom boards with smooth coins and striker.", icon: Square, tag: "Carrom Boards" },
    { name: "Pickleball", desc: "Fast-paced paddle sport combining elements of tennis and badminton.", icon: Sparkles, tag: "Paddle Sport" }
  ];

  const allActivitiesList = [...adventureActivities, ...outdoorFun, ...indoorGames];

  return (
    <div className={`w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-lg border border-[#E8DFC8] relative overflow-hidden ${className}`}>
      {/* Top Tagline matching Image 1 */}
      <div className="text-center space-y-1.5 mb-10 relative">
        <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
          Included Free with All Packages
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B1810] tracking-tight">
          Reconnect, Explore, Experience
        </h2>
        <div className="text-sm sm:text-base font-serif italic text-[#5C4A3E]">
          Unforgettable Adventures Just Outside Bangalore
        </div>

        {/* Archery Target Graphic Accent */}
        <div className="hidden sm:flex absolute left-0 top-0 items-center justify-center w-12 h-12 rounded-2xl bg-[#FFF3E0] border border-[#FFE0B2] text-[#F57C00] shadow-xs">
          <Target className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-12">
        {/* SECTION 1: ADVENTURE ACTIVITIES */}
        <div className="space-y-5">
          <div className="text-center">
            {/* Hollow stroked background title from Image 1 */}
            <div 
              className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-transparent select-none leading-none mb-1 opacity-50"
              style={{ WebkitTextStroke: '1.5px #D0C5B4' }}
            >
              ADVENTURE ACTIVITIES
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#2B1810] font-semibold">
              Adventure Activities
            </h3>
          </div>

          {/* Modern Website Style Activity Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            {adventureActivities.map((act) => {
              const IconComp = act.icon;
              const isSelected = selectedActivity === act.name;

              return (
                <button
                  key={act.name}
                  type="button"
                  onClick={() => setSelectedActivity(isSelected ? null : act.name)}
                  className={`group p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 relative ${
                    isSelected 
                      ? 'border-[#F57C00] bg-[#FFF9F5] ring-2 ring-[#F57C00]/30 shadow-md scale-[1.02]' 
                      : 'border-[#E8DFC8] bg-white hover:border-[#F57C00] hover:bg-[#FAF7F2] hover:shadow-sm'
                  }`}
                >
                  {/* Icon Tile */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'bg-[#F57C00] text-white shadow-xs' 
                      : 'bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] text-[#F57C00] group-hover:bg-[#F57C00] group-hover:text-white'
                  }`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title & Tag */}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-[#2B1810] group-hover:text-[#F57C00] transition-colors truncate">
                      {act.name}
                    </div>
                    <div className="text-[10px] text-[#8B6B4E] uppercase tracking-wider font-medium truncate">
                      {act.tag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot */}
        <div className="relative flex items-center py-1" aria-hidden="true">
          <div className="h-[2px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* SECTION 2: OUTDOOR FUN */}
        <div className="space-y-5">
          <div className="text-center">
            {/* Hollow stroked background title from Image 1 */}
            <div 
              className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-transparent select-none leading-none mb-1 opacity-50"
              style={{ WebkitTextStroke: '1.5px #D0C5B4' }}
            >
              OUTDOOR FUN
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#2B1810] font-semibold">
              Outdoor Fun
            </h3>
          </div>

          {/* Modern Website Style Activity Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {outdoorFun.map((act) => {
              const IconComp = act.icon;
              const isSelected = selectedActivity === act.name;

              return (
                <button
                  key={act.name}
                  type="button"
                  onClick={() => setSelectedActivity(isSelected ? null : act.name)}
                  className={`group p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 relative ${
                    isSelected 
                      ? 'border-[#F57C00] bg-[#FFF9F5] ring-2 ring-[#F57C00]/30 shadow-md scale-[1.02]' 
                      : 'border-[#E8DFC8] bg-white hover:border-[#F57C00] hover:bg-[#FAF7F2] hover:shadow-sm'
                  }`}
                >
                  {/* Icon Tile */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'bg-[#F57C00] text-white shadow-xs' 
                      : 'bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] text-[#F57C00] group-hover:bg-[#F57C00] group-hover:text-white'
                  }`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title & Tag */}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-[#2B1810] group-hover:text-[#F57C00] transition-colors truncate">
                      {act.name}
                    </div>
                    <div className="text-[10px] text-[#8B6B4E] uppercase tracking-wider font-medium truncate">
                      {act.tag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Orange Accent Divider Line with Dot */}
        <div className="relative flex items-center py-1" aria-hidden="true">
          <div className="h-[2px] bg-[#F57C00] w-full rounded-full"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#F57C00] -ml-1 shrink-0 shadow-sm"></div>
        </div>

        {/* SECTION 3: INDOOR GAMES */}
        <div className="space-y-5 relative">
          <div className="text-center">
            {/* Hollow stroked background title from Image 1 */}
            <div 
              className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-transparent select-none leading-none mb-1 opacity-50"
              style={{ WebkitTextStroke: '1.5px #D0C5B4' }}
            >
              INDOOR GAMES
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#2B1810] font-semibold">
              Indoor Games
            </h3>
          </div>

          {/* Modern Website Style Activity Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {indoorGames.map((act) => {
              const IconComp = act.icon;
              const isSelected = selectedActivity === act.name;

              return (
                <button
                  key={act.name}
                  type="button"
                  onClick={() => setSelectedActivity(isSelected ? null : act.name)}
                  className={`group p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 relative ${
                    isSelected 
                      ? 'border-[#F57C00] bg-[#FFF9F5] ring-2 ring-[#F57C00]/30 shadow-md scale-[1.02]' 
                      : 'border-[#E8DFC8] bg-white hover:border-[#F57C00] hover:bg-[#FAF7F2] hover:shadow-sm'
                  }`}
                >
                  {/* Icon Tile */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'bg-[#F57C00] text-white shadow-xs' 
                      : 'bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] text-[#F57C00] group-hover:bg-[#F57C00] group-hover:text-white'
                  }`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title & Tag */}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-[#2B1810] group-hover:text-[#F57C00] transition-colors truncate">
                      {act.name}
                    </div>
                    <div className="text-[10px] text-[#8B6B4E] uppercase tracking-wider font-medium truncate">
                      {act.tag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Authentic 3D Red Dice Graphic Accent from Image 1 */}
          <div className="hidden sm:block absolute -right-4 -bottom-6 w-24 sm:w-28 md:w-32 pointer-events-none drop-shadow-md select-none z-10">
            <img
              src="/assets/aistudio/dice_clean.png"
              alt="Indoor Games at Teakwood Resort"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Selected Activity Details Popover if clicked */}
      {selectedActivity && (
        <div className="mt-8 p-4 bg-[#FFF9F5] border border-[#F57C00]/40 rounded-2xl text-xs sm:text-sm text-[#5C4A3E] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm animate-in fade-in">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2B1810] font-serif text-base block">{selectedActivity}</strong>
              <p className="mt-0.5 text-xs text-[#5C4A3E] leading-relaxed">
                {allActivitiesList.find(a => a.name === selectedActivity)?.desc}
              </p>
            </div>
          </div>
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 bg-[#5C3A21] hover:bg-[#432A17] text-white text-xs font-semibold rounded-xl shrink-0 cursor-pointer shadow-xs transition-colors self-end sm:self-auto"
            >
              Book Activity Pass
            </button>
          )}
        </div>
      )}

      {/* Grass aesthetic border along bottom */}
      <div className="mt-10 -mx-6 sm:-mx-10 md:-mx-14 -mb-6 sm:-mb-10 md:-mb-14 h-4 bg-gradient-to-r from-[#4CAF50] via-[#388E3C] to-[#2E7D32] rounded-b-3xl opacity-85" />
    </div>
  );
};
