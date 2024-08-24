import React from 'react';
import { twMerge } from 'tailwind-merge';

// Define the type for your component's props
interface BoxProps {
  children: React.ReactNode; // Content to be rendered inside the box
  className?: string; // Optional className for additional styling
}

// Create the Box functional component
const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div 
      className={twMerge(
        'bg-neutral-900 rounded-lg h-fit w-full', // Tailwind CSS classes
        className // Custom classes from props
      )}
    >
      {children}
    </div>
  );
}

export default Box;

