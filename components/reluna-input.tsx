"use client";

import React from "react";
import { inputVariants, type InputVariants } from "@/config/component-variants";

interface RelunaInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const RelunaInput = React.forwardRef<HTMLInputElement, RelunaInputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      startIcon,
      endIcon,
      size,
      variant,
      state,
      isDisabled,
      className,
      ...props
    },
    ref
  ) => {
    const slots = inputVariants({
      size,
      variant,
      state: errorMessage ? "error" : state,
      isDisabled,
    });

    return (
      <div className={slots.base({ className })}>
        {label && <label className={slots.label()}>{label}</label>}
        <div className={slots.inputWrapper()}>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          <input
            ref={ref}
            disabled={isDisabled}
            className={slots.input()}
            {...props}
          />
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </div>
        {errorMessage && (
          <span className={slots.errorMessage()}>{errorMessage}</span>
        )}
        {helperText && !errorMessage && (
          <span className={slots.helperText()}>{helperText}</span>
        )}
      </div>
    );
  }
);

RelunaInput.displayName = "RelunaInput";
