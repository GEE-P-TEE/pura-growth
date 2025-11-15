import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiVideo, FiMessageSquare, FiTrendingUp, FiUsers, FiHeart, FiEye } = FiIcons;

const AnalyticsSocial = () => {
  const socialMetrics = [
    {
      platform: 'Instagram',
      followers: 45678,
      following: 892,
      posts: 234,
      engagement: 4.2,
      reach: 125000,
      impressions: 456789,
      growth: 12.5,
      color: 'from-pink-500 to-purple-600',
    },
    {
      platform: 'TikTok',
      followers: 12845,
      following: 234,
      posts: 89,
      engagement: 6.8,
      reach: 234567,
      impressions: 1234567,
      growth: 18.2,
      color: 'from-black to-gray-800',
    },
    {
      platform: 'Twitter',
      followers: 12845,
      following: 892,
      posts: 456,
      engagement: 3.2,
      reach: 1250000,
      impressions: 2500000,
      growth: 8.5,
      color: 'from-blue-400 to-blue-600',
    },
  ];

  const topPerformingPosts = [
    {
      id: 1,
      platform: 'Instagram',
      type: 'image',
      content: 'Morning vitamin routine 💊',
      engagement: 23.4,
      likes: 2341,
      comments: 189,
      shares: 567,
      reach: 45678,
    },
    {
      id: 2,
      platform: 'TikTok',
      type: 'video',
      content: '3 tips for better sleep',
      engagement: 18.9,
      likes: 5678,
      comments: 234,
      shares: 1234,
      reach: 123456,
    },
    {
      id: 3,
      platform: 'Twitter',
      type: 'text',
      content: 'Quick health tip thread',
      engagement: 15.6,
      likes: 892,
      retweets: 234,
      replies: 123,
      reach: 89012,
    },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Instagram':
        return FiCamera;
      case 'TikTok':
        return FiVideo;
      case 'Twitter':
        return FiMessageSquare;
      default:
        return FiMessageSquare;
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
          <h2 className="text-3xl font-bold text-gray-900">Social Media Analytics</h2>
          <p className="text-gray-600 mt-1">Detailed performance metrics across all social platforms</p>
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 3 months</option>
        </select>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {socialMetrics.map((platform, index) => (
          <motion.div
            key={platform.platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                <SafeIcon icon={getPlatformIcon(platform.platform)} className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{(platform.followers / 1000).toFixed(1)}K</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Engagement Rate</span>
                <span className="font-semibold text-gray-900">{platform.engagement}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Reach</span>
                <span className="font-semibold text-gray-900">{(platform.reach / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Impressions</span>
                <span className="font-semibold text-gray-900">{(platform.impressions / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Growth Rate</span>
                <span className="font-semibold text-green-600">+{platform.growth}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Posts</span>
                <span className="font-semibold text-gray-900">{platform.posts}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Following</span>
                <span className="font-medium text-gray-900">{platform.following}</span>
              </div>
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
            <h3 className="text-lg font-semibold text-gray-900">Growth Trends</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              Export Data
            </button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-600">Growth Chart</p>
              <p className="text-sm text-gray-500 mt-1">Follower growth over time</p>
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
            <h3 className="text-lg font-semibold text-gray-900">Engagement Comparison</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              View Details
            </button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiHeart} className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p className="text-gray-600">Engagement Chart</p>
              <p className="text-sm text-gray-500 mt-1">Platform engagement rates</p>
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
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Platforms</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>Twitter</option>
          </select>
        </div>

        <div className="space-y-4">
          {topPerformingPosts.map((post, index) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${
                    post.platform === 'Instagram' ? 'from-pink-500 to-purple-600' :
                    post.platform === 'TikTok' ? 'from-black to-gray-800' :
                    'from-blue-400 to-blue-600'
                  } rounded-lg flex items-center justify-center`}>
                    <SafeIcon icon={getPlatformIcon(post.platform)} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{post.content}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{post.platform}</span>
                      <span>{post.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Engagement</p>
                    <p className="font-semibold text-gray-900">{post.engagement}%</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiHeart} className="w-3 h-3" />
                      <span>{(post.likes / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiMessageSquare} className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiEye} className="w-3 h-3" />
                      <span>{(post.reach / 1000).toFixed(0)}K</span>
                    </div>
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

export default AnalyticsSocial;