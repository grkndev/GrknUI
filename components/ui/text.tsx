import * as React from "react";
import { Text as RNText, TextProps } from "react-native";

import { cn } from "@/lib/utils";

const TextClassContext = React.createContext<TextProps["className"] | undefined>(undefined);

const Text = React.forwardRef<RNText, TextProps>(({ className, ...props }, ref) => {
    const textClassName = React.useContext(TextClassContext);

    return (
        <RNText
            ref={ref}
            className={cn("text-primary ", textClassName, className)}
            {...props}
        />
    )
})

Text.displayName = "Text"

export { Text, TextClassContext }
