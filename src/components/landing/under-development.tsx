"use client"

import { Construction, AlertTriangle } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white">
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <Construction className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm sm:text-base font-semibold">
              🚧 Website Under Development
            </span>
            <span className="text-xs sm:text-sm opacity-90">
              We're working hard to bring you something amazing!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
            <Construction className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}