import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiCalendar, FiTag, FiUsers, FiTarget, FiArrowRight, FiPlus, FiX } = FiIcons;

const CampaignsCreate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    keyword: '',
    description: '',
    startDate: '',
    endDate: '',
    platforms: [],
    prizes: [],
    rules: '',
    leadMagnet: '',
  });

  const [newPrize, setNewPrize] = useState({ name: '', value: '', quantity: '' });

  const steps = [
    { id: 1, title: 'Basic Info', icon: FiGift },
    { id: 2, title: 'Rules & Timing', icon: FiCalendar },
    { id: 3, title: 'Prizes Setup', icon: FiTag },
    { id: 4, title: 'Review & Launch', icon: FiTarget },
  ];

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: FiIcons.FiCamera },
    { id: 'tiktok', name: 'TikTok', icon: FiIcons.FiVideo },
    { id: 'twitter', name: 'Twitter', icon: FiIcons.FiMessageSquare },
  ];

  const addPrize = () => {
    if (newPrize.name && newPrize.value && newPrize.quantity) {
      setFormData(prev => ({
        ...prev,
        prizes: [...prev.prizes, newPrize]
      }));
      setNewPrize({ name: '', value: '', quantity: '' });
    }
  };

  const removePrize = (index) => {
    setFormData(prev => ({
      ...prev,
      prizes: prev.prizes.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Create New Campaign</h2>
        <p className="text-gray-600 mt-1">Set up your giveaway campaign in a few simple steps</p>
      </motion.div>

      <div className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center space-x-2 ${
                currentStep >= step.id ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep >= step.id ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300'
              }`}>
                <SafeIcon icon={step.icon} className="w-5 h-5" />
              </div>
              <span className="font-medium hidden sm:block">{step.title}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 text-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      >
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Campaign Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Summer Glow Giveaway"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Keyword Trigger</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData.keyword}
                  onChange={(e) => setFormData({ ...formData, keyword: e.target.value.toUpperCase() })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., GLOWUP"
                />
                <span className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
                  Comment "{formData.keyword || 'KEYWORD'}" to enter
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none"
                placeholder="Describe your giveaway and what participants can win..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => {
                      const newPlatforms = formData.platforms.includes(platform.id)
                        ? formData.platforms.filter(p => p !== platform.id)
                        : [...formData.platforms, platform.id];
                      setFormData({ ...formData, platforms: newPlatforms });
                    }}
                    className={`p-4 border rounded-lg transition-colors ${
                      formData.platforms.includes(platform.id)
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <SafeIcon icon={platform.icon} className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Campaign Duration & Rules</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Rules</label>
              <textarea
                value={formData.rules}
                onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
                placeholder="1. Follow our account&#10;2. Like this post&#10;3. Comment the keyword&#10;4. Tag 2 friends..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lead Magnet</label>
              <input
                type="text"
                value={formData.leadMagnet}
                onChange={(e) => setFormData({ ...formData, leadMagnet: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Free wellness guide PDF"
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Prizes Setup</h3>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Add Prize</h4>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  value={newPrize.name}
                  onChange={(e) => setNewPrize({ ...newPrize, name: e.target.value })}
                  placeholder="Prize name"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  value={newPrize.value}
                  onChange={(e) => setNewPrize({ ...newPrize, value: e.target.value })}
                  placeholder="Value ($)"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="number"
                  value={newPrize.quantity}
                  onChange={(e) => setNewPrize({ ...newPrize, quantity: e.target.value })}
                  placeholder="Quantity"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                onClick={addPrize}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Add Prize</span>
              </button>
            </div>

            {formData.prizes.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Prize List</h4>
                <div className="space-y-3">
                  {formData.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <SafeIcon icon={FiGift} className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{prize.name}</p>
                          <p className="text-sm text-gray-500">{prize.quantity} units • ${prize.value} value</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removePrize(index)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <SafeIcon icon={FiX} className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Review & Launch</h3>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Campaign Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <p className="font-medium text-gray-900">{formData.name || 'Not set'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Keyword:</span>
                    <p className="font-medium text-gray-900">{formData.keyword || 'Not set'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <p className="font-medium text-gray-900">
                      {formData.startDate && formData.endDate 
                        ? `${formData.startDate} to ${formData.endDate}`
                        : 'Not set'
                      }
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Platforms:</span>
                    <p className="font-medium text-gray-900">
                      {formData.platforms.length > 0 ? formData.platforms.join(', ') : 'Not set'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Prizes ({formData.prizes.length})</h4>
                {formData.prizes.length > 0 ? (
                  <div className="space-y-2">
                    {formData.prizes.map((prize, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {prize.name} ({prize.quantity} units, ${prize.value} value)
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No prizes added</p>
                )}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>Ready to launch!</strong> Your campaign will go live immediately upon launch and participants can start entering right away.
              </p>
            </div>
          </div>
        )}
      </motion.div>

      <div className="flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={currentStep === steps.length ? () => console.log('Launch campaign') : nextStep}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <span>{currentStep === steps.length ? 'Launch Campaign' : 'Next'}</span>
          {currentStep < steps.length && <SafeIcon icon={FiArrowRight} className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default CampaignsCreate;