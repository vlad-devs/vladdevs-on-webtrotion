// eslint-disable-next-line prettier/prettier
export const convertToTailwindColor = (s: string) => {
  // Convert snake_case to kebab-case
  const kebabCase = s.replaceAll("_", "-");

  // Unified mapping of custom colors to Tailwind classes for text and background colors
  const colorMap = {
    // Text color classes
    'gray': 'text-gray-800 dark:text-gray-300',
    'brown': 'text-yellow-800 dark:text-yellow-300', // No exact brown in Tailwind, using yellow
    'orange': 'text-orange-800 dark:text-orange-300',
    'yellow': 'text-yellow-800 dark:text-yellow-300',
    'green': 'text-green-800 dark:text-green-300',
    'blue': 'text-blue-800 dark:text-blue-300',
    'purple': 'text-purple-800 dark:text-purple-300',
    'pink': 'text-pink-800 dark:text-pink-300',
    'red': 'text-red-800 dark:text-red-300',
    'default': '',

    // Background color classes
    'gray-background': 'px-1 rounded bg-gray-50 dark:bg-gray-900',
    'brown-background': 'px-1 rounded bg-amber-50 dark:bg-amber-900', // No exact brown in Tailwind, using amber
    'orange-background': 'px-1 rounded bg-orange-50 dark:bg-orange-900',
    'yellow-background': 'px-1 rounded bg-yellow-50 dark:bg-yellow-900',
    'green-background': 'px-1 rounded bg-green-50 dark:bg-green-900',
    'blue-background': 'px-1 rounded bg-blue-50 dark:bg-blue-900',
    'purple-background': 'px-1 rounded bg-purple-50 dark:bg-purple-900',
    'pink-background': 'px-1 rounded bg-pink-50 dark:bg-pink-500',
    'red-background': 'px-1 rounded bg-red-50 dark:bg-red-900',
    'default-background': '',
  };

  // Return the Tailwind color classes, defaulting to the input if no mapping is found
  return colorMap[kebabCase];
};
