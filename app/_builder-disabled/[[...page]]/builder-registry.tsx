"use client";

import { Builder } from "@builder.io/react";
import { RelunaButton } from "@/components/reluna-button";
import { RelunaInput } from "@/components/reluna-input";
import { RelunaCard } from "@/components/reluna-card";
import { RelunaBadge } from "@/components/reluna-badge";
import { RelunaChip } from "@/components/reluna-chip";

// Register custom Reluna components with Builder.io
Builder.registerComponent(RelunaButton, {
  name: "RelunaButton",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Click me",
    },
    {
      name: "color",
      type: "string",
      enum: ["default", "primary", "secondary", "success", "warning", "danger"],
      defaultValue: "default",
    },
    {
      name: "variant",
      type: "string",
      enum: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
      defaultValue: "solid",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    {
      name: "radius",
      type: "string",
      enum: ["none", "sm", "md", "lg", "full"],
      defaultValue: "md",
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(RelunaInput, {
  name: "RelunaInput",
  inputs: [
    {
      name: "label",
      type: "string",
      defaultValue: "Label",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
    },
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number", "tel", "url"],
      defaultValue: "text",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    {
      name: "variant",
      type: "string",
      enum: ["flat", "bordered", "faded", "underlined"],
      defaultValue: "flat",
    },
    {
      name: "isRequired",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(RelunaCard, {
  name: "RelunaCard",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Card content",
    },
    {
      name: "variant",
      type: "string",
      enum: ["elevated", "bordered", "flat"],
      defaultValue: "elevated",
    },
    {
      name: "isBlurred",
      type: "boolean",
      defaultValue: false,
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(RelunaBadge, {
  name: "RelunaBadge",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Badge",
    },
    {
      name: "color",
      type: "string",
      enum: ["default", "primary", "secondary", "success", "warning", "danger"],
      defaultValue: "default",
    },
    {
      name: "variant",
      type: "string",
      enum: ["solid", "flat", "faded", "shadow"],
      defaultValue: "solid",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  ],
});

Builder.registerComponent(RelunaChip, {
  name: "RelunaChip",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Chip",
    },
    {
      name: "color",
      type: "string",
      enum: ["default", "primary", "secondary", "success", "warning", "danger"],
      defaultValue: "default",
    },
    {
      name: "variant",
      type: "string",
      enum: ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"],
      defaultValue: "solid",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  ],
});
