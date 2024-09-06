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

export interface DialogAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  action?: () => void;
  actionColor?: "primary" | "secondary";
  actionLabel?: string;
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
}: DialogAlertProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full">
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