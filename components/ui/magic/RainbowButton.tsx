import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, View } from "react-native";
import { Text, TextClassContext } from "../text";
import { cn } from "@/lib/utils";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
const RainbowButtonVariants = cva(
  'group flex items-center justify-center  web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
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
        sm: 'h-9 rounded-2xl px-3',
        lg: 'h-11 rounded-2xl px-8 native:h-14',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const RainbowButtonTextVariants = cva(
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

type RainbowButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof RainbowButtonVariants>;

const RainbowButton = React.forwardRef<React.ElementRef<typeof Pressable>, RainbowButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <View className="overflow-hidden rounded-2xl flex flex-col ">


        <TextClassContext.Provider
          value={cn(

            props.disabled && 'web:pointer-events-none',
            RainbowButtonTextVariants({ variant, size })
          )}
        >
          <Pressable
            className={cn(
              props.disabled && 'opacity-50 web:pointer-events-none',
              RainbowButtonVariants({ variant, size, className })
            )}
            ref={ref}
            role='button'
            {...props}
          />
        </TextClassContext.Provider>

        <LinearGradient
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['yellow', 'cyan', 'purple']}
          className={
            cn(
              "  w-full h-0.5 -top-0.5 ",
            )
          }
        />
        


      </View>

    );
  }
);
RainbowButton.displayName = 'RainbowButton';

export { RainbowButton, RainbowButtonTextVariants, RainbowButtonVariants };
export type { RainbowButtonProps };
