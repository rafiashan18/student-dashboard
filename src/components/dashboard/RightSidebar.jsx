import React from "react";
import { Settings, BookOpen, GraduationCap, FileText, Clock, MessageCircle, Smile, Code, X } from "lucide-react";
import profilePic from '../../assets/images/profile-pic.png'; 
const RightSidebar = ({showCloseButton,onClose}) => {
  return (
    <div className="h-full  w-full bg-primary duration-300 text-white flex flex-col p-4 rounded-2xl">
       {/* Mobile Close Button */}
      {showCloseButton && (
        <div className="flex justify-end mb-2 lg:hidden">
          <button
            onClick={onClose}
            className="p-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
      {/* Profile Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={profilePic}
            alt="profile"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-semibold text-lg">Jenny Wilson</h3>
            <p className="text-sm opacity-80">Product Designer</p>
          </div>
        </div>
        <Settings className="w-6 h-6 cursor-pointer opacity-80 hover:opacity-100" />
      </div>

      {/* Recommended Section */}
      <div className="mb-6">
        <h4 className="uppercase text-xs tracking-wider opacity-70 mb-3">
          Recommended
        </h4>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-surface rounded-md"><BookOpen className="w-6 h-6 text-purple-500 mt-1" /></div>
            <div>
              <h5 className="font-medium">Elementary School</h5>
              <p className="text-sm opacity-80">
                Learn the basic fundamentals of design, typography, and colors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-surface rounded-md"><Code className="w-6 h-6 text-green-500 mt-1" /></div>
            <div>
              <h5 className="font-medium">Intermediate Coding</h5>
              <p className="text-sm opacity-80">
                Get hands-on experience and advance your coding journey.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-surface rounded-md"><FileText className="w-6 h-6 text-orange-500 mt-1" /></div>
            <div>
              <h5 className="font-medium">Advanced Science</h5>
              <p className="text-sm opacity-80">
                Explore modern concepts of science and technology with projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-2">
        <h4 className="uppercase text-xs tracking-wider opacity-70 mb-3">
          Recent Activity
        </h4>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-surface rounded-md"><Clock className="w-6 h-6 text-purple-500 mt-1" /></div>
            <p className="text-sm">Eng. Vocabulary test</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-surface rounded-md"><Smile className="w-6 h-6 text-green-500 mt-1" /></div>
            <p className="text-sm">Eng. Listening exam</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-surface rounded-md"><MessageCircle className="w-6 h-6 text-orange-500 mt-1" /></div>
            <p className="text-sm">Eng. Vocabulary test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
