import { atom } from "recoil";

export const filterOpt = atom({
    key: "filterOpt",
    default: false,
})

export const filterTags = atom({
    key: "filterTags",
    default: []
})