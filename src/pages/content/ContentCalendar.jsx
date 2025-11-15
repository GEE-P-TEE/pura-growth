import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiPlus, FiClock, FiFilter } = FiIcons;

const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const generateCalendarDays = () => {
    const days = [];
    const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    
    for (let i = 0; i < endDate.getDate(); i++) {
      days.push({
        date: new Date(startDate.getFullYear(), startDate.getMonth(), i + 1),
        posts: Math.floor(Math.random() * 5)
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Content Calendar</h2>
          <p className="text-gray-600 mt-1">Schedule and manage your social media content</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'month' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'week' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Week
            </button>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>Schedule Post</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <SafeIcon icon={FiIcons.FiChevronLeft} className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <SafeIcon icon={FiIcons.FiChevronRight} className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                  <SafeIcon icon={FiFilter} className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-7 gap-4 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                {calendarDays.map((day, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`border rounded-lg p-3 min-h-[100px] cursor-pointer transition-colors ${
                      day.date.toDateString() === new Date().toDateString()
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      {day.date.getDate()}
                    </div>
                    {day.posts > 0 && (
                      <div className="space-y-1">
                        {Array.from({ length: Math.min(day.posts, 3) }).map((_, i) => (
                          <div key={i} className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
                        ))}
                        {day.posts > 3 && (
                          <div className="text-xs text-gray-500">+{day.posts - 3} more</div>
                        )}
                      </div>
                    )}
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-3">
              {[
                { time: '09:00 AM', platform: 'Instagram', content: 'Morning routine tips' },
                { time: '12:00 PM', platform: 'TikTok', content: 'Product showcase' },
                { time: '03:00 PM', platform: 'Twitter', content: 'Customer testimonial' },
                { time: '06:00 PM', platform: 'Instagram', content: 'Evening wellness' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{item.time}</p>
                    <p className="text-sm text-gray-600">{item.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-2">Content Goal</h3>
            <div className="mb-4">
              <div className="text-3xl font-bold">24/30</div>
              <p className="text-green-100">posts scheduled today</p>
            </div>
            <div className="w-full bg-green-300 bg-opacity-30 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;