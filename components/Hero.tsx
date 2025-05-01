'use client';

import React, { useEffect, useState } from 'react';
import { Countdown } from './Countdown';
import YoutubeLiveEnhanced from './sections/EventVideo';

interface HeroProps {
  title: string;
  subtitle: string;
  dateText: string;
  eventLocation: string;
  buttonText: string;
  targetDate: string; // ISO string in Riyadh time
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  dateText,
  eventLocation,
  buttonText,
  targetDate,
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-16">
      <div className="w-full max-w-6xl flex flex-row lg:justify-between justify-center items-center gap-4 md:gap-4 lg:gap-8 px-2 md:px-4 lg:px-8 mb-4 md:mb-6 lg:mb-16">
        <img
          src="./wids-logo.png"
          alt="WiDS Logo"
          className="max-w-[30%] h-auto"
        />
        <img
          src="./kfupm-logo.png"
          alt="KFUPM Logo"
          className="max-w-[25%] h-auto"
        />
      </div>

      <div className="max-w-4xl space-y-8">
        <h1 className="text-4xl text-teal-700 md:text-6xl font-bold tracking-wider mb-2">
          {title}
        </h1>

        <h2 className="text-2xl text-teal-700 md:text-3xl font-light mb-6">
          {subtitle}
        </h2>

        {timeLeft.isEventPassed && (
          <YoutubeLiveEnhanced videoId={'SZ6ZIoa5MtM?si=PVU_anYCZTxFvXlv'} />
        )}

        <div className="text-xl md:text-2xl mb-12 bg-teal-500/30 p-4 rounded-lg backdrop-blur-sm">
          <p className="font-bold">{dateText}</p>
          <p>{eventLocation}</p>
        </div>

        {!timeLeft.isEventPassed && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://events.kfupm.edu.sa/event/253/registrations/203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-teal-700 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
            >
              {buttonText}
            </a>

            <button
              onClick={handleAddToCalendar}
              className="border-2 border-teal-700 hover:bg-white/10 font-bold text-teal-700 py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
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
        )}

        {!timeLeft.isEventPassed && (
          <Countdown targetDate={targetDate} className="lg:mt-22 md:mt-10" />
        )}
      </div>
    </div>
  );
};

export default Hero;
