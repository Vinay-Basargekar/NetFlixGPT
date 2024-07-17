import { create } from "zustand";

const useGptStore = create((set) => ({
    toggleGpt: false,
    setToggle: () => set((state) => ({ toggleGpt: !state.toggleGpt })),
}));

export default useGptStore;
