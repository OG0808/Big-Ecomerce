import { create } from "zustand";

const useCartShow = create((set) => ({
  show: false,

  setShowCart: () => set((state) => ({ show: !state.show }))

}));

export default useCartShow;

