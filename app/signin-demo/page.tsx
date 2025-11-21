"use client";

import { RelunaCard } from "@/components/reluna-card";
import { RelunaButton } from "@/components/reluna-button";
import { RelunaInput } from "@/components/reluna-input";
import { RelunaBadge } from "@/components/reluna-badge";
import { User, ArrowLeft, ArrowRight, Apple, Chrome, Linkedin } from "lucide-react";
import { useState } from "react";

export default function SignInComponent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="w-full max-w-[1448px] h-[1024px] relative">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />

        {/* Main Content */}
        <div className="relative z-10 flex gap-2 p-2 h-full">
          {/* Left Section - Form */}
          <RelunaCard variant="flat" className="w-[452px] h-full">
            <RelunaCard.Body className="p-5 flex flex-col gap-4">
              {/* Header */}
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <User className="w-9 h-9 text-primary" />
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h2 className="text-2xl font-medium text-foreground">
                    Create Account
                  </h2>
                  <p className="text-sm text-foreground/50">
                    You're about to create a new family as a Family Owner.
                  </p>
                </div>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-4">
                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-divider" />
                  <span className="text-xs text-foreground/50 font-normal">
                    SIGN UP FASTER WITH
                  </span>
                  <div className="flex-1 h-px bg-divider" />
                </div>

                {/* Social Buttons */}
                <div className="flex gap-1">
                  <RelunaButton
                    variant="flat"
                    size="sm"
                    className="flex-1"
                  >
                    <Chrome className="w-4 h-4" />
                  </RelunaButton>
                  <RelunaButton
                    variant="flat"
                    size="sm"
                    className="flex-1"
                  >
                    <Apple className="w-4 h-4" />
                  </RelunaButton>
                  <RelunaButton
                    variant="flat"
                    size="sm"
                    className="flex-1"
                  >
                    <Linkedin className="w-4 h-4" />
                  </RelunaButton>
                </div>

                {/* OR Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-divider" />
                  <span className="text-xs text-foreground/50 font-normal">OR</span>
                  <div className="flex-1 h-px bg-divider" />
                </div>
              </div>

              {/* Stepper */}
              <div className="flex gap-0">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className="flex-1 flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          s === step
                            ? "bg-primary text-white"
                            : s < step
                            ? "bg-success text-white"
                            : "bg-content2 text-foreground/30"
                        }`}
                      >
                        {s < step ? "✓" : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-0.5 ${
                            s < step ? "bg-success" : "bg-content2"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form Fields */}
              <div className="space-y-3 flex-1">
                {step === 1 && (
                  <div className="space-y-3">
                    <RelunaInput
                      label="Email Address"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="md"
                    />
                    <RelunaInput
                      label="Full Name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      size="md"
                    />
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-3">
                    <RelunaInput
                      label="Family Name"
                      placeholder="The Smith Family"
                      size="md"
                    />
                    <RelunaInput
                      label="Number of Members"
                      placeholder="5"
                      size="md"
                    />
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-3">
                    <RelunaInput
                      label="Governance Structure"
                      placeholder="Select..."
                      size="md"
                    />
                    <RelunaInput
                      label="Primary Focus"
                      placeholder="Select..."
                      size="md"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-1">
                <RelunaButton
                  variant="flat"
                  size="lg"
                  className="flex-1"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </RelunaButton>
                <RelunaButton
                  color="primary"
                  variant="solid"
                  size="lg"
                  className="flex-1"
                  onClick={() => setStep(Math.min(3, step + 1))}
                >
                  {step === 3 ? "Complete" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </RelunaButton>
              </div>
            </RelunaCard.Body>
          </RelunaCard>

          {/* Right Section - Welcome Slider */}
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-10 flex flex-col justify-between">
            {/* Illustration Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md aspect-video bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-2">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/60">Illustration</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <h3 className="text-2xl font-medium text-foreground">
                Welcome to Reluna Family Governance
              </h3>
              <p className="text-sm text-foreground/60">
                Your guide to preserving your family's wealth, values, and harmony to thrive across generations.
              </p>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-4">
                <button className="w-8 h-8 rounded-full bg-foreground/50 flex items-center justify-center hover:bg-foreground/70 transition-colors">
                  <ArrowLeft className="w-5 h-5 text-background" />
                </button>

                {/* Dots */}
                <div className="flex gap-2 bg-foreground/50 rounded-full px-2 py-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all ${
                        i === 0
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button className="w-8 h-8 rounded-full bg-foreground/50 flex items-center justify-center hover:bg-foreground/70 transition-colors">
                  <ArrowRight className="w-5 h-5 text-background" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Powered by */}
        <div className="absolute bottom-8 left-8 flex items-center gap-2">
          <div className="text-xs text-foreground/50">
            Secure family governance platform powered by modern technology
          </div>
        </div>
      </div>
    </div>
  );
}
