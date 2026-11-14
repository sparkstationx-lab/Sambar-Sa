import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/restaurantData';
import { EditorialImage } from './EditorialImage';

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-[#F8F5EF] border-b border-[#30231D]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F5F26] mb-3">
            Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight text-[#30231D]">
            A Glimpse of SambharSa
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.figure
              key={photo.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98242] rounded-xl"
                aria-label={`View larger image of ${photo.title}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9E0D3] rounded-xl">
                  <EditorialImage
                    src={photo.image}
                    alt={photo.alt}
                    fallbackLabel={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg text-[#30231D]">
                    {photo.title}
                  </span>
                  <span className="text-xs text-[#30231D]/60 whitespace-nowrap shrink-0">
                    {photo.category}
                  </span>
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-[#30231D]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#F8F5EF] rounded-2xl overflow-hidden p-3 sm:p-4"
          >
            <div className="flex items-center justify-between gap-4 pb-3 px-1">
              <div>
                <p className="font-serif text-xl text-[#30231D]">
                  {selectedPhoto.title}
                </p>
                <p className="text-xs text-[#30231D]/65">
                  {selectedPhoto.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close gallery image"
                className="w-10 h-10 inline-flex items-center justify-center text-[#30231D] hover:bg-[#E9E0D3] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9E0D3] rounded-xl">
              <EditorialImage
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                fallbackLabel={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
