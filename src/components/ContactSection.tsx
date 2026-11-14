import { motion } from 'motion/react';
import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
                Location &amp; Contact
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D] mb-8">
                Visit SambharSa
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-[#30231D]/85">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#8F5F26] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-[#30231D] mb-1">
                      {RESTAURANT_INFO.name}
                    </p>
                    <address className="not-italic leading-relaxed text-[#30231D]/75">
                      {RESTAURANT_INFO.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="w-5 h-5 text-[#8F5F26] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#30231D]/55 mb-1">
                      Phone
                    </p>
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="font-medium text-[#30231D] hover:text-[#8F5F26] transition-colors tabular-nums"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#30231D]/10 text-sm text-[#30231D]/70">
                  <p>
                    Opening hours are shared directly by phone at{' '}
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="text-[#30231D] underline underline-offset-4 hover:text-[#8F5F26]"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors rounded-lg whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>

              <a
                href={RESTAURANT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#30231D]/25 text-[#30231D] hover:bg-[#E9E0D3]/60 transition-colors rounded-lg whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-[#30231D]/25 text-[#30231D] hover:bg-[#E9E0D3]/60 transition-colors rounded-lg whitespace-nowrap shrink-0"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="w-full h-80 sm:h-96 lg:h-full min-h-[340px] bg-[#E9E0D3] rounded-2xl overflow-hidden border border-[#30231D]/12">
              <iframe
                title="SambharSa Location Map — Gwalior, Madhya Pradesh"
                src={RESTAURANT_INFO.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
