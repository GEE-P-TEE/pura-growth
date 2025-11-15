import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiCalendar, FiGift, FiMail, FiShare2, FiBarChart2, FiPlug, FiSettings } = FiIcons;

const menuItems = [
  { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
  { 
    icon: FiCalendar, 
    label: 'Content', 
    path: '/content/calendar',
    submenu: [
      { label: 'Calendar', path: '/content/calendar' },
      { label: 'Templates', path: '/content/templates' },
      { label: 'Media Manager', path: '/content/media' },
      { label: 'AI Generator', path: '/content/ai-generator' }
    ]
  },
  { 
    icon: FiGift, 
    label: 'Campaigns', 
    path: '/campaigns/active',
    submenu: [
      { label: 'Active Campaigns', path: '/campaigns/active' },
      { label: 'Create Campaign', path: '/campaigns/create' },
      { label: 'Templates', path: '/campaigns/templates' }
    ]
  },
  { 
    icon: FiMail, 
    label: 'Email Courses', 
    path: '/email-courses/sequences',
    submenu: [
      { label: 'Sequences', path: '/email-courses/sequences' },
      { label: 'Landing Pages', path: '/email-courses/landing-pages' },
      { label: 'Templates', path: '/email-courses/templates' }
    ]
  },
  { 
    icon: FiShare2, 
    label: 'Social Media', 
    path: '/social/instagram',
    submenu: [
      { label: 'Instagram', path: '/social/instagram' },
      { label: 'TikTok', path: '/social/tiktok' },
      { label: 'Twitter', path: '/social/twitter' }
    ]
  },
  { 
    icon: FiBarChart2, 
    label: 'Analytics', 
    path: '/analytics/overview',
    submenu: [
      { label: 'Overview', path: '/analytics/overview' },
      { label: 'Social Media', path: '/analytics/social' },
      { label: 'Email Analytics', path: '/analytics/email' }
    ]
  },
  { icon: FiPlug, label: 'Integrations', path: '/integrations' },
  { icon: FiSettings, label: 'Settings', path: '/settings' }
];

const Sidebar = ({ isOpen, onToggle, currentPage, onPageChange }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = React.useState(new Set());

  const toggleExpanded = (label) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <motion.div
      initial={{ x: -256 }}
      animate={{ x: isOpen ? 0 : -256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            const isExpanded = expandedItems.has(item.label);
            
            return (
              <div key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={item.icon} className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <SafeIcon 
                        icon={isExpanded ? FiIcons.FiChevronDown : FiIcons.FiChevronRight} 
                        className="w-4 h-4"
                      />
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {item.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => onPageChange(subItem.label)}
                            className={({ isActive }) =>
                              `block p-2 rounded-lg text-sm transition-colors ${
                                isActive
                                  ? 'bg-green-100 text-green-700 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <NavLink
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
                )}
              </div>
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