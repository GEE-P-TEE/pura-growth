import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageSquare, FiPlus, FiTrendingUp, FiRepeat, FiHeart, FiMessageCircle, FiShare2 } = FiIcons;

const SocialTwitter = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: 'Did you know? Vitamin D deficiency affects over 1 billion people worldwide. Get your daily dose with our premium supplements! ☀️ #VitaminD #Health #Wellness',
      scheduledTime: '2024-01-15 08:00',
      status: 'scheduled',
      likes: 0,
      retweets: 0,
      replies: 0,
      impressions: 0,
    },
    {
      id: 2,
      content: 'Customer love! "These vitamins changed my morning routine completely!" - Sarah M. 💚 #CustomerLove #Testimonial',
      scheduledTime: '2024-01-14 14:00',
      status: 'published',
      likes: 234,
      retweets: 45,
      replies: 12,
      impressions: 12500,
    },
    {
      id: 3,
      content: 'Quick health tip: Drink water before your morning coffee for better hydration! 💧 #HealthTip #MorningRoutine',
      scheduledTime: '2024-01-13 10:00',
      status: 'published',
      likes: 567,
      retweets: 89,
      replies: 34,
      impressions: 23400,
    },
  ]);

  const stats = {
    followers: 12845,
    following: 892,
    tweets: 456,
    impressions: 1250000,
    engagement: 3.2,
    growth: 8.5,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
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
          <h2 className="text-3xl font-bold text-gray-900">Twitter Management</h2>
          <p className="text-gray-600 mt-1">Manage your Twitter content and engagement</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>New Tweet</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiIcons.FiUsers} className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">{stats.followers.toLocaleString()}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Followers</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiShare2} className="w-6 h-6 text-green-600" />
            <span className="text-lg font-bold text-gray-900">{(stats.impressions / 1000000).toFixed(1)}M</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Impressions</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-600" />
            <span className="text-lg font-bold text-gray-900">{stats.engagement}%</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Engagement</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-gray-900">{stats.tweets}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Total Tweets</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiRepeat} className="w-6 h-6 text-green-500" />
            <span className="text-lg font-bold text-gray-900">+{stats.growth}%</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Growth Rate</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-bold text-gray-900">Trending</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Status</h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Tweets</h3>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Tweets</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                  <option>Drafts</option>
                </select>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {tweets.map((tweet, index) => (
                  <motion.div
                    key={tweet.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(tweet.status)}`}>
                            {tweet.status}
                          </span>
                          <span className="text-sm text-gray-500">{tweet.scheduledTime}</span>
                        </div>
                        <p className="text-sm text-gray-900 mb-3">{tweet.content}</p>
                        {tweet.status === 'published' && (
                          <div className="flex items-center space-x-6 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiHeart} className="w-3 h-3" />
                              <span>{tweet.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiRepeat} className="w-3 h-3" />
                              <span>{tweet.retweets}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiMessageCircle} className="w-3 h-3" />
                              <span>{tweet.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiShare2} className="w-3 h-3" />
                              <span>{(tweet.impressions / 1000).toFixed(1)}K impressions</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <SafeIcon icon={FiIcons.FiEdit2} className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <SafeIcon icon={FiIcons.FiMoreVertical} className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Compose Tweet</span>
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span>Trending Topics</span>
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiRepeat} className="w-4 h-4" />
                <span>Schedule Thread</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-2">Twitter Tips</h3>
            <ul className="space-y-2 text-sm text-blue-50">
              <li>• Use relevant hashtags (2-3 per tweet)</li>
              <li>• Tweet 3-5 times daily for visibility</li>
              <li>• Engage with replies quickly</li>
              <li>• Use threads for longer content</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialTwitter;