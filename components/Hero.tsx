'use client';

import React, { useEffect, useState } from 'react';
import { Countdown } from './Countdown';

interface HeroProps {
  title: string;
  subtitle: string;
  dateText: string;
  eventLocation: string;
  buttonText: string;
  targetDate: string; // ISO string in Riyadh time
  logo?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  dateText,
  eventLocation,
  buttonText,
  targetDate,
  logo,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEventPassed: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Create date in Riyadh timezone (UTC+3)
      const riyadhOffset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
      const now = new Date();
      const nowUTC = now.getTime() + now.getTimezoneOffset() * 60000;
      const nowRiyadh = new Date(nowUTC + riyadhOffset);

      const target = new Date(targetDate);
      const difference = target.getTime() - nowRiyadh.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEventPassed: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isEventPassed: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    // Calendar event logic would go here
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${targetDate.replace(/-/g, '')}/${targetDate.replace(
      /-/g,
      ''
    )}&details=${encodeURIComponent(
      `${subtitle}\n\n${eventLocation}`
    )}&location=${encodeURIComponent(eventLocation)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-green-700 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl space-y-8">
        {logo}

        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2">
          {title}
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-6">{subtitle}</h2>

        <div className="text-xl md:text-2xl mb-12 bg-green-800/30 p-4 rounded-lg backdrop-blur-sm">
          <p className="font-bold">{dateText}</p>
          <p>{eventLocation}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
            {buttonText}
          </button>

          <button
            onClick={handleAddToCalendar}
            className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Add to Calendar
          </button>
        </div>

        <Countdown targetDate={targetDate} className="lg:mt-22 md:mt-10" />
      </div>
    </div>
  );
};

export default Hero;
