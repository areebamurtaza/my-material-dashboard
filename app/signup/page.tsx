"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    // Viewport boundaries set to bg-transparent to let global layout textures pass through perfectly
    <div className="fixed inset-0 z-50 bg-transparent flex justify-center items-start overflow-auto select-none font-sans">
      <div className="relative w-[1440px] h-[900px] bg-transparent flex-shrink-0 overflow-hidden">
        
        {/* Auth Card Box Container: Locked to top: 85px, left: 493px, width: 453px, height: 731px */}
        <div 
          className="absolute left-[493px] top-[85px] w-[453px] h-[731px] bg-white border border-[#E7E5E4] rounded-[8px] p-6 gap-[29px] flex flex-col items-center box-border shadow-sm z-10 text-left"
        >
          
          {/* Title Area Frame Layout */}
          <div className="w-[238px] h-[64px] flex flex-col justify-center items-center gap-2 text-center flex-none order-0">
            <h2 className="w-[114px] h-[36px] font-bold text-[30px] leading-[36px] text-[#1C1917] flex-none order-0">
              Sign Up
            </h2>
            <p className="w-[221px] h-[20px] font-normal text-[14px] leading-[20px] text-[#57534E] flex-none order-1 whitespace-nowrap">
              Create your account to get started
            </p>
          </div>

          {/* Content Wrapper Layout Block (height: 590px) */}
          <form onSubmit={handleSubmit} className="w-[405px] h-[590px] flex flex-col items-center gap-[24px] box-border flex-none order-1 self-stretch">
            
            {/* Frame 36: First Name & Last Name Inline Split Row */}
            <div className="w-[403px] h-[66px] flex flex-row items-start gap-[16px] flex-none order-0">
              
              {/* First Name Input Node */}
              <div className="w-[194px] h-[66px] flex flex-col items-start gap-[6px] flex-none order-0">
                <label className="w-[192px] h-[20px] font-normal text-[14px] leading-[20px] text-[#1C1917]">
                  First Name
                </label>
                <input 
                  type="text" 
                  placeholder="John"
                  required
                  className="w-[192px] h-10 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] px-[12px] py-[8px] gap-[12px] text-[14px] font-normal text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors box-border flex-none order-1"
                />
              </div>

              {/* Last Name Input Node */}
              <div className="w-[193px] h-[66px] flex flex-col items-start gap-[6px] flex-none order-1">
                <label className="w-[119px] h-[20px] font-normal text-[14px] leading-[20px] text-[#1C1917]">
                  Last Name
                </label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  required
                  className="w-[191px] h-10 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] px-[12px] py-[8px] gap-[12px] text-[14px] font-normal text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors box-border flex-none order-1"
                />
              </div>

            </div>

            {/* Input Component Group: Email */}
            <div className="w-[405px] h-[66px] flex flex-col items-start gap-[6px] px-[1px] self-stretch flex-none order-1">
              <label className="w-[403px] h-[20px] font-normal text-[14px] leading-[20px] text-[#1C1917] self-stretch flex-none order-0">
                Email
              </label>
              <input 
                type="email" 
                placeholder="your@mail.com"
                required
                className="w-[403px] h-10 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] px-[12px] py-[8px] gap-[12px] text-[14px] font-normal text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors box-border self-stretch flex-none order-1"
              />
            </div>

            {/* Input Component Group: Password */}
            <div className="w-[405px] h-[66px] flex flex-col items-start gap-[6px] px-[1px] self-stretch flex-none order-2">
              <label className="w-[403px] h-[20px] font-normal text-[14px] leading-[20px] text-[#1C1917] self-stretch flex-none order-0">
                Password
              </label>
              <input 
                type="password" 
                placeholder="********"
                required
                className="w-[403px] h-10 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] px-[12px] py-[8px] gap-[12px] text-[14px] font-normal text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors box-border self-stretch flex-none order-2"
              />
            </div>

            {/* Input Component Group: Confirm Password */}
            <div className="w-[405px] h-[66px] flex flex-col items-start gap-[6px] px-[1px] self-stretch flex-none order-3">
              <label className="w-[403px] h-[20px] font-normal text-[14px] leading-[20px] text-[#1C1917] self-stretch flex-none order-0">
                Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="********"
                required
                className="w-[403px] h-10 bg-[#F5F5F4] border border-[#E7E5E4] rounded-[8px] px-[12px] py-[8px] gap-[12px] text-[14px] font-normal text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors box-border self-stretch flex-none order-1"
              />
            </div>

            {/* Frame 33 Terms & Conditions Checkbox Row */}
            <div className="w-[404px] h-[20px] flex flex-row items-center gap-[24px] flex-none order-4">
              <label className="w-[250px] h-[20px] flex flex-row items-center gap-[8px] flex-none order-0 cursor-pointer">
                <button 
                  type="button"
                  onClick={() => setAgreeTerms(!agreeTerms)}
                  className={`w-4 h-4 bg-white border border-[#E7E5E4] rounded-[4px] flex items-center justify-center box-border flex-none order-0 transition-all ${agreeTerms ? 'bg-[#1C1917] border-[#1C1917]' : ''}`}
                >
                  {agreeTerms && <span className="w-1.5 h-1.5 bg-white rounded-sm" />}
                </button>
                <span className="w-[226px] h-[20px] font-normal text-[14px] leading-[20px] text-[#78716C] flex-none order-1">
                  I agree to the Terms and Conditions
                </span>
              </label>
            </div>

            {/* Form Submit Core Action Button */}
            <button type="submit" className="w-[405px] h-[38px] bg-gradient-to-b from-[#44403C] to-[#292524] border border-[#1C1917] rounded-[8px] p-[8px_16px] gap-[12px] font-normal text-[14px] leading-[20px] text-[#FAFAF9] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)] active:translate-y-px transition-all flex items-center justify-center flex-none order-5 self-stretch">
              Create Account
            </button>

            {/* Frame 34: Structural Separator String Row */}
            <div className="w-[395px] h-[20px] flex flex-row items-center p-0 gap-[24px] flex-none order-6">
              <div className="w-[126px] h-[1px] bg-[#E7E5E4] flex-none order-0" />
              <span className="w-[95px] h-[20px] font-normal text-[14px] leading-[20px] text-[#78716C] flex-none order-1 text-center whitespace-nowrap">
                or sign up with
              </span>
              <div className="w-[126px] h-[1px] bg-[#E7E5E4] flex-none order-2" />
            </div>

            {/* Frame 35: OAuth Social Providers Split Buttons Grid */}
            <div className="w-[408px] h-[36px] flex flex-row items-start p-0 gap-[16px] flex-none order-7">
              
              {/* Google OAuth Option */}
              <button onClick={() => router.push('/')} type="button" className="w-[196px] h-[36px] bg-white border border-[#E7E5E4] rounded-[8px] p-[8px_12px] gap-[12px] flex flex-row items-center justify-center font-normal text-[14px] leading-[20px] text-[#44403C] hover:bg-neutral-50 box-border flex-none order-0 transition-colors">
                <svg className="w-[16px] h-[16px] flex-shrink-0 relative flex-none order-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.3 3.28-8.16 3.28-13.39z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12 5.38z"/>
                </svg>
                <span className="w-[46px] h-[20px] flex-none order-1 text-left">Google</span>
              </button>

              {/* GitHub OAuth Option */}
              <button onClick={() => router.push('/')} type="button" className="w-[196px] h-[36px] bg-white border border-[#E7E5E4] rounded-[8px] p-[8px_12px] gap-[12px] flex flex-row items-center justify-center font-normal text-[14px] leading-[20px] text-[#44403C] hover:bg-neutral-50 box-border flex-none order-1 transition-colors">
                <svg className="w-[16px] h-[16px] fill-[#191717] flex-shrink-0 relative flex-none order-0" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span className="w-[44px] h-[20px] flex-none order-1 text-left">GitHub</span>
              </button>
            </div>

            {/* Bottom Alternate Pivot Link Redirect */}
            <div className="w-full h-[20px] text-center flex-none order-8 whitespace-nowrap">
              <span className="font-normal text-[14px] leading-[20px] text-[#78716C]">
                Already have an account?{" "}
                <Link href="/signin" className="text-[#1C1917] font-semibold hover:underline">
                  Sign In
                </Link>
              </span>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}