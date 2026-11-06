import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { FAQSection } from '../components/FAQSection';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  Compass, 
  Navigation,
  FileText
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please fill out your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Teakwood Resort! My name is ${name || 'Guest'}. I am contacting you regarding ${subject}. ${message ? `Message: ${message}` : ''}`;
    window.open(`https://wa.me/${RESORT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              Contact & Reach Us
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              Plan Your Visit to Teakwood Resort
            </h1>
            <p className="text-sm sm:text-base text-[#D8C7B6] leading-relaxed font-light">
              Conveniently located in Dasanapura Hobli on the outskirts of Bengaluru. Reach out for corporate group bookings, family day outings, or overnight villa reservations.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
            <img
              src={RESORT_INFO.logoUrl}
              alt="Teakwood Resort"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
            />
            <div>
              <div className="font-serif font-bold text-sm text-[#FAF7F2]">
                Teakwood Resort
              </div>
              <div className="text-xs text-[#D4AF37] italic font-serif">
                {RESORT_INFO.tagline}
              </div>
              <div className="text-[11px] text-[#C8B6A4] mt-1">
                Check-in: 1:00 PM · Check-out: 11:00 AM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Info Cards + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Col: Contact Details & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFC8] space-y-6 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-[#2B1810]">
                Resort Location & Contact
              </h2>

              <div className="space-y-5 text-xs text-[#5C4A3E]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#5C3A21]/10 text-[#5C3A21] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2B1810] text-sm">Full Address</div>
                    <p className="mt-1 leading-relaxed text-[#6D584B]">
                      {RESORT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#5C3A21]/10 text-[#5C3A21] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2B1810] text-sm">Direct Phone / Call</div>
                    <a 
                      href={`tel:${RESORT_INFO.phoneRaw}`}
                      className="mt-1 block text-sm font-bold text-[#5C3A21] hover:underline"
                    >
                      {RESORT_INFO.phone}
                    </a>
                    <span className="text-[11px] text-[#8B6B4E]">Available 24 Hours for enquiries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2B1810] text-sm">WhatsApp Support</div>
                    <a 
                      href={RESORT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-xs font-semibold text-[#25D366] hover:underline"
                    >
                      Chat with Reservations Desk
                    </a>
                    <span className="text-[11px] text-[#8B6B4E]">Instant package quotes & brochures</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#5C3A21]/10 text-[#5C3A21] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2B1810] text-sm">Email Address</div>
                    <a 
                      href={`mailto:${RESORT_INFO.email}`}
                      className="mt-1 block text-xs text-[#5C3A21] hover:underline"
                    >
                      {RESORT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8]">
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>
            </div>

            {/* Route Driving Advice */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5C3A21] uppercase tracking-wide">
                <Navigation className="w-4 h-4" />
                <span>Driving Directions</span>
              </div>
              <ul className="space-y-2 text-xs text-[#5C4A3E]">
                <li>
                  <strong className="text-[#2B1810]">From Yeshwanthpur / Goraguntepalya:</strong> Take the Tumkur Road NH 48 elevated highway past Nelamangala toll, exit towards Dasanapura Hobli / Ravuthanahalli road (approx. 45 mins).
                </li>
                <li>
                  <strong className="text-[#2B1810]">From NICE Road:</strong> Exit at Tumkur Road intersection and follow northward route towards Dasanapura.
                </li>
                <li>
                  <strong className="text-[#2B1810]">Parking:</strong> Free on-site secure parking for cars, tempo travelers, and corporate buses.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Col: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFC8] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#2E5A36]/10 text-[#2E5A36] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#2B1810]">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3E] max-w-md mx-auto">
                    Thank you, <strong className="text-[#2B1810]">{name}</strong>. Our reservation coordinator will call you at <strong className="text-[#2B1810]">{phone}</strong> within 30 minutes with package details and room availability.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-[#FAF7F2] border border-[#D5C4AC] text-xs font-semibold text-[#2B1810] rounded-lg hover:bg-[#EFE7D8] cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:bg-[#20BA5A] cursor-pointer flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Message on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#2B1810]">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs text-[#7A695B] mt-1">
                      Fill out the form below or message us directly on WhatsApp for instant confirmation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="anand@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                      >
                        <option value="Overnight Stay Villa Reservation">Overnight Stay Villa Reservation</option>
                        <option value="Day Outing Packages (Sparrow / Sunbird)">Day Outing Packages (Sparrow / Sunbird)</option>
                        <option value="Corporate Team Building Event">Corporate Team Building Event</option>
                        <option value="Family Reunion or Birthday Party">Family Reunion or Birthday Party</option>
                        <option value="Other Questions">Other Questions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                      Your Message or Expected Dates & Guest Count
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your planned date of visit, approximate number of adults/kids, or any specific requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-1/2 py-3 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-1/2 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Component */}
      <section className="bg-[#FAF7F2] py-12 border-t border-[#E8DFC8]">
        <FAQSection
          title="Frequently Asked Questions & Policies"
          subtitle="Everything you need to know about check-in/check-out timings, pet friendliness, pool wear, and group booking terms."
          defaultCategory="policies"
          showBrochureCta={true}
        />
      </section>
    </div>
  );
};
