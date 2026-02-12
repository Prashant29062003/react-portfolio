/**
 * AvatarUtils - Professional Avatar Utility Component
 * Provides consistent avatar sizing and styling across the portfolio
 */

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Professional Avatar component with customizable sizes and professional styling
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.fallbackText - Text to show when image fails to load
 * @param {string} props.size - Size variant: 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'
 * @param {boolean} props.showBorder - Whether to show ring border
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showStatus - Whether to show status badge
 * @param {string} props.statusText - Status badge text
 * @param {string} props.statusColor - Status badge color variant
 */
const AvatarUtils = ({
  src,
  alt = "User Avatar",
  fallbackText = "PK",
  size = "lg",
  showBorder = true,
  className = "",
  showStatus = false,
  statusText = "Open to Work",
  statusColor = "green"
}) => {
  // Professional size mapping with consistent scaling
  const sizeClasses = {
    xs: "h-8 w-8",
    sm: "h-10 w-10", 
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
    "2xl": "h-24 w-24",
    "3xl": "h-32 w-32",
    "4xl": "h-40 w-40"
  };

  // Status badge color variants
  const statusColorClasses = {
    green: "bg-gradient-to-r from-green-500 to-green-600 text-white",
    blue: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    red: "bg-gradient-to-r from-red-500 to-red-600 text-white",
    yellow: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    orange: "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
  };

  // Fallback text size mapping
  const fallbackTextSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl"
  };

  const avatarSize = sizeClasses[size] || sizeClasses.lg;
  const fallbackSize = fallbackTextSizes[size] || fallbackTextSizes.lg;
  const statusBadgeClass = statusColorClasses[statusColor] || statusColorClasses.green;

  return (
    <div className={`relative inline-block ${className}`}>
      <Avatar 
        className={`
          ${avatarSize}
          ${showBorder ? 'ring-4 ring-border/20 shadow-xl' : ''}
          transition-all duration-300 hover:shadow-primary/20 hover:scale-105
        `}
      >
        <AvatarImage 
          src={src} 
          alt={alt} 
          className="object-cover"
        />
        <AvatarFallback 
          className={`
            ${fallbackSize}
            font-bold 
            bg-gradient-to-br 
            from-primary 
            to-primary-50 
            text-primary-foreground
          `}
        >
          {fallbackText}
        </AvatarFallback>
      </Avatar>
      
      {/* Professional Status Badge */}
      {showStatus && (
        <div className={`
          absolute 
          ${size === 'xs' ? '-bottom-1 -right-1' : 
            size === 'sm' ? '-bottom-1 -right-1' :
            size === 'md' ? '-bottom-1 -right-1' :
            size === 'lg' ? '-bottom-1 -right-1' :
            size === 'xl' ? '-bottom-1 -right-1' :
            size === '2xl' ? '-bottom-2 -right-2' :
            size === '3xl' ? '-bottom-3 -right-3' :
            '-bottom-4 -right-4'
          }
          bg-gradient-to-r ${statusBadgeClass}
          ${size === 'xs' ? 'text-xs' : 
            size === 'sm' ? 'text-xs' :
            size === 'md' ? 'text-xs' :
            size === 'lg' ? 'text-xs' :
            size === 'xl' ? 'text-xs' :
            size === '2xl' ? 'text-sm' :
            size === '3xl' ? 'text-base' :
            'text-lg'
          }
          font-medium 
          shadow-md
        `}>
          {statusText}
        </div>
      )}
    </div>
  );
};

export default AvatarUtils;
