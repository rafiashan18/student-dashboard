import React from "react";
import avatarLight from "../../assets/images/avatar-light.png";
import avatarDark from "../../assets/images/avatar-dark2.png";
import { useTheme } from "../../context/ThemeContext";
import useAvatarAnimations from "../../hooks/useAvatarAnimations";
import SkeletonLoader, { SkeletonAvatar } from "../../utils/SkeletonLoader";

const AvatarSection = () => {
  const { theme } = useTheme();
  const {
    containerRef,
    skeletonRef,
    imageRef,
    isLoading,
    handleImageLoad
  } = useAvatarAnimations();

  return (
    <div className="flex-shrink-0">
      <div ref={containerRef} className="relative">
        {/* Desktop version - full height with rounded corners */}
        <div className="hidden md:block  shadow-lg">
          <div className="h-[170px]  flex items-center justify-center relative overflow-hidden">
            
            {/* Skeleton Loader */}
            <SkeletonLoader
              ref={skeletonRef}
              className="absolute  inset-0 rounded-bl-2xl rounded-tl-2xl"
              style={{
                opacity: isLoading ? 1 : 0
              }}
            >
              <div className="flex items-center justify-center h-full">
                <SkeletonAvatar />
              </div>
            </SkeletonLoader>

            {/* Actual Image */}
            <img
              ref={imageRef}
              src={theme === "light" ? avatarLight : avatarDark}
              alt="Avatar"
              className="w-full h-full rounded-bl-2xl rounded-tl-2xl object-cover shadow-lg"
              onLoad={handleImageLoad}
              style={{
                opacity: isLoading ? 0 : 1,
                
                
              }}
            />

            {/* Loading indicator dot */}
            {isLoading && (
              <div className="absolute top-3 right-3">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: theme === 'light' ? '#9CA3AF' : '#D1D5DB'
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile version - compact circular avatar */}
        <div className="md:hidden flex items-center justify-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            
            {/* Mobile Skeleton Loader */}
            <SkeletonLoader
              ref={skeletonRef}
              className="absolute inset-0 rounded-full"
              style={{
                opacity: isLoading ? 1 : 0
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
              </div>
            </SkeletonLoader>

            {/* Mobile Actual Image */}
            <img
              ref={imageRef}
              src={theme === "light" ? avatarLight : avatarDark}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white/20"
              onLoad={handleImageLoad}
              style={{
                opacity: isLoading ? 0 : 1,
                transform: 'scale(0.95)',
                
              }}
            />

            {/* Mobile Loading indicator */}
            {isLoading && (
              <div className="absolute -top-1 -right-1">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse border border-white/50"
                  style={{
                    backgroundColor: theme === 'light' ? '#9CA3AF' : '#D1D5DB'
                  }}
                />
              </div>
            )}

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;