import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "./components/navigation";

const ppObjectSans = localFont({
  src: [
    {
      path: "../public/fonts/PPObjectSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPObjectSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PPObjectSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-object-sans",
});

export const metadata: Metadata = {
  title: "HeroUI Showcase - Reluna Family Governance",
  description: "Exploring HeroUI components styled with Reluna design tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ppObjectSans.variable} antialiased font-sans`} suppressHydrationWarning>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
