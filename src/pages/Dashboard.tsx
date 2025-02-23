const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Your Health Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Health Updates</h2>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Health Check {index + 1}</h3>
                    <p className="text-sm text-gray-600">All vitals normal</p>
                  </div>
                  <span className="text-sm text-gray-500">2h ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Dr. Smith</h3>
                    <p className="text-sm text-gray-600">Regular Checkup</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Tomorrow, 10:00 AM
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
