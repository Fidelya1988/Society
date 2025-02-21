'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Вітаю, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Вийти</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Увійти через Google</button>
      )}
    </div>
  );
}
