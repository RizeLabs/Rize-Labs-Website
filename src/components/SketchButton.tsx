
import React from "react";
import { cn } from "@/lib/utils";

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SketchButton = ({ children, className, ...props }: SketchButtonProps) => (
  <button
    className={cn(
      "font-medium text-base px-6 py-2 bg-lime-100 text-black rounded-full hover:bg-lime-200 transition-all inline-flex items-center",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default SketchButton;
