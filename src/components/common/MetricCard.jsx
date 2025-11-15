import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';

const MetricCard = ({ title, value, change, icon, color = 'green' }) => {
  const colorClasses = {
    green: 'from-green-400 to-green-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    orange: 'from-orange-400 to-orange-600',
  };

  const isPositive = change && change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center`}>
          <SafeIcon icon={icon} className="w-6 h-6 text-white" />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <SafeIcon 
              icon={isPositive ? FiIcons.FiTrendingUp : FiIcons.FiTrendingDown} 
              className="w-4 h-4" 
            />
            <span className="font-medium">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </motion.div>
  );
};

export default MetricCard;