"use client";

import React from "react";
import { chipVariants, type ChipVariants } from "@/config/component-variants";

interface RelunaChipProps extends ChipVariants {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const RelunaChip: React.FC<RelunaChipProps> = ({
  children,
  color,
  variant,
  size,
  onClose,
  className,
}) => {
  const slots = chipVariants({ color, variant, size });

  return (
    <span className={slots.base({ className })}>
      <span className={slots.content()}>{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className={slots.closeButton()}
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
};

RelunaChip.displayName = "RelunaChip";
