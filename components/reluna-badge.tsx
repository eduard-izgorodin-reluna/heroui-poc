"use client";

import React from "react";
import { badgeVariants, type BadgeVariants } from "@/config/component-variants";

interface RelunaBadgeProps extends BadgeVariants {
  children: React.ReactNode;
  className?: string;
}

export const RelunaBadge: React.FC<RelunaBadgeProps> = ({
  children,
  color,
  variant,
  size,
  className,
}) => {
  const badgeClass = badgeVariants({ color, variant, size, className });

  return <span className={badgeClass}>{children}</span>;
};

RelunaBadge.displayName = "RelunaBadge";
