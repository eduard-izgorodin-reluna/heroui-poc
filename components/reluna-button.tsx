"use client";

import React from "react";
import { buttonVariants, type ButtonVariants } from "@/config/component-variants";

interface RelunaButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariants {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
}

/**
 * Reluna Button Component
 * 
 * AI-Friendly Example:
 * 
 * Simple: <RelunaButton>Click me</RelunaButton>
 * With variants: <RelunaButton color="primary" size="lg" variant="solid">Submit</RelunaButton>
 * With icons: <RelunaButton startIcon={<Icon />} color="secondary">Next</RelunaButton>
 * Full width: <RelunaButton fullWidth>Continue</RelunaButton>
 * 
 * NO inline Tailwind classes needed - all styling through props!
 */
export const RelunaButton = React.forwardRef<HTMLButtonElement, RelunaButtonProps>(
  (
    {
      children,
      color,
      variant,
      size,
      fullWidth,
      isIconOnly,
      startIcon,
      endIcon,
      isLoading,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const buttonClass = buttonVariants({
      color,
      variant,
      size,
      fullWidth,
      isIconOnly,
      className,
    });

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          startIcon
        )}
        {children}
        {endIcon}
      </button>
    );
  }
);

RelunaButton.displayName = "RelunaButton";
