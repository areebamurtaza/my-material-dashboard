"use client";

import React, { useState } from 'react';
import { Check, Download, CreditCard } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals getting started",
    popular: false,
    cta: "Get Started",
    btnStyle: "h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] text-[#44403C] hover:bg-[#E7E5E4]",
    cardStyle: "border border-[#E7E5E4]",
    features: [
      { text: "Up to 5 projects", included: true },
      { text: "10GB storage", included: true },
      { text: "Basic support", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Team collaboration", included: false },
      { text: "Priority support", included: false },
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: "$29",
    description: "Best for growing teams and businesses",
    popular: true,
    cta: "Upgrade Now",
    btnStyle: "h-[38px] bg-gradient-to-b from-[#44403C] to-[#292524] border border-[#1C1917] rounded-[8px] text-[#FAFAF9] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)]",
    cardStyle: "border-2 border-[#1C1917] shadow-sm",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "100GB storage", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Team collaboration", included: true },
      { text: "API access", included: false },
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with advanced needs",
    popular: false,
    cta: "Contact Sales",
    btnStyle: "h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] text-[#44403C] hover:bg-[#E7E5E4]",
    cardStyle: "border border-[#E7E5E4]",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Unlimited storage", included: true },
      { text: "24/7 premium support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Team collaboration", included: true },
      { text: "Full API access", included: true },
    ]
  }
];

const billingHistoryData = [
  { id: 1, date: "Dec 15,2024", plan: "Professional Plan - Monthly", amount: "$29.00", status: "Paid" },
  { id: 2, date: "Nov 15,2024", plan: "Professional Plan - Monthly", amount: "$29.00", status: "Paid" },
  { id: 3, date: "Oct 15,2024", plan: "Professional Plan - Monthly", amount: "$29.00", status: "Paid" },
];

export default function SubscriptionsPage() {
  const [autoRenew, setAutoRenewal] = useState(true);

  return (
    /* --- ENCOMPASSING MAIN WHITE BACKGROUND WRAPPER CARD --- */
    <div 
      className="w-[1100px] bg-white border border-[#E7E5E4] rounded-[12px] p-[32px] flex flex-col gap-[24px] box-border shadow-none text-left mx-auto select-none antialiased"
      style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}
    >
      
      {/* Title & Description Section */}
      <div className="w-full h-[52px] flex flex-col gap-[4px]">
        <h2 className="font-semibold text-[20px] leading-[28px] text-[#1C1917]">Subscriptions</h2>
        <p className="font-normal text-[14px] leading-[20px] text-[#57534E]">
          Manage your billing, plans, and subscription settings
        </p>
      </div>

      <div className="w-full h-[1px] bg-[#E7E5E4]" />

      {/* --- INDENTED WRAPPER MATRIX FOR INNER CONTENT PANELS --- */}
      <div className="w-full flex flex-col gap-[32px] pl-[48px] pr-[16px] box-border">

        {/* --- SECTION 1: CURRENT SUBSCRIPTION DASHBOARD --- */}
        <div className="w-full text-left">
          <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917] mb-4">Current Subscription</h3>
          
          <div className="w-full grid grid-cols-3 gap-[24px]">
            
            {/* Card A: Plan Details */}
            <div className="h-[180px] bg-white rounded-[8px] p-[20px] flex flex-col justify-between box-border border border-[#E7E5E4]">
              <span className="font-medium text-[14px] leading-[20px] text-[#1C1917]">Plan Details</span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Plan</span>
                  <span className="bg-[#1C1917] text-white text-[12px] leading-[16px] font-normal px-2.5 py-0.5 rounded-full">Professional</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Status</span>
                  <span className="text-[#22C55E] text-[14px] leading-[20px] font-medium">Active</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Next Billing</span>
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Jan 15, 2025</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full pt-1 border-t border-neutral-200/50">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Amount</span>
                  <span className="text-[14px] font-semibold leading-[20px] text-[#1C1917]">$29.00</span>
                </div>
              </div>
            </div>

            {/* Card B: Plan Metrics Usage */}
            <div className="h-[180px] bg-white rounded-[8px] p-[20px] flex flex-col justify-between box-border border border-[#E7E5E4]">
              <span className="font-medium text-[14px] leading-[20px] text-[#1C1917]">Usage</span>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Projects</span>
                  <span className="text-[14px] leading-[20px] text-[#44403C]">8 / unlimited</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-[14px] leading-[20px] text-[#44403C]">Storage</span>
                  <span className="text-[14px] leading-[20px] text-[#44403C]">45GB / 100GB</span>
                </div>
                <div className="w-full pt-2">
                  <div className="w-full h-[8px] bg-[#F5F5F4] rounded-[10px] relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#1C1917] rounded-[10px] w-[45%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card C: Settings & Actions Form */}
            <div className="h-[180px] bg-white rounded-[8px] p-[20px] flex flex-col justify-between box-border border border-[#E7E5E4]">
              <div className="flex flex-row justify-between items-center w-full">
                <span className="font-medium text-[14px] leading-[20px] text-[#1C1917]">Settings & Actions</span>
                <button 
                  onClick={() => setAutoRenewal(!autoRenew)}
                  className={`w-[44px] h-[24px] rounded-[24px] relative transition-colors duration-200 outline-none flex items-center flex-shrink-0 ${autoRenew ? 'bg-[#1C1917]' : 'bg-[#E7E5E4]'}`}
                >
                  <span className={`w-[20px] h-[20px] rounded-full bg-white absolute top-[2px] transition-all duration-200 shadow-sm ${autoRenew ? 'left-[22px]' : 'left-[2px]'}`} />
                </button>
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <button className="w-full h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] font-normal text-[14px] leading-[20px] text-[#44403C] hover:bg-[#E7E5E4] transition-colors flex flex-row items-center justify-center gap-2">
                  <CreditCard size={14} className="text-[#171717]" /> Update Payment Method
                </button>
                <button className="w-full h-[36px] bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] font-normal text-[14px] leading-[20px] text-[#44403C] hover:bg-[#E7E5E4] transition-colors flex flex-row items-center justify-center gap-2">
                  <Download size={14} className="text-[#171717]" /> Download Invoice
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* --- SECTION 2: FIXED RESPONSIVE GRID PRICING CARDS --- */}
        <div className="w-full relative mt-2">
          {/* Swapped layout row to a strict grid format to ensure cards scale together with proper bounding gap spacing */}
          <div className="w-full grid grid-cols-3 gap-[24px] items-stretch">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white p-6 rounded-[8px] flex flex-col justify-between items-center gap-[24px] box-border relative min-h-[420px] ${plan.cardStyle}`}
              >
                {/* Floating "Most Popular" Accent Badge Layer */}
                {plan.popular && (
                  <div className="absolute -top-[12px] left-1/2 transform -translate-x-1/2 bg-[#1C1917] rounded-[99px] w-[90px] h-[24px] flex flex-row items-center justify-center p-[4px_8px] box-border z-20">
                    <span className="text-[12px] leading-[16px] font-normal text-white">Most Popular</span>
                  </div>
                )}

                {/* Title Segment Block */}
                <div className="w-full flex flex-col justify-center items-center gap-[8px] text-center flex-none">
                  <span className="font-semibold text-[18px] leading-[28px] text-[#1C1917] font-sans">
                    {plan.name}
                  </span>
                  <h2 className="font-bold text-[36px] leading-[40px] text-[#1C1917] font-sans">
                    {plan.price}
                    <span className="text-[14px] font-normal text-[#57534E]">/month</span>
                  </h2>
                  <p className="text-[14px] leading-[20px] text-[#57534E] font-sans w-full px-2 min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Features Checklist Area */}
                <div className="w-full flex flex-col gap-[12px] text-left self-stretch my-2 flex-1 justify-center">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="w-full flex flex-row items-center gap-[12px] self-stretch">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 relative">
                        {feature.included ? (
                          <Check size={15} className="text-[#22C55E] stroke-[3]" />
                        ) : (
                          <span className="text-[#A8A29E] font-medium text-[14px] leading-[20px]">—</span>
                        )}
                      </div>
                      <span className={`text-[14px] leading-[20px] font-sans font-normal ${
                        feature.included ? 'text-[#1C1917]' : 'text-[#78716C]'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Action Button layout anchor */}
                <button className={`font-sans font-normal text-[14px] leading-[20px] flex flex-row justify-center items-center rounded-[8px] transition-all self-stretch p-[8px_16px] ${plan.btnStyle}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: REUSABLE BILLING HISTORY INVOICES TABLE --- */}
        <div className="w-full h-[324px] bg-white border border-[#E7E5E4] rounded-[16px] box-border relative shadow-none flex flex-col justify-between overflow-hidden">
          <div className="px-[24px] pt-[24px] pb-[8px] text-left">
            <h3 className="font-semibold text-[18px] leading-[28px] text-[#1C1917]">Billing History</h3>
          </div>

          <div className="flex-1 w-full overflow-x-auto px-[24px]">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b border-[#E7E5E4] hover:bg-transparent bg-[#FAFAF9]">
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] py-[12px]">DATE</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] py-[12px]">DESCRIPTION</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] py-[12px]">AMOUNT</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] py-[12px]">STATUS</TableHead>
                  <TableHead className="font-normal text-[12px] leading-[16px] text-[#78716C] py-[12px] text-center w-[80px]">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingHistoryData.map((row) => (
                  <TableRow key={row.id} className="h-[56px] border-b border-[#E7E5E4] hover:bg-neutral-50/50 transition-colors">
                    <TableCell className="font-normal text-[14px] leading-[20px] text-[#171717] py-[8px] text-left">
                      {row.date}
                    </TableCell>
                    <TableCell className="font-normal text-[14px] leading-[20px] text-[#1C1917] py-[8px] text-left">
                      {row.plan}
                    </TableCell>
                    <TableCell className="font-normal text-[14px] leading-[20px] text-[#1C1917] py-[8px] text-left">
                      {row.amount}
                    </TableCell>
                    <TableCell className="py-[8px]">
                      <div className="w-[48px] h-[24px] bg-[#F0FDF4] rounded-[99px] flex items-center justify-center border border-[#DCFCE7]">
                        <span className="text-[12px] leading-[16px] text-[#22C55E] font-medium">{row.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-[8px] text-center">
                      <button className="w-[32px] h-[32px] bg-white border border-[#E7E5E4] rounded-[6px] flex items-center justify-center hover:bg-neutral-50 transition-colors mx-auto">
                        <Download size={14} className="text-[#171717]" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </div>
  );
}