import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, User, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">HealthAI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
            <Link to="/health-data" className="text-gray-600 hover:text-blue-600">Health Data</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
            <Link to="/settings" className="text-gray-600 hover:text-blue-600">
              <Settings className="h-5 w-5" />
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;