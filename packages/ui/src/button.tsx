"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = () => {
  return (
    <button className="bg-blue-600 text-xl">
     This is a simple button component
    </button>
  );
};
