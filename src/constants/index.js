//contains static data used across the app
import {  BookOpen, Code2, FileText, PenTool, Landmark, Monitor } from "lucide-react";

export  const courses = [
    {
        id: 1,
        label: "New words of",
        title: "Science",
        color: "bg-purple-500",
        icon: BookOpen,
    },
    {
        id: 2,
        label: "On day 01",
        title: "Code 101",
        color: "bg-blue-400",
        icon: Code2,
    },
    {
        id: 3,
        label: "On week 04",
        title: "Vocabulary",
        color: "bg-red-500",
        icon: FileText,
    },
    {
        id: 4,
        label: "New words of",
        title: "Basic CSS",
        color: "bg-green-500",
        icon: PenTool,
    },
    {
        id: 5,
        label: "On day 03",
        title: "History",
        color: "bg-gray-600",
        icon: Landmark,
    },
    {
        id: 6,
        label: "Lesson 09",
        title: "Scratch",
        color: "bg-purple-400",
        icon: Monitor,
    },
];


export const weeklyData = [
  { day: "Mon", presentation: 24, learning: 35, listening: 28, reading: 28 },
  { day: "Tue", presentation: 24, learning: 5, listening: 30, reading: 30 },
  { day: "Wed", presentation: 24, learning: 22, listening: 14, reading: 35 },
  { day: "Thu", presentation: 10, learning: 40, listening: 28, reading: 40 },
  { day: "Fri", presentation: 24, learning: 70, listening: 0, reading: 0 },
  { day: "Sat", presentation: 24, learning: 35, listening: 28, reading: 28 },
  { day: "Sun", presentation: 14, learning: 10, listening: 36, reading: 28 },
];

export const monthlyData = [
  { day: "Week 1", presentation: 84, learning: 167, listening: 98, reading: 187 },
  { day: "Week 2", presentation: 56, learning: 110, listening: 124, reading: 215 },
  { day: "Week 3", presentation: 92, learning: 203, listening: 76, reading: 168 },
  { day: "Week 4", presentation: 48, learning: 145, listening: 156, reading: 194 },
];