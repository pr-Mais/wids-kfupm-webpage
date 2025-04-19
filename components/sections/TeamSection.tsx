import Image from 'next/image';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export interface TeamMember {
  name: string;
  role?: string;
  affiliation: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamProps {
  sectionTitle: string;
  members: TeamMember[];
}

export const TeamSection = ({ members, sectionTitle: title }: TeamProps) => {
  return (
    <section className="py-10 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-1">
          {title}
        </h2>
        <div className="h-1 w-16 bg-teal-600 mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden border border-gray-200 hover:border-teal-300 transition-all"
            >
              <div className="relative h-36 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-white opacity-80">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>

              <div className="p-2 text-center">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-teal-600 font-medium">
                  {member.role}
                </p>
                {member.affiliation.length == 0 ? (
                  <p className="text-xs text-gray-500 h-4">{}</p>
                ) : (
                  <p className="text-xs text-gray-500">{member.affiliation}</p>
                )}
              </div>
              <div className="flex justify-center items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="text-gray-400 hover:text-teal-600 transition-colors flex items-center justify-center pb-2"
                >
                  <FaLinkedin className="text-base" />
                </a>
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s X Account`}
                    className="text-gray-400 hover:text-teal-600 transition-colors flex items-center justify-center pb-2"
                  >
                    <FaXTwitter className="text-base" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
