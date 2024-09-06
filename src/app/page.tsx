"use client"

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FIND_ROLE_PATH, NOT_FOUND } from "../routes";

export default function AppPage(){

  const {data: session, status} = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (session?.user?.role) {
      const path = FIND_ROLE_PATH(session.user.role);
      if (path !== pathname) {
        router.push(path);
      }
    } else {
      router.push(NOT_FOUND);
    }
  }, [pathname, session, status, router]);

  return null;
}
