import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateMenu: () => void;
}

const FOOTER_LINKS = [
  { label: 'Home', type: 'home' as const, sectionId: 'home', href: '/' },
  { label: 'Our Story', type: 'home' as const, sectionId: 'story', href: '/#story' },
  { label: 'Menu', type: 'menu' as const, href: '/menu' },
  { label: 'Gallery', type: 'home' as const, sectionId: 'gallery', href: '/#gallery' },
  { label: 'Reserve', type: 'home' as const, sectionId: 'reserve', href: '/#reserve' },
  { label: 'Contact', type: 'home' as const, sectionId: 'contact', href: '/#contact' },
];

export function Footer({ onNavigateHome, onNavigateMenu }: FooterProps) {
  return (
    <footer className="bg-[#30231D] text-[#F8F5EF] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F8F5EF]/12">
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('home');
              }}
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#F8F5EF] inline-block mb-4"
            >
              SambharSa
            </a>
            <p className="text-sm leading-relaxed text-[#F8F5EF]/75 max-w-sm">
              Authentic South Indian cuisine in Gwalior — celebrating signature
              dosas, comforting classics, and warm hospitality.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#B98242] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.type === 'menu') {
                        onNavigateMenu();
                      } else {
                        onNavigateHome(link.sectionId);
                      }
                    }}
                    className="text-[#F8F5EF]/80 hover:text-[#F8F5EF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#B98242] mb-4">
              Visit &amp; Contact
            </h3>
            <address className="not-italic text-sm leading-relaxed text-[#F8F5EF]/80 mb-3">
              {RESTAURANT_INFO.address}
            </address>
            <a
              href={RESTAURANT_INFO.phoneHref}
              className="text-sm font-medium text-[#F8F5EF] hover:text-[#B98242] transition-colors tabular-nums"
            >
              {RESTAURANT_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F8F5EF]/60">
          <p>© {new Date().getFullYear()} SambharSa. All rights reserved.</p>
          <p>Gwalior, Madhya Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
