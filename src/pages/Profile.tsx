import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Settings, Bell, Shield } from 'lucide-react';

interface User {
  name: string;
}

interface ProfileProps {
  user: User | null;
}

const moodData = [
  { day: 'Mon', mood: 3 },
  { day: 'Tue', mood: 4 },
  { day: 'Wed', mood: 2 },
  { day: 'Thu', mood: 5 },
  { day: 'Fri', mood: 4 },
  { day: 'Sat', mood: 3 },
  { day: 'Sun', mood: 4 },
];

const badges = [
  { id: 1, name: 'Consistency Champion', description: '7-day streak of daily check-ins' },
  { id: 2, name: 'Mindfulness Master', description: 'Completed 10 meditation sessions' },
  { id: 3, name: 'Community Supporter', description: 'Helped 5 fellow students' },
];

const Profile: React.FC<ProfileProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <p className="text-lg text-gray-600 dark:text-gray-400">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="card">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.name}&backgroundColor=b6e3f4`}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">Student</p>
          </div>
        </div>

        <div className="h-64 mb-6">
          <h2 className="text-lg font-semibold mb-4">Mood Trends</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <button className="btn flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <button className="btn flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700">
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
          </button>
          <button className="btn flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700">
            <Shield className="h-5 w-5" />
            <span>Privacy</span>
          </button>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Award className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Your Achievements</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div key={badge.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold mb-2">{badge.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;