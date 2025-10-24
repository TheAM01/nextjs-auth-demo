import { auth } from "@/auth";

export default async function Dashboard() {
    const session = await auth();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-amber-300">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {session?.user ? (
                <>
                    <p>Signed in as {session.user.name}</p>
                    <img src={session.user.image!} alt="Profile" className="w-16 h-16 rounded-full" />
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </main>
    );
}
