import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const useWelcomeAnimations = (targetPercentage = 70) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const percentageRef = useRef();
  
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useGSAP(() => {
    const masterTimeline = gsap.timeline({ delay: 0.3 });

    masterTimeline.fromTo(titleRef.current,
      { 
        y: -20, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );

    masterTimeline.to(
      { value: 0 },
      {
        value: targetPercentage,
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          setDisplayPercentage(Math.round(this.targets()[0].value));
        }
      },
      0.4 
    );

    masterTimeline.to(percentageRef.current,
      {
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1 
      },
      2.4 
    );

    masterTimeline.fromTo(".welcome-text",
      {
        y: 15,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      },
      0.8
    );

  }, { scope: containerRef });

  return {
    containerRef,
    titleRef,
    percentageRef,
    displayPercentage
  };
};

export default useWelcomeAnimations;