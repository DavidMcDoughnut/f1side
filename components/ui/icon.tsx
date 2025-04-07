import React from "react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  icon: React.ElementType; // Expects a Lucide icon component
}

const Icon = ({ icon: IconComponent, strokeWidth = 1.5, ...props }: IconProps) => {
  return <IconComponent strokeWidth={strokeWidth} {...props} />;
};

export { Icon }; 