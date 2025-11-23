
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  
  // Base styles
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  // Variant specific styles (defining colors)
  const variantStyles = {
    primary: "bg-off-black text-white shadow-md hover:shadow-xl border border-transparent",
    secondary: "bg-accent text-off-black shadow-glow hover:shadow-glow-lg border border-transparent",
    outline: "bg-transparent border-2 border-off-black text-off-black hover:text-white",
    ghost: "bg-transparent text-off-black hover:bg-gray-100"
  };

  // Hover liquid fill colors
  const liquidColor = {
      primary: "bg-gray-800",
      secondary: "bg-white/30",
      outline: "bg-off-black",
      ghost: "bg-gray-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {/* Liquid Fill Element */}
      <div className={`absolute inset-0 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out curve-top ${liquidColor[variant]}`}>
         {/* Optional wave shape via SVG or CSS could go here, but smooth fill is liquid enough */}
         <div className="absolute -top-[10px] left-0 right-0 h-[20px] bg-inherit rounded-[50%] scale-x-150 origin-bottom group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>

      {/* Content - Z-index to stay on top */}
      <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
      </span>
    </button>
  );
};
