import React from 'react';
import { Activity, Heart, Brain, Thermometer } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Health Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Heart Rate"
          value="72 BPM"
          icon={<Heart className="h-8 w-8 text-red-500" />}
          trend="+2%"
          trendDirection="up"
        />
        <MetricCard
          title="Blood Pressure"
          value="120/80"
          icon={<Activity className="h-8 w-8 text-blue-500" />}
          trend="Normal"
          trendDirection="stable"
        />
        <MetricCard
          title="Sleep Quality"
          value="7.5 hrs"
          icon={<Brain className="h-8 w-8 text-purple-500" />}
          trend="+1hr"
          trendDirection="up"
        />
        <MetricCard
          title="Temperature"
          value="98.6°F"
          icon={<Thermometer className="h-8 w-8 text-green-500" />}
          trend="Normal"
          trendDirection="stable"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Health Updates</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Health Check #{index + 1}</h3>
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
                  <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  trendDirection: 'up' | 'down' | 'stable';
}

const MetricCard = ({ title, value, icon, trend, trendDirection }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trendDirection) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className={`text-sm ${getTrendColor()}`}>{trend}</span>
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
};

export default Dashboard;