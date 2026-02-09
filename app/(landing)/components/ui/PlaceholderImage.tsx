'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate aspect ratio for placeholder
  const aspectRatio = (height / width) * 100;

  if (hasError) {
    return (
      <div
        className={`bg-slate-800 flex items-center justify-center rounded-lg ${className}`}
        style={{ paddingBottom: `${aspectRatio}%`, position: 'relative' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
          <svg
            className="w-16 h-16 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">Screenshot em breve</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-slate-800 animate-pulse rounded-lg ${className}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
