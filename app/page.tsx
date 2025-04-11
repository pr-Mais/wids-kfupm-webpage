import Image from 'next/image';

import Hero from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Organizer, Organizers } from '@/components/sections/Organizers';
import { Schedule, ScheduleItem } from '@/components/sections/Schedule';
import { Speakers } from '@/components/sections/Speakers';
import { Team } from '@/components/sections/Team';
import { WhyJoin } from '@/components/sections/WhyJoin';
import { Workshops } from '@/components/sections/Workshops';

import teamMembers from '@/data/team.json';
import speakers from '@/data/speakers.json';
import scheduleData from '@/data/schedule.json';
import organizers from '@/data/organizers.json';
import foundingTeamMembers from '@/data/founding-team.json';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const workshops = [
  {
    title:
      'Computer Vision As a Service: Dataset Annotation and Model Building',
    speaker: 'Join Justine Braggy, CEO of Thya Technology',
    description:
      'Learn to generate your own specific AI-driven detection model to answer scientific questions. Bring your own image dataset to build a personalized detection model.',
    ctaLink: '/workshops/computer-vision',
  },
  {
    title:
      'UX in Data Science: Improving the User Experience with Data-Driven Insights',
    speaker: 'Join Maha AlGhamdi, a software engineer at Aramco',
    description:
      'Learn the basics of UX and how to improve products with data-driven insights. The session will close with a case study that used data to enhance user experience.',
    ctaLink: '/workshops/ux-data-science',
  },
];
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero
          title="WOMEN IN DATA SCIENCE"
          subtitle="DHAHRAN @ KFUPM"
          dateText="1, May 2025 - 08:00 (Riyadh Time)"
          eventLocation="KFUPM, Dhahran, Saudi Arabia"
          buttonText="JOIN NOW"
          targetDate="2025-05-01T08:00:00+03:00" // Riyadh time (UTC+3)
          logo={
            <Image
              src="/wids-white.png"
              alt="KFUPM Logo"
              width={400}
              height={80}
              className="mb-8 mx-auto"
            />
          }
        />
        <About
          title="About WiDS Dhahran"
          imageSrc="/about.jpeg"
          imageAlt="Women in Data Science conference"
          paragraphs={[
            'King Fahad University of Petroleum and Minerals is pleased to host Stanford Global Women in Data Science conference for the forth time in the Eastern region of Saudi Arabia.',
            'WiDS at KFUPM workshop is an independent event that is organized by the WiDS@Dhahran team led by Ambassadors, Mrs. Asma Yamani and Raghad Alzahrani, as part of the annual WiDS Worldwide conference organized by Stanford University and an estimated 200+ locations worldwide, which features outstanding women doing outstanding work in the field of data science. All genders are invited to attend all WiDS Worldwide conference events',
            'The forth annual WiDS @ Dhahran - KFUPM event will take place on May 4, 2023 in a hybrid format at KFUPM.This event will feature several professional and student female speakers.',
          ]}
        />
        <Workshops workshops={workshops} />
        <Speakers title="Speakers" speakers={speakers} />
        <Team title="WiDS-Dhahran @KFUPM 2024 Team" members={teamMembers} />
        <Team
          title="WiDS-Dhahran @KFUPM Founding Team"
          members={foundingTeamMembers}
        />
        <Schedule sessions={scheduleData as ScheduleItem[]} />
        <WhyJoin />
        <Organizers organizers={organizers as Organizer[]} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
