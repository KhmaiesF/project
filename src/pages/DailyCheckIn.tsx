import React, { useState } from 'react';
import { Calendar, Edit3, Send } from 'lucide-react';

const moodQuotes = {
  happy: "That's wonderful! Keep spreading those positive vibes!",
  neutral: "Every day is a new opportunity. What small win can you focus on today?",
  sad: "It's okay not to be okay. Remember that this feeling is temporary.",
  angry: "Take a deep breath. Let's work through these feelings together."
};

const DailyCheckIn = () => {
  const [reflection, setReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="h-6 w-6 text-blue-500" />
          <h1 className="text-2xl font-bold">Daily Check-In</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              How are you feeling today? What's on your mind?
            </label>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="input min-h-[150px] resize-none"
              placeholder="Write your thoughts here..."
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Submit Reflection</span>
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="card bg-blue-50 dark:bg-blue-900/50">
          <div className="flex items-center space-x-3 mb-4">
            <Edit3 className="h-5 w-5 text-blue-500" />
            <h2 className="text-xl font-semibold">Today's Insight</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for sharing. Remember that every reflection is a step toward better understanding yourself.
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyCheckIn;