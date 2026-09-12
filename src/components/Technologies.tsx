import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import type { Technology } from '../types';
import TechnologyCard from './TechnologyCard';
import YourStack from './MyStack';
import technologiesData from '../data/technologies.json';

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay so loading spinner is visible
    const timer = setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (tech: Technology) => {
    if (stack.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from stack`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('All technologies removed from stack');
  };

  if (loading) {
    return (
      <section id="technologies" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Loading technologies...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore the{' '}
            <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Cards grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((t) => t.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;