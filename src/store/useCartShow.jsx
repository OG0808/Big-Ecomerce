
import { create } from "zustand";

const useCartShow = create((set,) => ({
  show: false,
  showMenu: false,
  order:false,
  setShowCart: () => set((state) => ({ show: !state.show, showMenu: false })),
  setShowMenu: () => set((state) => ({ showMenu: !state.showMenu, show: false })),
  setShowOrder: () => set((state) => ({ order: !state.order }))

}));

export default useCartShow;
