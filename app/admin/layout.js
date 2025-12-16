// app/admin/layout.js
import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
  if (process.env.ADMIN_SECRET !== "my-secret") {
    redirect("/");
  }
  return children;
}
