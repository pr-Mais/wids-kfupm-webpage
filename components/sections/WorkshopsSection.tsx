'use client';

import { Workshop } from '@/interfaces/Workshop';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface WorkshopsProps {
  sectionTitle: string;
  workshops: Workshop[];
}

export const Workshops = ({ sectionTitle, workshops }: WorkshopsProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < sectionTitle.length) {
        setDisplayText(sectionTitle.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setInterval(() => setShowCursor((prev) => !prev), 500);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="workshops" className="py-20 px-6 bg-[#161E26] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 font-mono">
          <span className="text-white">$ </span>
          {displayText}
          <span
            className={`inline-block w-2 h-6 bg-teal-400 ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </h2>
        <div className="h-1 mb-12"></div>

        <div className="grid gap-8 md:grid-cols-2">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-teal-400 transition-all group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                </div>

                <h3 className="text-xl font-bold text-teal-400 font-mono">
                  {workshop.title}
                </h3>

                <p className="text-gray-300 mb-4 italic">{workshop.speaker}</p>

                <p className="text-gray-100 mb-6">{workshop.description}</p>

                <Link
                  href={workshop.ctaLink}
                  className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-mono font-medium py-2 px-6 rounded-md transition-colors border border-teal-400 group-hover:bg-teal-700"
                >
                  JOIN THE WORKSHOP
                </Link>
              </div>

              <div className="bg-gray-900 px-6 py-3 text-xs text-gray-500 font-mono">
                <span className="text-teal-400">//</span> workshop_
                {index + 1}.component
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
