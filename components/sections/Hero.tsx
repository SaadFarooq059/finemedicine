'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Users, Award, CheckCircle, Play, Star, Zap, Clock } from 'lucide-react';
import { Waves } from './wavy';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 py-16 md:py-24 lg:py-32">
      {/* Wavy Background - Preserved */}
      <Waves 
        className="z-0 opacity-20"
        strokeColor="#10b981" 
        backgroundColor="transparent"
        pointerSize={0.4}
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-yellow-200/30 to-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald-200/20 to-teal-300/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 md:w-2 md:h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-500 rounded-full opacity-80 animate-ping"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section - Refreshed Design */}
          <div className="space-y-7 md:space-y-9 max-w-xl mx-auto lg:mx-0">
            {/* Updated Trust Badge with 1986 */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-200 px-4 py-2.5 md:px-6 md:py-3 rounded-2xl">
              <div className="flex items-center space-x-1">
                <div className="bg-green-500/15 p-1.5 rounded-full">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-green-700" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-green-700 font-semibold text-xs md:text-sm">Trusted Since 1986</span>
                <span className="text-green-600/70 text-xs">Over 37 Years of Excellence</span>
              </div>
              <div className="bg-green-500 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse"></div>
            </div>

            {/* Refreshed Main Heading */}
            <div className="space-y-5 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <div className="mb-2">
                  <span className="relative inline-block">
                    <span className="text-gray-900">Leading</span>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-500/40 to-transparent rounded-full"></div>
                  </span>
                </div>
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Pharmaceutical
                </span>{" "}
                <span className="text-gray-900">Excellence</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Transforming healthcare across Pakistan since 1986 with premium pharmaceutical solutions, 
                cutting-edge technology, and unwavering commitment to quality.
              </p>
            </div>

            {/* Updated Feature Grid - Vintage-Inspired */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-5">
              {[
                { icon: Shield, text: "ISO Certified Quality", color: "text-blue-600", bgColor: "bg-blue-100/50" },
                { icon: Zap, text: "37+ Years Excellence", color: "text-amber-600", bgColor: "bg-amber-100/50" },
                { icon: Users, text: "500+ Healthcare Partners", color: "text-purple-600", bgColor: "bg-purple-100/50" },
                { icon: Award, text: "24/7 Premium Support", color: "text-green-600", bgColor: "bg-green-100/50" }
              ].map((item, index) => (
                <div key={index} className={`group flex items-center space-x-3 p-4 ${item.bgColor} rounded-xl hover:scale-102 transition-all duration-300 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow`}>
                  <div className="p-2 rounded-lg bg-white shadow-sm">
                    <item.icon className={`h-4 w-4 md:h-5 md:w-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Vintage-Inspired CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-5">
              <Link href="/contact" className="group bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base relative overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              
              <Link href="/expertise" className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-green-700 px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-200 hover:border-green-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md text-sm md:text-base">
                <Play className="h-4 w-4 md:h-5 md:w-5" />
                <span>Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Updated Hero Image with Vintage Touch - Using Next.js Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg">
            <div className="relative group">
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-green-500/30 rounded-tl-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-green-500/30 rounded-br-xl"></div>
              
              {/* Main Image Container with Updated Styling */}
              <div className="relative bg-white rounded-lg p-3 md:p-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  {/* Next.js Image Component */}
                  <div className="relative w-full h-full">
                    <Image 
                      src="/hero.jpg" 
                      alt="Pharmaceutical Excellence Since 1986"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                      quality={90}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                  
                  {/* Established Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-green-100">
                    <div className="text-xs text-gray-500">ESTABLISHED</div>
                    <div className="text-xl font-bold text-green-700">1986</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-auto">
          <path fill="rgba(16, 185, 129, 0.1)" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;