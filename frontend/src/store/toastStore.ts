import { atom } from "nanostores";

type Toast = {
  id: number;
  message: string;
};

export const toastsStore = atom<Toast[]>([]);

export const addToast = (message: string, duration = 3000) => {
  const id = Date.now();

  // Add the new toast
  toastsStore.set([...toastsStore.get(), { id, message }]);

  // Remove the toast after the duration
  setTimeout(() => {
    toastsStore.set(toastsStore.get().filter((toast) => toast.id !== id));
  }, duration);
};
    