import { useCallback, useEffect, useState } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureSpecialties } from './components/SignatureSpecialties';
import { OurStory } from './components/OurStory';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { MenuPage } from './components/MenuPage';
import { Footer } from './components/Footer';

function getRouteFromLocation(): PageRoute {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === '/menu' ? 'menu' : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromLocation);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title =
      currentPage === 'menu'
        ? 'Menu | SambharSa – Authentic South Indian Cuisine in Gwalior'
        : 'SambharSa – Authentic South Indian Cuisine in Gwalior';

    if (currentPage === 'home' && window.location.hash) {
      const targetId = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }, [currentPage]);

  const navigateToMenu = useCallback(() => {
    if (window.location.pathname !== '/menu') {
      window.history.pushState({}, '', '/menu');
    }
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToHome = useCallback(
    (sectionId?: string) => {
      const targetUrl =
        sectionId && sectionId !== 'home' ? `/#${sectionId}` : '/';
      if (window.location.pathname !== '/' || sectionId) {
        window.history.pushState({}, '', targetUrl);
      }

      if (currentPage !== 'home') {
        setCurrentPage('home');
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (!sectionId || sectionId === 'home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              document
                .getElementById(sectionId)
                ?.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        });
      } else {
        if (!sectionId || sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [currentPage]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#30231D]">
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateMenu={navigateToMenu}
      />

      <main className="flex-1">
        {currentPage === 'menu' ? (
          <MenuPage onNavigateHome={navigateToHome} />
        ) : (
          <>
            <Hero
              onExploreMenu={navigateToMenu}
              onReserveClick={() => navigateToHome('reserve')}
            />
            <SignatureSpecialties onExploreMenu={navigateToMenu} />
            <OurStory onExploreMenu={navigateToMenu} />
            <GallerySection />
            <ReviewsSection />
            <ReservationSection />
            <ContactSection />
          </>
        )}
      </main>

      <Footer
        onNavigateHome={navigateToHome}
        onNavigateMenu={navigateToMenu}
      />
    </div>
  );
}
