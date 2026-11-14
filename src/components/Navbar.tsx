import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type PageRoute = 'home' | 'menu';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateMenu: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', type: 'home' as const, sectionId: 'home', href: '/' },
  { label: 'Our Story', type: 'home' as const, sectionId: 'story', href: '/#story' },
  { label: 'Menu', type: 'menu' as const, href: '/menu' },
  { label: 'Gallery', type: 'home' as const, sectionId: 'gallery', href: '/#gallery' },
  { label: 'Contact', type: 'home' as const, sectionId: 'contact', href: '/#contact' },
];

export function Navbar({
  currentPage,
  onNavigateHome,
  onNavigateMenu,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[number]
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    if (item.type === 'menu') {
      onNavigateMenu();
    } else {
      onNavigateHome(item.sectionId);
    }
  };

  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateHome('reserve');
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto h-14 sm:h-16 px-5 sm:px-7 rounded-2xl bg-[#F8F5EF]/82 backdrop-blur-md border border-[#30231D]/10 shadow-[0_8px_28px_rgba(48,35,29,0.06)] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            onNavigateHome('home');
          }}
          className="md:justify-self-start font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F1612] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] rounded-lg"
        >
          SambharSa
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex md:justify-self-center items-center justify-center gap-6 lg:gap-9"
        >
          {NAV_ITEMS.map((item) => {
            const isMenuActive = currentPage === 'menu' && item.type === 'menu';
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                aria-current={isMenuActive ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#B98242] after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] rounded-lg ${
                  isMenuActive
                    ? 'text-[#1F1612] after:w-full'
                    : 'text-[#30231D]/80 hover:text-[#1F1612] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="md:justify-self-end flex items-center gap-3 shrink-0">
          <a
            href="/#reserve"
            onClick={handleReserveClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors duration-200 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5EF]"
          >
            Reserve a Table
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#30231D] hover:bg-[#E9E0D3]/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden mt-2 max-w-7xl mx-auto pointer-events-auto rounded-2xl bg-[#F8F5EF]/95 backdrop-blur-md border border-[#30231D]/10 shadow-[0_12px_32px_rgba(48,35,29,0.1)] px-5 py-5"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isMenuActive = currentPage === 'menu' && item.type === 'menu';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  aria-current={isMenuActive ? 'page' : undefined}
                  className={`py-3 px-2 text-base font-medium border-b border-[#30231D]/8 transition-colors ${
                    isMenuActive
                      ? 'text-[#8F5F26]'
                      : 'text-[#30231D] hover:text-[#8F5F26]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="/#reserve"
                onClick={handleReserveClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-[#30231D] text-[#F8F5EF] hover:bg-[#B98242] hover:text-[#30231D] transition-colors rounded-lg"
              >
                Reserve a Table
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
