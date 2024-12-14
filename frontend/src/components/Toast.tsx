"use client";

import { toastsStore } from "@/store/toastStore";
import { useStore } from "@nanostores/react";

const Toast = () => {
  const toasts = useStore(toastsStore);

  return (
    <div className="fixed bottom-4 right-4 space-y-3 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 shadow-lg rounded-md transition-opacity duration-300"
        >
          <span className="text-gray-800 text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
