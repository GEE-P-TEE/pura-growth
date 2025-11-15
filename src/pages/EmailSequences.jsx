import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const EmailSequences = () => {
  const sequences = [
    {
      id: 1,
      name: 'Welcome to Wellness',
      subject: 'Your journey to better health starts here!',
      status: 'active',
      subscribers: 1247,
      openRate: 68.5,
      clickRate: 12.3,
      days: 8,
      lastSent: '2024-01-10',
      automation: true,
    },
    {
      id: 2,
      name: 'Detox Guide Series',
      subject: '7-day detox transformation',
      status: 'draft',
      subscribers: 0,
      openRate: 0,
      clickRate: 0,
      days: 7,
      lastSent: null,
      automation: false,
    },
    {
      id: 3,
      name: 'Protein Power Course',
      subject: 'Master protein intake for optimal results',
      status: 'active',
      subscribers: 892,
      openRate: 72.1,
      clickRate: 15.7,
      days: 10,
      lastSent: '2024-01-08',
      automation: true,
    },
    {
      id: 4,
      name: 'Vitamin Essentials',
      subject: 'Everything you need to know about vitamins',
      status: 'paused',
      subscribers: 456,
      openRate: 61.2,
      clickRate: 9.8,
      days: 6,
      lastSent: '2024-01-05',
      automation: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Email Sequences</h2>
          <p className="text-gray-600 mt-1">Create and manage your educational email courses</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon="Plus" className="w-4 h-4" />
          <span>New Sequence</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="Mail" className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{sequences.filter(s => s.status === 'active').length}</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Active Sequences</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="Users" className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">
              {sequences.reduce((sum, s) => sum + s.subscribers, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Subscribers</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="Eye" className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">67.3%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Avg Open Rate</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="MousePointer" className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">12.6%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Avg Click Rate</h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Email Sequences</h3>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Sequences</option>
              <option>Active Only</option>
              <option>Drafts</option>
              <option>Paused</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {sequences.map((sequence, index) => (
              <motion.div
                key={sequence.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <SafeIcon icon="Mail" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{sequence.name}</h4>
                      <p className="text-sm text-gray-600">{sequence.subject}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(sequence.status)}`}>
                          {sequence.status}
                        </span>
                        <span className="text-sm text-gray-500">{sequence.days} days</span>
                        {sequence.automation && (
                          <span className="text-sm text-green-600 flex items-center space-x-1">
                            <SafeIcon icon="Cpu" className="w-3 h-3" />
                            <span>Automated</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Subscribers</p>
                      <p className="font-semibold text-gray-900">{sequence.subscribers.toLocaleString()}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Open Rate</p>
                      <p className="font-semibold text-gray-900">{sequence.openRate}%</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Click Rate</p>
                      <p className="font-semibold text-gray-900">{sequence.clickRate}%</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={sequence.status === 'active' ? 'Pause' : 'Play'} className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon="Edit" className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon="BarChart2" className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailSequences;