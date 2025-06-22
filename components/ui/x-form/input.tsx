import * as React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

import { cn } from "@/lib/utils";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";
import { LucideIcon } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
    onRightIconClick?: () => void;
    onLeftIconClick?: () => void;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      registration,
      leftIcon,
      rightIcon,
      onRightIconClick,
      onLeftIconClick,
      ...props
    },
    ref
  ) => {
    return (
      <FieldWrapper label={label} error={error}>
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div
              className={cn(
                "absolute left-3 flex h-full items-center justify-center text-muted-foreground",
                onLeftIconClick && "cursor-pointer"
              )}
              onClick={onLeftIconClick}
            >
              {React.createElement(leftIcon, { className: "h-4 w-4" })}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            ref={ref}
            {...registration}
            {...props}
          />
          {rightIcon && (
            <div
              className={cn(
                "absolute right-3 flex h-full items-center justify-center text-muted-foreground",
                onRightIconClick && "cursor-pointer"
              )}
              onClick={onRightIconClick}
            >
              {React.createElement(rightIcon, { className: "h-4 w-4" })}
            </div>
          )}
        </div>
      </FieldWrapper>
    );
  }
);
Input.displayName = "Input";

export { Input };
