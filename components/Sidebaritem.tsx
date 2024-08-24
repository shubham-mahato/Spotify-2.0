import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

// Define the type for your component's props
interface SidebarItemProps {
  icon: IconType; // Icon component from react-icons
  label: string; // Text label for the sidebar item
  active?: boolean; // Optional prop to indicate if the item is active
  href: string; // URL to navigate to
}

// Create the SidebarItem functional component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
  return (
    <Link href={href} className={twMerge(
      'flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1',
      active && "text-white"
    )}>
      {/* Render the icon */}
      <Icon size={26}  />
      <p className="truncate w-full">{label}</p>
      
    </Link>
  );
}

export default SidebarItem;

