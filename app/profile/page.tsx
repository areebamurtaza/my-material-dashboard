"use client";

import React, { useState } from 'react';
import { Pencil, Smartphone, MessageSquare, Settings } from 'lucide-react';

// --- Mapped Data Arrays Following Mentor Guidelines ---
const accountSwitches = [
  { id: "follow", text: "Email me when someone follows me" },
  { id: "answer", text: "Email me when someone answers on my post" },
  { id: "mention", text: "Email me when someone mentions me" },
];

const applicationSwitches = [
  { id: "launches", text: "New launches and projects" },
  { id: "updates", text: "Monthly product updates" },
  { id: "newsletter", text: "Subscribe to newsletter" },
];

const profileInfoDetails = [
  { label: "First Name:", value: "Richard Davis" },
  { label: "Mobile:", value: "(44) 123 1234 123" },
  { label: "Email:", value: "richarddavis@mail.com" },
  { label: "Location:", value: "USA" },
];

// Added high-fidelity avatar image paths matching Material design styling
const messageListData = [
  { id: 1, name: "Alexander", snippet: "Awesome work, can you ...", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
  { id: 2, name: "Ivanna", snippet: "About file I can...", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
  { id: 3, name: "Peterson", snippet: "Have a great afternoon", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
  { id: 4, name: "Bruce Mars", snippet: "Hi! I need more information..", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" },
];

export default function ProfilePage() {
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    follow: true, answer: false, mention: true, launches: false, updates: true, newsletter: false
  });

  const toggleSwitch = (id: string) => {
    setSwitches(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    /* --- ENCOMPASSING MAIN WHITE BACKGROUND WRAPPER CARD --- */
    <div 
      className="w-[1100px] bg-white border border-[#E7E5E4] rounded-[12px] p-[32px] flex flex-col gap-[24px] box-border shadow-none text-left mx-auto select-none antialiased"
      style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
    >
      
      {/* Title & Description Section */}
      <div className="w-full h-[52px] flex flex-col gap-[4px]">
        <h2 className="font-semibold text-[20px] text-[#1C1917]">Profile</h2>
        <p className="text-[14px] text-[#57534E]">Manage your account settings and personal information</p>
      </div>

      <div className="w-full h-[1px] bg-[#E7E5E4]" />

      {/* --- INDENTED WRAPPER MATRIX FOR INNER CONTENT PANELS --- */}
      <div className="w-full flex flex-col gap-[24px] pl-[48px] pr-[16px] box-border">

        {/* Profile Header Black Card Banner Component */}
        <div className="w-full h-[124px] bg-[#1C1917] rounded-[12px] p-8 flex flex-row justify-between items-center box-border shadow-sm">
          {/* User Identity Segment Block */}
          <div className="flex items-center gap-4 text-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
              alt="Richard Davis" 
              className="w-[60px] h-[60px] rounded-full border-2 border-white/20 object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="font-bold text-[24px] text-white tracking-tight">Richard Davis</h3>
              <p className="text-[16px] text-white/80">CEO / Co-Founder</p>
            </div>
          </div>

          {/* Action Header Target CTAs */}
          <div className="flex items-center gap-3">
            <button className="h-9 px-4 bg-white/10 hover:bg-white/15 rounded-[8px] flex items-center gap-2 text-white text-[14px]"><Smartphone size={16} /> App</button>
            <button className="h-9 px-4 bg-white/10 hover:bg-white/15 rounded-[8px] flex items-center gap-2 text-white text-[14px]"><MessageSquare size={16} /> Message</button>
            <button className="h-9 px-4 bg-white/10 hover:bg-white/15 rounded-[8px] flex items-center gap-2 text-white text-[14px]"><Settings size={16} /> Settings</button>
          </div>
        </div>

        {/* Main Settings Row Grid */}
        <div className="w-full grid grid-cols-3 gap-[25px]">
          
          {/* Card-1: Platform Settings */}
          <div className="w-full h-[509px] bg-white border border-[#E7E5E4] rounded-[8px] p-6 flex flex-col gap-6 text-left box-border">
            <h4 className="font-semibold text-[18px] text-[#1C1917]">Platform Settings</h4>
            <div className="flex flex-col gap-4">
              <span className="text-[14px] text-[#1C1917] font-medium tracking-wider uppercase">Account</span>
              {accountSwitches.map((sw) => (
                <div key={sw.id} className="flex justify-between items-center gap-4">
                  <span className="text-[14px] text-[#57534E]">{sw.text}</span>
                  <button onClick={() => toggleSwitch(sw.id)} className={`w-11 h-6 rounded-full relative flex items-center flex-shrink-0 ${switches[sw.id] ? 'bg-[#1C1917]' : 'bg-[#E7E5E4]'}`}>
                    <span className={`w-5 h-5 rounded-full bg-white absolute transition-all ${switches[sw.id] ? 'left-[22px]' : 'left-[2px]'}`} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t border-neutral-100 pt-4">
              <span className="text-[14px] text-[#1C1917] font-medium tracking-wider uppercase">Application</span>
              {applicationSwitches.map((sw) => (
                <div key={sw.id} className="flex justify-between items-center gap-4">
                  <span className="text-[14px] text-[#57534E]">{sw.text}</span>
                  <button onClick={() => toggleSwitch(sw.id)} className={`w-11 h-6 rounded-full relative flex items-center flex-shrink-0 ${switches[sw.id] ? 'bg-[#1C1917]' : 'bg-[#E7E5E4]'}`}>
                    <span className={`w-5 h-5 rounded-full bg-white absolute transition-all ${switches[sw.id] ? 'left-[22px]' : 'left-[2px]'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card-2: Profile Information */}
          <div className="w-full h-[509px] bg-white border border-[#E7E5E4] rounded-[8px] p-6 flex flex-col gap-6 text-left box-border flex-shrink-0">
            <div className="w-full h-8 flex flex-row justify-between items-center bg-transparent">
              <h4 className="font-semibold text-[18px] leading-[28px] text-[#1C1917] tracking-tight">
                Profile Information
              </h4>
              <button className="w-32px h-32px bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 transition-colors box-border">
                <Pencil size={14} className="text-[#171717]" />
              </button>
            </div>

            <p className="font-normal text-[14px] leading-[20px] text-[#57534E] w-full h-[100px] tracking-normal">
              Hi, I&apos;m Alec Thompson, Decisions: If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
            </p>

            <div className="w-full h-[288px] flex flex-col gap-4 bg-transparent">
              {profileInfoDetails.map((info) => (
                <div key={info.label} className="w-full h-[44px] flex flex-col gap-[4px] bg-transparent">
                  <span className="font-normal text-[14px] leading-[20px] text-[#1C1917]">
                    {info.label}
                  </span>
                  <span className="font-normal text-[14px] leading-[20px] text-[#57534E]">
                    {info.value}
                  </span>
                </div>
              ))}

              <div className="w-full h-[48px] flex flex-col gap-[4px] bg-transparent">
                <span className="font-normal text-[14px] leading-[20px] text-[#1C1917]">
                  Social:
                </span>
                <div className="w-[96px] h-[24px] flex flex-row gap-[12px] items-center bg-transparent">
                  <a href="#" className="w-6 h-6 bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 box-border transition-colors">
                    <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-6 h-6 bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 box-border transition-colors">
                    <svg className="w-3.5 h-3.5 fill-[#171717]" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 7.719 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.235L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-6 h-6 bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 box-border transition-colors">
                    <svg className="w-3.5 h-3.5 stroke-pink-600 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-3: Conversations / Inbox Feed */}
          <div className="w-full h-[509px] bg-white border border-[#E7E5E4] rounded-[8px] p-6 flex flex-col gap-6 text-left box-border">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-[18px] text-[#1C1917]">Conversations</h4>
            </div>
            <div className="flex flex-col gap-4">
              {messageListData.map((msg) => (
                <div key={msg.id} className="flex items-center justify-between gap-3 border-b border-neutral-50 pb-2 last:border-0">
                  <img 
                    src={msg.avatar} 
                    alt={msg.name} 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-[#E7E5E4]"
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[14px] font-medium text-[#1C1917] truncate">{msg.name}</span>
                    <span className="text-[14px] text-[#57534E] truncate">{msg.snippet}</span>
                  </div>
                  <button className="h-8 px-3 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] text-[14px] text-[#44403C] hover:bg-[#E7E5E4] transition-colors">Reply</button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}