import { Suspense } from "react";
import { AuthErrorContent } from "./_components/content";

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}
