import AdminLayout from "@/components/admin/AdminLayout";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminRootLayout({ children }: AdminLayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}