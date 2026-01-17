import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm text-white font-regular transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white/10 gap-2",
        recommended: "bg-black/60 gap-1",
        stream: "bg-stream gap-2 ",
      },
      size: {
        default: "px-4 py-2",
        recommended: "py-1 px-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function ButtonLink({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      data-slot="button-link"
      data-variant={variant}
      href={props.href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, ButtonLink, buttonVariants };
