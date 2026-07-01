"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: string;
  liveDisabled?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IntervueX - AI Interview Simulator",
    description:
      "LLM-powered interview system with OpenAI APIs for dynamic question generation, answer evaluation, and personalized feedback. Features structured evaluation pipelines analyzing technical accuracy, fluency, sentiment, and STAR-format responses with real-time speech intelligence.",
    image:
      "https://i.ibb.co/Q3BNHyB4/interviewx.png",
    technologies: ["OpenAI API", "FastAPI", "Python", "React", "Prompt Engineering"],
    liveLink: "#",
    liveDisabled: true,
    githubLink: "https://github.com/theprincepratap/IntervueX",
    category: "AI/LLM",
  },
  {
    id: 2,
    title: "AI Government Exam Photo Processor",
    description:
      "End-to-end AI pipeline automating image processing for 10+ government exams. Integrated U2-Net for background removal with OpenCV fallback, built rule-based validation engine with face detection and multi-face rejection for compliance.",
    image:
      "https://i.ibb.co/kVNGsd34/govimageresizer.png",
    technologies: ["Django", "React", "OpenCV", "U2-Net", "Python"],
    liveLink: "https://ai-photo-signature-resizer.vercel.app/",
    githubLink: "https://github.com/theprincepratap/-AI-Powered-Government-Exam-Photo-Signature-Processing-System",
    category: "Computer Vision",
  },
  {
    id: 3,
    title: "Real-Time Attendance Tracking System",
    description:
      "Real-time face recognition system using ResNet-based embeddings with multi-face detection. Implemented behavioral analytics using Eye Aspect Ratio (EAR) and head pose estimation. Designed liveness detection achieving >95% accuracy with scalable processing pipeline.",
    image:
      "https://i.ibb.co/NdVmhLbD/aiattendencesystem.png",
    technologies: ["ResNet", "Python", "OpenCV", "Face Recognition", "ML"],
    liveLink: "#",
    liveDisabled: true,
    githubLink: "https://github.com/theprincepratap/Real-Time-Classroom-Attendance-and-Student-Engagement-Tracking-System",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "LocalServiceFinder — MERN Service Platform",
    description:
      "MERN-based platform connecting customers with local service providers (electricians, plumbers, cleaners). Features geospatial search with MongoDB + PostgreSQL hybrid architecture, real-time tracking via Socket.IO, Razorpay payments, and DSA-driven job allocation using heaps, queues & graph algorithms.",
    image:
      "https://i.ibb.co/fs6jZsP/localworkerfinder.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Razorpay"],
    liveLink: "#",
    liveDisabled: true,
    githubLink: "https://github.com/theprincepratap/Local-Service-Finder",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "CampusConnect — College Community Platform",
    description:
      "Full-stack MVC web app connecting college students via profile discovery, filtering, and near real-time chat (AJAX polling). Built with Java Servlets as controllers, JSP + JSTL views, JDBC DAOs, and PostgreSQL. Features secure auth, profile photos, unread message badges, and session-based access control.",
    image:
      "https://i.ibb.co/bRbLgQ0Q/campusconnect.png",
    technologies: ["Java Servlets", "JSP", "PostgreSQL", "JDBC", "Apache Tomcat"],
    liveLink: "#",
    liveDisabled: true,
    githubLink: "#",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "AI Resume Builder with ATS Optimization",
    description:
      "Full-stack resume builder with real-time ATS scoring (0–100), SpaCy NLP keyword extraction, TF-IDF job description matching, and grammar analysis. Features 5 professional templates, PDF/DOCX export, JWT auth, and multi-resume dashboard. Built with React + Redux frontend and Django REST backend.",
    image:
      "https://i.ibb.co/LmmfJWy/resumebuilder.png",
    technologies: ["React", "Django", "SpaCy", "Redux", "PostgreSQL", "Python"],
    liveLink: "#",
    liveDisabled: true,
    githubLink: "#",
    category: "AI/NLP",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Fix: browser-cached images fire onLoad before React hydrates the handler.
  // After mount, check if the image is already complete (cached) and reveal it.
  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setIsImageLoaded(true);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="group relative h-full flex flex-col rounded-2xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50 backdrop-blur-md border border-slate-700/30 transition-all duration-500 hover:border-red-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-500/20">
        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Image Container */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
            whileHover={{ scale: 1.1 }}
          />

          {/* Image Placeholder */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 animate-pulse" />
          )}

          {/* Overlay Gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <motion.span
              className="inline-block px-3 py-1 bg-gradient-to-r from-red-500/80 to-red-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-red-400/30"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative p-6 sm:p-8 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Technology Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium text-green-400/90 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700/50 mt-auto">
            {project.liveDisabled ? (
              <div
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/60 text-slate-500 font-semibold rounded-lg border border-slate-700/40 cursor-not-allowed select-none text-sm"
                title="No live preview available"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 opacity-60">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>No Preview</span>
              </div>
            ) : (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Live Preview</span>
              </motion.a>
            )}

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 font-semibold rounded-lg border border-slate-600/50 hover:border-green-500/60 transition-all duration-300 text-sm"
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 shrink-0" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface Skiper31Props {
  className?: string;
}

export default function Skiper31({ className }: Skiper31Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 456; // ~one card width
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  };

  return (
    <section className={cn("w-full py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden", className)}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
            variants={titleVariants}
          >
            Featured <span className="bg-gradient-to-r from-red-500 via-red-400 to-green-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            A collection of projects showcasing my skills in AI, Web Development, and Software Engineering.
          </motion.p>
        </motion.div>

        {/* Projects — carousel with floating left/right arrows */}
        <div className="relative">
          {/* Left floating arrow */}
          <motion.button
            onClick={() => scroll("left")}
            aria-label="Scroll projects left"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border border-red-400/30 transition-all duration-200 shadow-lg hover:shadow-red-500/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>

          {/* Right floating arrow */}
          <motion.button
            onClick={() => scroll("right")}
            aria-label="Scroll projects right"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border border-red-400/30 transition-all duration-200 shadow-lg hover:shadow-red-500/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>

          {/* Left edge fade hint */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-950/70 to-transparent pointer-events-none z-10" />
          {/* Right edge fade hint */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-950/70 to-transparent pointer-events-none z-10" />

          {/* Scroll strip */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROJECTS.map((project, index) => (
              <div key={project.id} className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[440px] h-[660px]">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>


        {/* View All CTA */}
        <motion.div
          className="flex justify-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 border border-red-400/30 text-base sm:text-lg"
            whileHover={{
              y: -3,
              boxShadow: "0 20px 40px -10px rgb(239, 68, 68, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
