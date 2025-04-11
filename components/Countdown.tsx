'use client';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
  className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  className = '',
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
      const riyadhOffset = 3 * 60 * 60 * 1000;
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

  return (
    <div className={`${className}`}>
      {/* Desktop View - Grid Layout */}
      <div className="hidden md:grid grid-cols-4 gap-4 max-w-3xl mx-auto">
        <CountdownItem value={timeLeft.days} label="Days" />
        <CountdownItem value={timeLeft.hours} label="Hours" />
        <CountdownItem value={timeLeft.minutes} label="Minutes" />
        <CountdownItem value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Mobile View - Single Box */}
      <div className="md:hidden bg-white/20 p-4 rounded-lg backdrop-blur-md border border-white/10">
        <div className="flex justify-center items-center space-x-2">
          <CountdownSegment value={timeLeft.days} label="Days" />
          <div className="text-3xl">:</div>
          <CountdownSegment value={timeLeft.hours} label="Hours" />
          <div className="text-3xl">:</div>
          <CountdownSegment value={timeLeft.minutes} label="Minutes" />
          <div className="text-3xl">:</div>
          <CountdownSegment value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

const CountdownItem: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => (
  <div className="bg-white/20 p-4 rounded-lg backdrop-blur-md border border-white/10 hover:bg-white/30 transition-all">
    <div className="text-4xl md:text-5xl font-bold">{value}</div>
    <div className="text-sm md:text-base opacity-80">{label}</div>
  </div>
);

const CountdownSegment: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => (
  <div className="text-center">
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-xs opacity-80">{label}</div>
  </div>
);
