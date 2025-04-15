import * as React from "react";
import { cn } from "@/lib/utils";
import { Text, TextProps, View, ViewProps } from "react-native";

const Card = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
    return (
        <View ref={ref} className={cn(
            "rounded-lg border bg-card  text-card-foreground p-2",
            className
        )}
            style={{
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
            {...props}
        />
    )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
    return (
        <View ref={ref} className={cn(
            "flex flex-row items-center justify-between",
            className
        )}
            {...props}
        />
    )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<Text, TextProps>(({ className, ...props }, ref) => {
    return (
        <Text ref={ref} className={cn(
            "text-lg font-semibold",
            className
        )}
            {...props}
        />
    )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<Text, TextProps>(({ className, ...props }, ref) => {
    return (
        <Text ref={ref} className={cn(
            "text-sm text-muted-foreground",
            className
        )}
            {...props}
        />
    )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
    return (
        <View ref={ref} className={cn(
            "p-3",
            className
        )}
            {...props}
        />
    )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
    return (
        <View ref={ref} className={cn(
            "p-3",
            className
        )}
            {...props}
        />
    )
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
