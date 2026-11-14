import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SIGNATURE_SPECIALTIES } from '../data/restaurantData';
import { EditorialImage } from './EditorialImage';

interface SignatureSpecialtiesProps {
  onExploreMenu: () => void;
}

export function SignatureSpecialties({
  onExploreMenu,
}: SignatureSpecialtiesProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#30231D]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
            Signature Specialties
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D] mb-4">
            Crafted to Delight
          </h2>
          <p className="text-base sm:text-lg text-[#30231D]/75 leading-relaxed">
            Discover the flavours that make every visit special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {SIGNATURE_SPECIALTIES.map((dish, idx) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9E0D3] rounded-xl mb-5">
                <EditorialImage
                  src={dish.image}
                  alt={dish.alt}
                  fallbackLabel={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl lg:text-[1.35rem] leading-snug text-[#30231D]">
                  {dish.name}
                </h3>
                <span className="text-sm font-medium text-[#8F5F26] tabular-nums shrink-0">
                  ₹{dish.price}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#30231D]/75">
                {dish.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="/menu"
            onClick={(e) => {
              e.preventDefault();
              onExploreMenu();
            }}
            className="w-full sm:w-auto sm:min-w-[260px] inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-medium bg-[#F8F5EF]/75 border border-[#30231D]/25 text-[#30231D] hover:bg-[#30231D] hover:text-[#F8F5EF] hover:border-[#30231D] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF]"
          >
            View Complete Menu
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
