import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';

const menuItems = [
  { icon: 'Home', label: 'Dashboard', path: '/dashboard' },
  { icon: 'Calendar', label: 'Content', path: '/content/calendar' },
  { icon: 'Gift', label: 'Campaigns', path: '/campaigns/active' },
  { icon: 'Mail', label: 'Email Courses', path: '/email-courses/sequences' },
  { icon: 'Share2', label: 'Social Media', path: '/social/instagram' },
  { icon: 'BarChart2', label: 'Analytics', path: '/analytics/overview' },
  { icon: 'Plug', label: 'Integrations', path: '/integrations' },
  { icon: 'Settings', label: 'Settings', path: '/settings' }
];

const Sidebar = ({ isOpen, onToggle, currentPage, onPageChange }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -256 }}
      animate={{ x: isOpen ? 0 : -256 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-30 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pura Growth</h1>
              <p className="text-xs text-gray-500">Marketing Automation</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => onPageChange(item.label)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <SafeIcon icon={item.icon} className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4 text-white">
            <h3 className="font-semibold text-sm mb-1">Pro Tip</h3>
            <p className="text-xs opacity-90">
              Use the AI Generator to create 30 days of content in minutes!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;