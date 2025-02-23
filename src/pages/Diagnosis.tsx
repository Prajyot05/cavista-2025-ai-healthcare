import React, {  } from 'react';
import { Clock, Link, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface DiagnosisProps {
  diagnosis: {
    condition: string;
    doctor: string;
    lastUpdated: string;
    medications: Array<{
      name: string;
      dosage: string;
      timing: string;
    }>;
    progressTimeline: Array<{
      check: string;
      status: string;
      date: string;
    }>;
  };
}

const Diagnosis: React.FC<DiagnosisProps> = () => {
  // Sample data - replace with actual data from your backend
  const diagnosisData = {
    condition: "Hypertension Stage 1",
    doctor: "Dr. Sarah Johnson",
    lastUpdated: "March 15, 2024",
    medications: [
      { name: "Lisinopril", dosage: "10mg, Once daily", timing: "Morning" },
      { name: "Amlodipine", dosage: "5mg, Once daily", timing: "Evening" }
    ],
    progressTimeline: [
      { check: "Blood Pressure Check", status: "130/85 - Improving", date: "March 15" },
      { check: "Medication Review", status: "Dosage adjusted", date: "March 10" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Current Diagnosis</h1>
          <p className="text-gray-600 mb-6">Medical details and treatment plan.</p>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between items-center border-b pb-4"
            >
              <span className="text-gray-600">Condition</span>
              <span className="text-gray-900 font-medium">{diagnosisData.condition}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-between items-center border-b pb-4"
            >
              <span className="text-gray-600">Doctor</span>
              <span className="text-gray-900 font-medium">{diagnosisData.doctor}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between items-center"
            >
              <span className="text-gray-600">Last Updated</span>
              <span className="text-gray-900 font-medium">{diagnosisData.lastUpdated}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Medications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Link className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Medications</h2>
          </div>

          <div className="space-y-6">
            {diagnosisData.medications.map((med, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{med.name}</h3>
                  <p className="text-gray-600">{med.dosage}</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{med.timing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Progress Timeline</h2>
          </div>

          <div className="space-y-6">
            {diagnosisData.progressTimeline.map((progress, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{progress.check}</h3>
                  <p className="text-gray-600">{progress.status}</p>
                </div>
                <span className="text-gray-500">{progress.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Diagnosis; 