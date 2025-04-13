// "use client";
// import { motion } from "framer-motion";
// import { projectData } from "../../constants/data"; // Import project data

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-950">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-12 text-cyan-400"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           My Projects
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projectData.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 rounded-lg shadow-xl p-6 relative overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * index, duration: 0.4 }}
//             >
//               {/* Dynamic Project Background Image */}
//               <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-lg z-0" 
//                 style={{ backgroundImage: `url(https://source.unsplash.com/1600x900/?${project.title.replace(/\s+/g, '-')})` }} />
              
//               <div className="relative z-10">
//                 <h3 className="text-xl font-semibold text-cyan-400 mb-4">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description.slice(0, 100)}...</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-lg"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-cyan-500 hover:text-cyan-600 text-sm font-semibold"
//                   >
//                     View on GitHub
//                   </a>
//                   <a
//                     href={project.link}
//                     className="text-gray-400 hover:text-cyan-400 text-sm font-semibold"
//                   >
//                     Explore Project
//                   </a>
//                 </div>
//               </div>

//               {/* Hover Effects */}
//               <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg flex items-center justify-center text-white">
//                 <p className="text-lg font-semibold">Explore this Project</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";
import { motion } from "framer-motion";
import { projects } from "../../constants/data";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects Showcase 💼
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="object-cover w-full h-56"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-2 py-1 bg-gray-800 text-cyan-300 rounded-full border border-cyan-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:underline flex items-center gap-1"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
