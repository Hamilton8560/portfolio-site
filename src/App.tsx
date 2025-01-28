import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Server, PenTool as Tool, Brain, Shield } from 'lucide-react';
import angelTrustImage from './assets/angeltrust.png';
import muscleMapLogo from './assets/musclemapLOGO.png';

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 animate-gradient"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient animate-glow">
              David Hamilton
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
            Building exceptional digital experiences that make an impact
          </p>
          
          <div className="flex gap-6 justify-center mb-12 animate-fadeInUp opacity-0" style={{ animationDelay: '0.9s' }}>
            <a href="https://github.com/Hamilton8560" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-all transform hover:scale-110 hover:rotate-6">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/david-hamilton-277639217" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-all transform hover:scale-110 hover:-rotate-6">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:davidhamilton473@gmail.com"
               className="text-gray-300 hover:text-white transition-all transform hover:scale-110 hover:rotate-6">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1">
              View My Work
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-300" />
        </div>
      </header>

      {/* Technical Background Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Background</h2>
          <div className="grid gap-8">
            {backgroundSections.map((section, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Military Experience</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Marine Corps Combat Veteran</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Infantry Machine Gunner (2008-2012)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led direct fire support operations during combat deployments in Afghanistan</li>
                  <li>Demonstrated exceptional leadership as vehicle commander in high-stress environments</li>
                  <li>Completed specialized training including Mountain Warfare School and Machine Gun Leaders Course</li>
                  <li>Developed strong problem-solving and decision-making skills in critical situations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Leadership & Skills Transferred</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Team Leadership: Led and coordinated small teams in high-pressure situations</li>
                  <li>Problem Solving: Quick decision making and adaptability in dynamic environments</li>
                  <li>Communication: Clear and effective communication in critical situations</li>
                  <li>Technical Proficiency: Mastery of complex weapon systems and tactical procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
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
                {project.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-sm bg-gray-700 rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently available for freelance work and full-time opportunities.
          </p>
          <a href="mailto:davidhamilton473@gmail.com"
             className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
}

const backgroundSections = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    description: "Extensive experience in building responsive, user-friendly web applications with modern JavaScript frameworks and libraries.",
    skills: ["React", "Angular", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Next.js", "Redux", "Material UI"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-blue-400" />,
    description: "Strong foundation in server-side programming, API development, and database management.",
    skills: ["Node.js", "Python", "C#", "Express", "Django", "Laravel", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Database & DevOps",
    icon: <Tool className="w-6 h-6 text-blue-400" />,
    description: "Experience with various database systems and modern DevOps practices.",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "AWS", "CI/CD", "Git", "Linux"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    description: "Practical experience in implementing AI solutions and machine learning models.",
    skills: ["Python ML Libraries", "TensorFlow", "Data Processing", "Model Training", "AI Integration"]
  }
];

const projects = [
  {
    title: "Angel Trust - Legal Services Platform",
    description: "A comprehensive legal services platform specializing in wills and trusts. Features include SEO optimization, automated document generation, and secure client portal. Increased client acquisition by 200% through optimized user journey and search engine visibility.",
    image: angelTrustImage,
    demo: "https://angel-trust.netlify.app",
    technologies: [
      "React",
      "SEO Optimization",
      "Netlify",
      "Tailwind CSS",
      "Legal Document Generation",
      "Analytics Integration"
    ]
  },
  {
    title: "Muscle Map",
    description: "An AI-powered fitness application built with Angular and Firebase. Features include personalized workout generation, nutrition planning, and Stripe payment integration.",
    image: muscleMapLogo,
    demo: "https://musclemap.net",
    technologies: [
      "Angular",
      "Firebase",
      "Stripe",
      "AI Integration",
      "TypeScript"
    ]
  },
  {
    title: "Southern Strength Gym",
    description: "A fully functional gym website with integrated membership management system. Built with React and features secure payment processing, class scheduling, and responsive design.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1280",
    demo: "https://southernstrengthgym.com",
    technologies: [
      "React",
      "Node.js",
      "Payment Processing",
      "Scheduling System",
      "Member Portal"
    ]
  },
  {
    title: "Harvey SSG - Digital Programs",
    description: "A custom influencer platform for Southern Strength Gym, enabling digital program sales and online consultations. Features Stripe integration and personalized content delivery.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1280",
    demo: "https://harvey.southernstrengthgym.com",
    technologies: [
      "React",
      "Stripe",
      "Content Management",
      "User Authentication",
      "Analytics"
    ]
  }
];

// Remove or comment out the unused skills constant
/*
const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  // ... rest of skills
];
*/

export default App;