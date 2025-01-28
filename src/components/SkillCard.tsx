import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Theme, Skill } from '../types';
import { SkillTooltip } from './SkillTooltip';

interface SkillCardProps {
  skill: Skill;
  theme: Theme;
}

const skillExperience: Record<string, string> = {
  'React': '5+ years of experience building complex web applications with React, including state management with Redux and React Query',
  'TypeScript': '4 years of experience using TypeScript in production applications, focusing on type safety and scalable architecture',
  'Node.js': '4+ years building REST APIs and microservices with Node.js and Express',
  'Python': '3 years of experience with Python, primarily for data processing and automation scripts',
  'Docker': '3 years of containerizing applications and managing multi-container environments with Docker Compose',
  'AWS': '2+ years working with various AWS services including EC2, S3, Lambda, and ECS',
  'PostgreSQL': '4 years of database design, optimization, and management',
  'Next.js': '2 years of experience building SEO-friendly applications with Next.js',
  'Tailwind CSS': '3 years of rapid UI development using Tailwind CSS',
  'GraphQL': 'Currently learning and implementing GraphQL APIs',
  'Rust': 'Learning Rust for systems programming and WebAssembly',
  'Web3': 'Exploring blockchain development and smart contracts',
};

export function SkillCard({ skill, theme }: SkillCardProps) {
  return (
    <div className={`p-6 rounded-lg transition-colors ${
      theme.isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
    }`}>
      <h3 className="font-semibold mb-4 text-lg">{skill.category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skill.items.map((item, index) => {
          const Icon = LucideIcons[item.icon as keyof typeof LucideIcons];
          return (
            <SkillTooltip 
              key={index}
              content={skillExperience[item.name] || `Experience with ${item.name}`}
              theme={theme}
            >
              <div className="flex items-center gap-2 cursor-help">
                {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                <span className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {item.name}
                </span>
              </div>
            </SkillTooltip>
          );
        })}
      </div>
    </div>
  );
}