"use client";

import React from 'react';
import { Pencil, Sliders, Settings, Smartphone, Tag, ShoppingBag } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// --- Precise Custom Color Swatch Fan Deck SVG Component matching Figma exactly ---
const ColorSwatchIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M11 17V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2" />
    <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" />
    <path d="M11 16.5l4.5-4.5a2 2 0 0 0 0-2.83l-1.41-1.42a2 2 0 0 0-2.83 0l-2.26 2.25" />
    <path d="M11 17h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5" />
  </svg>
);

// --- Mapped Data Arrays with Curated Unsplash Parity Match URLs ---
const authorsData = [
  { 
    id: 1, 
    name: "John Michael", 
    email: "john@mail.com", 
    role: "Manager", 
    dept: "Organization", 
    status: "Online", 
    badgeStyle: "bg-[#F0FDF4] text-[#22C55E]", 
    date: "23/04/18",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
  },
  { 
    id: 2, 
    name: "Emma Roberts", 
    email: "emma@mail.com", 
    role: "Programator", 
    dept: "Developer", 
    status: "Offline", 
    badgeStyle: "bg-[#E7E5E4] text-[#1C1917]", 
    date: "11/01/19",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop"
  },
  { 
    id: 3, 
    name: "Laurent Perrier", 
    email: "laurent@mail.com", 
    role: "Executive", 
    dept: "Projects", 
    status: "Offline", 
    badgeStyle: "bg-[#E7E5E4] text-[#1C1917]", 
    date: "19/09/17",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=100&auto=format&fit=crop"
  },
  { 
    id: 4, 
    name: "Michael Levi", 
    email: "micheal@mail.com", 
    role: "Programator", 
    dept: "Developer", 
    status: "Online", 
    badgeStyle: "bg-[#F0FDF4] text-[#22C55E]", 
    date: "24/12/08",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
  },
  { 
    id: 5, 
    name: "Richard Gran", 
    email: "richard@mail.com", 
    role: "Manager", 
    dept: "Executive", 
    status: "Offline", 
    badgeStyle: "bg-[#E7E5E4] text-[#1C1917]", 
    date: "04/10/21",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  { 
    id: 6, 
    name: "Miriam Eric", 
    email: "miriam@mail.com", 
    role: "Programator", 
    dept: "Developer", 
    status: "Offline", 
    badgeStyle: "bg-[#E7E5E4] text-[#1C1917]", 
    date: "14/09/20",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
  },
];

const projectsData = [
  { id: 1, title: "Material XD Version", budget: "$14,000", status: "Working", badgeStyle: "bg-[#EFF6FF] text-[#3B82F6]", progress: 50, icon: ColorSwatchIcon, iconBg: "bg-[#1C1917]" },
  { id: 2, title: "Add Progress Track", budget: "$3,000", status: "Working", badgeStyle: "bg-[#EFF6FF] text-[#3B82F6]", progress: 50, icon: Sliders, iconBg: "bg-[#3B82F6]" },
  { id: 3, title: "Fix Platform Errors", budget: "Not Set", status: "Done", badgeStyle: "bg-[#F0FDF4] text-[#22C55E]", progress: 50, icon: Settings, iconBg: "bg-[#EF4444]" },
  { id: 4, title: "Launch our Mobile App", budget: "$20,500", status: "Done", badgeStyle: "bg-[#F0FDF4] text-[#22C55E]", progress: 50, icon: Smartphone, iconBg: "bg-[#22C55E]" },
  { id: 5, title: "Add the New Pricing Page", budget: "$500", status: "Working", badgeStyle: "bg-[#EFF6FF] text-[#3B82F6]", progress: 50, icon: Tag, iconBg: "bg-[#3B82F6]" },
  { id: 6, title: "Redesign New Online Shop", budget: "$2,000", status: "Working", badgeStyle: "bg-[#EFF6FF] text-[#3B82F6]", progress: 50, icon: ShoppingBag, iconBg: "bg-[#EC4899]" },
];

export default function TablesPage() {
  return (
    /* --- ENCOMPASSING MAIN WHITE BACKGROUND WRAPPER CARD --- */
    <div 
      className="w-[1100px] bg-white border border-[#E7E5E4] rounded-[12px] p-[32px] flex flex-col gap-[24px] box-border shadow-none text-left mx-auto select-none antialiased"
      style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
    >
      
      {/* Title & Header Metadata Segment */}
      <div className="w-full h-[52px] flex flex-col gap-[4px]">
        <h2 className="font-semibold text-[20px] leading-[28px] text-[#1C1917]">Tables</h2>
        <p className="font-normal text-[14px] leading-[20px] text-[#57534E]">
          Browse and manage data across different views
        </p>
      </div>

      {/* Structural Spacer Divider Rule */}
      <div className="w-full h-[1px] bg-[#E7E5E4]" />

      {/* --- INDENTED WRAPPER MATRIX FOR INNER CONTENT PANELS --- */}
      <div className="w-full flex flex-col gap-[24px] pl-[48px] pr-[16px] box-border">

        {/* --- TABLE 1: AUTHORS TABLE --- */}
        <div className="w-full h-[551px] bg-white border border-[#E7E5E4] rounded-[16px] box-border relative shadow-none flex flex-col justify-between overflow-hidden">
          <div className="px-[24px] pt-[24px] pb-[8px] text-left">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Authors Table</h3>
          </div>

          <div className="flex-1 w-full overflow-x-auto px-[24px]">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b border-[#E7E5E4] hover:bg-transparent bg-[#FAFAF9]">
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[411px] py-[12px]">AUTHOR</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[165px] py-[12px]">FUNCTION</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[174px] py-[12px]">STATUS</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[130px] py-[12px] text-center">EMPLOYED</TableHead>
                  <TableHead className="w-[49px] py-[12px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {authorsData.map((row) => (
                  <TableRow key={row.id} className="h-[56px] border-b border-[#E7E5E4] hover:bg-neutral-50/50 transition-colors">
                    <TableCell className="py-[8px]">
                      <div className="flex items-center gap-[12px] text-left">
                        {/* High Fidelity Image Asset Render Node */}
                        <img 
                          src={row.avatar} 
                          alt={row.name} 
                          className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0 border border-[#E7E5E4] shadow-sm"
                        />
                        <div className="flex flex-col">
                          <span className="font-normal text-[14px] leading-[20px] text-[#171717]">{row.name}</span>
                          <span className="font-normal text-[14px] leading-[20px] text-[#78716C]">{row.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-[8px]">
                      <div className="flex flex-col text-left">
                        <span className="font-normal text-[14px] leading-[20px] text-[#1C1917]">{row.role}</span>
                        <span className="font-normal text-[14px] leading-[20px] text-[#78716C]">{row.dept}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-[8px]">
                      <div className={`w-[52px] h-[24px] rounded-[99px] flex items-center justify-center ${row.badgeStyle}`}>
                        <span className="text-[12px] leading-[16px] font-normal">{row.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-normal text-[14px] leading-[20px] text-[#737373] text-center py-[8px]">
                      {row.date}
                    </TableCell>
                    <TableCell className="py-[8px] text-right">
                      <button className="w-[49px] h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] font-normal text-[14px] leading-[20px] text-[#44403C] hover:bg-[#E7E5E4] transition-colors flex items-center justify-center">
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* --- TABLE 2: PROJECTS TABLE --- */}
        <div className="w-full h-[551px] bg-white border border-[#E7E5E4] rounded-[16px] box-border relative shadow-none flex flex-col justify-between overflow-hidden">
          <div className="px-[24px] pt-[24px] pb-[8px] text-left">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Projects Table</h3>
          </div>

          <div className="flex-1 w-full overflow-x-auto px-[24px]">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b border-[#E7E5E4] hover:bg-transparent bg-[#FAFAF9]">
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[368px] py-[12px]">PROJECT</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[165px] py-[12px]">BUDGET</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[112px] py-[12px]">STATUS</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] w-[242px] py-[12px]">COMPLETION</TableHead>
                  <TableHead className="w-[32px] py-[12px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectsData.map((project) => {
                  const ProjectIcon = project.icon;
                  return (
                    <TableRow key={project.id} className="h-[56px] border-b border-[#E7E5E4] hover:bg-neutral-50/50 transition-colors">
                      <TableCell className="py-[8px]">
                        <div className="flex items-center gap-[12px] text-left">
                          <div className={`w-[32px] h-[32px] rounded-[8px] flex items-center justify-center flex-shrink-0 ${project.iconBg}`}>
                            <ProjectIcon className="w-[16px] h-[16px] text-[#FAFAF9]" />
                          </div>
                          <span className="font-medium text-[14px] leading-[20px] text-[#171717]">{project.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-normal text-[14px] leading-[20px] text-[#1C1917] py-[8px] text-left">
                        {project.budget}
                      </TableCell>
                      <TableCell className="py-[8px]">
                        <div className={`w-[62px] h-[24px] rounded-[99px] flex items-center justify-center ${project.badgeStyle}`}>
                          <span className="text-[12px] leading-[16px] font-normal">{project.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-[8px]">
                        <div className="w-[242px] flex items-center gap-[6px]">
                          <span className="font-medium text-[12px] leading-[16px] text-[#78716C] w-[26px]">{project.progress}%</span>
                          <div className="w-[182px] h-[6px] bg-[#F5F5F4] rounded-[10px] relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 bg-[#1C1917] rounded-[10px]" style={{ width: `${project.progress}%` }} />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-[8px] text-right">
                        <button className="w-[32px] h-[32px] bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 transition-colors">
                          <Pencil size={14} className="text-[#171717]" />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </div>
  );
}