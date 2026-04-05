import { Github, Eye } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Temporary from "../components/Temporary";

const projects = [
  {
    id: 1,
    title: "Currency Exchange",
    description: "Currency exchange rate viewer",
    image: "/projects/ss.png",
    demoUrl: "*",
    githubUrl: "https://github.com/Aayushstha10/Currency-Exchange",
  },
  {
    id: 2,
    title: "Clipboard",
    description: "Copy, paste, and save your code",
    image: "/projects/past.png",
    demoUrl: "*",
    githubUrl: "https://github.com/Aayushstha10/Paste",
  },
  {
    id: 3,
    title: "Book Store",
    description: "Read and download books",
    image: "/projects/book.png",
    demoUrl: "*",
    githubUrl: "*",
  },
  {
    id: 4,
    title: "Emed",
    description: "Buy medicine with doctor prescription",
    image: "/projects/fontss.png",
    demoUrl: "*",
    githubUrl: "https://github.com/Aayushstha10/Emed/tree/main/Emed",
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Here is a showcase of my projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-background/60 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"></div>
              </div>

              {/* Project Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3">
                  <a
                    href={project.demoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent modal
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg text-sm hover:bg-primary/90 transition"
                  >
                    <Eye size={16} /> Demo
                  </a>
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent modal
                    className="flex items-center justify-center px-3 border rounded-lg hover:border-primary hover:bg-primary/10 transition"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-primary/20 to-transparent blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <img
                  src={selectedImage}
                  alt="Project Preview"
                  className="w-full rounded-xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};