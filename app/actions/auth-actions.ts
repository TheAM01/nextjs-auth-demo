"use server";

import { signIn, signOut } from "@/auth";


export const signInToApp = async () => {
    await signIn("google")
}
export const signOutOfApp = async () => {
    await signOut()
}