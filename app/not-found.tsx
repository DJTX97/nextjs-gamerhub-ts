import { redirect } from "next/navigation";

export default function NotFound() {
  setTimeout(redirect("/"), 0)
}
