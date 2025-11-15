import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const AnalyticsOverview = () => {
  const overviewMetrics = [
    {
      title: 'Total Followers',
      value: '125.4K',
      change: 12.5,
      icon: 'Users',
      color: 'blue',
    },
    {
      title: 'Email Subscribers',
      value: '8,742',
      change: 18.2,
      icon: 'Mail',
      color: 'purple',
    },
    {
      title: 'Campaign Entries',
      value: '4,698',
      change: 23.1,
      icon: 'Gift',
      color: 'green',
    },
    {
      title: 'Overall Engagement',
      value: '6.8%',
      change: -2.3,
      icon: 'TrendingUp',
      color: 'orange',
    },
  ];

  const platformMetrics = [
    {
      platform: 'Instagram',
      followers: '45.6K',
      engagement: '4.2%',
      posts: 234,
      color: 'from-pink-500 to-purple-600',
    },
    {
      platform: 'TikTok',
      followers: '12.8K',
      engagement: '6.8%',
      posts: 89,
      color: 'from-black to-gray-800',
    },
    {
      platform: 'Twitter',
      followers: '12.8K',
      engagement: '3.2%',
      posts: 456,
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Analytics Overview</h2>
          <p className="text-gray-600 mt-1">Comprehensive performance insights across all platforms</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <SafeIcon icon="Download" className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${
                  metric.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  metric.color === 'purple' ? 'from-purple-400 to-purple-600' :
                  metric.color === 'green' ? 'from-green-400 to-green-600' :
                  'from-orange-400 to-orange-600'
                } rounded-lg flex items-center justify-center`}>
                  <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <SafeIcon 
                    icon={metric.change > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    className="w-4 h-4" 
                  />
                  <span className="font-medium">{Math.abs(metric.change)}%</span>
                </div>
              </div>
              
              <h3 className="text-gray-500 text-sm font-medium mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Trends</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              View Details
            </button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon="BarChart2" className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-600">Performance Chart</p>
              <p className="text-sm text-gray-500 mt-1">Follower growth & engagement trends</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Platform Performance</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {platformMetrics.map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                    <SafeIcon icon="Users" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{platform.platform}</h4>
                    <p className="text-sm text-gray-500">{platform.posts} posts</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{platform.followers}</p>
                  <p className="text-sm text-gray-500">{platform.engagement} engagement</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;