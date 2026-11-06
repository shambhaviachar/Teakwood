import React, { useState } from 'react';
import { ACCOMMODATIONS, RESORT_INFO } from '../data/resortData';
import { StayBrochureSection } from '../components/StayBrochureSection';
import { 
  Check, 
  Clock, 
  Users, 
  Utensils, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Coffee,
  Waves,
  ArrowRight,
  Images
} from 'lucide-react';
import { PageId } from '../types';

interface StayPageProps {
  onOpenBooking: (type?: 'stay' | 'day-outing', itemId?: string) => void;
  onNavigate?: (page: PageId) => void;
}

export const StayPage: React.FC<StayPageProps> = ({ onOpenBooking, onNavigate }) => {

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            Accommodations & Tariffs
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Overnight Stay Packages
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B6] max-w-2xl leading-relaxed font-light">
            Surround yourself with mature teak trees and cool night breezes. Every overnight stay includes 4 grand buffet meals, unlimited pool access, DJ rain dance sessions, and 20+ adventure activities.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#E8DFC8]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Check-in: From 1:00 PM</span>
            </div>
            <span aria-hidden="true" className="text-[#8D6B52]">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Check-out: At 11:00 AM</span>
            </div>
            <span aria-hidden="true" className="text-[#8D6B52]">·</span>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#D4AF37]" />
              <span>Welcome Drink, Breakfast, Lunch, Hi-Tea & Dinner Included</span>
            </div>
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

      {/* Primary Stay Brochure Design View matching Image 2 / Day Outing Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StayBrochureSection onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </section>

      {/* Detailed Accommodations Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-4">
          <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
            Detailed Accommodation Specifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
            Room Amenities, Inclusions & Gallery
          </h2>
          <p className="text-sm text-[#6D584B]">
            Compare bed configurations, square footage, bathroom finishes, and amenities for each accommodation type.
          </p>
        </div>

        {ACCOMMODATIONS.map((room) => {
          return (
            <div
              key={room.id}
              id={room.id}
              className="bg-white rounded-3xl border border-[#E8DFC8] overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Single Image Column */}
              <div className="lg:col-span-5 relative bg-[#24160E]/10 p-4 sm:p-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DFC8] bg-black shadow-xs group">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {room.badge && (
                    <div className="absolute top-3 left-3 bg-[#5C3A21] text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {room.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#E8DFC8] pb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1810]">
                        {room.name}
                      </h2>
                      <p className="text-xs text-[#8B6B4E] font-medium mt-0.5">
                        {room.tagline}
                      </p>
                    </div>

                    {/* Signature Orange Price Capsule Button */}
                    <button
                      type="button"
                      onClick={() => onOpenBooking('stay', room.id)}
                      className="self-start inline-flex items-center gap-3 bg-gradient-to-r from-[#F57C00] via-[#FF8F00] to-[#FFA000] hover:from-[#E65100] hover:to-[#F57C00] text-white px-5 py-2 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                    >
                      <div className="text-left">
                        <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95 leading-none mb-0.5">
                          PER HEAD
                        </div>
                        <div className="text-lg font-bold leading-none tracking-tight">
                          Rs. {room.pricePerPerson.toLocaleString('en-IN')}<span className="text-[10px] font-normal opacity-90 ml-0.5">+GST</span>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white text-[#F57C00] flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                    {room.description}
                  </p>

                  {/* Specs metadata */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#4A3B32] py-2 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFC8]">
                    <div>
                      <span className="text-[#8B6B4E] block text-[10px] uppercase font-semibold">Capacity</span>
                      <span className="font-medium">{room.capacity}</span>
                    </div>
                    <div>
                      <span className="text-[#8B6B4E] block text-[10px] uppercase font-semibold">Bedding</span>
                      <span className="font-medium">{room.bedType}</span>
                    </div>
                    <div>
                      <span className="text-[#8B6B4E] block text-[10px] uppercase font-semibold">Area</span>
                      <span className="font-medium">{room.roomSize}</span>
                    </div>
                  </div>

                  {/* Amenities & Inclusions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <div className="text-xs font-semibold text-[#2B1810] mb-2 uppercase tracking-wide">
                        Room Amenities
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#5C4A3E]">
                        {room.amenities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#2E5A36] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#2B1810] mb-2 uppercase tracking-wide">
                        Buffet Meals Included
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#5C4A3E]">
                        {room.mealsIncluded.map((meal, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Utensils className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{meal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Orange Inclusions chips */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-serif font-medium text-[#2B1810]">
                      Key Inclusions:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feat, i) => (
                        <span
                          key={i}
                          className="inline-block border border-[#F57C00]/80 bg-[#FFF9F5] text-[#2B1810] text-xs font-medium px-3 py-1 rounded-full shadow-xs"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Strip */}
                <div className="pt-4 border-t border-[#E8DFC8] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#2E5A36] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Free Cancellation before 48 hrs</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenBooking('stay', room.id)}
                      className="px-6 py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      Book This Room
                    </button>
                    <a
                      href={RESORT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-[#D5C4AC] text-[#2B1810] hover:bg-[#FAF7F2] font-medium text-xs rounded-lg transition-colors"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Standard Inclusions Checklist */}
      <section className="bg-[#F3EDE2] py-14 border-y border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2B1810]">
              Every Stay Includes
            </h3>
            <p className="text-xs text-[#6D584B]">
              No hidden activity charges. Full access to resort leisure and meals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl border border-[#E8DFC8] space-y-1">
              <Utensils className="w-5 h-5 text-[#5C3A21] mx-auto" />
              <div className="text-xs font-bold text-[#2B1810]">4 Buffet Meals</div>
              <div className="text-[11px] text-[#7A695B]">Lunch to Breakfast</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8DFC8] space-y-1">
              <Waves className="w-5 h-5 text-[#5C3A21] mx-auto" />
              <div className="text-xs font-bold text-[#2B1810]">Swimming Pool</div>
              <div className="text-[11px] text-[#7A695B]">Clean deck & loungers</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8DFC8] space-y-1">
              <Sparkles className="w-5 h-5 text-[#5C3A21] mx-auto" />
              <div className="text-xs font-bold text-[#2B1810]">DJ Rain Dance</div>
              <div className="text-[11px] text-[#7A695B]">Live music sessions</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8DFC8] space-y-1">
              <Coffee className="w-5 h-5 text-[#5C3A21] mx-auto" />
              <div className="text-xs font-bold text-[#2B1810]">Campfire & Music</div>
              <div className="text-[11px] text-[#7A695B]">Evening bonfire pit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Assistant Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white p-8 rounded-2xl border border-[#E8DFC8] space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#2B1810]">
            Planning a Group Stay or Corporate Offsite?
          </h3>
          <p className="text-xs sm:text-sm text-[#6D584B] max-w-xl mx-auto">
            We provide custom group discounts, exclusive lawn allocations, meeting projector setups, and team-building coordinators for groups of 10 or more.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href={`tel:${RESORT_INFO.phoneRaw}`}
              className="px-6 py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Manager: +91 88611 38889</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
