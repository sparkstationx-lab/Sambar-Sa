import { motion } from 'motion/react';
import { IMAGES } from '../data/restaurantData';
import { EditorialImage } from './EditorialImage';

interface OurStoryProps {
  onExploreMenu: () => void;
}

export function OurStory({ onExploreMenu }: OurStoryProps) {
  return (
    <section
      id="story"
      className="py-20 sm:py-28 bg-[#F8F5EF] border-b border-[#30231D]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="aspect-[4/5] max-w-lg mx-auto lg:mx-0 overflow-hidden bg-[#E9E0D3] rounded-2xl">
              <EditorialImage
                src={IMAGES.storyInterior}
                alt="Warm South Indian dining room interior at SambharSa with teak wood tables and brass pendant lighting"
                fallbackLabel="SambharSa Dining Room"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
              Our Story
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#30231D] mb-7">
              Rooted in Tradition. Made for Every Generation.
            </h2>

            <div className="w-14 h-[1px] bg-[#B98242] mb-7" aria-hidden="true" />

            <p className="text-base sm:text-lg leading-[1.8] text-[#30231D]/85 max-w-xl mb-8">
              SambharSa celebrates the richness of South Indian cuisine through
              traditional flavours, comforting classics and thoughtfully prepared
              specialities. From crispy dosas to delicious sambhar and refreshing
              beverages, every visit brings you closer to the authentic taste of
              South India.
            </p>

            <a
              href="/menu"
              onClick={(e) => {
                e.preventDefault();
                onExploreMenu();
              }}
              className="inline-flex items-center text-sm font-medium text-[#30231D] border-b border-[#B98242] pb-1 hover:text-[#8F5F26] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] rounded-lg"
            >
              Browse the Full Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
