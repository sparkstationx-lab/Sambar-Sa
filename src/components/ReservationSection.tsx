import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface EnquiryState {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
}

const TIME_SLOTS = [
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
];

export function ReservationSection() {
  const todayStr = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState<EnquiryState>({
    name: '',
    phone: '',
    guests: '4',
    date: '',
    time: '07:30 PM',
  });
  const [error, setError] = useState<string>('');
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquiryState | null>(
    null
  );

  const buildWhatsAppLink = (data: EnquiryState) => {
    const message = [
      `Hello SambharSa, I would like to enquire about a table reservation:`,
      `Name: ${data.name.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Number of Guests: ${data.guests}`,
      `Preferred Date: ${data.date}`,
      `Preferred Time: ${data.time}`,
    ].join('\n');

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedPhone = form.phone.replace(/[^\d+]/g, '');

    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!form.date) {
      setError('Please select a preferred date.');
      return;
    }

    const enquiry: EnquiryState = { ...form };
    const whatsappUrl = buildWhatsAppLink(enquiry);

    setError('');
    setSubmittedEnquiry(enquiry);
    window.location.assign(whatsappUrl);
  };

  return (
    <section
      id="reserve"
      className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#30231D]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
              Reservations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D] mb-5">
              Your Table Awaits
            </h2>
            <p className="text-base sm:text-lg text-[#30231D]/75 leading-relaxed mb-8">
              Planning a meal with family or friends? Get in touch with us to
              enquire about a table.
            </p>

            <div className="pt-6 border-t border-[#30231D]/12 space-y-3 text-sm text-[#30231D]/75">
              <p>
                For immediate table enquiries, you may also reach our team directly
                at{' '}
                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="font-medium text-[#30231D] underline underline-offset-4 hover:text-[#8F5F26]"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {submittedEnquiry ? (
              <div className="bg-[#F8F5EF] border border-[#30231D]/12 rounded-2xl p-8 sm:p-10">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2
                    className="w-6 h-6 text-[#2E6F40] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-2xl text-[#30231D] mb-1">
                      Redirecting to WhatsApp
                    </h3>
                    <p className="text-sm text-[#30231D]/75">
                      Your reservation enquiry has been prepared for WhatsApp. If
                      it did not open automatically, use the button below or call
                      us directly.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 my-6 border-y border-[#30231D]/10 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Guest Name
                    </dt>
                    <dd className="font-medium text-[#30231D]">
                      {submittedEnquiry.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Phone
                    </dt>
                    <dd className="font-medium text-[#30231D] tabular-nums">
                      {submittedEnquiry.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Guests
                    </dt>
                    <dd className="font-medium text-[#30231D] tabular-nums">
                      {submittedEnquiry.guests}{' '}
                      {submittedEnquiry.guests === '1' ? 'Guest' : 'Guests'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Preferred Date
                    </dt>
                    <dd className="font-medium text-[#30231D] tabular-nums">
                      {submittedEnquiry.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Preferred Time
                    </dt>
                    <dd className="font-medium text-[#30231D] tabular-nums">
                      {submittedEnquiry.time}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppLink(submittedEnquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Send Enquiry on WhatsApp
                  </a>

                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#30231D]/25 text-[#30231D] hover:bg-[#E9E0D3]/60 transition-colors rounded-lg"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call {RESTAURANT_INFO.phoneDisplay}
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedEnquiry(null)}
                    className="text-sm text-[#30231D]/70 hover:text-[#30231D] underline underline-offset-4 ml-auto"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#F8F5EF] p-7 sm:p-10 rounded-2xl border border-[#30231D]/10 space-y-6"
              >
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 text-sm text-[#7A271A] bg-[#FEF3F2] border border-[#FECDCA] rounded-lg"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-medium uppercase tracking-wider text-[#30231D]/75 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#30231D]/18 rounded-lg text-[#30231D] placeholder:text-[#30231D]/40 focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-medium uppercase tracking-wider text-[#30231D]/75 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#30231D]/18 rounded-lg text-[#30231D] placeholder:text-[#30231D]/40 focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-medium uppercase tracking-wider text-[#30231D]/75 mb-2"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, guests: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#30231D]/18 rounded-lg text-[#30231D] focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242]"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                        <option key={num} value={String(num)}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-medium uppercase tracking-wider text-[#30231D]/75 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayStr}
                      required
                      value={form.date}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, date: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#30231D]/18 rounded-lg text-[#30231D] focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-medium uppercase tracking-wider text-[#30231D]/75 mb-2"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, time: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#30231D]/18 rounded-lg text-[#30231D] focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-7 py-3.5 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5EF]"
                  >
                    Enquire About Reservation
                  </button>
                  <p className="text-xs text-[#30231D]/60">
                    Submitting redirects to WhatsApp with your enquiry details
                    pre-filled.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
