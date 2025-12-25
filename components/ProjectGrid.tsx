
import React from 'react';
import { StartupProject } from '../types';

interface ProjectGridProps {
  projects: StartupProject[];
  onSelect: (project: StartupProject) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
      {projects.map((project) => {
        const progress = (project.currentAmount / project.targetAmount) * 100;
        return (
          <div 
            key={project.id}
            onClick={() => onSelect(project)}
            className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                {project.tagline}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">已籌得</p>
                    <p className="text-lg font-bold text-indigo-600">NT${(project.currentAmount / 10000).toLocaleString()}萬</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">進度</p>
                    <p className="text-lg font-bold text-slate-800">{progress.toFixed(0)}%</p>
                  </div>
                </div>
                <div className="w-full bg-slate-50 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
