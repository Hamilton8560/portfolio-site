import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Award,
  Star
} from 'lucide-react';
import { Theme } from '../types';

interface ResumeProps {
  theme: Theme;
}

export function Resume({ theme }: ResumeProps) {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className={`py-20 px-4 ${theme.isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`} id="resume">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Journey</h2>
        
        {/* Professional Summary */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('summary')}
            className={`w-full flex items-center justify-between p-4 rounded-lg ${
              theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            {activeSection === 'summary' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {activeSection === 'summary' && (
            <div className={`mt-4 p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <p className={`${theme.isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Goal-driven, responsible professional with 4 years of experience and 5 years of guided experience with software development and applications. 
                I have in total 7 years of IT experience. Equipped with a diverse array of skills ranging from business execution to basic software development.
              </p>
              <p className={`${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                A team player who can support the entire lifecycle development of mobile apps and desktop applications- from its requirements to its implementation. 
                Exhibits a strong aptitude for analytical reasoning to solve intricate issues, along with a proactive attitude towards acquiring new technical skills 
                and programming languages.
              </p>
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('experience')}
            className={`w-full flex items-center justify-between p-4 rounded-lg ${
              theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            {activeSection === 'experience' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {activeSection === 'experience' && (
            <div className="mt-4 space-y-6 pl-4">
              {/* Loudoun Stairs */}
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold">Senior Software Engineer</h4>
                  <span className="text-blue-500">•</span>
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Loudoun Stairs</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>February 2023 - Present</span>
                </div>
                <ul className={`list-disc list-inside ${theme.isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Spearheaded the development and maintenance of a full-stack application using Vanilla JS, C#, Python, and MySQL</li>
                  <li>Managed the company's onsite server, ensuring robust performance and reliability</li>
                  <li>Developed Python scripts to automate routine tasks</li>
                  <li>Led the integration of backend services with frontend interfaces</li>
                  <li>Responsible for full lifecycle software development</li>
                </ul>
              </div>

              {/* Full-Stack Developer Internship */}
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold">Full-Stack Developer</h4>
                  <span className="text-blue-500">•</span>
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>NIH</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>March 2023 - July 2023</span>
                </div>
                <ul className={`list-disc list-inside ${theme.isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Developed authentication programs using Angular & Nest</li>
                  <li>Contributed to RESTful API services development</li>
                  <li>Engaged in agile development practices</li>
                </ul>
              </div>

              {/* Seven Cipher */}
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold">Software Engineer AI</h4>
                  <span className="text-blue-500">•</span>
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Seven Cipher</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>January 2020 - February 2023</span>
                </div>
                <ul className={`list-disc list-inside ${theme.isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Designed and implemented machine learning models for AI-driven compliance software</li>
                  <li>Developed automation software for compliance workflows</li>
                  <li>Created detection and response services using artificial intelligence</li>
                  <li>Utilized Python for data processing, model training, and deployment</li>
                </ul>
              </div>

              {/* Previous Roles */}
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <h4 className="text-lg font-semibold mb-4">Previous Roles</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="font-medium">IT & Payroll</h5>
                      <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Raider Trucking LLC</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>(2016 - 2018)</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="font-medium">Coil Tubing Operator</h5>
                      <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Integrated Production Services</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>(2012 - 2016)</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium">Infantry Machine Gunner</h5>
                      <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Marine Corps Infantry</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>(2008 - 2012)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('education')}
            className={`w-full flex items-center justify-between p-4 rounded-lg ${
              theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            {activeSection === 'education' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {activeSection === 'education' && (
            <div className="mt-4 space-y-6 pl-4">
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold">Master of Science in IT Management</h4>
                      <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Georgetown University</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>Expected 2025</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                      <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>University of Maryland</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold">Associate of Science in Computer Science</h4>
                         <span className="text-blue-500">•</span>
                      <span className={theme.isDark ? 'text-gray-400' : 'text-gray-600'}>NOVA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certifications & Awards */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('awards')}
            className={`w-full flex items-center justify-between p-4 rounded-lg ${
              theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Military Service</h3>
            </div>
            {activeSection === 'awards' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {activeSection === 'awards' && (
            <div className="mt-4 space-y-6 pl-4">
              <div className={`p-6 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <h4 className="text-lg font-semibold mb-4">Marine Corps Combat Veteran</h4>
                <ul className={`list-disc list-inside ${theme.isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Provided direct fire support during combat operations in Afghanistan</li>
                  <li>Demonstrated leadership as a vehicle commander</li>
                  <li>Completed Mountain Warfare School</li>
                  <li>Graduated Machine Gun Leaders Course</li>
                  <li>Completed Indirect Fire Course with Crew Served Weapons</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}