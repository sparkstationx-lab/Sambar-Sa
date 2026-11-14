import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#E9E0D3]/45 border-b border-[#30231D]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16"
        >
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
              Guest Impressions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D]">
              Experiences Worth Sharing
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#B98242] fill-[#B98242]"
                  />
                ))}
              </div>
              <div className="text-sm text-[#30231D] tabular-nums">
                <span className="font-semibold">
                  {RESTAURANT_INFO.rating} Google Rating
                </span>
                <span className="mx-2 text-[#30231D]/40" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#30231D]/75">
                  {RESTAURANT_INFO.reviewCount} Google Reviews
                </span>
              </div>
            </div>

            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#30231D] border-b border-[#B98242] pb-1 hover:text-[#8F5F26] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
            >
              Read Google Reviews
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#FFFFFF] p-8 sm:p-9 rounded-xl border border-[#30231D]/8 flex flex-col justify-between"
            >
              <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#30231D] mb-6">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="pt-4 border-t border-[#30231D]/10 text-xs tracking-wide uppercase text-[#30231D]/60">
                Google Review · Verified Guest Feedback
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
