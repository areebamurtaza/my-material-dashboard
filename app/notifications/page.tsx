"use client";

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, User, X, Info } from 'lucide-react';

// --- Mapped Data Arrays for Clean Code Modularity ---
const recentNotificationsData = [
  {
    id: 1,
    title: "New project assigned",
    description: "You have been assigned to the Material XD Version project",
    time: "2 min ago",
    icon: Info,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#DBEAFE]"
  },
  {
    id: 2,
    title: "Task completed",
    description: "Fix Platform Errors task has been completed successfully",
    time: "1 hour ago",
    icon: CheckCircle2,
    iconColor: "text-[#16A34A]",
    iconBg: "bg-[#DCFCE7]"
  },
  {
    id: 3,
    title: "Budget alert",
    description: "Project budget has exceeded 80% of allocated funds",
    time: "3 hours ago",
    icon: AlertTriangle,
    iconColor: "text-[#CA8A04]",
    iconBg: "bg-[#FEF9C3]"
  },
  {
    id: 4,
    title: "New team member",
    description: "Sophie B. has joined your team",
    time: "1 day ago",
    icon: AlertCircle,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#DBEAFE]"
  },
  {
    id: 5,
    title: "Server maintenance",
    description: "Scheduled maintenance will occur tonight from 2-4 AM",
    time: "2 days ago",
    icon: X,
    iconColor: "text-[#DC2626]",
    iconBg: "bg-[#FEE2E2]"
  }
];

const settingsSwitchesData = [
  {
    id: "email",
    title: "Email notifications",
    description: "Receive notifications via email",
    defaultChecked: true
  },
  {
    id: "push",
    title: "Push notifications",
    description: "Receive push notifications in browser",
    defaultChecked: true
  },
  {
    id: "sms",
    title: "SMS notifications",
    description: "Receive important updates via SMS",
    defaultChecked: false
  }
];

export default function NotificationsPage() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    email: true,
    push: true,
    sms: false
  });

  const toggleSetting = (id: string) => {
    setSettings(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    /* --- ENCOMPASSING FIGMA MAIN BACKGROUND WRAPPER CORE CARD --- */
    <div 
      className="w-[1100px] bg-white border border-[#E7E5E4] rounded-[12px] p-[32px] flex flex-col gap-[24px] box-border shadow-none text-left mx-auto select-none antialiased"
      style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
    >
      
      {/* Page Main Header Title & Description Section */}
      <div className="w-full h-[52px] flex flex-col gap-[4px]">
        <h2 className="font-semibold text-[20px] leading-[28px] text-[#1C1917]">Notifications</h2>
        <p className="font-normal text-[14px] leading-[20px] text-[#57534E]">
          Stay updated with your latest alerts and messages
        </p>
      </div>

      {/* Horizontal Content Break Separator line spanning across inside card */}
      <div className="w-full h-[1px] bg-[#E7E5E4]" />

      {/* --- INDENTED WRAPPER MATRIX FOR INNER PANELS --- */}
      <div className="w-full flex flex-col gap-[24px] pl-[48px] pr-[16px] box-border">

        {/* --- PANEL 1: RECENT NOTIFICATIONS FEED --- */}
        <div className="w-full h-[549px] bg-white border border-[#E7E5E4] rounded-[8px] p-[24px] flex flex-col gap-[24px] box-border shadow-none text-left">
          {/* Card Header Actions Row */}
          <div className="w-full h-[36px] flex flex-row justify-between items-center box-border">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Recent Notifications</h3>
            <button className="w-[126px] h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] text-[14px] font-normal text-[#44403C] hover:bg-[#E7E5E4] transition-colors flex items-center justify-center">
              Mark all as read
            </button>
          </div>

          {/* Mapped Activity Alert Feed Container */}
          <div className="w-full h-[441px] flex flex-col gap-[16px] overflow-y-auto pr-1">
            {recentNotificationsData.map((notif, index) => {
              const AlertIcon = notif.icon;
              return (
                <div key={notif.id} className="w-full flex flex-col gap-[16px]">
                  {/* Render top row item separator lines on every subsequent item */}
                  {index > 0 && <div className="w-full h-[1px] bg-[#E7E5E4]" />}
                  
                  <div className="w-full h-[44px] flex flex-row items-center gap-[16px]">
                    {/* Icon Circle Asset Frame */}
                    <div className={`w-[40px] h-[40px] rounded-full ${notif.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <AlertIcon className={`w-[20px] h-[20px] ${notif.iconColor}`} />
                    </div>
                    
                    {/* Notification Content Node Map */}
                    <div className="w-full h-[44px] flex flex-col justify-between">
                      <div className="w-full flex flex-row justify-between items-center">
                        <span className="font-normal text-[14px] leading-[20px] text-[#1C1917]">{notif.title}</span>
                        <div className="flex flex-row items-center gap-[8px]">
                          <span className="font-normal text-[12px] leading-[16px] text-[#78716C]">{notif.time}</span>
                          <span className="w-[8px] h-[8px] rounded-full bg-[#3B82F6]" />
                        </div>
                      </div>
                      <p className="font-normal text-[14px] leading-[20px] text-[#57534E] truncate">
                        {notif.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PANEL 2: NOTIFICATIONS SETTINGS SWITCHES --- */}
        <div className="w-full h-[331px] bg-white border border-[#E7E5E4] rounded-[8px] p-[24px] flex flex-col gap-[24px] box-border shadow-none text-left">
          <div className="w-full h-[28px] flex items-center">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Notifications Settings</h3>
          </div>

          <div className="w-full h-[231px] flex flex-col gap-[16px]">
            {settingsSwitchesData.map((setting) => (
              <div key={setting.id} className="w-full flex flex-col gap-[16px]">
                <div className="w-full h-[1px] bg-[#E7E5E4]          " />
                
                <div className="w-full h-[36px] flex flex-row justify-between items-center gap-[30px]">
                  {/* Option Text Context */}
                  <div className="w-[246px] h-[44px] flex flex-col justify-center gap-[4px]">
                    <span className="font-normal text-[14px] leading-[20px] text-[#1C1917]">{setting.title}</span>
                    <span className="font-normal text-[14px] leading-[20px] text-[#78716C] whitespace-nowrap">{setting.description}</span>
                  </div>
                  
                  {/* Custom Component Switch Form Trigger */}
                  <button 
                    onClick={() => toggleSetting(setting.id)}
                    className={`w-[44px] h-[24px] rounded-[24px] relative transition-colors duration-200 outline-none flex items-center flex-shrink-0 ${settings[setting.id] ? 'bg-[#1C1917]' : 'bg-[#E7E5E4]'}`}
                  >
                    <span className={`w-[20px] h-[20px] rounded-full bg-white absolute top-[2px] transition-all duration-200 shadow-sm ${settings[setting.id] ? 'left-[22px]' : 'left-[2px]'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}