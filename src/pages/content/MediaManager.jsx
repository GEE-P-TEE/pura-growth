import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiImage, FiVideo, FiUpload, FiSearch, FiGrid, FiList, FiFolder, FiMoreVertical } = FiIcons;

const MediaManager = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const mediaFiles = [
    { id: 1, name: 'product-hero.jpg', type: 'image', size: '2.4 MB', date: '2024-01-15', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874' },
    { id: 2, name: 'tutorial-video.mp4', type: 'video', size: '15.8 MB', date: '2024-01-14', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' },
    { id: 3, name: 'before-after.jpg', type: 'image', size: '1.8 MB', date: '2024-01-13', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a' },
    { id: 4, name: 'brand-story.jpg', type: 'image', size: '3.2 MB', date: '2024-01-12', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7' },
    { id: 5, name: 'demo-reel.mp4', type: 'video', size: '22.1 MB', date: '2024-01-11', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095' },
    { id: 6, name: 'lifestyle-shot.jpg', type: 'image', size: '2.1 MB', date: '2024-01-10', url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643' },
  ];

  const folders = [
    { id: 1, name: 'Instagram Posts', count: 24 },
    { id: 2, name: 'TikTok Videos', count: 18 },
    { id: 3, name: 'Product Images', count: 32 },
    { id: 4, name: 'Brand Assets', count: 15 },
  ];

  const filteredFiles = mediaFiles.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFileSelection = (fileId) => {
    setSelectedFiles(prev =>
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Media Manager</h2>
          <p className="text-gray-600 mt-1">Organize and manage your visual content</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <SafeIcon icon={FiGrid} className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <SafeIcon icon={FiList} className="w-4 h-4" />
            </button>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiUpload} className="w-4 h-4" />
            <span>Upload Files</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Folders</h3>
            <div className="space-y-2">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiFolder} className="w-5 h-5 text-gray-400" />
                    <span className="font-medium text-gray-900">{folder.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{folder.count}</span>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <SafeIcon icon={FiSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search media..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                    />
                  </div>
                  {selectedFiles.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {selectedFiles.length} files selected
                    </span>
                  )}
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Files</option>
                  <option>Images</option>
                  <option>Videos</option>
                </select>
              </div>
            </div>

            <div className="p-6">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredFiles.map((file) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-colors ${
                        selectedFiles.includes(file.id) ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      <div className="aspect-square bg-gray-100 relative">
                        <img
                          src={file.url}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                        {file.type === 'video' && (
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <SafeIcon icon={FiVideo} className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredFiles.map((file) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                        </div>
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <SafeIcon icon={FiMoreVertical} className="w-4 h-4 text-gray-600" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MediaManager;