import React from 'react';
import { ArrowRight } from "lucide-react";
import useCourseCardAnimations from "../../hooks/useCourseCardAnimations";

const CourseCard = ({ course, index }) => {
  const Icon = course.icon;
  const { cardRef, arrowRef, iconRef } = useCourseCardAnimations();

  return (
    <div
      ref={cardRef}
      className={`course-card ${course.color} rounded-xl p-2 flex flex-col justify-between shadow-md cursor-pointer`}
      style={{ 
        transform: 'translateY(30px)',
        opacity: 0,
        willChange: 'transform'
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Icon 
              ref={iconRef}
              className="text-white" 
              size={20}
            />
          </div>
          <div>
            <span className="text-xs text-white/80">{course.label}</span>
            <h3 className="lg:text-lg font-semibold text-white">{course.title}</h3>
          </div>
        </div>

        <ArrowRight 
          ref={arrowRef}
          className="text-white" 
          size={20} 
        />
      </div>
    </div>
  );
};

export default CourseCard;