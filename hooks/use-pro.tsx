import { create } from 'zustand';

interface ProModelStore {
  isAvailable: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const usePro = create<ProModelStore>((set) => ({
  // isAvailable: true,
  isAvailable: false,
  onOpen: (): void => set({ isAvailable: true }),
  onClose: (): void => set({ isAvailable: false }),
}));
