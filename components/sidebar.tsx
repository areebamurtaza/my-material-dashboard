"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  User, 
  Table, 
  Bell, 
  CreditCard, 
  LogIn, 
  UserPlus, 
  FileText 
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SidebarItem = ({ icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-neutral-950 text-white shadow-sm' 
          : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950'
      }`}
    >
      <span className={isActive ? 'text-white' : 'text-neutral-400'}>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-neutral-200 bg-white p-4 flex flex-col justify-between fixed left-0 top-0 z-40">
      <div className="space-y-6">
        <div className="px-4 py-2 border-b border-neutral-100 pb-4">
          <h1 className="text-lg font-bold text-neutral-950 tracking-tight">
            Material Shadcn
          </h1>
        </div>

        <nav className="space-y-1">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" href="/" />
          <SidebarItem icon={<User size={18} />} label="Profile" href="/profile" />
          <SidebarItem icon={<Table size={18} />} label="Tables" href="/tables" />
          <SidebarItem icon={<Bell size={18} />} label="Notifications" href="/notifications" />
          <SidebarItem icon={<CreditCard size={18} />} label="Subscriptions" href="/subscriptions" />
        </nav>

        <div className="pt-4">
          <p className="px-4 text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
            Auth Pages
          </p>
          <nav className="space-y-1">
            <SidebarItem icon={<LogIn size={18} />} label="Sign In" href="/signin" />
            <SidebarItem icon={<UserPlus size={18} />} label="Sign Up" href="/signup" />
          </nav>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-4">
        <SidebarItem icon={<FileText size={18} />} label="Documentation" href="/docs" />
      </div>
    </aside>
  );
}