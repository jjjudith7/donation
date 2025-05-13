import React from 'react';
import { Settings, Bell, Lock, Shield, HelpCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

const SettingsPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Manage your account settings and preferences
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card title="General Settings" subtitle="Basic account preferences">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className={`w-full rounded-lg border p-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className={`w-full rounded-lg border p-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}>
                  <option>UTC-08:00 Pacific Time</option>
                  <option>UTC-05:00 Eastern Time</option>
                  <option>UTC+00:00 GMT</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <select className={`w-full rounded-lg border p-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>
          </Card>

          <Card title="Notification Settings" subtitle="Manage your notification preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell size={20} />
                  <span>Email Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell size={20} />
                  <span>Push Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>

          <Card title="Privacy Settings" subtitle="Control your privacy preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Lock size={20} />
                  <span>Make profile public</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield size={20} />
                  <span>Two-factor authentication</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Help & Support" subtitle="Get assistance when you need it">
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start"
                leftIcon={<HelpCircle size={20} />}
              >
                Documentation
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                leftIcon={<Settings size={20} />}
              >
                FAQs
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                leftIcon={<Bell size={20} />}
              >
                Contact Support
              </Button>
            </div>
          </Card>

          <Card title="Danger Zone" subtitle="Irreversible account actions">
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full text-red-600 border-red-600 hover:bg-red-50"
              >
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;