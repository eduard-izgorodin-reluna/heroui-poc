"use client";

import React from "react";
import { cardVariants, type CardVariants } from "@/config/component-variants";

interface RelunaCardProps extends CardVariants {
  children: React.ReactNode;
  className?: string;
}

interface CardPartProps {
  children: React.ReactNode;
  className?: string;
}

const CardContext = React.createContext<ReturnType<typeof cardVariants> | null>(null);

export const RelunaCard: React.FC<RelunaCardProps> & {
  Header: React.FC<CardPartProps>;
  Body: React.FC<CardPartProps>;
  Footer: React.FC<CardPartProps>;
} = ({ children, variant, radius, shadow, padding, className }) => {
  const slots = cardVariants({ variant, radius, shadow, padding });

  return (
    <CardContext.Provider value={slots}>
      <div className={slots.base({ className })}>{children}</div>
    </CardContext.Provider>
  );
};

const CardHeader: React.FC<CardPartProps> = ({ children, className }) => {
  const slots = React.useContext(CardContext);
  if (!slots) throw new Error("CardHeader must be used within RelunaCard");
  return <div className={slots.header({ className })}>{children}</div>;
};

const CardBody: React.FC<CardPartProps> = ({ children, className }) => {
  const slots = React.useContext(CardContext);
  if (!slots) throw new Error("CardBody must be used within RelunaCard");
  return <div className={slots.body({ className })}>{children}</div>;
};

const CardFooter: React.FC<CardPartProps> = ({ children, className }) => {
  const slots = React.useContext(CardContext);
  if (!slots) throw new Error("CardFooter must be used within RelunaCard");
  return <div className={slots.footer({ className })}>{children}</div>;
};

RelunaCard.Header = CardHeader;
RelunaCard.Body = CardBody;
RelunaCard.Footer = CardFooter;

RelunaCard.displayName = "RelunaCard";
