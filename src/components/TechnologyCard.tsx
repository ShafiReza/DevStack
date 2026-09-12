import type { Technology } from '../types';

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full border-2 ${
        isAdded
          ? 'border-pink-500 shadow-pink-100'
          : 'border-gray-200'
      }`}
    >
      {/* Header: icon + badge */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://via.placeholder.com/32?text=' + tech.name[0];
            }}
          />
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-3">
        {tech.description}
      </p>

      {/* Meta: category + difficulty + rating */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 font-medium">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="flex items-center gap-0.5 text-amber-500 font-medium ml-auto">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
          isAdded
            ? 'bg-pink-50 text-pink-600 cursor-not-allowed border border-pink-200'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;

