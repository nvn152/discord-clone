"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionTooltipProvider {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

const ActionTooltip = ({
  label,
  children,
  side,
  align,
}: ActionTooltipProvider) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={5}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="font-semibold text-sm capitalize"
          side={side}
          align={align}
        >
          {label.toLowerCase()}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionTooltip;
