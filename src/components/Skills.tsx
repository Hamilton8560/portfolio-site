import React from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-20 px-4 bg-gray-800/50" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold mb-2">{skill.category}</h3>
              <p className="text-gray-400">{skill.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}