"use client";

import { LoginForm } from "@/components/login-form";
import { Suspense } from "react";

function LoginBackground() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full object-cover"
      style={{ zIndex: 0 }}
    >
      <circle cx="120" cy="90" r="70" fill="#FFE8CC" />
      <circle cx="490" cy="170" r="50" fill="#FFE4C7" />
      <circle cx="250" cy="240" r="32" fill="#FDE0C8" />
      <circle cx="401" cy="110" r="24" fill="#FAD7C2" />
      <circle cx="380" cy="170" r="20" fill="#FFF5E6" />
      <circle cx="120" cy="300" r="16" fill="#FFE8CC" />
      <rect x="450" y="230" width="50" height="10" rx="2" fill="#FFF0DE" transform="rotate(45 475 235)" />
      <rect x="310" y="180" width="70" height="3" rx="1.5" fill="#FFE8CC" transform="rotate(45 345 181.5)" />
      <rect x="312" y="350" width="32" height="6" rx="2" fill="#FFF0DE" transform="rotate(-13 312 350)" />
      <circle cx="220" cy="650" r="80" fill="#FFF7EA" />
      <circle cx="545" cy="560" r="40" fill="#FFF0DE" />
      <circle cx="310" cy="670" r="14" fill="#FAD7C2" />
      <g>
        {Array.from({ length: 4 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <circle
              key={`dot-${i}-${j}`}
              cx={370 + j * 14}
              cy={720 + i * 14}
              r="3"
              fill="#FDE0C8"
              opacity="0.7"
            />
          ))
        )}
      </g>
      <rect x="220" y="690" width="65" height="3" rx="1.5" fill="#FFE8CC" />
      <rect x="215" y="510" width="50" height="10" rx="2" fill="#FAD7C2" transform="rotate(12 240 515)" />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full w-full lg:block overflow-hidden">
        <LoginBackground />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Se connecter
            </h1>
            <p className="text-sm text-muted-foreground">
              Entrer numéro de téléphone et mot de passe
            </p>
          </div>
          <Suspense fallback={<div>Chargement...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
