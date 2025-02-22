import React from "react";
import { Link } from "react-router-dom";
import { Brain, Heart, Activity, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Healthcare at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get personalized health insights, connect with doctors, and monitor
            your well-being
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/basic-details"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-blue-600" />}
            title="AI Analysis"
            description="Get instant insights about your health conditions using advanced AI"
          />
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-blue-600" />}
            title="Health Monitoring"
            description="Track your vital signs and health metrics in real-time"
          />
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-blue-600" />}
            title="Personalized Care"
            description="Receive customized care plans based on your health data"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-blue-600" />}
            title="Expert Doctors"
            description="Connect with qualified healthcare professionals"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
