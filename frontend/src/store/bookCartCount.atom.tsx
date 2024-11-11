import { atom } from "recoil";

export const bookCartCountAtom = atom({
  key: "bookCartCount",
  default: 0,
});

export const addedBooksInCartIdsAtom = atom({
  key: "addedBooksInCartIdsAtom",
  default: [] as string[],
});
