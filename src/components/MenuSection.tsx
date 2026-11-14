import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

function VegMark() {
  return (
    <span
      className="inline-flex items-center justify-center w-3.5 h-3.5 border border-[#2E6F40] rounded-[2px] shrink-0 mt-1"
      title="Vegetarian"
      aria-label="Vegetarian"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2E6F40]" />
    </span>
  );
}

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    return MENU_CATEGORIES.filter((cat) =>
      selectedCategory === 'all' ? true : cat.id === selectedCategory
    )
      .map((cat) => {
        if (!normalizedQuery) return cat;
        const categoryMatches = cat.name.toLowerCase().includes(normalizedQuery);
        const filteredItems = categoryMatches
          ? cat.items
          : cat.items.filter((item) =>
              item.name.toLowerCase().includes(normalizedQuery)
            );
        return { ...cat, items: filteredItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [selectedCategory, normalizedQuery]);

  const totalMatchingDishes = useMemo(
    () => visibleCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [visibleCategories]
  );

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <section
      id="menu"
      className="py-14 sm:py-20 bg-[#FFFFFF] border-b border-[#30231D]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
              Our Menu
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D] mb-4">
              A Culinary Journey Across South India
            </h2>
            <p className="text-sm sm:text-base text-[#30231D]/75 leading-relaxed">
              100% Vegetarian Kitchen · Prices listed in Indian Rupees (₹) for dining reference.
            </p>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <label htmlFor="menu-search" className="sr-only">
              Search menu dishes or categories
            </label>
            <div className="relative flex items-center">
              <Search
                className="w-4 h-4 text-[#30231D]/45 absolute left-3.5 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="menu-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dosas, uttapam, rice..."
                className="w-full pl-10 pr-10 py-3 text-sm bg-[#F8F5EF] border border-[#30231D]/18 rounded-lg text-[#30231D] placeholder:text-[#30231D]/45 focus:outline-none focus:border-[#B98242] focus:ring-1 focus:ring-[#B98242] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 p-1.5 text-[#30231D]/55 hover:text-[#30231D] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category Navigation - horizontal scroll on mobile, clean wrap on desktop */}
        <div className="border-b border-[#30231D]/12 mb-12">
          <nav
            aria-label="Menu categories"
            className="flex items-center gap-2 overflow-x-auto pb-3 lg:flex-wrap lg:overflow-visible no-scrollbar"
          >
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] ${
                selectedCategory === 'all'
                  ? 'bg-[#30231D] text-[#F8F5EF]'
                  : 'text-[#30231D]/70 hover:text-[#30231D] hover:bg-[#F8F5EF]'
              }`}
            >
              All Categories
            </button>
            {MENU_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] ${
                    isActive
                      ? 'bg-[#30231D] text-[#F8F5EF]'
                      : 'text-[#30231D]/70 hover:text-[#30231D] hover:bg-[#F8F5EF]'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Search / Filter Result Summary */}
        {(normalizedQuery || selectedCategory !== 'all') && (
          <div className="flex items-center justify-between gap-4 mb-8 text-xs sm:text-sm text-[#30231D]/65">
            <span className="tabular-nums">
              Showing {totalMatchingDishes}{' '}
              {totalMatchingDishes === 1 ? 'dish' : 'dishes'}
              {normalizedQuery ? ` matching "${searchQuery.trim()}"` : ''}
            </span>
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#8F5F26] hover:text-[#30231D] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Menu Categories & Editorial Dish Rows */}
        {visibleCategories.length === 0 ? (
          <div className="py-16 text-center bg-[#F8F5EF] rounded-2xl px-6">
            <p className="font-serif text-xl text-[#30231D] mb-2">
              No dishes found matching &ldquo;{searchQuery.trim()}&rdquo;
            </p>
            <p className="text-sm text-[#30231D]/70 mb-6">
              Try searching for dosa, idli, uttapam, rice, or kulfi.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-5 py-2.5 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors rounded-lg"
            >
              View Full Menu
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {visibleCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[#30231D]/15 mb-6">
                  <h3 className="font-serif text-2xl sm:text-[1.75rem] text-[#30231D]">
                    {category.name}
                  </h3>
                  <span className="text-xs text-[#30231D]/55 tabular-nums whitespace-nowrap shrink-0">
                    {category.items.length}{' '}
                    {category.items.length === 1 ? 'selection' : 'selections'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-6 py-4 border-b border-[#30231D]/8"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <VegMark />
                        <div className="min-w-0">
                          <h4 className="font-sans text-base font-medium text-[#30231D] leading-snug">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="mt-1 text-sm text-[#30231D]/65 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="font-sans text-sm sm:text-base font-medium text-[#30231D] tabular-nums whitespace-nowrap shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
