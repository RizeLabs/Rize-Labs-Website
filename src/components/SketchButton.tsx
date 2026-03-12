
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "font-medium text-sm px-7 py-3 rounded-full transition-all duration-300 ease-out inline-flex items-center cursor-pointer active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2ede8]",
  {
    variants: {
      variant: {
        solid:
          "bg-[#1a1a1a] text-white hover:bg-neutral-700 hover:-translate-y-0.5",
        ghost:
          "border border-neutral-300 text-[#1a1a1a] hover:border-neutral-500 hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

interface SketchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

const SketchButton = ({ children, className, variant, ...props }: SketchButtonProps) => (
  <button
    className={cn(buttonVariants({ variant }), className)}
    {...props}
  >
    {children}
  </button>
);

export default SketchButton;
