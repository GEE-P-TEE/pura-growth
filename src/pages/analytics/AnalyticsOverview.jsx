import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiMail, FiGift, FiBarChart2, FiCalendar, FiDownload } = FiIcons;

const AnalyticsOverview = () => {
  const overviewMetrics = [
    {
      title: 'Total Followers',
      value: '125.4K',
      change: 12.5,
      icon: FiUsers,
      color: 'blue',
    },
    {
      title: 'Email Subscribers',
      value: '8,742',
      change: 18.2,
      icon: FiMail,
      color: 'purple',
    },
    {
      title: 'Campaign Entries',
      value: '4,698',
      change: 23.1,
      icon: FiGift,
      color: 'green',
    },
    {
      title: 'Overall Engagement',
      value: '6.8%',
      change: -2.3,
      icon: FiTrendingUp,
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

  const recentPerformance = [
    { date: '2024-01-15', followers: 125400, engagement: 6.8, conversions: 142 },
    { date: '2024-01-14', followers: 124800, engagement: 7.1, conversions: 138 },
    { date: '2024-01-13', followers: 124200, engagement: 6.5, conversions: 125 },
    { date: '2024-01-12', followers: 123500, engagement: 7.3, conversions: 156 },
    { date: '2024-01-11', followers: 122900, engagement: 6.9, conversions: 134 },
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
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
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
                    icon={metric.change > 0 ? FiIcons.FiTrendingUp : FiIcons.FiTrendingDown} 
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
          transition={{ delay: 0.3 }}
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
              <SafeIcon icon={FiBarChart2} className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-600">Performance Chart</p>
              <p className="text-sm text-gray-500 mt-1">Follower growth & engagement trends</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
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
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-white" />
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Performance</h3>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 inline mr-1" />
              Date Range
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Followers</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Engagement</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Conversions</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Change</th>
              </tr>
            </thead>
            <tbody>
              {recentPerformance.map((day, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{day.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{day.followers.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{day.engagement}%</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{day.conversions}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center space-x-1 text-sm text-green-600">
                      <SafeIcon icon={FiTrendingUp} className="w-3 h-3" />
                      <span>+{Math.floor(Math.random() * 10) + 1}%</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsOverview;