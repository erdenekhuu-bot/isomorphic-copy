import { atom, useAtom } from "jotai";
import { LAYOUT_OPTIONS } from "../config/enums";

const isomorphicLayoutAtom = atom(
  typeof window !== "undefined"
    ? localStorage.getItem("isomorphic-layout")
    : LAYOUT_OPTIONS.HYDROGEN
);

const isomorphicLayoutAtomWithPersistence = atom(
  (get) => get(isomorphicLayoutAtom),
  (get, set, newStorage: any) => {
    set(isomorphicLayoutAtom, newStorage);
    localStorage.setItem("isomorphic-layout", newStorage);
  }
);

export function useLayout() {
  const [layout, setLayout] = useAtom(isomorphicLayoutAtomWithPersistence);
  return {
    layout: layout === null ? LAYOUT_OPTIONS.HYDROGEN : layout,
    setLayout,
  };
}
