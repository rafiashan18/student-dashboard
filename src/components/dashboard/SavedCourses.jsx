import { ArrowRight } from "lucide-react";
import { courses } from "../../constants/index.js";
import CourseCard from "../common/CourseCard.jsx";
import useSavedCoursesAnimations from "../../hooks/useSavedCoursesAnimations";

export default function SavedCourses() {
  const { container } = useSavedCoursesAnimations();

  return (
    <section ref={container} className="w-full overflow-hidden p-1">
      <div className="flex items-center justify-between">
        <h2 className="section-title text-lg font-semibold text-default mb-2">
          Your Saved Courses
        </h2>
        <button className="view-button flex items-center gap-1 text-sm text-muted hover:text-gray-900">
          View <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}