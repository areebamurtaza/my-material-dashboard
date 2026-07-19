"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, TableProperties, Bell, CreditCard, LogIn, UserPlus, BookOpen } from 'lucide-react';
import "./globals.css";

const mainLinks = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/tables", label: "Tables", icon: TableProperties },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/subscriptions", label: "Subscriptions", icon: CreditCard },
];

const authLinks = [
  { href: "/signin", label: "Sign In", icon: LogIn },
  { href: "/signup", label: "Sign Up", icon: UserPlus },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin' || pathname === '/signup';
  const isDashboardPage = pathname === '/';

  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-[#FAFAF9] m-0 p-0 antialiased relative">
        
        {/* --- GLOBAL SCALABLE BACKGROUND TEXTURE CANVAS PLANE --- */}
        <div 
          className="absolute inset-0 w-[1440px] pointer-events-none z-0 overflow-hidden"
          style={{ height: isDashboardPage ? '2262px' : '1373px' }}
        >
          {/* Page 1 Texture: Rendered on EVERY screen (Dashboard, Subpages, and Auth Pages) */}
          <div 
            className="absolute left-0 top-0 w-[1440px] h-[1373px] bg-cover bg-center opacity-[0.07]"
            style={{ 
              backgroundImage: "url('/screen-bg.jpg')",
              transform: "matrix(-1, 0, 0, 1, 0, 0)" 
            }}
          />

          {/* Page 2 Texture: Appended underneath ONLY on the dashboard page */}
          {isDashboardPage && (
            <div 
              className="absolute left-0 top-[1373px] w-[1440px] h-[889px] bg-cover bg-center opacity-[0.07]"
              style={{ 
                backgroundImage: "url('/screen-bg.jpg')",
                transform: "matrix(-1, 0, 0, 1, 0, 0)" 
              }}
            />
          )}
        </div>

        {/* --- ROUTE VIEW CONTEXT CONDITIONAL SPLIT --- */}
        {isAuthPage ? (
          /* Standalone Layout Wrapper for Sign In / Sign Up Pages */
          <div className="min-h-screen w-full relative z-10 flex items-center justify-center bg-transparent">
            {children}
          </div>
        ) : (
          /* Main Application Dashboard Shell Layout */
          <div className="min-h-screen w-full bg-transparent relative flex flex-row justify-start items-start overflow-x-auto select-none font-sans">
            
            {/* --- FLOATING SIDEBAR NAVIGATION PANEL BLOCK (Locked to 208px x 400px) --- */}
            <aside 
              className="absolute left-[30px] top-[43px] w-[208px] h-[400px] flex flex-col items-start p-0 gap-[16px] bg-transparent z-10 text-left antialiased select-none"
              style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
            >
              <h1 className="w-[141px] h-[28px] font-semibold text-[18px] leading-[28px] text-[#1C1917] flex-none order-0 flex-grow-0 whitespace-nowrap overflow-visible flex items-center">
                Material Shadcn
              </h1>

              <nav className="w-full flex flex-col items-start gap-[16px] flex-none">
                {mainLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  if (isActive) {
                    return (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className="w-[208px] h-[38px] bg-gradient-to-b from-[#44403C] to-[#292524] border border-[#1C1917] rounded-[8px] p-[8px_16px] gap-[12px] flex flex-row items-center justify-start text-[#FAFAF9] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)] active:translate-y-px transition-all box-border"
                      >
                        <Icon size={16} className="text-[#FAFAF9] flex-shrink-0" />
                        <span className="font-normal text-[14px] leading-[20px] whitespace-nowrap">{link.label}</span>
                      </Link>
                    );
                  }

                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="w-[176px] h-[20px] flex flex-row items-center p-[0px_16px] gap-[12px] text-[#44403C] hover:text-[#1C1917] transition-colors group box-border"
                    >
                      <Icon size={16} className="text-[#44403C] flex-shrink-0 group-hover:text-[#1C1917] transition-colors" />
                      <span className="font-normal text-[14px] leading-[20px] whitespace-nowrap">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="w-[208px] h-[1px] bg-[#E7E5E4] flex-none order-6 flex-grow-0" />

              <div className="w-[208px] h-[88px] flex flex-col items-start p-[0px_16px] gap-[16px] flex-none order-7 flex-grow-0 box-border">
                <span className="w-[75px] h-[16px] font-semibold text-[12px] leading-[16px] text-[#78716C] uppercase tracking-wider whitespace-nowrap flex-none order-0 flex-grow-0">
                  Auth Pages
                </span>
                <div className="w-full flex flex-col items-start gap-[16px]">
                  {authLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className="w-[176px] h-[20px] flex flex-row items-center p-0 gap-[12px] text-[#44403C] hover:text-[#1C1917] transition-colors group flex-none order-1 flex-grow-0"
                      >
                        <Icon size={16} className="text-[#44403C] flex-shrink-0 group-hover:text-[#1C1917] transition-colors" />
                        <span className="w-[51px] h-[20px] font-normal text-[14px] leading-[20px] whitespace-nowrap">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="w-[208px] h-[1px] bg-[#E7E5E4] flex-none order-8 flex-grow-0" />

              <Link 
                href="/docs" 
                className="w-[208px] h-[20px] flex flex-row items-center p-[0px_16px] gap-[12px] text-[#44403C] hover:text-[#1C1917] transition-colors group flex-none order-9 self-stretch flex-grow-0 box-border"
              >
                <BookOpen size={16} className="text-[#44403C] flex-shrink-0 group-hover:text-[#1C1917] transition-colors" />
                <span className="w-[98px] h-[20px] font-normal text-[14px] leading-[20px] whitespace-nowrap">Documentation</span>
              </Link>
            </aside>

            {/* --- WORKSPACE AREA CONTAINER WITH THE EMBEDDED FOOTER --- */}
            <main className="absolute left-[268px] top-[24px] w-[1148px] min-h-[1151px] flex flex-col justify-between box-border z-10 bg-transparent pb-[40px]">
              
              <div className="w-full flex flex-col gap-[24px]">
                {children}
              </div>

              {/* --- GLOBAL FIGMA PIXEL-PERFECT FOOTER COMPONENT --- */}
              <footer 
                className="w-[1104px] h-[33px] flex flex-col items-start p-0 gap-[16px] bg-transparent mx-auto z-10 text-left select-none antialiased"
                style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
              >
                <div className="w-[1104px] h-[1px] bg-[#E7E5E4] flex-none order-0 self-stretch flex-grow-0" />
                <div className="w-[1104px] h-[16px] flex flex-row justify-between items-center gap-[88px] flex-none order-1 self-stretch flex-grow-0">
                  
                  <div className="w-[312px] h-[16px] flex flex-row items-center p-0 gap-[4px] flex-none order-0 flex-grow-0">
                    <span className="w-[107px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] whitespace-nowrap">
                      © 2025, made with
                    </span>
                    <div className="w-[16px] h-[16px] flex items-center justify-center flex-none order-1 flex-grow-0 text-[#EF4444]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <span className="w-[181px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] whitespace-nowrap">
                      by <span className="font-semibold text-[#1C1917]">Creative Tim</span> for a better web.
                    </span>
                  </div>

                  <div className="w-[236px] h-[16px] flex flex-row items-center p-0 gap-[16px] flex-none order-1 flex-grow-0">
                    <Link href="https://www.creative-tim.com" target="_blank" className="w-[69px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] hover:text-[#1C1917] transition-colors whitespace-nowrap">Creative Tim</Link>
                    <Link href="/about" className="w-[51px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] hover:text-[#1C1917] transition-colors whitespace-nowrap">About Us</Link>
                    <Link href="/blog" className="w-[26px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] hover:text-[#1C1917] transition-colors whitespace-nowrap">Blog</Link>
                    <Link href="/license" className="w-[42px] h-[16px] font-normal text-[12px] leading-[16px] text-[#78716C] hover:text-[#1C1917] transition-colors whitespace-nowrap">License</Link>
                  </div>

                </div>
              </footer>

            </main>
          </div>
        )}

      </body>
    </html>
  );
}