'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface AboutProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  ctaButton?: ReactNode;
}

export const About = ({
  title = 'About Us',
  paragraphs = [
    'Default paragraph text goes here.',
    'Add more paragraphs as needed.',
  ],
  imageSrc,
  imageAlt,
  ctaButton,
}: AboutProps) => {
  return (
    <section id="about" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-top">
          {/* Image with modern frame effect */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-1 border-teal-400">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-teal-400 rounded-xl"></div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              {title}
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {ctaButton && <div className="mt-8">{ctaButton}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
