import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Theme, Skill } from '../types';

interface SkillAccordionProps {
  skill: Skill;
  theme: Theme;
}

export function SkillAccordion({ skill, theme }: SkillAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const skillDetails: Record<string, string[]> = {
    'Frontend': [
      'Building responsive and accessible web applications',
      'State management with Redux and Context API',
      'Modern CSS with Tailwind and CSS-in-JS',
      'Performance optimization and code splitting'
    ],
    'Backend': [
      'RESTful API design and implementation',
      'Database design and optimization',
      'Authentication and authorization',
      'Microservices architecture'
    ],
    'DevOps': [
      'Container orchestration with Docker',
      'CI/CD pipeline implementation',
      'Cloud infrastructure management',
      'Monitoring and logging'
    ],
    'Tools': [
      'Version control with Git',
      'Code quality and testing',
      'API development and testing',
      'UI/UX design collaboration'
    ],
    'Soft Skills': [
      'Team leadership and mentoring',
      'Agile development practices',
      'Technical documentation',
      'Cross-functional collaboration'
    ],
    'Currently Learning': [
      'Deep learning with PyTorch',
      'Neural network architectures',
      'Machine learning algorithms',
      'Data preprocessing and analysis'
    ]
  };

  return (
    <div className={`rounded-lg transition-all ${
      theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-lg">{skill.category}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-500" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {skill.items.map((item, index) => {
              const Icon = LucideIcons[item.icon as keyof typeof LucideIcons];
              return (
                <div key={index} className="flex items-center gap-2">
                  {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                  <span className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          
          <div className={`border-t ${theme.isDark ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
            <ul className={`list-disc list-inside ${theme.isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              {skillDetails[skill.category]?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}