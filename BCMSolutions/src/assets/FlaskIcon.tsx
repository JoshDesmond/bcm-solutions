import React from 'react';

interface FlaskIconProps {
  className?: string;
  size?: number;
}

export const FlaskIcon: React.FC<FlaskIconProps> = ({ 
  className = "h-6 w-6", 
  size 
}) => {
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      viewBox="0 -960 960 960" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" />
    </svg>
  );
};

export default FlaskIcon;
