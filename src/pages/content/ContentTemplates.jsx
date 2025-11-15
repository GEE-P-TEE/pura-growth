import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFile, FiPlus, FiSearch, FiStar, FiCopy, FiEdit, FiTrash2 } = FiIcons;

const ContentTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    { id: 1, name: 'Product Launch', category: 'promotion', usage: 45, rating: 4.8, content: 'Introducing our new...' },
    { id: 2, name: 'Customer Testimonial', category: 'testimonial', usage: 38, rating: 4.9, content: 'Real results from real customers...' },
    { id: 3, name: 'Educational Post', category: 'education', usage: 62, rating: 4.7, content: 'Did you know? Here\'s a quick tip...' },
    { id: 4, name: 'Behind the Scenes', category: 'lifestyle', usage: 29, rating: 4.6, content: 'Take a look behind the curtain...' },
    { id: 5, name: 'Limited Time Offer', category: 'promotion', usage: 51, rating: 4.8, content: 'Flash sale! Only 24 hours left...' },
    { id: 6, name: 'How-to Guide', category: 'education', usage: 44, rating: 4.9, content: 'Step-by-step guide to perfect...' },
  ];

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'promotion', name: 'Promotions', count: templates.filter(t => t.category === 'promotion').length },
    { id: 'education', name: 'Education', count: templates.filter(t => t.category === 'education').length },
    { id: 'testimonial', name: 'Testimonials', count: templates.filter(t => t.category === 'testimonial').length },
    { id: 'lifestyle', name: 'Lifestyle', count: templates.filter(t => t.category === 'lifestyle').length },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Content Templates</h2>
          <p className="text-gray-600 mt-1">Save and reuse your best performing content</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Create Template</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Most Used</option>
                  <option>Highest Rated</option>
                  <option>Recently Created</option>
                </select>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiFile} className="w-5 h-5 text-gray-400" />
                        <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{template.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Used {template.usage} times</span>
                        <span className="capitalize">{template.category}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <SafeIcon icon={FiCopy} className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <SafeIcon icon={FiEdit} className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <SafeIcon icon={FiTrash2} className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentTemplates;