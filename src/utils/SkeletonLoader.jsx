import React, { forwardRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// Base Skeleton Loader Component
const SkeletonLoader = forwardRef(({ 
  width = '100%', 
  height = '20px', 
  className = '', 
  shape = 'rectangle', // 'rectangle', 'circle', 'rounded'
  showShimmer = true,
  children,
  style = {},
  ...props 
}, ref) => {
  const { theme } = useTheme();

  const getShapeClasses = () => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'rounded':
        return 'rounded-md';
      default:
        return '';
    }
  };

  const baseStyle = {
    width,
    height,
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#374151',
    ...style
  };

  const shimmerStyle = showShimmer ? {
    background: theme === 'light' 
      ? 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'
      : 'linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '-200% 0',
  } : {};

  return (
    <div
      ref={ref}
      className={`${getShapeClasses()} ${className}`}
      style={{ ...baseStyle, ...shimmerStyle }}
      {...props}
    >
      {children}
    </div>
  );
});

SkeletonLoader.displayName = 'SkeletonLoader';

// Predefined skeleton components for common use cases
export const SkeletonAvatar = forwardRef((props, ref) => (
  <SkeletonLoader
    ref={ref}
    shape="circle"
    width="64px"
    height="64px"
    {...props}
  />
));

export const SkeletonText = forwardRef(({ lines = 1, ...props }, ref) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLoader
        key={index}
        ref={index === 0 ? ref : null}
        height="16px"
        width={index === lines - 1 ? '75%' : '100%'}
        shape="rounded"
        {...props}
      />
    ))}
  </div>
));

export const SkeletonCard = forwardRef((props, ref) => (
  <div ref={ref} className="space-y-4 p-4">
    <SkeletonLoader height="200px" shape="rounded" />
    <SkeletonText lines={3} />
  </div>
));

export const SkeletonButton = forwardRef((props, ref) => (
  <SkeletonLoader
    ref={ref}
    width="120px"
    height="40px"
    shape="rounded"
    {...props}
  />
));

// Hook for skeleton animations
export const useSkeletonAnimation = (skeletonRef) => {
  const shimmerAnimation = React.useCallback(() => {
    if (!skeletonRef.current) return;
    
    // You can integrate GSAP here or use CSS animations
    const element = skeletonRef.current;
    element.style.animation = 'shimmer 1.5s infinite linear';
  }, []);

  React.useEffect(() => {
    if (!document.getElementById('skeleton-styles')) {
      const style = document.createElement('style');
      style.id = 'skeleton-styles';
      style.textContent = `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    shimmerAnimation();
  }, [shimmerAnimation]);
};

export default SkeletonLoader;