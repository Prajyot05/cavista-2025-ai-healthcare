import { Clipboard, Pill, Apple, Clock } from "lucide-react";

const CarePlan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Care Plan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Clipboard className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Treatment Plan</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-medium">Primary Treatment</h3>
                <p className="text-gray-600 mt-1">
                  Regular monitoring of blood pressure and heart rate
                </p>
                <p className="text-sm text-gray-500 mt-2">Updated 2 days ago</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-medium">Preventive Care</h3>
                <p className="text-gray-600 mt-1">
                  Daily exercise and stress management techniques
                </p>
                <p className="text-sm text-gray-500 mt-2">Updated 1 week ago</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Pill className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Medications</h2>
            </div>
            <div className="divide-y">
              {[
                {
                  name: "Lisinopril",
                  dosage: "10mg",
                  frequency: "Once daily",
                  timing: "Morning",
                },
                {
                  name: "Metformin",
                  dosage: "500mg",
                  frequency: "Twice daily",
                  timing: "Morning and evening",
                },
              ].map((med, index) => (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{med.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {med.dosage} - {med.frequency}
                      </p>
                      <p className="text-sm text-gray-500">{med.timing}</p>
                    </div>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Apple className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Dietary Recommendations</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Recommended Diet</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>
                    • Low-sodium diet with plenty of fruits and vegetables
                  </li>
                  <li>• Limit processed foods and sugary drinks</li>
                  <li>• Increase fiber intake through whole grains</li>
                  <li>
                    • Stay hydrated with at least 8 glasses of water daily
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Upcoming Activities</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  activity: "Blood Pressure Check",
                  time: "Today, 2:00 PM",
                  type: "Monitoring",
                },
                {
                  activity: "Take Medication",
                  time: "Today, 8:00 PM",
                  type: "Medication",
                },
                {
                  activity: "Doctor Appointment",
                  time: "Tomorrow, 10:00 AM",
                  type: "Appointment",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">
              Contact your healthcare provider for any questions about your care
              plan.
            </p>
            <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Contact Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlan;
