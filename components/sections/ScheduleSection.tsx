'use client';

import { useState } from 'react';

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  session: 'opening' | 'session1' | 'session2' | 'session3' | 'parallel';
}

interface ScheduleProps {
  sessions: ScheduleItem[];
}

export const Schedule = ({ sessions }: ScheduleProps) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const sessionTabs = [
    { id: 'all', label: 'All Sessions' },
    {
      id: 'session1',
      label: 'Session 1',
      time: '09:30 - 10:15 AM',
    },
    {
      id: 'session2',
      label: 'Session 2',
      time: '10:15 - 12:00 PM',
    },
    {
      id: 'session3',
      label: 'Session 3',
      time: '12:00 - 01:07 PM',
    },
    {
      id: 'parallel',
      label: 'Parallel Sessions',
      time: '03:00 - 04:00 PM',
    },
  ];

  const filteredSessions =
    activeTab === 'all'
      ? sessions
      : sessions.filter((session) => session.session === activeTab);

  return (
    <section id="schedule" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6 text-center">
          Event Schedule
        </h2>

        {/* Time-based Tabs */}
        <div className="overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap">
          <div className="inline-flex gap-2 pb-4 mb-2 min-w-max">
            {sessionTabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
          relative px-5 py-3 rounded-lg cursor-pointer
          transition-colors duration-300 ease-in-out
          ${
            activeTab === tab.id
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-gray-800 hover:bg-emerald-50 border border-gray-200'
          }
          overflow-hidden
          group
          min-h-[48px]
          flex items-center justify-center
          flex-shrink-0
        `}
              >
                {/* Animated underline - your preferred effect */}
                <div
                  className={`
            absolute bottom-0 left-0 h-0.5 bg-emerald-500
            transition-all duration-300 ease-in-out
            ${activeTab === tab.id ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
                ></div>

                <div className="text-center relative z-10 w-full">
                  <div
                    className={`font-bold ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </div>
                  {tab.time && (
                    <div
                      className={`text-xs mt-1 ${
                        activeTab === tab.id
                          ? 'text-emerald-100'
                          : 'text-gray-600 group-hover:text-emerald-600'
                      }`}
                    >
                      {tab.time}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Items */}
        <div className="space-y-3">
          {filteredSessions.map((session, index) => (
            <div
              key={index}
              className="p-3 rounded-lg border-l-4 border-emerald-500 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Mobile: Stacked layout */}
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Time chip - full width on mobile, auto width on desktop */}
                <div className="w-full sm:w-auto">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {session.time}
                  </span>
                </div>

                {/* Session info - takes remaining space on desktop */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800">
                    {session.title}
                  </h3>
                  {session.speaker && (
                    <p className="text-sm text-gray-600 mt-1">
                      {session.speaker}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
