import React from 'react';
import { Calendar, Target, TrendingUp, Users } from 'lucide-react';

const MoodEmojis = ['😊', '😐', '😢', '😡'];

const Home = ({ user }) => {
  const [selectedMood, setSelectedMood] = React.useState(null);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Hi {user.name}, how are you feeling today?
        </h1>
        <div className="flex justify-center space-x-4">
          {MoodEmojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(index)}
              className={`text-4xl p-4 rounded-full transition-transform hover:scale-110 ${
                selectedMood === index ? 'bg-blue-100 dark:bg-blue-900 scale-110' : ''
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Your Goals Today</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-500" />
              <span>Meditate for 10 minutes</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-500" />
              <span>Complete daily journal</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold">Trending Topics</h2>
          </div>
          <ul className="space-y-2">
            <li className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              5 Quick Stress Relief Techniques
            </li>
            <li className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Building Better Study Habits
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-6 w-6 text-purple-500" />
            <h2 className="text-xl font-semibold">Community Highlight</h2>
          </div>
          <blockquote className="italic text-gray-600 dark:text-gray-300">
            "Remember that taking breaks is just as important as studying hard. Be kind to yourself!"
          </blockquote>
          <p className="text-sm text-gray-500 mt-2">- Anonymous Student</p>
        </div>
      </div>
    </div>
  );
};

export default Home;