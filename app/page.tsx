"use client";

import { signInToApp, signOutOfApp } from "./actions/auth-actions";

const example: string = "123";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Next.js & Auth.js Demo</h1>
      <div className="text-sm text-neutral-400">This app is a demonstration of authentication in Next.js using Auth.js and Git & GitHub!</div>
      <div className="text-sm text-neutral-400">This is also my first time using Vercel for deployment!</div>
      <form
        action={signInToApp}
      >
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign in with Google</button>
      </form>
      <form
        action={signOutOfApp}
      >
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Sign out</button>
      </form>
    </main>
  );
}
