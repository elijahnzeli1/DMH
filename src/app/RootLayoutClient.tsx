"use client";

import React from "react";

import { ReactNode } from "react";

interface RootLayoutClientProps {
  children: ReactNode;
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <div className="text-white flex flex-col">
      <div className="container mx-auto px-4 max-w-[1024px]">
        {children}
      </div>
    </div>
  );
}