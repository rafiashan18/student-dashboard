import React from "react";
import useWelcomeAnimations from "../../hooks/useWelcomeAnimations";

const WelcomeMessage = () => {
  const {
    containerRef,
    titleRef,
    percentageRef,
    displayPercentage
  } = useWelcomeAnimations(70);

  return (
    <div ref={containerRef} className="mb-2">
      <h2 
        ref={titleRef}
        className="sm:text-xl font-bold text-default text-center md:text-start mb-2"
        style={{ opacity: 0, transform: 'translateY(-20px)' }}
      >
        Welcome back Jenny!
      </h2>
      
      <p 
        className="welcome-text text-sm md:text-md text-secondary"
        style={{ opacity: 0, transform: 'translateY(15px)' }}
      >
        You've learned{' '}
        <span className="font-bold text-default inline-flex items-center">
          <span 
            ref={percentageRef}
            className="tabular-nums"
            style={{ 
              minWidth: '2ch',
              display: 'inline-block',
              textAlign: 'right'
            }}
          >
            {displayPercentage}
          </span>
          <span className="ml-0">% of your goal</span>
        </span>{' '}
        this week! Keep it up and improve your results!
      </p>
    </div>
  );
};

export default WelcomeMessage;