import React, { useState } from 'react';
import { CheckCircle, Circle, Clipboard, Calendar, ArrowRight } from 'lucide-react';


interface ScheduleItem {
  time: string;
  activity: string;
}

interface AppointmentItem {
  doctor: string;
  type: string;
  time: string;
}

interface HealthUpdateItem {
  check: string;
  status: string;
  date: string;
}

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'schedule' | 'appointments' | 'healthUpdates' | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const scheduleData: ScheduleItem[] = [
    { time: '8:00 AM', activity: 'Take Medication A' },
    { time: '9:00 AM', activity: 'Breakfast' },
    { time: '12:00 PM', activity: 'Take Medication B' },
    { time: '1:00 PM', activity: 'Lunch' },
    { time: '3:00 PM', activity: 'Exercise' },
    { time: '6:00 PM', activity: 'Dinner' },
    { time: '8:00 PM', activity: 'Take Medication C' },
  ];

  const appointmentsData: AppointmentItem[] = [
    { doctor: 'Dr. Smith', type: 'Regular Checkup', time: 'Tomorrow, 10:00 AM' },
    { doctor: 'Dr. Brown', type: 'Dental Checkup', time: 'Next Week, 2:00 PM' },
  ];

  const healthUpdatesData: HealthUpdateItem[] = [
    { check: 'Blood Pressure Check', status: '130/85 - Improving', date: 'March 15' },
    { check: 'Medication Review', status: 'Dosage adjusted', date: 'March 10' },
  ];

  const handleSectionClick = (section: 'schedule' | 'appointments' | 'healthUpdates') => {
    setActiveSection(section);
  };

  const handleMarkAsDone = (index: number) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const calculateProgress = () => {
    return (completedTasks.size / scheduleData.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Healthcare at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get personalized health insights, connect with doctors, and monitor your well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Today's Schedule Card */}
          <div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleSectionClick('schedule')}
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-semibold">Today's Schedule</h2>
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-blue-100 mb-6">View your daily activities and medications</p>
            <button 
              className="flex items-center text-white hover:gap-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                handleSectionClick('schedule');
              }}
            >
              Go to Schedule <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Upcoming Appointments Card */}
          <div 
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleSectionClick('appointments')}
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-purple-100 mb-6">Check your scheduled appointments</p>
            <button 
              className="flex items-center text-white hover:gap-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                handleSectionClick('appointments');
              }}
            >
              Go to Appointments <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Recent Health Updates Card */}
          <div 
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleSectionClick('healthUpdates')}
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-semibold">Recent Health Updates</h2>
              <Clipboard className="h-6 w-6" />
            </div>
            <p className="text-green-100 mb-6">View your latest health metrics</p>
            <button 
              className="flex items-center text-white hover:gap-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                handleSectionClick('healthUpdates');
              }}
            >
              Go to Updates <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        {activeSection && (
          <div className="bg-white p-16 rounded-xl shadow-lg transition-all duration-500">
            {activeSection === 'schedule' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Today's Schedule</h2>
                <ul className="space-y-8 mb-12">
                  {scheduleData.map((item, index) => (
                    <li
                      key={index}
                      className={`flex justify-between items-center p-8 rounded-lg transition transform hover:scale-105 bg-white bg-opacity-75 shadow-md hover:shadow-lg ${
                        completedTasks.has(index) ? 'border-l-4 border-green-500' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <button
                          onClick={() => handleMarkAsDone(index)}
                          className={`rounded-full p-1 mr-4 transition-colors duration-200 ${
                            completedTasks.has(index) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                          }`}
                        >
                          {completedTasks.has(index) ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <Circle className="h-6 w-6" />
                          )}
                        </button>
                        <span className={`text-2xl text-gray-700 ${
                          completedTasks.has(index) ? 'line-through text-gray-400' : ''
                        }`}>{item.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-2xl text-gray-900 mr-8 ${
                          completedTasks.has(index) ? 'line-through text-gray-400' : ''
                        }`}>{item.activity}</span>
                        <button
                          onClick={() => handleMarkAsDone(index)}
                          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                            completedTasks.has(index)
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {completedTasks.has(index) ? 'Completed' : 'Mark as Done'}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Progress Section */}
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Today's Progress</h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {Math.round(calculateProgress())}%
                    </span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-500 ease-out"
                      style={{ width: `${calculateProgress()}%` }}
                    />
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <span>{completedTasks.size} of {scheduleData.length} tasks completed</span>
                    <span>{scheduleData.length - completedTasks.size} remaining</span>
                  </div>
                </div>

                {/* Timeline Progress */}
                <div className="mt-8 flex justify-between items-center">
                  {scheduleData.map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedTasks.has(index)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {completedTasks.has(index) ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      {index < scheduleData.length - 1 && (
                        <div className={`h-1 w-24 ${
                          completedTasks.has(index) ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'appointments' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Upcoming Appointments</h2>
                <ul className="space-y-8">
                  {appointmentsData.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-8 rounded-lg transition transform hover:scale-105 bg-white bg-opacity-75 shadow-md hover:shadow-lg"
                    >
                      <div>
                        <h3 className="text-2xl font-medium">{item.doctor}</h3>
                        <p className="text-lg text-gray-600">{item.type}</p>
                      </div>
                      <span className="text-lg text-gray-500">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === 'healthUpdates' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Recent Health Updates</h2>
                <div className="space-y-8">
                  {healthUpdatesData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center p-8 rounded-lg transition transform hover:scale-105 bg-white bg-opacity-75 shadow-md hover:shadow-lg"
                    >
                      <span className="text-lg font-medium">{item.check}</span>
                      <span className="text-lg">{item.status}</span>
                      <span className="text-lg text-gray-500">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;