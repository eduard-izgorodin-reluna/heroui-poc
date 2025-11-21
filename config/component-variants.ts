/**
 * Centralized Component Variants for Reluna HeroUI POC
 * 
 * This file demonstrates the AI-friendly approach using tailwind-variants.
 * Components use ONLY props (color, size, variant) - NO inline Tailwind classes.
 * 
 * Key Benefits:
 * - AI generates clean JSX with only semantic props
 * - All styling logic centralized and reusable
 * - Type-safe variant API
 * - No "Tailwind zoo" in JSX
 */

import { tv, type VariantProps } from "tailwind-variants";

/**
 * Button Component Variants
 * 
 * AI-friendly usage:
 * <Button color="primary" size="md" variant="solid">Click</Button>
 */
export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center",
    "font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    color: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
      default: "",
    },
    variant: {
      solid: "",
      bordered: "border-2 bg-transparent",
      light: "bg-opacity-20",
      flat: "",
      ghost: "bg-transparent hover:bg-opacity-10",
      shadow: "shadow-lg",
    },
    size: {
      sm: "h-8 px-3 text-sm rounded-lg gap-2",
      md: "h-9 px-4 text-base rounded-lg gap-2",
      lg: "h-13 px-6 text-lg rounded-xl gap-3",
    },
    fullWidth: {
      true: "w-full",
    },
    isIconOnly: {
      true: "aspect-square",
    },
  },
  compoundVariants: [
    // Primary Solid
    {
      color: "primary",
      variant: "solid",
      className: "bg-[#fb6428] text-white hover:bg-[#ea5717]",
    },
    // Primary Bordered
    {
      color: "primary",
      variant: "bordered",
      className: "border-[#fb6428] text-[#fb6428] hover:bg-[#fb6428] hover:text-white",
    },
    // Primary Light
    {
      color: "primary",
      variant: "light",
      className: "bg-[#fb6428] text-[#fb6428] hover:bg-opacity-30",
    },
    // Primary Flat
    {
      color: "primary",
      variant: "flat",
      className: "bg-[rgba(251,100,40,0.1)] text-[#fb6428] hover:bg-[rgba(251,100,40,0.2)]",
    },
    // Primary Ghost
    {
      color: "primary",
      variant: "ghost",
      className: "text-[#fb6428] hover:bg-[rgba(251,100,40,0.1)]",
    },
    // Secondary Solid
    {
      color: "secondary",
      variant: "solid",
      className: "bg-[#0ea5e9] text-white hover:bg-[#0284c7]",
    },
    // Default variants
    {
      color: "default",
      variant: "solid",
      className: "bg-[#121212] text-white hover:bg-[#262626]",
    },
    {
      color: "default",
      variant: "bordered",
      className: "border-[rgba(18,18,18,0.1)] text-[#121212] hover:bg-[rgba(18,18,18,0.05)]",
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
  },
});

/**
 * Input Component Variants
 * 
 * AI-friendly usage:
 * <Input size="md" variant="bordered" state="default" label="Email" />
 */
export const inputVariants = tv({
  slots: {
    base: "w-full",
    label: "text-[12px] font-normal text-[#121212] mb-1 block",
    inputWrapper: [
      "relative flex items-center",
      "border transition-colors",
      "bg-[#f6f8fa]",
    ],
    input: [
      "w-full bg-transparent outline-none",
      "text-[14px] text-[#121212]",
      "placeholder:text-[rgba(18,18,18,0.5)]",
    ],
    helperText: "text-[12px] mt-1",
    errorMessage: "text-[12px] text-[#ef4444] mt-1",
  },
  variants: {
    size: {
      sm: {
        inputWrapper: "h-8 px-2 text-sm rounded-md",
        input: "text-sm",
      },
      md: {
        inputWrapper: "h-9 px-3 text-base rounded-lg",
        input: "text-base",
      },
      lg: {
        inputWrapper: "h-12 px-4 text-lg rounded-xl",
        input: "text-lg",
      },
    },
    variant: {
      bordered: {
        inputWrapper: "border-[rgba(18,18,18,0.1)]",
      },
      flat: {
        inputWrapper: "border-none bg-[rgba(18,18,18,0.05)]",
      },
      underlined: {
        inputWrapper: "border-0 border-b-2 rounded-none bg-transparent px-0",
      },
    },
    state: {
      default: {},
      error: {
        inputWrapper: "border-[#ef4444]",
        label: "text-[#ef4444]",
      },
      success: {
        inputWrapper: "border-[#22c55e]",
        label: "text-[#22c55e]",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 cursor-not-allowed",
        input: "cursor-not-allowed",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "bordered",
    state: "default",
  },
});

/**
 * Card Component Variants
 * 
 * AI-friendly usage:
 * <Card variant="bordered" shadow="md" padding="default">
 */
export const cardVariants = tv({
  slots: {
    base: "bg-white overflow-hidden",
    header: "border-b border-[rgba(18,18,18,0.1)]",
    body: "",
    footer: "border-t border-[rgba(18,18,18,0.1)]",
  },
  variants: {
    variant: {
      flat: {
        base: "border-none",
      },
      bordered: {
        base: "border border-[rgba(18,18,18,0.1)]",
      },
      shadow: {
        base: "border-none",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-lg",
      },
      md: {
        base: "rounded-xl",
      },
      lg: {
        base: "rounded-2xl",
      },
    },
    shadow: {
      none: {},
      sm: {
        base: "shadow-sm",
      },
      md: {
        base: "shadow-md",
      },
      lg: {
        base: "shadow-lg",
      },
    },
    padding: {
      none: {
        header: "p-0",
        body: "p-0",
        footer: "p-0",
      },
      sm: {
        header: "p-3",
        body: "p-3",
        footer: "p-3",
      },
      default: {
        header: "p-5",
        body: "p-5",
        footer: "p-5",
      },
      lg: {
        header: "p-6",
        body: "p-6",
        footer: "p-6",
      },
    },
  },
  defaultVariants: {
    variant: "bordered",
    radius: "md",
    shadow: "none",
    padding: "default",
  },
});

/**
 * Badge Component Variants
 * 
 * AI-friendly usage:
 * <Badge color="primary" size="md" variant="solid">New</Badge>
 */
export const badgeVariants = tv({
  base: [
    "inline-flex items-center justify-center",
    "font-medium whitespace-nowrap",
  ],
  variants: {
    color: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
      default: "",
    },
    variant: {
      solid: "",
      flat: "",
      bordered: "border-2 bg-transparent",
      dot: "px-1",
    },
    size: {
      sm: "h-5 px-2 text-xs rounded-md gap-1",
      md: "h-6 px-2.5 text-sm rounded-lg gap-1.5",
      lg: "h-7 px-3 text-base rounded-lg gap-2",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "solid",
      className: "bg-[#fb6428] text-white",
    },
    {
      color: "primary",
      variant: "flat",
      className: "bg-[rgba(251,100,40,0.1)] text-[#fb6428]",
    },
    {
      color: "primary",
      variant: "bordered",
      className: "border-[#fb6428] text-[#fb6428]",
    },
    {
      color: "success",
      variant: "solid",
      className: "bg-[#22c55e] text-white",
    },
    {
      color: "default",
      variant: "solid",
      className: "bg-[#121212] text-white",
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
  },
});

/**
 * Chip Component Variants (for tags, filters, etc.)
 * 
 * AI-friendly usage:
 * <Chip color="primary" variant="flat" size="md" closable>Tag</Chip>
 */
export const chipVariants = tv({
  slots: {
    base: "inline-flex items-center gap-1.5 font-medium",
    content: "flex-1",
    closeButton: "ml-1 hover:opacity-70 transition-opacity cursor-pointer",
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      success: {},
      default: {},
    },
    variant: {
      solid: {},
      flat: {},
      bordered: {
        base: "border-2 bg-transparent",
      },
    },
    size: {
      sm: {
        base: "h-6 px-2 text-xs rounded-full gap-1",
        closeButton: "w-3 h-3",
      },
      md: {
        base: "h-7 px-3 text-sm rounded-full gap-1.5",
        closeButton: "w-4 h-4",
      },
      lg: {
        base: "h-8 px-4 text-base rounded-full gap-2",
        closeButton: "w-4 h-4",
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "solid",
      className: {
        base: "bg-[#fb6428] text-white",
      },
    },
    {
      color: "primary",
      variant: "flat",
      className: {
        base: "bg-[rgba(251,100,40,0.1)] text-[#fb6428]",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "flat",
    size: "md",
  },
});

// Export types for TypeScript support
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type InputVariants = VariantProps<typeof inputVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export type ChipVariants = VariantProps<typeof chipVariants>;
