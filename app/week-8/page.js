"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="h-screen bg-white ">
      <header>
        <h1 className="font-bold text-4xl">Shopping List App</h1>
      </header>
      <section className="mt-2 text-l p-2">
        {user ? (
          <div>
            <p>Signed in as ({user.email}).</p>
            <Link
              href="/week-8/shopping-list/"
              className="block hover:underline"
            >
              Continue to your Shopping lists
            </Link>
            <button
              className="mt-2 p-1 bg-orange-300 rounded-lg font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              className="mt-2 p-1 bg-orange-300 rounded-lg font-bold"
              onClick={handleSignIn}
            >
              Sign In with Github
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
