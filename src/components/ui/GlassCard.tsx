import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("glass-card p-6 md:p-8 transition-transform hover:scale-[1.02] duration-300", className)}
      {...props}
    >
      {children}
    </div>
  );
};
