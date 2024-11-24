import React, { useState } from 'react';
import { Search, Book, Clock, Heart, Brain } from 'lucide-react';

const categories = [
  { id: 'stress', name: 'Stress Relief', icon: Heart },
  { id: 'time', name: 'Time Management', icon: Clock },
  { id: 'mindfulness', name: 'Mindfulness', icon: Brain },
];

const resources = [
  {
    id: 1,
    title: '5-Minute Meditation Guide',
    category: 'mindfulness',
    description: 'Quick meditation techniques for busy students.',
  },
  {
    id: 2,
    title: 'Exam Stress Management',
    category: 'stress',
    description: 'Practical tips to handle exam pressure.',
  },
  {
    id: 3,
    title: 'Effective Study Planning',
    category: 'time',
    description: 'Create a balanced study schedule that works.',
  },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <div className="flex gap-2">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(selectedCategory === id ? '' : id)}
              className={`btn flex items-center space-x-2 ${
                selectedCategory === id ? 'btn-primary' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="card hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Book className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                <button className="mt-4 text-blue-500 hover:text-blue-600 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;