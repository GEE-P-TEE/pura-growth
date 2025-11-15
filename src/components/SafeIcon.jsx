import React from 'react';
import * as FiIcons from 'react-icons/fi';

const SafeIcon = ({ icon, ...props }) => {
  const IconComponent = FiIcons[`Fi${icon}`];
  return IconComponent ? <IconComponent {...props} /> : <div {...props} />;
};

export default SafeIcon;