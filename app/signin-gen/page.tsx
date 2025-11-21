'use client';

import React from 'react';
import { RelunaButton } from '@/components/reluna-button';
import { RelunaInput } from '@/components/reluna-input';
import { Image } from "@heroui/react";

export default function SignInGenerated() {
  return (
    <div className="w-full min-h-screen bg-[#F6F8FA] flex items-center justify-center p-4">
      {/* Main Container - Frame 3466272 */}
      <div className="w-full max-w-[1070px] bg-white rounded-3xl p-2 flex flex-col md:flex-row gap-2 shadow-sm">
        
        {/* Left Section - Section */}
        <div className="w-full md:w-[452px] bg-white rounded-3xl p-5 flex flex-col gap-4">
          
          {/* Header - Text */}
          <div className="flex flex-col gap-4">
            {/* IconApp */}
            <div className="w-14 h-14 rounded-xl bg-[#FB6428]/5 border border-[#FB6428]/10 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#FB6428] rounded-lg" />
            </div>
            
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
              <p className="text-sm text-gray-500">Welcome back! Please enter your details.</p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 mt-4">
            <RelunaInput 
              label="Email" 
              placeholder="Enter your email" 
              type="email"
            />
            <RelunaInput 
              label="Password" 
              placeholder="••••••••" 
              type="password"
            />
            
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-[#FB6428] focus:ring-[#FB6428]" />
                Remember for 30 days
              </label>
              <a href="#" className="text-sm font-medium text-[#FB6428] hover:text-[#FB6428]/80">Forgot password?</a>
            </div>

            <RelunaButton className="w-full bg-[#FB6428] text-white font-medium py-2.5 rounded-lg hover:bg-[#FB6428]/90">
              Sign in
            </RelunaButton>

            <RelunaButton variant="bordered" className="w-full flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Sign in with Google
            </RelunaButton>
          </div>

          <div className="mt-auto pt-4 text-center text-sm text-gray-500">
            Don&apos;t have an account? <a href="#" className="font-medium text-[#FB6428] hover:text-[#FB6428]/80">Sign up</a>
          </div>
        </div>

        {/* Right Section - Image/Content */}
        <div className="flex-1 bg-[#F6F8FA] rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-auto">
           <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Abstract background"
            className="w-full h-full object-cover"
            removeWrapper
          />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="backdrop-blur-md bg-black/10 p-6 rounded-2xl border border-white/10">
              <p className="text-lg font-medium mb-2">&quot;We&apos;ve been using Untitle to kick start every new project and can&apos;t imagine working without it.&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium">Andi Lane</p>
                  <p className="text-sm text-white/80">Founder, Catalog</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
