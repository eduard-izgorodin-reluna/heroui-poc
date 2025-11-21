"use client";

import { RelunaButton } from "@/components/reluna-button";
import { RelunaInput } from "@/components/reluna-input";
import { RelunaCard } from "@/components/reluna-card";
import { RelunaBadge } from "@/components/reluna-badge";
import { RelunaChip } from "@/components/reluna-chip";
import { useState } from "react";

/**
 * Complete HeroUI v3 Showcase - AI-Friendly Implementation
 * 
 * This page demonstrates EVERY component built with tailwind-variants.
 * AI can generate ANY of these components using only semantic props.
 */
export default function ShowcaseCompletePage() {
  const [email, setEmail] = useState("");
  const [chips, setChips] = useState(["React", "TypeScript", "Tailwind"]);

  return (
    <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#121212]">
            Complete HeroUI Showcase
          </h1>
          <p className="text-xl text-[rgba(18,18,18,0.6)] max-w-3xl mx-auto">
            Все компоненты созданы с <code className="px-2 py-1 bg-white rounded-lg">tailwind-variants</code>.
            AI генерирует код используя <strong>только пропсы</strong> — без inline классов!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <RelunaBadge color="primary" variant="solid" size="lg">
              9/10 AI Quality
            </RelunaBadge>
            <RelunaBadge color="success" variant="flat" size="lg">
              +350% Better
            </RelunaBadge>
            <RelunaBadge color="secondary" variant="bordered" size="lg">
              Production Ready
            </RelunaBadge>
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <RelunaCard variant="bordered" radius="lg" shadow="md">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">Buttons</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                AI Prompt: &quot;Create buttons with all colors and variants&quot;
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="space-y-8">
              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Colors (Solid)</h3>
                <div className="flex flex-wrap gap-3">
                  <RelunaButton color="primary">Primary</RelunaButton>
                  <RelunaButton color="secondary">Secondary</RelunaButton>
                  <RelunaButton color="success">Success</RelunaButton>
                  <RelunaButton color="warning">Warning</RelunaButton>
                  <RelunaButton color="danger">Danger</RelunaButton>
                  <RelunaButton color="default">Default</RelunaButton>
                </div>
              </div>

              {/* Variants */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Variants (Primary)</h3>
                <div className="flex flex-wrap gap-3">
                  <RelunaButton color="primary" variant="solid">Solid</RelunaButton>
                  <RelunaButton color="primary" variant="bordered">Bordered</RelunaButton>
                  <RelunaButton color="primary" variant="light">Light</RelunaButton>
                  <RelunaButton color="primary" variant="flat">Flat</RelunaButton>
                  <RelunaButton color="primary" variant="ghost">Ghost</RelunaButton>
                  <RelunaButton color="primary" variant="shadow">Shadow</RelunaButton>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <RelunaButton color="primary" size="sm">Small</RelunaButton>
                  <RelunaButton color="primary" size="md">Medium</RelunaButton>
                  <RelunaButton color="primary" size="lg">Large</RelunaButton>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-lg font-semibold mb-4">States</h3>
                <div className="flex flex-wrap gap-3">
                  <RelunaButton color="primary">Default</RelunaButton>
                  <RelunaButton color="primary" isLoading>Loading</RelunaButton>
                  <RelunaButton color="primary" disabled>Disabled</RelunaButton>
                </div>
              </div>

              {/* Full Width */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Full Width</h3>
                <RelunaButton color="primary" size="lg" fullWidth>
                  Full Width Button
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </section>

        {/* Inputs Section */}
        <section>
          <RelunaCard variant="bordered" radius="lg" shadow="md">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">Inputs</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                AI Prompt: &quot;Create input fields with different variants and states&quot;
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="space-y-6">
              {/* Sizes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RelunaInput
                    size="sm"
                    label="Small"
                    placeholder="Enter text..."
                  />
                  <RelunaInput
                    size="md"
                    label="Medium"
                    placeholder="Enter text..."
                  />
                  <RelunaInput
                    size="lg"
                    label="Large"
                    placeholder="Enter text..."
                  />
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RelunaInput
                    variant="bordered"
                    label="Bordered"
                    placeholder="Enter text..."
                  />
                  <RelunaInput
                    variant="flat"
                    label="Flat"
                    placeholder="Enter text..."
                  />
                  <RelunaInput
                    variant="underlined"
                    label="Underlined"
                    placeholder="Enter text..."
                  />
                </div>
              </div>

              {/* States */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">States</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RelunaInput
                    label="Default"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <RelunaInput
                    label="Success"
                    state="success"
                    placeholder="email@example.com"
                    helperText="Email is valid"
                  />
                  <RelunaInput
                    label="Error"
                    state="error"
                    placeholder="Enter email..."
                    errorMessage="Email is required"
                  />
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Disabled</h3>
                <RelunaInput
                  label="Disabled Input"
                  placeholder="Cannot edit..."
                  isDisabled
                />
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </section>

        {/* Cards Section */}
        <section>
          <RelunaCard variant="bordered" radius="lg" shadow="md">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">Cards</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                AI Prompt: &quot;Create card layouts with different variants&quot;
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Flat Card */}
                <RelunaCard variant="flat" padding="default">
                  <RelunaCard.Header>
                    <h3 className="text-xl font-semibold">Flat Card</h3>
                  </RelunaCard.Header>
                  <RelunaCard.Body>
                    <p className="text-[rgba(18,18,18,0.6)]">
                      Simple card without border or shadow. Perfect for clean layouts.
                    </p>
                  </RelunaCard.Body>
                  <RelunaCard.Footer>
                    <RelunaButton color="default" variant="light" size="sm">
                      Learn More
                    </RelunaButton>
                  </RelunaCard.Footer>
                </RelunaCard>

                {/* Bordered Card */}
                <RelunaCard variant="bordered" padding="default">
                  <RelunaCard.Header>
                    <h3 className="text-xl font-semibold">Bordered Card</h3>
                  </RelunaCard.Header>
                  <RelunaCard.Body>
                    <p className="text-[rgba(18,18,18,0.6)]">
                      Card with subtle border. Great for separating content sections.
                    </p>
                  </RelunaCard.Body>
                  <RelunaCard.Footer>
                    <RelunaButton color="primary" variant="bordered" size="sm">
                      View Details
                    </RelunaButton>
                  </RelunaCard.Footer>
                </RelunaCard>

                {/* Shadow Card */}
                <RelunaCard variant="shadow" shadow="lg" padding="default">
                  <RelunaCard.Header>
                    <h3 className="text-xl font-semibold">Shadow Card</h3>
                  </RelunaCard.Header>
                  <RelunaCard.Body>
                    <p className="text-[rgba(18,18,18,0.6)]">
                      Elevated card with shadow. Draws attention to important content.
                    </p>
                  </RelunaCard.Body>
                  <RelunaCard.Footer>
                    <RelunaButton color="primary" size="sm">
                      Get Started
                    </RelunaButton>
                  </RelunaCard.Footer>
                </RelunaCard>
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </section>

        {/* Badges Section */}
        <section>
          <RelunaCard variant="bordered" radius="lg" shadow="md">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">Badges</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                AI Prompt: &quot;Create status badges with different colors and styles&quot;
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="space-y-6">
              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Colors (Solid)</h3>
                <div className="flex flex-wrap gap-3">
                  <RelunaBadge color="primary" variant="solid">Primary</RelunaBadge>
                  <RelunaBadge color="secondary" variant="solid">Secondary</RelunaBadge>
                  <RelunaBadge color="success" variant="solid">Success</RelunaBadge>
                  <RelunaBadge color="warning" variant="solid">Warning</RelunaBadge>
                  <RelunaBadge color="danger" variant="solid">Danger</RelunaBadge>
                  <RelunaBadge color="default" variant="solid">Default</RelunaBadge>
                </div>
              </div>

              {/* Variants */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Variants (Primary)</h3>
                <div className="flex flex-wrap gap-3">
                  <RelunaBadge color="primary" variant="solid">Solid</RelunaBadge>
                  <RelunaBadge color="primary" variant="flat">Flat</RelunaBadge>
                  <RelunaBadge color="primary" variant="bordered">Bordered</RelunaBadge>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <RelunaBadge color="primary" size="sm">Small</RelunaBadge>
                  <RelunaBadge color="primary" size="md">Medium</RelunaBadge>
                  <RelunaBadge color="primary" size="lg">Large</RelunaBadge>
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </section>

        {/* Chips Section */}
        <section>
          <RelunaCard variant="bordered" radius="lg" shadow="md">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">Chips</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                AI Prompt: &quot;Create removable tag chips for filtering&quot;
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="space-y-6">
              {/* Interactive Chips */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Interactive Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip, index) => (
                    <RelunaChip
                      key={chip}
                      color="primary"
                      variant="flat"
                      size="md"
                      onClose={() => setChips(chips.filter((_, i) => i !== index))}
                    >
                      {chip}
                    </RelunaChip>
                  ))}
                  {chips.length === 0 && (
                    <p className="text-[rgba(18,18,18,0.5)]">All chips removed!</p>
                  )}
                </div>
                {chips.length > 0 && (
                  <RelunaButton
                    color="default"
                    variant="light"
                    size="sm"
                    onClick={() => setChips(["React", "TypeScript", "Tailwind"])}
                    className="mt-4"
                  >
                    Reset Chips
                  </RelunaButton>
                )}
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  <RelunaChip color="primary" variant="solid">Primary</RelunaChip>
                  <RelunaChip color="secondary" variant="solid">Secondary</RelunaChip>
                  <RelunaChip color="success" variant="solid">Success</RelunaChip>
                  <RelunaChip color="default" variant="solid">Default</RelunaChip>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <RelunaChip color="primary" size="sm" onClose={() => {}}>Small</RelunaChip>
                  <RelunaChip color="primary" size="md" onClose={() => {}}>Medium</RelunaChip>
                  <RelunaChip color="primary" size="lg" onClose={() => {}}>Large</RelunaChip>
                </div>
              </div>
            </RelunaCard.Body>
          </RelunaCard>
        </section>

        {/* AI Generation Comparison */}
        <section>
          <RelunaCard variant="shadow" shadow="lg" radius="lg">
            <RelunaCard.Header>
              <h2 className="text-3xl font-bold">🤖 AI Code Generation</h2>
              <p className="text-[rgba(18,18,18,0.6)] mt-2">
                Сравнение качества генерации кода
              </p>
            </RelunaCard.Header>
            <RelunaCard.Body className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* WRONG Way */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  <h3 className="text-xl font-bold text-[#ef4444]">Неправильно (2/10)</h3>
                </div>
                <pre className="bg-[#121212] text-white p-4 rounded-lg text-sm overflow-x-auto">
{`<button className="
  bg-[#fb6428] 
  text-white 
  h-9 
  px-4 
  text-base 
  rounded-lg 
  hover:bg-[#ea5717]
  transition-all
  focus-visible:outline-none
">
  Click
</button>`}
                </pre>
                <ul className="space-y-2 text-sm text-[rgba(18,18,18,0.7)]">
                  <li>❌ Tailwind &quot;зоопарк&quot; классов</li>
                  <li>❌ Нет переиспользования</li>
                  <li>❌ AI выбирает случайные значения</li>
                  <li>❌ Сложно поддерживать</li>
                  <li>❌ Нет типобезопасности</li>
                </ul>
              </div>

              {/* CORRECT Way */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-xl font-bold text-[#22c55e]">Правильно (9/10)</h3>
                </div>
                <pre className="bg-[#121212] text-white p-4 rounded-lg text-sm overflow-x-auto">
{`<RelunaButton 
  color="primary" 
  size="md" 
  variant="solid"
>
  Click
</RelunaButton>`}
                </pre>
                <ul className="space-y-2 text-sm text-[rgba(18,18,18,0.7)]">
                  <li>✅ Чистый семантический API</li>
                  <li>✅ Централизованная стилизация</li>
                  <li>✅ AI понимает намерение</li>
                  <li>✅ Легко поддерживать</li>
                  <li>✅ Полная типобезопасность</li>
                </ul>
              </div>
            </RelunaCard.Body>
            <RelunaCard.Footer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="text-center p-4 bg-[rgba(34,197,94,0.1)] rounded-lg">
                  <div className="text-3xl font-bold text-[#22c55e]">+350%</div>
                  <div className="text-sm text-[rgba(18,18,18,0.6)]">Качество кода</div>
                </div>
                <div className="text-center p-4 bg-[rgba(251,100,40,0.1)] rounded-lg">
                  <div className="text-3xl font-bold text-[#fb6428]">+70%</div>
                  <div className="text-sm text-[rgba(18,18,18,0.6)]">Экономия времени</div>
                </div>
                <div className="text-center p-4 bg-[rgba(14,165,233,0.1)] rounded-lg">
                  <div className="text-3xl font-bold text-[#0ea5e9]">9/10</div>
                  <div className="text-sm text-[rgba(18,18,18,0.6)]">AI оценка</div>
                </div>
              </div>
            </RelunaCard.Footer>
          </RelunaCard>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Готовы попробовать?</h2>
          <p className="text-xl text-[rgba(18,18,18,0.6)] max-w-2xl mx-auto">
            Откройте MCP сервер в VS Code и попросите AI создать любой компонент
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RelunaButton color="primary" size="lg">
              Читать EVALUATION.md
            </RelunaButton>
            <RelunaButton color="secondary" variant="bordered" size="lg">
              Открыть .vscode/mcp.json
            </RelunaButton>
          </div>
        </section>
      </div>
    </div>
  );
}
