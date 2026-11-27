import AdminNav from "@/components/admin/AdminNav";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <main className="w-full min-h-screen py-8 sm:py-10">
        <div className="container-page flex flex-col gap-6 lg:gap-8">
          <AdminNav />
          {children}
        </div>
      </main>
    </div>
  );
}