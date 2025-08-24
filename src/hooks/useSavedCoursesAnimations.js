import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const useSavedCoursesAnimations = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.set(".course-card", { 
      y: 30,
      opacity: 0,
      scale: 0.95
    });

    gsap.to(".course-card", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.2
    });

    gsap.fromTo(".view-button", 
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(".section-title", 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power2.out" }
    );

  }, { scope: container });

  return {
    container
  };
};

export default useSavedCoursesAnimations;