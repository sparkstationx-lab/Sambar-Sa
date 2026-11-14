import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MenuSection } from './MenuSection';

interface MenuPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

export function MenuPage({ onNavigateHome }: MenuPageProps) {
  return (
    <div className="bg-[#F8F5EF] pt-20 sm:pt-24">
      <div className="border-b border-[#30231D]/10 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome('home');
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#30231D]/75 hover:text-[#30231D] transition-colors self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Back to Home
          </a>

          <p className="text-xs tracking-[0.18em] uppercase text-[#8F5F26]">
            SambharSa · Gwalior
          </p>
        </div>
      </div>

      <MenuSection />

      <section className="py-16 sm:py-20 bg-[#F8F5EF] border-b border-[#30231D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#E9E0D3]/55 border border-[#30231D]/10 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#30231D] mb-2">
                Planning a Visit?
              </h2>
              <p className="text-sm sm:text-base text-[#30231D]/75">
                Enquire about a table for your family or group ahead of your meal.
              </p>
            </div>
            <a
              href="/#reserve"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('reserve');
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 self-start sm:self-auto"
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
