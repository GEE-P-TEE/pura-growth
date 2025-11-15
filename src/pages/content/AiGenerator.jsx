import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiCopy, FiRefreshCw, FiDownload, FiSend } = FiIcons;

const AiGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [contentType, setContentType] = useState('post');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const templates = [
    { id: 1, name: 'Product Launch', prompt: 'Create excitement for our new vitamin supplement launch' },
    { id: 2, name: 'Customer Story', prompt: 'Share a customer success story about our protein powder' },
    { id: 3, name: 'Educational Tip', prompt: 'Provide a quick health tip about daily supplements' },
    { id: 4, name: 'Limited Offer', prompt: 'Announce a flash sale on our best-selling products' },
  ];

  const generateContent = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockContent = `🌟 Exciting news! We're thrilled to introduce our latest innovation in wellness nutrition. 

Our new supplement combines cutting-edge research with natural ingredients to support your health goals. Perfect for busy professionals who want to maintain peak performance!

✅ All-natural ingredients
✅ Clinically tested formula  
✅ Sustainable packaging
✅ 30-day money-back guarantee

Ready to transform your wellness journey? Click the link in bio to learn more!

#Wellness #Health #Nutrition #Supplements #NaturalHealth ${platform === 'twitter' ? '#HealthTips' : '#SelfCare'}`;
      
      setGeneratedContent(mockContent);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">AI Content Generator</h2>
          <p className="text-gray-600 mt-1">Create engaging content with AI-powered suggestions</p>
        </div>
        <div className="flex items-center space-x-2">
          <SafeIcon icon={FiZap} className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-gray-600">500 credits remaining</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['instagram', 'tiktok', 'twitter'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                        platform === p
                          ? 'bg-green-600 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['post', 'story', 'reel', 'carousel'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setContentType(type)}
                      className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                        contentType === type
                          ? 'bg-green-600 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Prompt
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to create..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
                />
              </div>

              <button
                onClick={generateContent}
                disabled={isGenerating || !prompt.trim()}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiZap} className="w-4 h-4" />
                    <span>Generate Content</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {generatedContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Generated Content</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <SafeIcon icon={FiCopy} className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <SafeIcon icon={FiDownload} className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 whitespace-pre-wrap">{generatedContent}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <SafeIcon icon={FiSend} className="w-4 h-4" />
                <span>Schedule Post</span>
              </button>
            </motion.div>
          )}
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
            <div className="space-y-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setPrompt(template.prompt)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-900 text-sm">{template.name}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.prompt}</p>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-2">Pro Tips</h3>
            <ul className="space-y-2 text-sm text-green-50">
              <li>• Be specific about your target audience</li>
              <li>• Include relevant keywords for better SEO</li>
              <li>• Use emojis to increase engagement</li>
              <li>• Add clear call-to-action phrases</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AiGenerator;