import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiVideo, FiPlus, FiMusic, FiTrendingUp, FiEye, FiHeart, FiMessageCircle } = FiIcons;

const SocialTiktok = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Morning Vitamin Routine 💊',
      caption: 'Start your day right with our premium supplements! #MorningRoutine #Vitamins #Health',
      duration: '0:30',
      scheduledTime: '2024-01-15 10:00',
      status: 'scheduled',
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: 2,
      title: '3 Tips for Better Sleep',
      caption: 'Struggling with sleep? Try these natural remedies! 🌙 #SleepTips #Wellness #HealthHacks',
      duration: '0:45',
      scheduledTime: '2024-01-14 20:00',
      status: 'published',
      views: 45678,
      likes: 2341,
      comments: 189,
      shares: 567,
    },
    {
      id: 3,
      title: 'Behind the Scenes 🌿',
      caption: 'See how we make our quality supplements! #BehindTheScenes #MadeWithLove',
      duration: '1:00',
      scheduledTime: '2024-01-13 18:00',
      status: 'published',
      views: 23456,
      likes: 1234,
      comments: 98,
      shares: 234,
    },
  ]);

  const stats = {
    followers: 12845,
    following: 234,
    videos: 89,
    totalViews: 1234567,
    avgEngagement: 6.8,
    growth: 18.2,
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
          <h2 className="text-3xl font-bold text-gray-900">TikTok Management</h2>
          <p className="text-gray-600 mt-1">Create and manage engaging TikTok content</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Create Video</span>
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
            <SafeIcon icon={FiIcons.FiUsers} className="w-6 h-6 text-black" />
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
            <SafeIcon icon={FiEye} className="w-6 h-6 text-red-600" />
            <span className="text-lg font-bold text-gray-900">{(stats.totalViews / 1000000).toFixed(1)}M</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Total Views</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-pink-600" />
            <span className="text-lg font-bold text-gray-900">{stats.avgEngagement}%</span>
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
            <SafeIcon icon={FiVideo} className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">{stats.videos}</span>
          </div>
          <h3 className="text-gray-500 text-xs font-medium">Total Videos</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-600" />
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
            <SafeIcon icon={FiMusic} className="w-6 h-6 text-purple-600" />
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
                <h3 className="text-lg font-semibold text-gray-900">Video Content</h3>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Videos</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                  <option>Drafts</option>
                </select>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-20 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={FiVideo} className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{video.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(video.status)}`}>
                            {video.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{video.caption}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>Duration: {video.duration}</span>
                            <span>{video.scheduledTime}</span>
                          </div>
                          {video.status === 'published' && (
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <SafeIcon icon={FiEye} className="w-3 h-3" />
                                <span>{(video.views / 1000).toFixed(1)}K</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <SafeIcon icon={FiHeart} className="w-3 h-3" />
                                <span>{(video.likes / 1000).toFixed(1)}K</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <SafeIcon icon={FiMessageCircle} className="w-3 h-3" />
                                <span>{video.comments}</span>
                              </div>
                            </div>
                          )}
                        </div>
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
              <button className="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Quick Video</span>
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiMusic} className="w-4 h-4" />
                <span>Sound Library</span>
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span>Trending Topics</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-2">TikTok Tips</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Use trending sounds for more reach</li>
              <li>• Keep videos under 60 seconds</li>
              <li>• Post 3-4 times daily for growth</li>
              <li>• Engage with comments quickly</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialTiktok;