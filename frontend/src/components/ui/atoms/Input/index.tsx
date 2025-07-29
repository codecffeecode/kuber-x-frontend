import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'outline' | 'filled' | 'unstyled';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      error = false,
      errorMessage,
      label,
      helperText,
      required = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const baseClasses = 'block w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400';
    
    const variantClasses = {
      default: 'border border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500',
      outline: 'border-2 border-gray-300 bg-transparent text-gray-900 focus:border-blue-500 focus:ring-blue-500',
      filled: 'border-0 bg-gray-100 text-gray-900 focus:bg-white focus:ring-blue-500',
      unstyled: 'border-0 bg-transparent text-gray-900 focus:ring-blue-500'
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-sm rounded-md',
      lg: 'px-4 py-3 text-base rounded-lg',
      xl: 'px-6 py-4 text-lg rounded-lg'
    };

    const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';
    const widthClass = fullWidth ? 'w-full' : '';
    const iconPadding = leftIcon ? 'pl-10' : '';
    const rightIconPadding = rightIcon ? 'pr-10' : '';

    const inputClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      errorClasses,
      widthClass,
      iconPadding,
      rightIconPadding,
      className
    );

    return (
      <div className={fullWidth ? 'w-full' : 'inline-block'}>
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-gray-400">
                {leftIcon}
              </div>
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="text-gray-400">
                {rightIcon}
              </div>
            </div>
          )}
        </div>
        
        {errorMessage && (
          <p 
            id={`${inputId}-error`}
            className="mt-1 text-sm text-red-600"
          >
            {errorMessage}
          </p>
        )}
        
        {helperText && !errorMessage && (
          <p 
            id={`${inputId}-helper`}
            className="mt-1 text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 