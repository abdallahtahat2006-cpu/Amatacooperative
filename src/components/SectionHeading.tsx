import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-right max-w-3xl'
      } ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 tracking-tight leading-snug">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-ink-secondary leading-relaxed max-w-prose-ar mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
