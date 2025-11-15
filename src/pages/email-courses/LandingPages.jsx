import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiPlus, FiEdit, FiCopy, FiExternalLink, FiBarChart2, FiEye } = FiIcons;

const LandingPages = () => {
  const [pages, setPages] = useState([
    {
      id: 1,
      name: 'Welcome to Wellness',
      title: 'Start Your Health Journey Today',
      url: 'wellness.puragrowth.com',
      status: 'published',
      visitors: 3421,
      conversions: 412,
      conversionRate: 12.0,
      lastModified: '2024-01-10',
      template: 'Welcome Series',
    },
    {
      id: 2,
      name: 'Detox Guide Landing',
      title: '7-Day Detox Transformation',
      url: 'detox.puragrowth.com',
      status: 'published',
      visitors: 2156,
      conversions: 278,
      conversionRate: 12.9,
      lastModified: '2024-01-08',
      template: 'Lead Magnet',
    },
    {
      id: 3,
      name: 'Protein Power Course',
      title: 'Master Protein Intake for Results',
      url: 'protein.puragrowth.com',
      status: 'draft',
      visitors: 0,
      conversions: 0,
      conversionRate: 0,
      lastModified: '2024-01-12',
      template: 'Course Signup',
    },
    {
      id: 4,
      name: 'Vitamin Essentials',
      title: 'Complete Guide to Vitamins',
      url: 'vitamins.puragrowth.com',
      status: 'published',
      visitors: 1876,
      conversions: 198,
      conversionRate: 10.6,
      lastModified: '2024-01-05',
      template: 'Educational',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      case 'paused':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
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
          <h2 className="text-3xl font-bold text-gray-900">Landing Pages</h2>
          <p className="text-gray-600 mt-1">Create high-converting landing pages for your email courses</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>New Landing Page</span>
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
            <SafeIcon icon={FiGlobe} className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{pages.filter(p => p.status === 'published').length}</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Published Pages</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiEye} className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">
              {pages.reduce((sum, p) => sum + p.visitors, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Visitors</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiIcons.FiTarget} className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">
              {pages.reduce((sum, p) => sum + p.conversions, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Conversions</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiIcons.FiTrendingUp} className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">11.8%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Avg Conversion Rate</h3>
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
            <h3 className="text-lg font-semibold text-gray-900">Landing Pages</h3>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Pages</option>
              <option>Published Only</option>
              <option>Drafts</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {pages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{page.name}</h4>
                      <p className="text-sm text-gray-600">{page.title}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(page.status)}`}>
                          {page.status}
                        </span>
                        <span className="text-sm text-gray-500">{page.url}</span>
                        <span className="text-sm text-gray-500">Template: {page.template}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Visitors</p>
                      <p className="font-semibold text-gray-900">{page.visitors.toLocaleString()}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Conversions</p>
                      <p className="font-semibold text-gray-900">{page.conversions}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Rate</p>
                      <p className="font-semibold text-gray-900">{page.conversionRate}%</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiEye} className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiExternalLink} className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiEdit} className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiCopy} className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiBarChart2} className="w-4 h-4 text-gray-600" />
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

export default LandingPages;