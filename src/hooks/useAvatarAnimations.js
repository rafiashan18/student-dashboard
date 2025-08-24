import { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

const useAvatarAnimations = () => {
  const containerRef = useRef();
  const skeletonRef = useRef();
  const imageRef = useRef();
  
  // State to control loading simulation
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simulate loading delay (remove this in production)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // GSAP animations for skeleton and image transitions
  useGSAP(() => {
    if (isLoading && skeletonRef.current) {
      // Skeleton shimmer animation using GSAP
      gsap.set(skeletonRef.current, { opacity: 1 });
      
      // Create continuous shimmer effect
      const shimmerTimeline = gsap.timeline({ repeat: -1 });
      
      shimmerTimeline.to(skeletonRef.current, {
        backgroundPosition: "200% 0",
        duration: 1.5,
        ease: "none"
      });

    } else if (!isLoading) {
      // When loading is complete, fade out skeleton and fade in image
      const loadingComplete = gsap.timeline();
      
      loadingComplete
        .to(skeletonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        })
        .fromTo(imageRef.current, 
          { 
            opacity: 0, 
            scale: 0.9,
            filter: "blur(4px)"
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out"
          }, 0.2
        );
    }
  }, { dependencies: [isLoading], scope: containerRef });

  // Handle actual image loading
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return {
    containerRef,
    skeletonRef,
    imageRef,
    isLoading,
    imageLoaded,
    handleImageLoad
  };
};

export default useAvatarAnimations;