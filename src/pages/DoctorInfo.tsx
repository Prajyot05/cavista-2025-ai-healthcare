import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const DoctorInfo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img 
              src="/doctor-placeholder.jpg"
              alt="Doctor profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-100"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dr. Robert Williams</h1>
                <p className="text-lg text-blue-600 mt-1">Neurologist</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(156 reviews)</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <Link to="/book-appointment" className="text-white">
                  Book Appointment
                </Link>
              </button>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">456 Neuro Center, Suite 300</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-700">(555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700">dr.williams@neurocare.ai</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office Hours</p>
                  <p className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. Williams</h2>
        <p className="text-gray-600 leading-relaxed">
          Dr. Robert Williams is a board-certified neurologist with over 18 years of experience in diagnosing and treating complex neurological disorders. He specializes in headache management, movement disorders, and neurodegenerative diseases. Dr. Williams completed his medical training at prestigious institutions and has published numerous research papers in leading medical journals.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900">Specializations</h3>
            <ul className="mt-2 text-gray-600">
              <li>• Movement Disorders</li>
              <li>• Headache Management</li>
              <li>• Neurodegenerative Diseases</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900">Education</h3>
            <ul className="mt-2 text-gray-600">
              <li>• MD - Neurology</li>
              <li>• Fellowship - Movement Disorders</li>
              <li>• Board Certified Neurologist</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-900">Languages</h3>
            <ul className="mt-2 text-gray-600">
              <li>• English</li>
              <li>• Spanish</li>
              <li>• Mandarin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo; 