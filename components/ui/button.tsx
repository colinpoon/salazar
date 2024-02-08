import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-muted-1 text-primary-foreground hover:bg-brand-muted-2',
        destructive:
          // danger: (can change to any var)
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        pro: 'bg-brand-primary text-brand-muted-2 border-0 shadow-md hover:bg-brand-secondary ',
        underline:
          // 'text-brand-muted-2 underline-offset-4 hover:underline',
          'text-brand-primary underline-offset-4 hover:underline',

        actionSecondary:
          'bg-transparent border border-brand-primary border-2 text-brand-primary hover:bg-brand-primary hover:text-brand-comp hover:drop-shadow-md',
        // 'bg-transparent border border-brand-muted-2 border-2 text-brand-muted-2 hover:bg-brand-muted-2 hover:text-brand-primary hover:drop-shadow-md',

        actionTertiary:
          'bg-brand-muted-2 text-brand-primary border-brand-muted-2 border-2 hover:bg-brand-primary hover:border hover:border-brand-muted-2 hover:border-2 hover:text-brand-muted-2 hover:drop-shadow-md',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
