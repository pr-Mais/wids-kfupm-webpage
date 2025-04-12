import {
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaUser,
  FaLaughSquint,
} from 'react-icons/fa';
import { FaMicroblog } from 'react-icons/fa6';

const benefits = [
  {
    icon: <FaMicroblog className="text-2xl text-emerald-600" />,
    title: 'Great Speakers',
    description:
      'Learn about prominent research endeavors conducted by renowned female data scientists.',
    number: '01',
  },
  {
    icon: <FaGlobe className="text-2xl text-emerald-600" />,
    title: 'Global Event',
    description:
      'Participate in an internationally recognized initiative supporting women data scientists.',
    number: '02',
  },
  {
    icon: <FaUsers className="text-2xl text-emerald-600" />,
    title: 'Networking Opportunity',
    description: 'Form new relationships and strengthen existing ones.',
    number: '03',
  },
  {
    icon: <FaLightbulb className="text-2xl text-emerald-600" />,
    title: 'Innovation and Technology',
    description: 'Engage in high-level discussions and refine your ideas.',
    number: '04',
  },
  {
    icon: <FaUser className="text-2xl text-emerald-600" />,
    title: 'Personal Development',
    description: 'Sharpen your communication and critical thinking skills.',
    number: '05',
  },
  {
    icon: <FaLaughSquint className="text-2xl text-emerald-600" />,
    title: 'The Fun Factor!',
    description:
      'Have fun interacting and mingling with your fellow attendees.',
    number: '06',
  },
];

export const WhyJoin = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">
          Why You Should Join?
        </h2>
        <div className="h-1 w-12 bg-emerald-600 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative">
                {/* Floating number badge */}
                <div className="absolute -top-8 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-mono text-sm font-bold">
                  {benefit.number}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
