import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  image?: string;
}

interface TeamProps {
  title: string;
  members: TeamMember[];
}

export const Team = ({ members, title }: TeamProps) => {
  return (
    <section className="py-10 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">
      {title}
        </h2>
        <div className="h-1 w-16 bg-emerald-600 mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-36 bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
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

              <div className="p-3 text-center">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-emerald-600 font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500">{member.affiliation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
