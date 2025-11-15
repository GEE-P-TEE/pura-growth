import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiUsers, FiEye, FiMousePointer, FiTrendingUp, FiSend, FiTarget } = FiIcons;

const AnalyticsEmail = () => {
  const emailMetrics = [
    {
      title: 'Total Subscribers',
      value: '8,742',
      change: 18.2,
      icon: FiUsers,
      color: 'blue',
    },
    {
      title: 'Open Rate',
      value: '67.3%',
      change: 5.4,
      icon: FiEye,
      color: 'green',
    },
    {
      title: 'Click Rate',
      value: '12.6%',
      change: -2.1,
      icon: FiMousePointer,
      color: 'purple',
    },
    {
      title: 'Conversions',
      value: '892',
      change: 23.7,
      icon: FiTarget,
      color: 'orange',
    },
  ];

  const sequencePerformance = [
    {
      name: 'Welcome to Wellness',
      subscribers: 1247,
      openRate: 68.5,
      clickRate: 12.3,
      conversions: 156,
      revenue: 12450,
      status: 'active',
    },
    {
      name: 'Detox Guide Series',
      subscribers: 892,
      openRate: 72.1,
      clickRate: 15.7,
      conversions: 142,
      revenue: 8920,
      status: 'active',
    },
    {
      name: 'Protein Power Course',
      subscribers: 456,
      openRate: 61.2,
      clickRate: 9.8,
      conversions: 45,
      revenue: 3450,
      status: 'paused',
    },
    {
      name: 'Vitamin Essentials',
      subscribers: 623,
      openRate: 64.8,
      clickRate: 11.2,
      conversions: 78,
      revenue: 5670,
      status: 'active',
    },
  ];

  const recentEmails = [
    {
      subject: 'Welcome to our wellness community!',
      sentDate: '2024-01-15',
      sent: 1247,
      opened: 854,
      clicked: 105,
      converted: 23,
      openRate: 68.5,
      clickRate: 12.3,
    },
    {
      subject: 'Quick health tip: Better sleep habits',
      sentDate: '2024-01-14',
      sent: 892,
      opened: 623,
      clicked: 78,
      converted: 15,
      openRate: 69.8,
      clickRate: 12.5,
    },
    {
      subject: 'New product launch announcement',
      sentDate: '2024-01-13',
      sent: 2341,
      opened: 1456,
      clicked: 189,
      converted: 45,
      openRate: 62.2,
      clickRate: 13.0,
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
          <h2 className="text-3xl font-bold text-gray-900">Email Analytics</h2>
          <p className="text-gray-600 mt-1">Track your email marketing performance and conversions</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 3 months</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiIcons.FiDownload} className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {emailMetrics.map((metric, index) => (
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
                  metric.color === 'green' ? 'from-green-400 to-green-600' :
                  metric.color === 'purple' ? 'from-purple-400 to-purple-600' :
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
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Email Performance Trends</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              View Details
            </button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-600">Performance Chart</p>
              <p className="text-sm text-gray-500 mt-1">Open rates & click trends</p>
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
            <h3 className="text-lg font-semibold text-gray-900">Revenue Impact</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              ROI Analysis
            </button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiTarget} className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p className="text-gray-600">Revenue Chart</p>
              <p className="text-sm text-gray-500 mt-1">Email-driven revenue</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Sequence Performance</h3>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Sequences</option>
            <option>Active Only</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Sequence Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Subscribers</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Open Rate</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Click Rate</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Conversions</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Revenue</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {sequencePerformance.map((sequence, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{sequence.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{sequence.subscribers.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{sequence.openRate}%</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{sequence.clickRate}%</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{sequence.conversions}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">${sequence.revenue.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      sequence.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {sequence.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Email Campaigns</h3>
          <button className="text-sm text-green-600 hover:text-green-700 font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {recentEmails.map((email, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiSend} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{email.subject}</h4>
                    <p className="text-sm text-gray-500">Sent: {email.sentDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Open Rate</p>
                    <p className="font-semibold text-gray-900">{email.openRate}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Click Rate</p>
                    <p className="font-semibold text-gray-900">{email.clickRate}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Conversions</p>
                    <p className="font-semibold text-gray-900">{email.converted}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Sent</p>
                    <p className="font-semibold text-gray-900">{email.sent.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsEmail;