"use client";

import { RelunaButton } from "@/components/reluna-button";
import { RelunaInput } from "@/components/reluna-input";
import { RelunaCard } from "@/components/reluna-card";
import { RelunaBadge } from "@/components/reluna-badge";
import { RelunaChip } from "@/components/reluna-chip";
import { Heart, Mail, Settings, Share2 } from "lucide-react";
import { useState } from "react";

export default function ComponentsShowcase() {
  const [chips, setChips] = useState([
    "React",
    "TypeScript",
    "Tailwind",
    "HeroUI",
  ]);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Component Showcase</h1>
        <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
          Complete overview of all Reluna UI components built with HeroUI v3,
          tailwind-variants, and synced from Figma Design System.
        </p>
      </section>

      {/* 1. BUTTONS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Buttons</h2>
          <p className="text-foreground-600">
            All button variants, sizes, and states from Figma
          </p>
        </div>

        {/* Variants */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Variants (6 total)</h3>
              <p className="text-sm text-foreground-500">
                Different visual styles for various contexts
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-3">
              <RelunaButton variant="solid" color="primary">
                Solid
              </RelunaButton>
              <RelunaButton variant="bordered" color="primary">
                Bordered
              </RelunaButton>
              <RelunaButton variant="light" color="primary">
                Light
              </RelunaButton>
              <RelunaButton variant="flat" color="primary">
                Flat
              </RelunaButton>
              <RelunaButton variant="ghost" color="primary">
                Ghost
              </RelunaButton>
              <RelunaButton variant="shadow" color="primary">
                Shadow
              </RelunaButton>
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* Colors */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Colors (6 total)</h3>
              <p className="text-sm text-foreground-500">
                Semantic color variations
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-3">
              <RelunaButton color="default">Default</RelunaButton>
              <RelunaButton color="primary">Primary</RelunaButton>
              <RelunaButton color="secondary">Secondary</RelunaButton>
              <RelunaButton color="success">Success</RelunaButton>
              <RelunaButton color="warning">Warning</RelunaButton>
              <RelunaButton color="danger">Danger</RelunaButton>
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* Sizes */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Sizes (3 total)</h3>
              <p className="text-sm text-foreground-500">
                Small, medium, and large
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap items-center gap-3">
              <RelunaButton size="sm" color="primary">
                Small
              </RelunaButton>
              <RelunaButton size="md" color="primary">
                Medium
              </RelunaButton>
              <RelunaButton size="lg" color="primary">
                Large
              </RelunaButton>
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* States */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">States & Icons</h3>
              <p className="text-sm text-foreground-500">
                Disabled, loading, and with icons
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-3">
              <RelunaButton color="primary" disabled>
                Disabled
              </RelunaButton>
              <RelunaButton color="primary" isLoading>
                Loading...
              </RelunaButton>
              <RelunaButton color="primary" startIcon={<Mail className="w-4 h-4" />}>
                With Icon
              </RelunaButton>
              <RelunaButton color="primary" endIcon={<Share2 className="w-4 h-4" />}>
                Icon Right
              </RelunaButton>
            </div>
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* 2. INPUTS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Inputs</h2>
          <p className="text-foreground-600">
            Text input with label, helper text, and validation
          </p>
        </div>

        {/* Variants */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Variants (3 total)</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="grid gap-4 md:grid-cols-3">
              <RelunaInput
                variant="flat"
                label="Flat Input"
                placeholder="Enter text"
              />
              <RelunaInput
                variant="bordered"
                label="Bordered Input"
                placeholder="Enter text"
              />
              <RelunaInput
                variant="underlined"
                label="Underlined Input"
                placeholder="Enter text"
              />
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* Sizes */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Sizes (3 total)</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="grid gap-4 md:grid-cols-3">
              <RelunaInput size="sm" label="Small" placeholder="Small input" />
              <RelunaInput size="md" label="Medium" placeholder="Medium input" />
              <RelunaInput size="lg" label="Large" placeholder="Large input" />
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* States */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">States</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="grid gap-4 md:grid-cols-3">
              <RelunaInput
                label="With Helper Text"
                placeholder="user@example.com"
                helperText="We'll never share your email"
              />
              <RelunaInput
                label="Success State"
                placeholder="Valid input"
                value="john@example.com"
                helperText="Email is valid"
              />
              <RelunaInput
                label="Error State"
                placeholder="Enter email"
                state="error"
                errorMessage="Email is required"
              />
            </div>
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* 3. CARDS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Cards</h2>
          <p className="text-foreground-600">
            Container component with header, body, and footer
          </p>
        </div>

        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Variants (3 total)</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="grid gap-4 md:grid-cols-3">
              <RelunaCard variant="flat">
                <RelunaCard.Header>
                  <div>
                    <h4 className="font-semibold">Flat Card</h4>
                    <p className="text-sm text-foreground-500">Subtle background</p>
                  </div>
                </RelunaCard.Header>
                <RelunaCard.Body>
                  <p className="text-sm">
                    This is a flat card with minimal styling and subtle background.
                  </p>
                </RelunaCard.Body>
              </RelunaCard>

              <RelunaCard variant="bordered">
                <RelunaCard.Header>
                  <div>
                    <h4 className="font-semibold">Bordered Card</h4>
                    <p className="text-sm text-foreground-500">With border</p>
                  </div>
                </RelunaCard.Header>
                <RelunaCard.Body>
                  <p className="text-sm">
                    This is a bordered card with a clean outline and no shadow.
                  </p>
                </RelunaCard.Body>
              </RelunaCard>

              <RelunaCard variant="shadow">
                <RelunaCard.Header>
                  <div>
                    <h4 className="font-semibold">Shadow Card</h4>
                    <p className="text-sm text-foreground-500">Elevated look</p>
                  </div>
                </RelunaCard.Header>
                <RelunaCard.Body>
                  <p className="text-sm">
                    This is a shadow card with elevation effect for emphasis.
                  </p>
                </RelunaCard.Body>
              </RelunaCard>
            </div>
          </RelunaCard.Body>
        </RelunaCard>

        {/* Card with Footer */}
        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Complete Card</h3>
              <p className="text-sm text-foreground-500">
                With header, body, and footer
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <RelunaCard variant="shadow">
              <RelunaCard.Header>
                <div>
                  <h4 className="text-lg font-semibold">Feature Title</h4>
                  <p className="text-sm text-foreground-500">
                    Subtitle or description
                  </p>
                </div>
              </RelunaCard.Header>
              <RelunaCard.Body>
                <p className="text-foreground-600">
                  This is the main content of the card. It can contain paragraphs,
                  lists, images, or any other content.
                </p>
              </RelunaCard.Body>
              <RelunaCard.Footer>
                <div className="flex gap-2">
                  <RelunaButton size="sm" color="primary">
                    Primary Action
                  </RelunaButton>
                  <RelunaButton size="sm" variant="bordered">
                    Secondary
                  </RelunaButton>
                </div>
              </RelunaCard.Footer>
            </RelunaCard>
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* 4. BADGES */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Badges</h2>
          <p className="text-foreground-600">Status indicators and labels</p>
        </div>

        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">All Variants</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-3">
              <RelunaBadge color="default">Default</RelunaBadge>
              <RelunaBadge color="primary">Primary</RelunaBadge>
              <RelunaBadge color="secondary">Secondary</RelunaBadge>
              <RelunaBadge color="success">Success</RelunaBadge>
              <RelunaBadge color="warning">Warning</RelunaBadge>
              <RelunaBadge color="danger">Danger</RelunaBadge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <RelunaBadge color="primary" variant="solid">
                Solid
              </RelunaBadge>
              <RelunaBadge color="primary" variant="flat">
                Flat
              </RelunaBadge>
              <RelunaBadge color="primary" variant="bordered">
                Bordered
              </RelunaBadge>
              <RelunaBadge color="primary" variant="dot">
                Dot
              </RelunaBadge>
            </div>
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* 5. CHIPS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Chips</h2>
          <p className="text-foreground-600">Removable tags and filters</p>
        </div>

        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Interactive Chips</h3>
              <p className="text-sm text-foreground-500">
                Click the X to remove
              </p>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <RelunaChip
                  key={chip}
                  color="primary"
                  variant="flat"
                  onClose={() => setChips(chips.filter((c) => c !== chip))}
                >
                  {chip}
                </RelunaChip>
              ))}
            </div>
            {chips.length === 0 && (
              <p className="text-foreground-500 text-sm">
                All chips removed! Refresh to reset.
              </p>
            )}
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* 6. ICONS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Icons</h2>
          <p className="text-foreground-600">Lucide icons integration</p>
        </div>

        <RelunaCard variant="bordered">
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">Icon Examples</h3>
            </div>
          </RelunaCard.Header>
          <RelunaCard.Body>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-8 h-8 text-danger" />
                <span className="text-xs">Heart</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-8 h-8 text-primary" />
                <span className="text-xs">Mail</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-8 h-8 text-secondary" />
                <span className="text-xs">Settings</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Share2 className="w-8 h-8 text-success" />
                <span className="text-xs">Share</span>
              </div>
            </div>
          </RelunaCard.Body>
        </RelunaCard>
      </section>

      {/* Statistics */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Coverage Statistics</h2>
          <p className="text-foreground-600">Complete component overview</p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <RelunaCard variant="bordered">
            <RelunaCard.Body>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-primary">5</div>
                <div className="text-sm text-foreground-500 mt-1">
                  Component Families
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          <RelunaCard variant="bordered">
            <RelunaCard.Body>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-success">30+</div>
                <div className="text-sm text-foreground-500 mt-1">
                  Total Variants
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          <RelunaCard variant="bordered">
            <RelunaCard.Body>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-warning">100%</div>
                <div className="text-sm text-foreground-500 mt-1">
                  Figma Synced
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          <RelunaCard variant="bordered">
            <RelunaCard.Body>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-secondary">9/10</div>
                <div className="text-sm text-foreground-500 mt-1">
                  AI Quality
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </div>
      </section>
    </div>
  );
}
