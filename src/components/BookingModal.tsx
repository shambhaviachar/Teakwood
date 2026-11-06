import React, { useState, useEffect } from 'react';
import { ACCOMMODATIONS, DAY_OUTING_PACKAGES, RESORT_INFO } from '../data/resortData';
import { X, Calendar, Users, Phone, User, MessageCircle, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialType?: 'stay' | 'day-outing';
  initialItemId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialType = 'stay',
  initialItemId,
  onClose
}) => {
  const [bookingType, setBookingType] = useState<'stay' | 'day-outing'>(initialType);
  const [selectedItemId, setSelectedItemId] = useState<string>(
    initialItemId || (initialType === 'stay' ? ACCOMMODATIONS[0].id : DAY_OUTING_PACKAGES[0].id)
  );
  
  // Tomorrow's date as default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(defaultDateStr);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialType) setBookingType(initialType);
    if (initialItemId) {
      setSelectedItemId(initialItemId);
    } else {
      setSelectedItemId(initialType === 'stay' ? ACCOMMODATIONS[0].id : DAY_OUTING_PACKAGES[0].id);
    }
    setSubmitted(false);
  }, [initialType, initialItemId, isOpen]);

  if (!isOpen) return null;

  // Selected item details
  const selectedStay = ACCOMMODATIONS.find(a => a.id === selectedItemId);
  const selectedDayOuting = DAY_OUTING_PACKAGES.find(p => p.id === selectedItemId);
  
  const unitPrice = bookingType === 'stay' 
    ? (selectedStay?.pricePerPerson || 3499)
    : (selectedDayOuting?.pricePerPerson || 1299);

  const selectedTitle = bookingType === 'stay'
    ? (selectedStay?.name || 'Stay Package')
    : (selectedDayOuting?.title || 'Day Outing Package');

  const estimatedTotal = unitPrice * adults + (unitPrice * 0.5 * children);

  const handleTypeChange = (type: 'stay' | 'day-outing') => {
    setBookingType(type);
    setSelectedItemId(type === 'stay' ? ACCOMMODATIONS[0].id : DAY_OUTING_PACKAGES[0].id);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello Teakwood Resort! I would like to book:
*Booking Type:* ${bookingType === 'stay' ? 'Overnight Stay' : 'Day Outing'}
*Package/Accommodation:* ${selectedTitle}
*Date:* ${date}
*Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''}
*Estimated Tariff:* ₹${estimatedTotal.toLocaleString('en-IN')} (+ GST)
*Guest Name:* ${name || 'Inquirer'}
*Contact:* ${phone || 'Via WhatsApp'}
${notes ? `*Special Request:* ${notes}` : ''}
Please confirm availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESORT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DFC8] w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF7F2] px-6 py-4 border-b border-[#E8DFC8] flex items-center justify-between z-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8B6B4E] font-semibold">
              Teakwood Resort Reservations
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2B1810]">
              {submitted ? 'Booking Request Received' : 'Reserve Your Experience'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7D6B5D] hover:text-[#2B1810] hover:bg-[#EFE7D8] rounded-full transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#2E5A36]/10 text-[#2E5A36] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#2B1810]">
                Thank you, {name}!
              </h3>
              <p className="text-sm text-[#5C4A3E] max-w-md mx-auto">
                We have received your reservation enquiry for <strong className="text-[#2B1810]">{selectedTitle}</strong> on <strong className="text-[#2B1810]">{date}</strong> for <strong className="text-[#2B1810]">{adults} Adults {children > 0 ? `& ${children} Children` : ''}</strong>.
              </p>
            </div>

            <div className="bg-[#EFE7D8] p-4 rounded-xl border border-[#D5C4AC] max-w-md mx-auto text-left space-y-1 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D5C4AC]/60">
                <span className="text-[#6D584B]">Estimated Tariff:</span>
                <span className="font-semibold text-[#2B1810] tabular-nums">₹{estimatedTotal.toLocaleString('en-IN')} (+ GST)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D5C4AC]/60">
                <span className="text-[#6D584B]">Contact Phone:</span>
                <span className="font-semibold text-[#2B1810]">{phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#6D584B]">Resort Location:</span>
                <span className="font-medium text-[#2B1810]">Dasanapura Hobli, Bengaluru 562130</span>
              </div>
            </div>

            <p className="text-xs text-[#7A695B]">
              Our guest relations desk will call you shortly at <span className="font-semibold text-[#2B1810]">{phone}</span> to confirm availability and share payment details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>
              <a
                href={`tel:${RESORT_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call: +91 88611 38889</span>
              </a>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
            {/* Booking Type Switcher */}
            <div>
              <label className="block text-xs font-semibold text-[#5C4A3E] mb-2 uppercase tracking-wide">
                Select Experience Type
              </label>
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#EFE7D8] rounded-xl border border-[#D5C4AC]">
                <button
                  type="button"
                  onClick={() => handleTypeChange('stay')}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    bookingType === 'stay'
                      ? 'bg-[#5C3A21] text-[#FAF7F2] shadow-sm'
                      : 'text-[#5C4A3E] hover:text-[#2B1810]'
                  }`}
                >
                  Overnight Stay (Villas & Cottages)
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeChange('day-outing')}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    bookingType === 'day-outing'
                      ? 'bg-[#5C3A21] text-[#FAF7F2] shadow-sm'
                      : 'text-[#5C4A3E] hover:text-[#2B1810]'
                  }`}
                >
                  Day Outing (9:00 AM – 6:00 PM)
                </button>
              </div>
            </div>

            {/* Select Room or Day Outing Package */}
            <div>
              <label className="block text-xs font-semibold text-[#5C4A3E] mb-2 uppercase tracking-wide">
                {bookingType === 'stay' ? 'Choose Accommodation' : 'Choose Day Package'}
              </label>
              <div className="space-y-2">
                {bookingType === 'stay' ? (
                  ACCOMMODATIONS.map((acc) => (
                    <label
                      key={acc.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedItemId === acc.id
                          ? 'border-[#5C3A21] bg-[#F3EDE2] ring-1 ring-[#5C3A21]'
                          : 'border-[#E8DFC8] bg-white hover:border-[#D5C4AC]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="accommodation"
                          value={acc.id}
                          checked={selectedItemId === acc.id}
                          onChange={() => setSelectedItemId(acc.id)}
                          className="accent-[#5C3A21] w-4 h-4 cursor-pointer shrink-0"
                        />
                        <img
                          src={acc.image}
                          alt={acc.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#D5C4AC] shrink-0"
                        />
                        <div>
                          <div className="text-sm font-semibold text-[#2B1810] flex items-center gap-2">
                            <span>{acc.name}</span>
                            {acc.badge && (
                              <span className="text-[10px] font-medium text-[#5C3A21] bg-[#5C3A21]/10 px-2 py-0.5 rounded">
                                {acc.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#7A695B]">
                            {acc.capacity} · All 4 Buffet Meals Included
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#5C3A21] tabular-nums">
                          ₹{acc.pricePerPerson.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-[#8B6B4E]">per person + GST</div>
                      </div>
                    </label>
                  ))
                ) : (
                  DAY_OUTING_PACKAGES.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedItemId === pkg.id
                          ? 'border-[#5C3A21] bg-[#F3EDE2] ring-1 ring-[#5C3A21]'
                          : 'border-[#E8DFC8] bg-white hover:border-[#D5C4AC]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="dayPackage"
                          value={pkg.id}
                          checked={selectedItemId === pkg.id}
                          onChange={() => setSelectedItemId(pkg.id)}
                          className="accent-[#5C3A21] w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <div className="text-sm font-semibold text-[#2B1810] flex items-center gap-2">
                            <span>{pkg.title}</span>
                            {pkg.badge && (
                              <span className="text-[10px] font-medium text-[#5C3A21] bg-[#5C3A21]/10 px-2 py-0.5 rounded">
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#7A695B] flex items-center gap-1.5 mt-0.5">
                            <Clock className="w-3 h-3 text-[#5C3A21]" />
                            <span>{pkg.timing}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#5C3A21] tabular-nums">
                          ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-[#8B6B4E]">per person + GST</div>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Date and Guest Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#5C3A21]" />
                  <span>Date of Visit</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21] text-[#2B1810]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#5C3A21]" />
                  <span>Adults (10+ yrs)</span>
                </label>
                <div className="flex items-center border border-[#D5C4AC] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#5C3A21] hover:bg-[#F3EDE2] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold text-[#2B1810] tabular-nums">
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#5C3A21] hover:bg-[#F3EDE2] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#5C3A21]" />
                  <span>Kids (5-10 yrs, 50%)</span>
                </label>
                <div className="flex items-center border border-[#D5C4AC] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#5C3A21] hover:bg-[#F3EDE2] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold text-[#2B1810] tabular-nums">
                    {children}
                  </span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#5C3A21] hover:bg-[#F3EDE2] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#5C3A21]" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#5C3A21]" />
                  <span>Contact Phone Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5C4A3E] mb-1.5">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Pure Jain food, early check-in, corporate invoice required..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5C4AC] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C3A21]"
              />
            </div>

            {/* Estimated Total Bar */}
            <div className="bg-[#EFE7D8] p-4 rounded-xl border border-[#D5C4AC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs text-[#6D584B]">Estimated Package Cost:</div>
                <div className="text-2xl font-serif font-bold text-[#2B1810] tabular-nums">
                  ₹{estimatedTotal.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-normal text-[#7A695B]">+ GST (18%)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#5C4A3E]">
                <ShieldCheck className="w-4 h-4 text-[#2E5A36]" />
                <span>Zero Advance Cancellation Guarantee</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-1/2 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </button>
              <button
                type="submit"
                className="w-full sm:w-1/2 py-3 bg-[#5C3A21] hover:bg-[#432A17] text-[#FAF7F2] font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                Submit Reservation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
