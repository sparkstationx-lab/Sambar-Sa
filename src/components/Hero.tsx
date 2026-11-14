import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export function Hero({ onExploreMenu, onReserveClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[86vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#30231D] border-b border-[#30231D]/15"
    >
      {/* Full-width background photography */}
      <EditorialImage
        src={IMAGES.heroDosa}
        alt="Authentic South Indian Benne Masala Dosa served on a banana leaf with brass bowls of sambhar and chutneys"
        eager={true}
        fallbackLabel="SambharSa — Authentic South Indian Cuisine"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Measured contrast scrim for crisp legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#30231D]/65 via-[#30231D]/55 to-[#30231D]/85"
      />

      {/* Top breathing space clearing the floating navbar */}
      <div className="relative z-10 h-24 sm:h-28" aria-hidden="true" />

      {/* Centered focal lockup */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-[#F8F5EF]/85 mb-4">
            Authentic South Indian Cuisine
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.25rem] font-normal tracking-tight text-[#F8F5EF] leading-[1.06] mb-9">
            SambharSa
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="/menu"
              onClick={(e) => {
                e.preventDefault();
                onExploreMenu();
              }}
              className="w-full sm:w-auto min-w-[210px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium bg-[#F8F5EF] text-[#30231D] hover:bg-[#B98242] hover:text-[#30231D] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] focus-visible:ring-offset-2 focus-visible:ring-offset-[#30231D]"
            >
              Explore Our Menu
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </a>

            <a
              href="#reserve"
              onClick={(e) => {
                e.preventDefault();
                onReserveClick();
              }}
              className="w-full sm:w-auto min-w-[210px] inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-[#F8F5EF]/65 bg-[#30231D]/35 backdrop-blur-xs text-[#F8F5EF] hover:bg-[#F8F5EF]/15 hover:border-[#F8F5EF] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] focus-visible:ring-offset-2 focus-visible:ring-offset-[#30231D]"
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom centered social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-5 pb-8 sm:pb-10 pt-6 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-2.5 text-sm text-[#F8F5EF]/90">
          <Star
            className="w-4 h-4 text-[#B98242] fill-[#B98242] shrink-0"
            aria-hidden="true"
          />
          <span className="font-medium tabular-nums">
            {RESTAURANT_INFO.rating} Google Rating
          </span>
          <span className="text-[#F8F5EF]/45" aria-hidden="true">
            ·
          </span>
          <span className="text-[#F8F5EF]/80 tabular-nums">
            {RESTAURANT_INFO.reviewCount}+ Reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}
