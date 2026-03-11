import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-all",
        secondary:
          "bg-brand-orange text-black hover:bg-brand-orange-light hover:text-black transition-all shadow-sm",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-brand-navy underline-offset-4 hover:underline",
        
        /* Premium ProWash variants */
        prowash: "bg-brand-navy text-white hover:bg-brand-blue-light font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl",
        "prowash-primary": "bg-brand-navy text-white hover:bg-brand-blue-light font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl",
        "prowash-secondary": "bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold transition-all",
        "prowash-cta": "bg-brand-navy text-white hover:bg-brand-blue-light font-bold shadow-lg transition-all",
        "prowash-phone": "bg-brand-orange text-black hover:bg-brand-orange-light hover:text-black font-bold shadow-lg",
        "cta-orange": "bg-brand-orange text-black hover:bg-brand-orange-light hover:text-black font-bold shadow-lg hover:shadow-xl transition-all rounded-xl",
        "prowash-outline": "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold",
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
