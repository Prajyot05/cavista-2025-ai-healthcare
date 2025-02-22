import React from "react";
import { Bell, Lock, User, Globe, Moon, Phone, Shield } from "lucide-react";

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="bg-white rounded-xl shadow-md">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-10 w-10 text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Prajyot Tayde</h2>
              <p className="text-gray-600">prajyot.tayde@gmail.com</p>
            </div>
            <button className="ml-auto text-blue-600 hover:text-blue-700">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Account Settings
            </h3>
            <div className="space-y-4">
              <SettingItem
                icon={<User className="h-5 w-5 text-gray-400" />}
                title="Personal Information"
                description="Update your personal details"
              />
              <SettingItem
                icon={<Lock className="h-5 w-5 text-gray-400" />}
                title="Password & Security"
                description="Manage your password and security settings"
              />
              <SettingItem
                icon={<Shield className="h-5 w-5 text-gray-400" />}
                title="Privacy"
                description="Control your privacy settings"
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Preferences
            </h3>
            <div className="space-y-4">
              <SettingItem
                icon={<Bell className="h-5 w-5 text-gray-400" />}
                title="Notifications"
                description="Customize your notification preferences"
                toggle
              />
              <SettingItem
                icon={<Globe className="h-5 w-5 text-gray-400" />}
                title="Language"
                description="Choose your preferred language"
                value="English (US)"
              />
              <SettingItem
                icon={<Moon className="h-5 w-5 text-gray-400" />}
                title="Dark Mode"
                description="Toggle dark mode theme"
                toggle
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Contact & Support
            </h3>
            <div className="space-y-4">
              <SettingItem
                icon={<Phone className="h-5 w-5 text-gray-400" />}
                title="Emergency Contact"
                description="Add or update emergency contact information"
              />
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our support team is available 24/7 to assist you with any
                  questions or concerns.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Contact Support
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  toggle?: boolean;
  value?: string;
}

const SettingItem = ({
  icon,
  title,
  description,
  toggle,
  value,
}: SettingItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {toggle ? (
        <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200">
          <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
        </button>
      ) : value ? (
        <span className="text-sm text-gray-600">{value}</span>
      ) : (
        <button className="text-gray-400 hover:text-gray-500">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Settings;
