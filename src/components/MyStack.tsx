import type { Technology } from '../types';

interface MyStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const MyStack = ({ stack, onRemove, onRemoveAll }: MyStackProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-sm text-gray-500 mb-4">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technolog${stack.length === 1 ? 'y' : 'ies'} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 px-4 text-center">
          <p className="text-gray-400 text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50"
            >
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/24?text=' + tech.name[0];
                  }}
                />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={`Remove ${tech.name}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-2 py-2.5 rounded-xl border border-red-200 text-red-500 font-medium text-sm hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default MyStack;
