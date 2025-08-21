import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-dark-teal bg-white text-dark-teal hover:bg-dark-teal hover:text-white",
        secondary:
          "bg-off-white text-dark-teal hover:bg-dark-teal hover:text-white",
        ghost: "text-dark-teal hover:bg-off-white hover:text-dark-teal",
        link: "text-primary underline-offset-4 hover:underline",
        
        /* Seattle ProWash High Contrast Brand Variants */
        "prowash-primary": "bg-moss-green text-white font-bold hover:bg-moss-green-light hover:text-white btn-glow shadow-md border-0 hover:scale-105 transition-all duration-300 w-full sm:w-auto",
        "prowash-outline": "bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-teal font-semibold",
        "prowash-secondary": "border-2 border-dark-teal bg-white text-dark-teal hover:bg-dark-teal hover:text-white font-semibold shadow-sm",
        "prowash-cta": "bg-dark-teal text-white font-bold hover:bg-dark-teal/90 hover:text-white shadow-lg border-0",
        "prowash-phone": "bg-moss-green text-white font-bold hover:bg-moss-green-light hover:text-white btn-glow text-lg border-0",
        "cta-orange": "bg-bright-orange text-white font-bold hover:bg-bright-orange/90 hover:text-white btn-glow shadow-md border-0 hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
