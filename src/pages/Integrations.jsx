import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/SafeIcon';

const Integrations = () => {
  const integrations = [
    {
      id: 1,
      name: 'Instagram API',
      category: 'Social Media',
      status: 'connected',
      description: 'Post and manage Instagram content',
      lastSync: '2024-01-15 10:30',
      features: ['Post scheduling', 'Analytics', 'DM automation'],
      icon: 'Camera',
      color: 'from-pink-500 to-purple-600',
    },
    {
      id: 2,
      name: 'TikTok API',
      category: 'Social Media',
      status: 'connected',
      description: 'Upload and manage TikTok videos',
      lastSync: '2024-01-15 09:15',
      features: ['Video upload', 'Analytics', 'Trending sounds'],
      icon: 'Video',
      color: 'from-black to-gray-800',
    },
    {
      id: 3,
      name: 'Twitter API',
      category: 'Social Media',
      status: 'connected',
      description: 'Post tweets and monitor engagement',
      lastSync: '2024-01-15 11:45',
      features: ['Tweet scheduling', 'Analytics', 'Hashtag tracking'],
      icon: 'MessageSquare',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 4,
      name: 'Klaviyo',
      category: 'Email Marketing',
      status: 'connected',
      description: 'Email automation and subscriber management',
      lastSync: '2024-01-15 08:00',
      features: ['Email sequences', 'Subscriber sync', 'Analytics'],
      icon: 'Mail',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 5,
      name: 'OpenAI',
      category: 'AI Services',
      status: 'connected',
      description: 'AI-powered content generation',
      lastSync: '2024-01-15 12:00',
      features: ['Content generation', 'Hashtag suggestions', 'Copywriting'],
      icon: 'Cpu',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 6,
      name: 'Gemini API',
      category: 'AI Services',
      status: 'disconnected',
      description: 'Advanced AI content and image generation',
      lastSync: null,
      features: ['Image generation', 'Content creation', 'Analysis'],
      icon: 'Image',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-700';
      case 'disconnected': return 'bg-red-100 text-red-700';
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
          <h2 className="text-3xl font-bold text-gray-900">Integrations</h2>
          <p className="text-gray-600 mt-1">Connect and manage your third-party services</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon="Plus" className="w-4 h-4" />
          <span>Add Integration</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center`}>
                <SafeIcon icon={integration.icon} className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(integration.status)}`}>
                {integration.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
            
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Features:</p>
              <div className="flex flex-wrap gap-1">
                {integration.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {integration.status === 'connected' && integration.lastSync && (
              <div className="mb-4 text-xs text-gray-500">
                Last sync: {new Date(integration.lastSync).toLocaleString()}
              </div>
            )}

            <div className="flex items-center space-x-2">
              {integration.status === 'connected' ? (
                <>
                  <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Sync
                  </button>
                  <button className="flex-1 px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                    Disconnect
                  </button>
                </>
              ) : (
                <>
                  <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Connect
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon="Settings" className="w-4 h-4 text-gray-600" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <SafeIcon icon="AlertCircle" className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Integration Tips</h3>
        </div>
        <ul className="space-y-2 text-sm text-green-50">
          <li>• Regularly sync your integrations for latest data</li>
          <li>• Keep your API keys secure and update them regularly</li>
          <li>• Monitor integration status to avoid service disruptions</li>
          <li>• Use webhook connections for real-time data updates</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Integrations;