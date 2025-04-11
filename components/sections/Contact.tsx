import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLaptop } from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Maps - Compact Embed */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5939689526235!2d50.15082907604455!3d26.30725967701327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e644c711d83b%3A0x89d26475360b1fb7!2sBuilding%2060%20-%20King%20Fahd%20Conference%20Center!5e0!3m2!1sen!2ssa!4v1744336657088!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className='rounded-xl'
             ></iframe>
          </div>

          {/* Event Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Event Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-emerald-600">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600">KFUPM, Dhahran, Saudi Arabia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-emerald-600">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600">(013) 860-7757</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-emerald-600">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600">widsd@kfupm.edu.sa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-emerald-600">
                  <FaLaptop className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600">Hybrid (In-person & Virtual)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
