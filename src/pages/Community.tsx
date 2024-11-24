import React, { useState } from 'react';
import { MessageSquare, Users, Shield } from 'lucide-react';

const topics = [
  { id: 'motivation', name: 'Motivation' },
  { id: 'stress', name: 'Stress Management' },
  { id: 'academic', name: 'Academic Support' },
];

const initialPosts = [
  {
    id: 1,
    topic: 'motivation',
    content: "Just aced my midterm after weeks of preparation! Don't give up, consistency is key! 💪",
    likes: 12,
    replies: 3,
    timestamp: '2h ago',
  },
  {
    id: 2,
    topic: 'stress',
    content: "Finding it hard to balance everything. Any tips on managing academic pressure?",
    likes: 8,
    replies: 5,
    timestamp: '4h ago',
  },
];

const Community = () => {
  const [selectedTopic, setSelectedTopic] = useState('motivation');
  const [newPost, setNewPost] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-500" />
          <span>Community Space</span>
        </h1>
        <div className="flex space-x-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`btn ${
                selectedTopic === topic.id ? 'btn-primary' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="h-5 w-5 text-blue-500" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This is a safe space. Be kind and supportive to fellow students.
          </p>
        </div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
          className="input min-h-[100px] resize-none mb-4"
        />
        <div className="flex justify-end">
          <button className="btn-primary">Post</button>
        </div>
      </div>

      <div className="space-y-4">
        {initialPosts.map((post) => (
          <div key={post.id} className="card">
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.replies} replies</span>
                </button>
                <span>•</span>
                <span>{post.timestamp}</span>
              </div>
              <button className="text-blue-500 hover:text-blue-600">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;