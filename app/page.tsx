import Image from 'next/image';

import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Partner } from '@/interfaces/Partner';
import { About } from '@/components/sections/AboutSection';
import { WhyJoin } from '@/components/sections/WhyJoinSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { Speakers } from '@/components/sections/SpeakersSection';
import { Workshops } from '@/components/sections/WorkshopsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { Schedule, ScheduleItem } from '@/components/sections/ScheduleSection';

import teamMembers from '@/data/team.json';
import speakers from '@/data/speakers.json';
import partners from '@/data/partners.json';
import workshops from '@/data/workshops.json';
import scheduleData from '@/data/schedule.json';
import foundingTeamMembers from '@/data/founding-team.json';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero
          title="WOMEN IN DATA SCIENCE"
          subtitle="DHAHRAN @ KFUPM"
          dateText="1, May 2025 - 08:00 (UTC+3)"
          eventLocation="KFUPM, Dhahran, Saudi Arabia"
          buttonText="JOIN NOW"
          targetDate="2025-05-01T08:00:00+03:00" // Riyadh time (UTC+3)
          logo={
            <Image
              src="./wids-white.png"
              alt="KFUPM Logo"
              width={400}
              height={80}
              className="mb-8 mx-auto"
            />
          }
        />
        <About
          title="About WiDS Dhahran"
          imageSrc="./about.jpeg"
          imageAlt="Women in Data Science conference"
          paragraphs={[
            'King Fahad University of Petroleum and Minerals is pleased to host Stanford Global Women in Data Science conference for the forth time in the Eastern region of Saudi Arabia.',
            'WiDS at KFUPM workshop is an independent event that is organized by the WiDS@Dhahran team led by Ambassadors, Mrs. Asma Yamani and Raghad Alzahrani, as part of the annual WiDS Worldwide conference organized by Stanford University and an estimated 200+ locations worldwide, which features outstanding women doing outstanding work in the field of data science. All genders are invited to attend all WiDS Worldwide conference events',
            'The forth annual WiDS @ Dhahran - KFUPM event will take place on May 4, 2023 in a hybrid format at KFUPM.This event will feature several professional and student female speakers.',
          ]}
        />
        <Workshops
          sectionTitle="WiDS-Dhahran @KFUPM Workshops"
          workshops={workshops}
        />
        <Schedule sessions={scheduleData as ScheduleItem[]} />
        <Speakers sectionTitle="Speakers" speakers={speakers} />
        <TeamSection
          sectionTitle="WiDS-Dhahran @KFUPM 2024 Team"
          members={teamMembers}
        />
        <TeamSection
          sectionTitle="WiDS-Dhahran @KFUPM Founding Team"
          members={foundingTeamMembers}
        />
        <WhyJoin />
        <PartnersSection organizers={partners as Partner[]} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
