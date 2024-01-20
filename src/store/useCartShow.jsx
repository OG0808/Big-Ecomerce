import { create } from "zustand";

const useCartShow = create((set) => ({
  show: true,

  setShowCart: () => set((state) => ({ show: !state.show }))

}));

export default useCartShow;

