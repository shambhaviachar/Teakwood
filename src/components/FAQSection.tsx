import React, { useState } from 'react';
import { FAQS, FAQItem, RESORT_INFO } from '../data/resortData';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Clock, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  MessageCircle, 
  Phone,
  HelpCircle
} from 'lucide-react';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  defaultCategory?: 'all' | 'timings' | 'pets' | 'policies' | 'facilities';
  showBrochureCta?: boolean;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Clear answers regarding resort policies, pet friendliness, check-in/check-out timings, and day outing details.",
  defaultCategory = 'all',
  showBrochureCta = true,
  className = ""
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // first open by default

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'timings', label: 'Check-in & Timings' },
    { id: 'pets', label: 'Pet Policy' },
    { id: 'policies', label: 'Resort Policies' },
    { id: 'facilities', label: 'Facilities & Food' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const expandAll = () => {
    setOpenIndices(filteredFaqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <section className={`w-full max-w-5xl mx-auto px-4 sm:px-6 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
          <HelpCircle className="w-4 h-4 text-[#5C3A21]" />
          <span>Resort Guidelines & Policies</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2B1810]">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-[#6D584B] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Quick Search & Category Tabs */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto gap-1.5 p-1 bg-[#EFE7D8] rounded-xl border border-[#D5C4AC]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndices([0]);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#5C3A21] text-[#FAF7F2] shadow-sm'
                    : 'text-[#6D584B] hover:text-[#2B1810]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8B6B4E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search policies, timings, pets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C3A21] text-[#2B1810]"
            />
          </div>
        </div>

        {/* Expand / Collapse Control */}
        <div className="flex items-center justify-between text-xs text-[#8B6B4E] px-1">
          <span>Showing {filteredFaqs.length} answered questions</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-[#5C3A21] hover:underline cursor-pointer"
            >
              Expand All
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-[#5C3A21] hover:underline cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Questions */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white p-8 text-center rounded-2xl border border-[#E8DFC8] space-y-2">
            <p className="text-sm font-semibold text-[#2B1810]">
              No questions found matching "{searchQuery}".
            </p>
            <p className="text-xs text-[#7A695B]">
              You can contact our reservations desk directly on WhatsApp or phone.
            </p>
            <a
              href={RESORT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 mt-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp: +91 88611 38889</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8DFC8] overflow-hidden transition-colors hover:border-[#D5C4AC]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#2B1810] pr-2">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-full bg-[#FAF7F2] text-[#5C3A21] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8B6B4E]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C4A3E] leading-relaxed border-t border-[#E8DFC8]/60 bg-[#FDFCF9]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Brochure & WhatsApp Support Banner */}
      {showBrochureCta && (
        <div className="mt-10 bg-[#EFE7D8] p-6 rounded-2xl border border-[#D5C4AC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#5C3A21] text-[#FAF7F2] flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#2B1810]">
                Teakwood Resort Official Brochure
              </h4>
              <p className="text-xs text-[#6D584B] mt-0.5">
                Download the official PDF brochure featuring package tariffs, activity lists, and resort policies.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={RESORT_INFO.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Brochure (PDF)</span>
            </a>
            <a
              href={RESORT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask a Policy Question</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
