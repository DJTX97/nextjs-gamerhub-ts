"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeLoader from "./components/UtilityComp/HomeLoader";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);

  return <HomeLoader />;
}
