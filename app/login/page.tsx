"use client";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
            <h1 className="text-3xl font-bold">Welcome</h1>

            <button
                onClick={() => signIn("google")}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Sign in with Google
            </button>

            <button
                onClick={() => signOut()}
                className="bg-gray-800 text-white px-4 py-2 rounded"
            >
                Sign out
            </button>
        </main>
    );
}
