import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Front-End Engineer",
    company: "Intigate Technology Pvt Ltd.",
    startDate: "Jan 2025",
    isCurrentJob: true,
    location: "Noida, India",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "React Js Developer",
    company: "HenceForth Solution Pvt Ltd.",
    startDate: "May 2023",
    endDate: "Jan 2025",
    isCurrentJob: false,
    location: "Mohali, India",
    description: [
      "Developed over 5 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
];

export default experiences;
