import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

interface Speaker {
  name: string;
  title: string;
  company: string;
  linkedin: string;
  image?: string;
  topic?: string;
}

interface SpeakersProps {
  speakers: Speaker[];
  sectionTitle?: string;
}

export const Speakers = ({
  speakers,
  sectionTitle: title = 'Featured Speakers',
}: SpeakersProps) => {
  const getInitials = (name: string) => {
    const ignoreTitles = ['Dr', 'Prof', 'Mr', 'Mrs', 'Ms', 'PhD'];
    return name
      .split(' ')
      .filter((part) => !ignoreTitles.includes(part.replace('.', '')))
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="speakers" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">
          {title}
        </h2>
        <div className="h-1 w-12 bg-emerald-600 mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-md overflow-hidden border border-gray-200 hover:border-emerald-300 transition-all"
            >
              <div className="relative h-36 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <span className="text-3xl font-bold text-emerald-700 opacity-80">
                    {getInitials(speaker.name)}
                  </span>
                )}
              </div>

              <div className="p-2.5">
                <div className="flex justify-between items-start">
                  <div className="w-[calc(100%-28px)]">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-emerald-600 line-clamp-1">
                      {speaker.title}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {speaker.company}
                    </p>
                  </div>
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${speaker.name}'s LinkedIn`}
                    className="text-gray-400 hover:text-emerald-600 transition-colors mt-0.5"
                  >
                    <FaLinkedin className="text-base" />
                  </a>
                </div>

                {speaker.topic && (
                  <p className="mt-1.5 text-xs text-gray-600 line-clamp-2">
                    "{speaker.topic}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
