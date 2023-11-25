import { atom } from "recoil";

const initialState = {
  isOpen: false
};

export const promiseDetailState = atom({
  key: "promiseDetailState",
  default: initialState,
});
