"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { Input } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Switch } from "@heroui/react";
import {
  Sparkles, Zap, Layout, Palette, Code2,
  FileCode, Download, Eye, CheckCircle2,
  ArrowRight, Github
} from "lucide-react";
import { ButtonCard, OnnboardingCard } from "@/components/figma";

export default function ShowcasePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [componentView, setComponentView] = useState<"heroui" | "figma">("heroui");

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-content1 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Hero UI + Figma Integration</span>
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Build Beautiful UI
            <br />
            in Seconds
          </h1>

          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Combine Hero UI's powerful components with automatic Figma extraction.
            Design in Figma, sync to code, ship to production.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              color="primary"
              size="lg"
              startContent={<Zap className="h-5 w-5" />}
            >
              Quick Start
            </Button>
            <Button
              variant="bordered"
              size="lg"
              startContent={<Github className="h-5 w-5" />}
            >
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-foreground-500">Hero UI Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2 sec</div>
              <div className="text-sm text-foreground-500">Figma Sync Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">100%</div>
              <div className="text-sm text-foreground-500">TypeScript Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Toggle */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              color={componentView === "heroui" ? "primary" : "default"}
              variant={componentView === "heroui" ? "solid" : "flat"}
              onClick={() => setComponentView("heroui")}
              startContent={<Layout className="h-4 w-4" />}
            >
              Hero UI Components
            </Button>
            <Button
              color={componentView === "figma" ? "secondary" : "default"}
              variant={componentView === "figma" ? "solid" : "flat"}
              onClick={() => setComponentView("figma")}
              startContent={<FileCode className="h-4 w-4" />}
            >
              Figma Extracted
            </Button>
          </div>
        </div>
      </section>

      {/* Hero UI Components Showcase */}
      {componentView === "heroui" && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-8">

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Hero UI Components</h2>
              <p className="text-foreground-600">Beautiful, accessible, and fully customizable</p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Interactive Card */}
              <Card>
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">Interactive Card</p>
                    <p className="text-small text-default-500">With Header & Footer</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-foreground-600">
                    Hero UI cards support headers, bodies, and footers with automatic layout.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Chip color="primary" size="sm">Primary</Chip>
                    <Chip color="secondary" size="sm">Secondary</Chip>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" color="primary" variant="flat">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              {/* Form Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-md font-semibold">Quick Form</h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                    />
                    <Input
                      label="Password"
                      placeholder="Enter password"
                      type="password"
                      variant="bordered"
                    />
                    <Button color="primary" className="w-full">
                      Sign In
                    </Button>
                  </div>
                </CardBody>
              </Card>

              {/* Settings Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-md font-semibold">Settings</h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Dark Mode</p>
                        <p className="text-xs text-foreground-500">Toggle theme</p>
                      </div>
                      <Switch
                        isSelected={darkMode}
                        onValueChange={setDarkMode}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Notifications</p>
                        <p className="text-xs text-foreground-500">Push alerts</p>
                      </div>
                      <Switch defaultSelected />
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Status Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-md font-semibold">Project Status</h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Completed</span>
                      <Chip color="success" size="sm" startContent={<CheckCircle2 className="h-3 w-3" />}>
                        Active
                      </Chip>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-foreground-500">Progress: 85%</div>
                      <div className="h-2 bg-content2 rounded-full overflow-hidden">
                        <div className="h-full bg-success rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="light" endContent={<ArrowRight className="h-4 w-4" />}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              {/* Color Palette Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-md font-semibold">Color System</h3>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="space-y-1">
                      <div className="h-12 w-full rounded-md bg-primary" />
                      <p className="text-xs text-center">Primary</p>
                    </div>
                    <div className="space-y-1">
                      <div className="h-12 w-full rounded-md bg-secondary" />
                      <p className="text-xs text-center">Secondary</p>
                    </div>
                    <div className="space-y-1">
                      <div className="h-12 w-full rounded-md bg-success" />
                      <p className="text-xs text-center">Success</p>
                    </div>
                    <div className="space-y-1">
                      <div className="h-12 w-full rounded-md bg-warning" />
                      <p className="text-xs text-center">Warning</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Button Variants Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-md font-semibold">Button Variants</h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <Button color="primary" size="sm" className="w-full">Solid</Button>
                    <Button color="primary" variant="bordered" size="sm" className="w-full">Bordered</Button>
                    <Button color="primary" variant="flat" size="sm" className="w-full">Flat</Button>
                    <Button color="primary" variant="light" size="sm" className="w-full">Light</Button>
                  </div>
                </CardBody>
              </Card>

            </div>
          </div>
        </section>
      )}

      {/* Figma Extracted Components */}
      {componentView === "figma" && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-8">

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Figma Extracted Components</h2>
              <p className="text-foreground-600">Auto-generated from Figma design system</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Chip color="success" variant="flat">
                  ✓ Synced 2 components
                </Chip>
                <Chip color="secondary" variant="flat">
                  TypeScript Ready
                </Chip>
              </div>
            </div>

            {/* Figma Components Display */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* ButtonCard Component */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">ButtonCard</h3>
                      <Chip size="sm" color="primary">From Figma</Chip>
                    </div>
                    <p className="text-sm text-foreground-500">
                      Extracted from Onboarding page in Figma
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="bg-background rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                    <ButtonCard className="w-full max-w-[400px]" />
                  </div>
                  <div className="mt-4 p-3 bg-content2 rounded-lg">
                    <p className="text-xs font-mono text-foreground-600">
                      import {`{ ButtonCard }`} from '@/components/figma'
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* OnnboardingCard Component */}
              <Card className="bg-gradient-to-br from-secondary/5 to-success/5">
                <CardHeader>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">OnboardingCard</h3>
                      <Chip size="sm" color="secondary">From Figma</Chip>
                    </div>
                    <p className="text-sm text-foreground-500">
                      Extracted from Onboarding page in Figma
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="bg-background rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                    <OnnboardingCard className="w-full max-w-[300px]" />
                  </div>
                  <div className="mt-4 p-3 bg-content2 rounded-lg">
                    <p className="text-xs font-mono text-foreground-600">
                      import {`{ OnnboardingCard }`} from '@/components/figma'
                    </p>
                  </div>
                </CardBody>
              </Card>

            </div>

            {/* Figma Sync Process */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardBody className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Figma → Code in 3 Steps</h3>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mx-auto">
                        1
                      </div>
                      <h4 className="font-semibold">Design in Figma</h4>
                      <p className="text-sm text-foreground-600">
                        Create components in Figma with proper naming and variants
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold mx-auto">
                        2
                      </div>
                      <h4 className="font-semibold">Run Sync Script</h4>
                      <p className="text-sm text-foreground-600">
                        <code className="bg-content2 px-2 py-1 rounded text-xs">pnpm sync-figma</code> extracts components automatically
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-white font-bold mx-auto">
                        3
                      </div>
                      <h4 className="font-semibold">Use in Code</h4>
                      <p className="text-sm text-foreground-600">
                        Import and use TypeScript-safe React components immediately
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Stack?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Card className="border-2 border-primary/20">
              <CardBody className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-sm text-foreground-600">
                  Hero UI's optimized components + automatic Figma sync = rapid development
                </p>
              </CardBody>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardBody className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Code2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Type Safe</h3>
                <p className="text-sm text-foreground-600">
                  Full TypeScript support with auto-generated types from Figma components
                </p>
              </CardBody>
            </Card>

            <Card className="border-2 border-success/20">
              <CardBody className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                  <Eye className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold">Accessible</h3>
                <p className="text-sm text-foreground-600">
                  WCAG compliant components out of the box with Hero UI
                </p>
              </CardBody>
            </Card>

            <Card className="border-2 border-warning/20">
              <CardBody className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto">
                  <Palette className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold">Themeable</h3>
                <p className="text-sm text-foreground-600">
                  Consistent design tokens across Figma and code with Tailwind CSS
                </p>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardBody className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Build?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Start creating beautiful UIs with Hero UI components and automatic Figma integration.
              No design-to-code friction, just pure development speed.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                variant="solid"
                className="bg-white text-primary font-semibold"
                startContent={<Download className="h-5 w-5" />}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white"
                startContent={<Code2 className="h-5 w-5" />}
              >
                View Documentation
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

    </main>
  );
}
