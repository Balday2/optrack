import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DialogAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  action?: () => void;
  actionColor?: "primary" | "secondary";
  actionLabel?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'
  children?: React.ReactNode;
}

export function DialogAlert({
  isOpen,
  title,
  description,
  action,
  onClose,
  actionColor,
  actionLabel,
  children,
  size = 'xxl'
}: DialogAlertProps) {
  const sizex = { 
    sm: 'max-w-sm', md: 'max-w-md', 
    lg: 'max-w-lg', xl: 'max-w-xl', xxl: 'max-w-2xl',
    xxxl: 'max-w-3xl', xxxxl: 'max-w-4xl',
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent 
        className={cn(`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full`, sizex[size])}>
        <Button
          className="absolute right-2 top-2 h-8 w-8 rounded-full p-0"
          variant="ghost"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </Button>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          {action && (
            <AlertDialogAction onClick={action} color={actionColor}>
              {actionLabel}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}