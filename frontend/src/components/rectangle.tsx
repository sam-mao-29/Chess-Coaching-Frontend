import React from 'react';

interface RectangleProps {
  width?: string;
  height?: string;
  top?: number | string;
  left?: string;
  backgroundColor?: string;
  onClick?: () => void;
  scrollable?: boolean;
  children: React.ReactNode;
}

const Rectangle: React.FC<RectangleProps> = ({
  width = '20%',
  height = '20%',
  top = 0,
  left = '1.25rem',
  backgroundColor = '#3B82F6',
  onClick,
  scrollable = false,
  children
}) => {
  const styles = {
    position: 'absolute' as const,
    top,
    left,
    width,
    height,
    backgroundColor,
    borderRadius: '0.375rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    margin: '1rem',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'transform 0.2s ease-in-out',
    overflow: scrollable ? 'auto' : 'hidden',
    padding: '1rem'
  };

  return (
    <div 
      style={styles} 
      onClick={onClick}
      onMouseOver={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'scale(1.02)';
        }
      }}
      onMouseOut={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
    >
      {children}
    </div>
  );
};

export default Rectangle;
