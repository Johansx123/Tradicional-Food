import { createContext, useContext } from "react";


export const userContext = createContext();
export const userUpdate = createContext();
export const userToggleContext = createContext();
export const isEditContext = createContext();
export const isEditToggleContext = createContext();
export const userOutContext = createContext();

export function useUserContext() {
    return useContext(userContext);
}
export function useUserToggleContext() {
    return useContext(userToggleContext);
}
export function useIsEditContext() {
    return useContext(isEditContext);
}
export function useIsEditToggleContext() {
    return useContext(isEditToggleContext);
}
export function useUserOutContext() {
    return useContext(userOutContext)
}
export function useUserUpdate() {
    return useContext(userUpdate)
}