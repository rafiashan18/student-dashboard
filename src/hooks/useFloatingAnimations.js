import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Hook for notification bell breathing animation
export const useBellAnimation = () => {
  const bellRef = useRef();

  useGSAP(() => {
    gsap.to(bellRef.current, {
      scale: 1.1,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, { scope: bellRef });

  return { bellRef };
};

// Hook for mascot bob animation
export const useMascotAnimation = () => {
  const mascotRef = useRef();

  useGSAP(() => {
    gsap.to(mascotRef.current, {
      y: -8,
      duration: 2.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, { scope: mascotRef });

  return { mascotRef };
};