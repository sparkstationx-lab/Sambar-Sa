import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fallbackLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  eager = false,
  fallbackLabel,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E9E0D3] text-[#30231D]/70 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-7 h-7 mb-2 text-[#B98242]" strokeWidth={1.5} />
        <span className="font-serif text-base text-[#30231D]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
