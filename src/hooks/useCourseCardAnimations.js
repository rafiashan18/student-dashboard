import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const useCourseCardAnimations = () => {
  const cardRef = useRef();
  const arrowRef = useRef();
  const iconRef = useRef();

  useGSAP(() => {
    const hoverTimeline = gsap.timeline({ paused: true });
    const leaveTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(cardRef.current, {
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(arrowRef.current, {
        x: 5,
        rotate: -5,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(iconRef.current, {
        scale: 1.1,
        rotate: 5,
        duration: 0.3,
        ease: "power2.out"
      }, 0.1);

    leaveTimeline
      .to(cardRef.current, {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.25,
        ease: "power2.out"
      })
      .to(arrowRef.current, {
        x: 0,
        rotate: 0,
        duration: 0.25,
        ease: "power2.out"
      }, 0)
      .to(iconRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.25,
        ease: "power2.out"
      }, 0);

    const handleMouseEnter = () => {
      leaveTimeline.pause();
      hoverTimeline.restart();
    };

    const handleMouseLeave = () => {
      hoverTimeline.pause();
      leaveTimeline.restart();
    };

    const card = cardRef.current;
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, { scope: cardRef });

  return {
    cardRef,
    arrowRef,
    iconRef
  };
};

export default useCourseCardAnimations;