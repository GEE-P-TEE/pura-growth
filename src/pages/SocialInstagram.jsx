import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const SocialInstagram = () => {
  const stats = {
    followers: 45678,
    following: 892,
    posts: 234,
    engagement: 4.2,
    reach: 125000,
    impressions: 456789,
  };

  const posts = [
    {
      id: 1,
      type: 'image',
      caption: 'Start your day with our premium vitamin blend! ☀️ #MorningRoutine #Wellness #Health',
      scheduledTime: '2024-01-15 09:00',
      status: 'scheduled',
      likes: 0,
      comments: 0,
      reach: 0,
      engagement: 0,
    },
    {
      id: 2,
      type: 'video',
      caption: 'Behind the scenes: How we create our supplements! 🌿 #BehindTheScenes #Quality',
      scheduledTime: '2024-01-15 12:00',
      status: 'scheduled',
      likes: 0,
      comments: 0,
      reach: 0,
      engagement: 0,
    },
    {
      id: 3,
      type: 'carousel',
      caption: '5 tips for better sleep tonight! 🌙 Swipe through to learn more. #SleepTips #Wellness',
      scheduledTime: '2024-01-14 18:00',
      status: 'published',
      likes: 1234,
      comments: 89,
      reach: 8456,
      engagement: 15.6,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
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
          <h2 className="text-3xl font-bold text-gray-900">Instagram Management</h2>
          <p className="text-gray-600 mt-1">Manage your Instagram content and performance</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon="Plus" className="w-4 h-4" />
          <span>Create Post</span>
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
            <SafeIcon icon="Users" className="w-6 h-6 text-pink-600" />
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
            <SafeIcon icon="Eye" className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">{stats.reach.toLocaleString()}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Reach</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon="MessageCircle" className="w-6 h-6 text-purple-600" />
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
            <SafeIcon icon="Heart" className="w-6 h-6 text-red-600" />
            <span className="text-lg font-bold text-gray-900">{stats.posts}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Total Posts</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon="TrendingUp" className="w-6 h-6 text-green-600" />
            <span className="text-lg font-bold text-gray-900">+12.5%</span>
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
            <SafeIcon icon="Activity" className="w-6 h-6 text-orange-600" />
            <span className="text-lg font-bold text-gray-900">{stats.impressions.toLocaleString()}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Impressions</h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Posts</option>
              <option>Scheduled</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <SafeIcon icon="Camera" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                          {post.status}
                        </span>
                        <span className="text-sm text-gray-500">{post.scheduledTime}</span>
                      </div>
                      <p className="text-sm text-gray-900 mb-3 line-clamp-2">{post.caption}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <SafeIcon icon="Edit2" className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <SafeIcon icon="MoreVertical" className="w-4 h-4 text-gray-600" />
                    </button>
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

export default SocialInstagram;