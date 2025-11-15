import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFile, FiStar, FiCopy, FiEdit, FiGift, FiUsers, FiSearch } = FiIcons;

const CampaignsTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const templates = [
    {
      id: 1,
      name: 'Product Launch Giveaway',
      description: 'Perfect for launching new products with high engagement',
      keyword: 'NEW',
      duration: '7 days',
      platforms: ['instagram', 'tiktok'],
      difficulty: 'easy',
      usage: 45,
      rating: 4.8,
      prizes: [
        { name: 'Product Bundle', quantity: 5, value: '150' },
        { name: 'Discount Code', quantity: 100, value: '25' }
      ]
    },
    {
      id: 2,
      name: 'Holiday Special Campaign',
      description: 'Seasonal giveaway template for holiday promotions',
      keyword: 'HOLIDAY',
      duration: '14 days',
      platforms: ['instagram', 'twitter'],
      difficulty: 'medium',
      usage: 32,
      rating: 4.7,
      prizes: [
        { name: 'Holiday Gift Box', quantity: 10, value: '200' },
        { name: 'Free Shipping', quantity: 50, value: '15' }
      ]
    },
    {
      id: 3,
      name: 'Community Growth Challenge',
      description: 'Rapid follower growth with simple entry requirements',
      keyword: 'GROW',
      duration: '5 days',
      platforms: ['tiktok'],
      difficulty: 'easy',
      usage: 28,
      rating: 4.9,
      prizes: [
        { name: 'Starter Kit', quantity: 20, value: '75' },
        { name: 'E-book', quantity: 200, value: '10' }
      ]
    },
    {
      id: 4,
      name: 'Influencer Collaboration',
      description: 'Partner with influencers for extended reach',
      keyword: 'COLLAB',
      duration: '10 days',
      platforms: ['instagram', 'tiktok', 'twitter'],
      difficulty: 'hard',
      usage: 18,
      rating: 4.6,
      prizes: [
        { name: 'Premium Package', quantity: 3, value: '500' },
        { name: 'Consultation', quantity: 10, value: '100' }
      ]
    },
    {
      id: 5,
      name: 'Flash Sale Giveaway',
      description: 'Quick turnaround campaign for immediate sales boost',
      keyword: 'FLASH',
      duration: '3 days',
      platforms: ['instagram'],
      difficulty: 'easy',
      usage: 56,
      rating: 4.8,
      prizes: [
        { name: 'Bestseller', quantity: 15, value: '50' },
        { name: 'Sample Pack', quantity: 100, value: '20' }
      ]
    },
    {
      id: 6,
      name: 'Educational Content Contest',
      description: 'User-generated content campaign for authentic engagement',
      keyword: 'LEARN',
      duration: '21 days',
      platforms: ['instagram', 'tiktok'],
      difficulty: 'medium',
      usage: 22,
      rating: 4.7,
      prizes: [
        { name: 'Grand Prize', quantity: 1, value: '1000' },
        { name: 'Runner-up', quantity: 5, value: '250' }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Campaign Templates</h2>
          <p className="text-gray-600 mt-1">Choose from proven giveaway campaign templates</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiIcons.FiPlus} className="w-4 h-4" />
          <span>Create Custom</span>
        </button>
      </motion.div>

      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>All Difficulties</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiGift} className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{template.rating}</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(template.difficulty)}`}>
                  {template.difficulty}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{template.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Keyword:</span>
                <span className="font-medium text-gray-900">"{template.keyword}"</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium text-gray-900">{template.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Platforms:</span>
                <div className="flex items-center space-x-1">
                  {template.platforms.map((platform) => (
                    <span key={platform} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      <SafeIcon 
                        icon={platform === 'instagram' ? FiIcons.FiCamera : platform === 'tiktok' ? FiIcons.FiVideo : FiIcons.FiMessageSquare}
                        className="w-3 h-3 text-gray-600"
                      />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Used:</span>
                <span className="font-medium text-gray-900">{template.usage} times</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500 mb-2">Prizes ({template.prizes.length})</p>
              <div className="space-y-1">
                {template.prizes.slice(0, 2).map((prize, index) => (
                  <div key={index} className="text-xs text-gray-600">
                    • {prize.quantity}x {prize.name} (${prize.value})
                  </div>
                ))}
                {template.prizes.length > 2 && (
                  <div className="text-xs text-gray-400">+{template.prizes.length - 2} more</div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                Use Template
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiCopy} className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiEdit} className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsTemplates;