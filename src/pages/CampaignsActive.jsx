import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const CampaignsActive = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Glow Giveaway',
      keyword: 'GLOWUP',
      entries: 1247,
      goal: 2000,
      status: 'active',
      startDate: '2024-01-10',
      endDate: '2024-01-31',
      platform: 'all',
      conversion: 3.2,
    },
    {
      id: 2,
      name: 'Vitamin Boost Challenge',
      keyword: 'BOOST',
      entries: 892,
      goal: 1500,
      status: 'active',
      startDate: '2024-01-08',
      endDate: '2024-01-25',
      platform: 'instagram',
      conversion: 2.8,
    },
    {
      id: 3,
      name: 'New Year Reset',
      keyword: 'RESET',
      entries: 2103,
      goal: 2500,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      platform: 'tiktok',
      conversion: 4.1,
    },
    {
      id: 4,
      name: 'Wellness Wednesday',
      keyword: 'WELLNESS',
      entries: 456,
      goal: 1000,
      status: 'paused',
      startDate: '2024-01-05',
      endDate: '2024-01-20',
      platform: 'twitter',
      conversion: 1.9,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return 'Camera';
      case 'tiktok': return 'Video';
      case 'twitter': return 'MessageSquare';
      case 'all': return 'Globe';
      default: return 'Share2';
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
          <h2 className="text-3xl font-bold text-gray-900">Active Campaigns</h2>
          <p className="text-gray-600 mt-1">Manage your ongoing giveaway campaigns</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon="Plus" className="w-4 h-4" />
          <span>New Campaign</span>
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
            <SafeIcon icon="Gift" className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{campaigns.filter(c => c.status === 'active').length}</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Active Campaigns</h3>
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
              {campaigns.reduce((sum, c) => sum + c.entries, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Entries</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="TrendingUp" className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">3.0%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Avg Conversion</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon="Gift" className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">12</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">This Month</h3>
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
            <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Campaigns</option>
              <option>Active Only</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <SafeIcon icon="Gift" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <SafeIcon icon={getPlatformIcon(campaign.platform)} className="w-4 h-4" />
                          <span className="capitalize">{campaign.platform}</span>
                        </div>
                        <span className="text-sm text-gray-500">Keyword: {campaign.keyword}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Progress</p>
                      <p className="font-semibold text-gray-900">
                        {campaign.entries} / {campaign.goal}
                      </p>
                      <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                        <div
                          className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                          style={{ width: `${(campaign.entries / campaign.goal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Conversion</p>
                      <p className="font-semibold text-gray-900">{campaign.conversion}%</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={campaign.status === 'active' ? 'Pause' : 'Play'} className="w-4 h-4 text-gray-600" />
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

export default CampaignsActive;