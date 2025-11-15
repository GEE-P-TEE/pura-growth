import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const Dashboard = ({ onPageChange }) => {
  const metrics = [
    { title: 'Total Followers', value: '125.4K', change: 12.5, icon: 'Users', color: 'blue' },
    { title: 'Posts Today', value: '24/30', change: -8.3, icon: 'Calendar', color: 'green' },
    { title: 'Email Subscribers', value: '8,742', change: 18.2, icon: 'Mail', color: 'purple' },
    { title: 'Active Campaigns', value: '6', change: 0, icon: 'Target', color: 'orange' },
  ];

  const recentActivity = [
    { id: 1, type: 'post', platform: 'Instagram', message: 'New post published: "Summer Glow Guide"', time: '2 min ago' },
    { id: 2, type: 'campaign', platform: 'All', message: 'Giveaway campaign "Vitamin Boost" reached 500 entries', time: '15 min ago' },
    { id: 3, type: 'email', platform: 'Klaviyo', message: 'Email sequence "Detox Guide" sent to 234 subscribers', time: '1 hour ago' },
    { id: 4, type: 'social', platform: 'TikTok', message: 'Video trending: 15.2K views', time: '2 hours ago' },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'post': return 'Image';
      case 'campaign': return 'Gift';
      case 'email': return 'Mail';
      default: return 'Share2';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'post': return 'bg-blue-100 text-blue-600';
      case 'campaign': return 'bg-green-100 text-green-600';
      case 'email': return 'bg-purple-100 text-purple-600';
      default: return 'bg-orange-100 text-orange-600';
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
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600 mt-1">Welcome back! Here's your marketing overview.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => onPageChange('Content')}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <SafeIcon icon="Plus" className="w-4 h-4" />
            <span>Create Content</span>
          </button>
          <button 
            onClick={() => onPageChange('Campaigns')}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <SafeIcon icon="Gift" className="w-4 h-4" />
            <span>New Campaign</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${
                metric.color === 'blue' ? 'from-blue-400 to-blue-600' :
                metric.color === 'green' ? 'from-green-400 to-green-600' :
                metric.color === 'purple' ? 'from-purple-400 to-purple-600' :
                'from-orange-400 to-orange-600'
              } rounded-lg flex items-center justify-center`}>
                <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
              </div>
              {metric.change !== 0 && (
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <SafeIcon 
                    icon={metric.change > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    className="w-4 h-4" 
                  />
                  <span className="font-medium">{Math.abs(metric.change)}%</span>
                </div>
              )}
            </div>
            
            <h3 className="text-gray-500 text-sm font-medium mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon="TrendingUp" className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-600">Analytics Chart</p>
              <p className="text-sm text-gray-500 mt-1">Performance trends visualization</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  <SafeIcon icon={getActivityIcon(activity.type)} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.platform} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;