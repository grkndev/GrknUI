import { Easing } from "react-native-reanimated";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, StyleSheet, View } from "react-native";
import { Text, TextClassContext } from "../text";
import { cn } from "@/lib/utils";
import { MotiView } from "moti";

const PulsatingButtonVariants = cva(
  'group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline:
          'border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline ',
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const PulsatingButtonTextVariants = cva(
  'web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground',
        secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
      },
      size: {
        default: '',
        sm: '',
        lg: 'native:text-lg',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type PulsatingButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof PulsatingButtonVariants>;

const PulsatingButton = React.forwardRef<React.ElementRef<typeof Pressable>, PulsatingButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <View>


        <TextClassContext.Provider
          value={cn(
            'z-10',
            props.disabled && 'web:pointer-events-none',
            PulsatingButtonTextVariants({ variant, size })
          )}
        >
          <Pressable
            className={cn(
              props.disabled && 'opacity-50 web:pointer-events-none',
              PulsatingButtonVariants({ variant, size, className })
            )}
            ref={ref}
            role='button'
            {...props}
          />
        </TextClassContext.Provider>

        <MotiView
          style={[StyleSheet.absoluteFillObject]}
          className={
            cn(
              "-z-10",
              props.disabled && 'opacity-50 web:pointer-events-none',
              PulsatingButtonVariants({ variant, size, className })
            )
          }
          from={{
            opacity: .25,
            scaleX: 1,
            scaleY: 1,
          }}
          animate={{
            opacity: .25,
            scaleX: 1.03,
            scaleY: 1.23,
          }}
          transition={{
            type: "timing",
            duration: 1000,
            easing: Easing.out(Easing.ease),
            loop: true,
          }}
        />




      </View>

    );
  }
);
PulsatingButton.displayName = 'PulsatingButton';

export { PulsatingButton, PulsatingButtonTextVariants, PulsatingButtonVariants };
export type { PulsatingButtonProps };
