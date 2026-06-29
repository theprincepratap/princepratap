"use client";

import React, { useRef, useState } from "react";
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
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IntervueX - AI Interview Simulator",
    description:
      "LLM-powered interview system with OpenAI APIs for dynamic question generation, answer evaluation, and personalized feedback. Features structured evaluation pipelines analyzing technical accuracy, fluency, sentiment, and STAR-format responses with real-time speech intelligence.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["OpenAI API", "FastAPI", "Python", "React", "Prompt Engineering"],
    liveLink: "#",
    githubLink: "#",
    category: "AI/LLM",
  },
  {
    id: 2,
    title: "AI Government Exam Photo Processor",
    description:
      "End-to-end AI pipeline automating image processing for 10+ government exams. Integrated U2-Net for background removal with OpenCV fallback, built rule-based validation engine with face detection and multi-face rejection for compliance.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a0c5?w=600&h=400&fit=crop",
    technologies: ["Django", "React", "OpenCV", "U2-Net", "Python"],
    liveLink: "#",
    githubLink: "#",
    category: "Computer Vision",
  },
  {
    id: 3,
    title: "Real-Time Attendance Tracking System",
    description:
      "Real-time face recognition system using ResNet-based embeddings with multi-face detection. Implemented behavioral analytics using Eye Aspect Ratio (EAR) and head pose estimation. Designed liveness detection achieving >95% accuracy with scalable processing pipeline.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    technologies: ["ResNet", "Python", "OpenCV", "Face Recognition", "ML"],
    liveLink: "#",
    githubLink: "#",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Advanced Analytics Dashboard",
    description:
      "Comprehensive data analytics platform with SQL-based data extraction, preprocessing pipelines, and exploratory data analysis. Built interactive visualizations using Python libraries for actionable insights from complex datasets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"],
    liveLink: "#",
    githubLink: "#",
    category: "Data Science",
  },
  {
    id: 5,
    title: "REST API Infrastructure",
    description:
      "Scalable backend infrastructure with FastAPI and async programming (asyncio). Designed robust REST APIs with efficient request handling, concurrent processing, and production-ready deployment on AWS with Docker containerization.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    technologies: ["FastAPI", "Python", "Docker", "AWS", "SQL"],
    liveLink: "#",
    githubLink: "#",
    category: "Backend",
  },
  {
    id: 6,
    title: "Machine Learning Model Suite",
    description:
      "Comprehensive ML solutions built with PyTorch, TensorFlow, and Scikit-learn. Implemented classification, regression, and deep learning models with optimization techniques, hyperparameter tuning, and evaluation metrics for real-world applications.",
    image:
      "https://images.unsplash.com/photo-1555949519-2f4ae925cda7?w=600&h=400&fit=crop",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Python", "Keras"],
    liveLink: "#",
    githubLink: "#",
    category: "Machine Learning",
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

        {/* Projects — single-row horizontal scroll, hidden scrollbar */}
        <div
          className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[440px] h-[660px]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
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
