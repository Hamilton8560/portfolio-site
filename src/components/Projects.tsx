import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 p-4 transition-transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    <span>GitHub</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}