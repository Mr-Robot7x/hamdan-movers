import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex transition-all items-center justify-center whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50 font-poppins",
  {
    variants: {
      variant: {
        default:
          "bg-[#FF5F00] hover:bg-[#FF5F00]/80 transition duration-300 text-white ts",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#023246] text-[#023246] hover:bg-[#287094] hover:text-white hover:border-transparent",
        secondary:
          "bg-accent border border-transparent hover:border-neutral-300 transition-all",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 under hover:underline",
        light: "bg-[#287094] text-white",
        white:
          "bg-white text-[#023246] hover:bg-[#287094] hover:text-white hover:border-transparent",
      },
      size: {
        default: "py-3 px-6 rounded-full",
        sm: "py-2 px-4 rounded-full",
        lg: "h-11 rounded-md px-8",
        icon: "relative h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const locale = useLocale();
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`font-poppins ${cn(
          buttonVariants({ variant, size, className })
        )}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
