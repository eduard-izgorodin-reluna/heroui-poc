"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Github } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { RelunaButton } from "@/components/reluna-button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/docs/components" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-divider bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-lg font-bold text-primary-foreground">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-none">
                Reluna
              </span>
              <span className="text-[10px] text-foreground-500 leading-none">
                Design System
              </span>
            </div>
            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-md">
              HeroUI v3
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground-600 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            <RelunaButton
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/reluna/heroui-poc", "_blank")}
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </RelunaButton>

            <RelunaButton
              color="secondary"
              variant="bordered"
              size="sm"
              onClick={() => router.push("/signin-builder")}
              className="hidden sm:flex"
            >
              AI Sign In
            </RelunaButton>

            <RelunaButton
              color="primary"
              variant="solid"
              size="sm"
              onClick={() => window.location.href = "/showcase-complete"}
              className="hidden sm:flex"
            >
              Get Started
            </RelunaButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
