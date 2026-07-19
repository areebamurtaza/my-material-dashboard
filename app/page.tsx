"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Filter, ChevronLeft, ChevronRight, MoreVertical, Bell, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// --- Reusable Precise Chart Tooltip Blueprint Component ---
const ChartCustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#E5E5E5] rounded-[4px] p-[8px] flex flex-col gap-[4px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] min-w-[106px] box-border">
        <p className="font-sans text-[10px] leading-[12px] text-[#737373] font-normal">{label}</p>
        <div className="w-[89px] h-[1px] bg-[#E5E5E5] my-[2px]" />
        {payload.map((item: any) => (
          <div key={item.name} className="flex flex-row justify-between items-center w-full gap-[8px]">
            <div className="flex items-center gap-[4px]">
              <span className="w-[8px] h-[8px] rounded-[2px]" style={{ backgroundColor: item.color || item.payload.color }} />
              <span className="font-sans font-normal text-[10px] leading-[12px] text-[#737373] capitalize">{item.name}</span>
            </div>
            <span className="font-sans font-bold text-[10px] leading-[12px] text-[#171717]">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// --- Embedded Absolute-Positioned Figma Blueprint Chart Component ---
interface FigmaChartProps {
  showTooltip?: boolean;
  valueKey: "views" | "sales" | "tasks";
}

function FigmaAbsoluteChart({ showTooltip = false, valueKey }: FigmaChartProps) {
  // Chart 1 & 2 structural coordinates
  const generalColumns = [
    { left: 3.5,   height: 43,    top: 57,    label: 'M', active: false },
    { left: 31.29, height: 59.14, top: 41.32, label: 'T', active: false },
    { left: 59.19, height: 32,    top: 68,    label: 'W', active: false },
    { left: 87.03, height: 67,    top: 33,    label: 'T', active: true }, // Highlighted Blue Bar
    { left: 114.88,height: 11,    top: 89,    label: 'F', active: false },
    { left: 146.2, height: 20,    top: 80,    label: 'S', active: false },
    { left: 175.21,height: 53,    top: 47,    label: 'S', active: false },
  ];

  // Chart 3 explicit bar heights matching mockup variant configuration
  const taskColumns = [
    { left: 3.5,   height: 43,    top: 57,    label: 'M', active: false },
    { left: 31.29, height: 59.14, top: 41.32, label: 'T', active: false },
    { left: 59.19, height: 32,    top: 68,    label: 'W', active: false },
    { left: 87.03, height: 67,    top: 33,    label: 'T', active: true }, // Highlighted Blue Bar
    { left: 114.88,height: 11,    top: 89,    label: 'F', active: false },
    { left: 146.2, height: 20,    top: 80,    label: 'S', active: false },
    { left: 175.21,height: 53,    top: 47,    label: 'S', active: false },
  ];

  const chartColumns = valueKey === 'tasks' ? taskColumns : generalColumns;

  return (
    <div className="relative w-[210px] h-[126px] bg-transparent select-none mx-auto flex-none mt-1">
      
      {/* 5 Dashed Grid Path Lines matching precise percentage coordinates */}
      <div className="absolute inset-0 pointer-events-none h-[100px]">
        <div className="absolute left-0 right-0 top-[0%] border-b border-dashed border-[#E5E5E5]" />
        <div className="absolute left-0 right-0 top-[25%] border-b border-dashed border-[#E5E5E5]" />
        <div className="absolute left-0 right-0 top-[50%] border-b border-dashed border-[#E5E5E5]" />
        <div className="absolute left-0 right-0 top-[75%] border-b border-dashed border-[#E5E5E5]" />
        <div className="absolute left-0 right-0 top-[100px] border-b border-solid border-[#E5E5E5]" />
      </div>

      {/* Absolutely Rendered Bar Pillars with thick w-[16px] blocks */}
      {chartColumns.map((col, index) => (
        <div 
          key={index}
          className="absolute w-[20.88px]"
          style={{ left: `${col.left}px`, top: `${col.top}px`, height: `${col.height}px` }}
        >
          <div 
            className={`w-[16px] h-full mx-auto rounded-t-[3px] transition-all ${
              col.active ? 'bg-[#3B82F6]' : 'bg-[#1C1917]'
            }`} 
          />
          {/* Axis Day Labels seated precisely at bottom line frame */}
          <span className="absolute top-[106px] left-0 right-0 text-center font-sans font-normal text-[12px] leading-[16px] text-[#A8A29E]" style={{ transform: `translateY(-${col.top}px)` }}>
            {col.label}
          </span>
        </div>
      ))}

      {/* Standalone Absolute Tuesday Info Popover Widget */}
      {showTooltip && (
        <div className="absolute left-[3px] top-[14px] w-[76px] h-[49px] bg-white border border-[#E5E5E5] rounded-[4px] p-2 flex flex-col justify-between z-20 box-border shadow-sm">
          <span className="text-[10px] leading-[12px] text-[#737373] font-normal font-sans">Tuesday</span>
          <div className="w-full h-[1px] bg-[#E5E5E5] flex-none" />
          <div className="flex flex-row items-center gap-1 h-[12px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] flex-none" />
            <span className="text-[10px] leading-[12px] text-[#737373] font-normal font-sans whitespace-nowrap">Views: 21</span>
          </div>
        </div>
      )}

    </div>
  );
}

// --- High-Fidelity Unsplash Assets Matching Figma Reference Exactly ---
const teamAvatars = {
  john: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=100&auto=format&fit=crop",
  emma: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop",
  ivanna: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
  peterson: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop",
  bruce: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  laurent: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=100&auto=format&fit=crop"
};

// --- Mapped Row Data Arrays ---
const projectsList = [
  { 
    id: 1, 
    name: "Material Figma Version", 
    type: "Figma", 
    budget: "$14,000", 
    badge: "Design", 
    progress: 50,
    assignees: [teamAvatars.laurent, teamAvatars.john, teamAvatars.peterson, teamAvatars.bruce, teamAvatars.emma] 
  },
  { 
    id: 2, 
    name: "Add Progress Track", 
    type: "Github", 
    budget: "$3,000", 
    badge: "Development", 
    progress: 10,
    assignees: [teamAvatars.ivanna, teamAvatars.peterson, teamAvatars.bruce, teamAvatars.emma] 
  },
  { 
    id: 3, 
    name: "Fix Platform Errors", 
    type: "Discord", 
    budget: "$20,000", 
    badge: "Back-End", 
    progress: 50,
    assignees: [teamAvatars.ivanna, teamAvatars.john, teamAvatars.peterson] 
  },
  { 
    id: 4, 
    name: "Launch Mobile App", 
    type: "Github", 
    budget: "$5,000", 
    badge: "Design", 
    progress: 50,
    assignees: [teamAvatars.john, teamAvatars.peterson, teamAvatars.bruce, teamAvatars.emma] 
  },
  { 
    id: 5, 
    name: "New Pricing Page", 
    type: "Signal", 
    budget: "$2,000", 
    badge: "Marketing", 
    progress: 50,
    assignees: [teamAvatars.laurent, teamAvatars.john, teamAvatars.peterson, teamAvatars.bruce, teamAvatars.emma] 
  },
];

const salesExpensesData = [
  { name: 'Jan', sales: 290, expenses: 220 },
  { name: 'Feb', sales: 410, expenses: 320 },
  { name: 'Mar', sales: 310, expenses: 270 },
  { name: 'Apr', sales: 480, expenses: 410 },
  { name: 'May', sales: 440, expenses: 390 },
  { name: 'Jun', sales: 680, expenses: 800 },
  { name: 'Jul', sales: 800, expenses: 900 },
  { name: 'Aug', sales: 740, expenses: 840 },
  { name: 'Sept', sales: 690, expenses: 780 },
  { name: 'Oct', sales: 800, expenses: 910 },
  { name: 'Nov', sales: 580, expenses: 640 },
  { name: 'Dec', sales: 800, expenses: 920 },
];

const userActivityWeekly = [
  { name: 'Mon', users: 30, sessions: 36 },
  { name: 'Tue', users: 56, sessions: 62 },
  { name: 'Wed', users: 44, sessions: 52 },
  { name: 'Thu', users: 58, sessions: 68 },
  { name: 'Fri', users: 54, sessions: 64 },
  { name: 'Sat', users: 95, sessions: 110 },
  { name: 'Sun', users: 82, sessions: 98 },
];

const quarterlyPerformance = [
  { name: 'Q1', revenue: 116000, profit: 48000 },
  { name: 'Q2', revenue: 210000, profit: 126000 },
  { name: 'Q3', revenue: 164000, profit: 86000 },
  { name: 'Q4', revenue: 224000, profit: 110000 },
];

export default function DashboardPage() {
  return (
    <div 
      className="w-[1100px] flex flex-col gap-[24px] box-border mx-auto text-left antialiased select-none"
      style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      
      {/* SECTION 1: Welcome Info Card Block */}
      <div 
        className="w-full h-[263px] rounded-[8px] p-[32px] flex flex-col justify-start items-start box-border relative overflow-hidden shadow-none bg-cover bg-no-repeat select-none"
        style={{ 
          backgroundImage: "url('/hero-bg.JPG')",
          backgroundPosition: "100% -5px"
        }}
      >
        <div className="w-full max-w-[525px] h-[204px] flex flex-col justify-between items-start z-10 bg-transparent">
          <div className="w-full h-[136px] flex flex-col gap-[16px] bg-transparent">
            <h2 className="w-full h-[36px] font-bold text-[30px] leading-[36px] text-white tracking-tight">
              Build Amazing Teams
            </h2>
            <p className="w-full h-[84px] font-normal text-[18px] leading-[28px] text-[#E7E5E4]">
              Connect with diverse talent and create inclusive workspaces that drive innovation. 
              Discover how our platform helps you build stronger teams.
            </p>
          </div>
          <button className="w-[116px] h-[44px] bg-gradient-to-b from-[#44403C] to-[#292524] border border-[#1C1917] rounded-[8px] p-[8px_16px] gap-[8px] font-normal text-[16px] leading-[24px] text-[#FAFAF9] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)] active:translate-y-px transition-all flex items-center justify-center box-border">
            Get Started
          </button>
        </div>
      </div>

      {/* SECTION 2: Pixel-Perfect 4-Column Metric Charts Row */}
      <div className="w-full grid grid-cols-4 gap-[22px] box-border">
        
        {/* CARD 1: Website View */}
        <Card className="w-[258px] h-[257px] p-[24px] flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-[8px] box-border shadow-none">
          <div className="flex flex-col">
            <h4 className="font-semibold text-[14px] leading-[20px] text-[#1C1917]">Website View</h4>
            <p className="font-normal text-[12px] leading-[16px] text-[#78716C]">Last Campaign Performance</p>
          </div>
          <FigmaAbsoluteChart valueKey="views" showTooltip={true} />
          <div className="flex flex-row items-center gap-[8px] pt-[8px] border-t border-[#E5E5E5] mt-1">
            <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
            <span className="font-normal text-[12px] leading-[16px] text-[#78716C]">campaign sent 2 days ago</span>
          </div>
        </Card>

        {/* CARD 2: Daily Sales */}
        <Card className="w-[258px] h-[257px] p-[24px] flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-[8px] box-border shadow-none">
          <div className="flex flex-col">
            <h4 className="font-semibold text-[14px] leading-[20px] text-[#1C1917]">Daily Sales</h4>
            <p className="font-normal text-[12px] leading-[16px] text-[#78716C]">15% increase in today sales</p>
          </div>
          <FigmaAbsoluteChart valueKey="sales" showTooltip={false} />
          <div className="flex flex-row items-center gap-[8px] pt-[8px] border-t border-[#E5E5E5] mt-1">
            <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
            <span className="font-normal text-[12px] leading-[16px] text-[#78716C]">updated 4 min ago</span>
          </div>
        </Card>

        {/* CARD 3: Completed Tasks */}
        <Card className="w-[258px] h-[257px] p-[24px] flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-[8px] box-border shadow-none">
          <div className="flex flex-col">
            <h4 className="font-semibold text-[14px] leading-[20px] text-[#1C1917]">Completed Tasks</h4>
            <p className="font-normal text-[12px] leading-[16px] text-[#78716C]">Last Campaign Performance</p>
          </div>
          <FigmaAbsoluteChart valueKey="tasks" showTooltip={false} />
          <div className="flex flex-row items-center gap-[8px] pt-[8px] border-t border-[#E5E5E5] mt-1">
            <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
            <span className="font-normal text-[12px] leading-[16px] text-[#78716C]">just updated</span>
          </div>
        </Card>

        {/* CARD 4: Orders Overview */}
        <Card className="w-[258px] h-[257px] p-[24px] flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-[8px] box-border shadow-none">
          <div>
            <h4 className="font-semibold text-[14px] leading-[20px] text-[#1C1917]">Orders Overview</h4>
            <p className="font-normal text-[12px] leading-[16px] text-[#78716C]">Last Campaign Performance</p>
          </div>
          {/* Restored High Fidelity Lucide Icons */}
          <div className="flex flex-col gap-[14px] justify-center flex-1 mt-2">
            <div className="flex flex-row items-center gap-[12px] w-full">
              <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-transparent text-[#22C55E] border border-[#E7E5E4] flex-shrink-0">
                <Bell size={14} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] leading-[20px] text-[#1C1917] font-normal">$2,400, Design Changes</span>
                <span className="text-[12px] leading-[16px] text-[#78716C]">22 DEC 7:20 PM</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[12px] w-full">
              <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-transparent text-[#EF4444] border border-[#E7E5E4] flex-shrink-0">
                <ShoppingCart size={14} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] leading-[20px] text-[#1C1917] font-normal">New Order #1832412</span>
                <span className="text-[12px] leading-[16px] text-[#78716C]">22 DEC 7:20 PM</span>
              </div>
            </div>
          </div>
          <div className="w-[109px] h-[24px] bg-[#F0FDF4] rounded-[99px] flex items-center justify-center relative mt-1">
            <span className="text-[12px] leading-[16px] text-[#22C55E] font-normal">+24% this month</span>
          </div>
        </Card>
      </div>

      {/* SECTION 3: Projects Table Component Section Block */}
      <div className="w-[1100px] h-[619px] bg-white border border-[#E5E5E5] rounded-[6px] shadow-sm flex flex-col justify-between box-border">
        <div className="h-[66px] w-full px-[16px] pt-[24px] pb-[16px] flex flex-row justify-between items-center box-border">
          <div className="flex flex-col gap-[2px]">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Projects</h3>
            <div className="flex flex-row items-center gap-[8px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
              <span className="font-normal text-[14px] leading-[20px] text-[#78716C]">30 done this month</span>
            </div>
          </div>
          <div className="flex flex-row gap-[12px]">
            <Button variant="outline" className="h-[34px] border border-[#E5E5E5] rounded-[6px] px-[12px] text-[14px] font-medium text-[#171717] shadow-none">
              <Filter size={16} /> Filter
            </Button>
            <Button className="h-[34px] bg-gradient-to-b from-[#44403C] to-[#292524] border border-[#1C1917] rounded-[8px] px-[12px] text-[14px] font-medium text-[#FAFAF9] shadow-sm">
              New Project
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full overflow-x-auto px-[16px]">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#E5E5E5] hover:bg-transparent">
                <TableHead className="w-[48px] text-center"><input type="checkbox" className="w-[18px] h-[18px] border border-[#E5E5E5] rounded-[4px]" /></TableHead>
                <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C]">Project</TableHead>
                <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C]">Assignee</TableHead>
                <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C]">Budget</TableHead>
                <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C]">Team</TableHead>
                <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C]">Progress</TableHead>
                <TableHead className="w-[40px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectsList.map((row) => (
                <TableRow key={row.id} className="h-[77px] border-b border-[#E5E5E5] hover:bg-neutral-50/50">
                  <TableCell className="text-center"><input type="checkbox" className="w-[18px] h-[18px] border border-[#E5E5E5] rounded-[4px]" /></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-[16px]">
                      <div className="w-[20px] h-[20px] bg-neutral-100 rounded flex items-center justify-center font-bold text-[10px]">
                        {row.type[0]}
                      </div>
                      <span className="font-medium text-[14px] leading-[20px] text-[#1C1917]">{row.name}</span>
                    </div>
                  </TableCell>
                  {/* High Fidelity Stack Images Merged Precisely to Matches Mockup Guidelines */}
                  <TableCell>
                    <div className="flex -space-x-2.5 overflow-hidden w-[110px] items-center">
                      {row.assignees.map((imgUrl, idx) => (
                        <img 
                          key={idx} 
                          src={imgUrl} 
                          alt="Team Assignee" 
                          className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 bg-neutral-100 shadow-sm"
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-normal text-[14px] leading-[20px] text-[#78716C]">{row.budget}</TableCell>
                  <TableCell>
                    <div className="w-[56px] h-[24px] border border-[#E5E5E5] rounded-[4px] flex items-center justify-center bg-white">
                      <span className="font-medium text-[12px] leading-[16px] text-[#171717]">{row.badge}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-[242px] flex items-center gap-[6px]">
                      <span className="font-medium text-[12px] leading-[16px] text-[#78716C] w-[26px]">{row.progress}%</span>
                      <div className="w-[182px] h-[6px] bg-[#F5F5F4] rounded-[10px] relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 bg-[#1C1917] rounded-[10px]" style={{ width: `${row.progress}%` }} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell><Button variant="ghost" size="icon" className="text-neutral-400"><MoreVertical size={16} /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-[1065px] h-[66px] px-[24px] py-[16px] flex flex-row justify-between items-center bg-white rounded-b-[6px] box-border mx-auto">
          <span className="font-medium text-[14px] leading-[20px] text-[#171717]">Page 2 of 10</span>
          <div className="flex flex-row gap-[16px]">
            <Button variant="outline" className="w-[76px] h-[34px] border border-[#E5E5E5] rounded-[6px] px-[12px] text-[14px] font-medium text-[#171717] shadow-none"><ChevronLeft size={16} /> Prev</Button>
            <Button variant="outline" className="w-[78px] h-[34px] border border-[#E5E5E5] rounded-[6px] px-[12px] text-[14px] font-medium text-[#171717] shadow-none">Next <ChevronRight size={16} /></Button>
          </div>
        </div>
      </div>

      {/* SECTION 4: Dual Multi-Type Recharts Layout Framework Area */}
      <div className="w-[1100px] grid grid-cols-2 gap-[20px]">
        
        {/* Sales vs Expenses */}
        <Card className="w-[540px] h-[437px] p-[24px] bg-white border border-[#E5E5E5] rounded-[6px] shadow-sm box-border flex flex-col justify-between">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col gap-[4px]">
              <h4 className="font-semibold text-[18px] leading-[28px] text-[#171717]">Sales vs Expenses</h4>
              <p className="font-normal text-[14px] leading-[20px] text-[#737373]">Monthly revenue vs expenses</p>
            </div>
            <Button variant="outline" className="w-[112px] h-[38px] border border-[#E5E5E5] rounded-[6px] text-[14px] font-medium text-[#171717] shadow-none">View Report</Button>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-bold text-[30px] leading-[36px] text-[#171717]">$87,982.80</h2>
            <div className="flex flex-row items-center gap-[16px]">
              <div className="flex flex-row items-center gap-[4px] px-[4px] py-[2px]">
                <span className="w-[8px] h-[8px] bg-[#22C55E] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Sales</span>
              </div>
              <div className="flex flex-row items-center gap-[4px] px-[4px] py-[2px]">
                <span className="w-[8px] h-[8px] bg-[#1C1917] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Expenses</span>
              </div>
            </div>
          </div>
          <div className="w-[492px] h-[251px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesExpensesData} margin={{ top: 10, right: 5, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="figmaSalesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#22C55E" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E5E5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} />
                <YAxis domain={[0, 1000]} ticks={[0, 200, 400, 600, 800, 1000]} axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} />
                <Tooltip content={<ChartCustomTooltip />} />
                <Area type="monotone" dataKey="sales" stroke="#22C55E" strokeWidth={2} fill="url(#figmaSalesGrad)" activeDot={{ r: 5, strokeWidth: 0, fill: '#22C55E' }} name="sales" />
                <Area type="monotone" dataKey="expenses" stroke="#1C1917" strokeWidth={2} fill="none" activeDot={{ r: 5, strokeWidth: 0, fill: '#1C1917' }} name="expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* User Activity */}
        <Card className="w-[540px] h-[437px] p-[24px] bg-white border border-[#E5E5E5] rounded-[6px] shadow-sm box-border flex flex-col justify-between">
          <div className="flex flex-col gap-[4px] w-full">
            <h4 className="font-semibold text-[18px] leading-[28px] text-[#171717]">User Activity</h4>
            <p className="font-normal text-[14px] leading-[20px] text-[#737373]">Weekly trends</p>
          </div>
          <div className="flex flex-row justify-end items-center w-full">
            <div className="flex flex-row items-center gap-[16px]">
              <div className="flex flex-row items-center gap-[4px] px-[4px] py-[2px]">
                <span className="w-[8px] h-[8px] bg-[#22C55E] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Users</span>
              </div>
              <div className="flex flex-row items-center gap-[4px] px-[4px] py-[2px]">
                <span className="w-[8px] h-[8px] bg-[#1C1917] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Sessions</span>
              </div>
            </div>
          </div>
          <div className="w-[492px] h-[251px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userActivityWeekly} margin={{ top: 10, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E5E5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} />
                <YAxis domain={[0, 125]} ticks={[0, 25, 50, 75, 100, 125]} axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} />
                <Tooltip content={<ChartCustomTooltip />} />
                <Line type="monotone" dataKey="users" stroke="#22C55E" strokeWidth={2} dot={false} activeDot={{ r: 5, strokeWidth: 0, fill: '#22C55E' }} name="users" />
                <Line type="monotone" dataKey="sessions" stroke="#1C1917" strokeWidth={2} dot={false} activeDot={{ r: 5, strokeWidth: 0, fill: '#1C1917' }} name="sessions" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Traffic Sources */}
        <Card className="w-[540px] h-[437px] p-[24px] bg-white border border-[#E5E5E5] rounded-[6px] shadow-sm box-border flex flex-col justify-between">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col gap-[4px]">
              <h4 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Traffic Sources</h4>
              <p className="font-normal text-[14px] leading-[20px] text-[#737373]">Device breakdown</p>
            </div>
            
            <div className="flex flex-row items-center gap-[12px] mt-2">
              <div className="flex flex-row items-center gap-[6px]">
                <span className="w-[8px] h-[8px] bg-[#22C55E] rounded-[2px]" />
                <span className="font-normal text-[12px] text-[#737373]">Desktop</span>
              </div>
              <div className="flex flex-row items-center gap-[6px]">
                <span className="w-[8px] h-[8px] bg-[#2563EB] rounded-[2px]" />
                <span className="font-normal text-[12px] text-[#737373]">Tablet</span>
              </div>
              <div className="flex flex-row items-center gap-[6px]">
                <span className="w-[8px] h-[8px] bg-[#1C1917] rounded-[2px]" />
                <span className="font-normal text-[12px] text-[#737373]">Mobile</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[251px] flex items-center justify-center mt-4">
            <div className="w-[220px] h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={[
                      { name: 'Tablet', value: 25, color: '#2563EB' },
                      { name: 'Mobile', value: 20, color: '#1C1917' },
                      { name: 'Desktop', value: 55, color: '#22C55E' },
                    ]} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={68} 
                    outerRadius={85} 
                    paddingAngle={3} 
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#2563EB" />
                    <Cell fill="#1C1917" />
                    <Cell fill="#22C55E" />
                  </Pie>
                  <Tooltip content={<ChartCustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Quarterly Performance - Fixed Bar Thickness and 2px Inter-Bar Gap */}
        <Card className="w-[540px] h-[437px] p-[24px] bg-white border border-[#E5E5E5] rounded-[6px] shadow-sm box-border flex flex-col justify-between">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col gap-[4px]">
              <h4 className="font-semibold text-[18px] leading-[28px] text-[#171717]">Quarterly Performance</h4>
              <p className="font-normal text-[14px] leading-[20px] text-[#737373]">Revenue and profit analysis</p>
            </div>
            <div className="flex flex-row items-center gap-[16px] mt-2">
              <div className="flex flex-row items-center gap-[6px]">
                <span className="w-[8px] h-[8px] bg-[#22C55E] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Revenue</span>
              </div>
              <div className="flex flex-row items-center gap-[6px]">
                <span className="w-[8px] h-[8px] bg-[#1C1917] rounded-[2px]" />
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">Profit</span>
              </div>
            </div>
          </div>
          
          <div className="w-[492px] h-[251px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              {/* Set barGap to 2 to create a precise 2px gap between the green and black bars */}
              <BarChart data={quarterlyPerformance} barGap={5} margin={{ top: 10, right: 5, left: 15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={true} stroke="#E5E5E5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} />
                <YAxis domain={[0, 300000]} ticks={[0, 60000, 120000, 180000, 240000, 300000]} axisLine={false} tickLine={false} tick={{ fill: '#737373', fontSize: 12 }} tickFormatter={(val) => `$${val.toLocaleString()}`} />
                <Tooltip content={<ChartCustomTooltip />} />
                <Bar dataKey="revenue" fill="#22C55E" radius={[4, 4, 0, 0]} barSize={32} name="revenue" />
                <Bar dataKey="profit" fill="#1C1917" radius={[4, 4, 0, 0]} barSize={32} name="profit" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

    </div>
  );
}