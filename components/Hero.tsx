"use client";

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
  logo
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEventPassed: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Create date in Riyadh timezone (UTC+3)
      const riyadhOffset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
      const now = new Date();
      const nowUTC = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nowRiyadh = new Date(nowUTC + riyadhOffset);
      
      const target = new Date(targetDate);
      const difference = target.getTime() - nowRiyadh.getTime();
      
      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEventPassed: true
        });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isEventPassed: false
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-green-700 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl space-y-8">
        {logo}
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2">
          {title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-8">
          {subtitle}
        </h2>
        
        <div className="text-xl md:text-2xl mb-12 bg-green-800/30 p-4 rounded-lg backdrop-blur-sm">
          <p className='font-bold'>{dateText}</p>
          <p>{eventLocation}</p>
        </div>
        
        <button className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 transform hover:scale-105 shadow-lg">
          {buttonText}
        </button>
        
        <Countdown targetDate={targetDate} className="mt-16" />
      </div>
    </div>
  );
};

export default Hero;