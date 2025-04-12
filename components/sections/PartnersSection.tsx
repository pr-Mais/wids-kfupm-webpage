import { Partner } from '@/interfaces/Partner';
import Image from 'next/image';

interface PartnersProps {
  organizers: Partner[];
}

export const PartnersSection = ({ organizers }: PartnersProps) => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
          Co-organized by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="group relative h-28 w-72 p-2 transition-all duration-300"
            >
              {/* Solid background with your custom color */}
              <div
                className={`
                absolute inset-0 rounded-xl
                ${organizer.logoType === 'light' ? 'bg-[#161E26]' : 'bg-white'}
                transition-colors duration-300
                group-hover:${
                  organizer.logoType === 'light'
                    ? 'bg-[#1E2834]'
                    : 'bg-emerald-50'
                }
              `}
              />

              {/* Logo container */}
              <div className="relative h-full w-full flex items-center justify-center p-4">
                <Image
                  src={organizer.logo}
                  alt={organizer.altText}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Border */}
              <div
                className={`
                absolute inset-0 rounded-xl border
                ${
                  organizer.logoType === 'light'
                    ? 'border-gray-600'
                    : 'border-gray-200'
                }
                transition-colors duration-300
                group-hover:border-emerald-400
              `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
