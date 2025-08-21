"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
  session: Session | null;
  children: ReactNode;
}

export default function SessionProviderWrapper({ session, children }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
