"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button, ButtonLink } from "../ui/Button";

export default function AuthButton() {
  const { data: session, status } = useSession();

  console.log("Status:", status);
  console.log("Session data:", session);

  // si le status est loading
  if (status === "loading") {
    return <p>Chargement...</p>;
  }

  // si l'utilisateur est connecté (pp, nom & bouton de déconnexion)
  if (session?.user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="Avatar GitHub"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
        )}
        <span>{session.user.name}</span>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>
          Déconnexion
        </Button>
      </div>
    );
  }

  // Button pour se connecter
  return (
    <ButtonLink
      href="/signin"
      className="flex items-center justify-center text-white"
    >
      Se connecter
    </ButtonLink>
  );
}
