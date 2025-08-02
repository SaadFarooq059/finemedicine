'use client';

import React from 'react';
import Link from 'next/link';
import { Pill as Pills, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800/50">
          <div className="container-max section-padding py-12">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with Healthcare Insights
                </h3>
                <p className="text-gray-300 mb-6">
                  Get the latest pharmaceutical news, industry updates, and quality healthcare solutions delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-max section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-2xl shadow-lg">
                    <Pills className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Fine Medicine
                  </h3>
                  <p className="text-sm text-green-400 font-medium">Premium Healthcare Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Pakistan&apos;s leading pharmaceutical supplier, committed to delivering excellence in healthcare through quality medicines and innovative solutions for medical professionals.
              </p>
              
              {/* Enhanced Social Media */}
              <div className="space-y-4">
                <h5 className="text-white font-semibold text-sm uppercase tracking-wide">Follow Us</h5>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Youtube, href: "#", label: "YouTube" }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="group bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/expertise", label: "Our Expertise" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/products", label: "Products" },
                  { href: "/quality", label: "Quality Assurance" }
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group flex items-center text-gray-300 hover:text-green-400 transition-all duration-300">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  "Pharmaceutical Distribution",
                  "Medical Supply Chain",
                  "Quality Assurance",
                  "Regulatory Compliance",
                  "Healthcare Consulting",
                  "Emergency Supply"
                ].map((service) => (
                  <li key={service} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-60"></div>
                    <span className="hover:text-green-400 transition-colors cursor-default">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              </h4>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Site 2851 Kahuta Road Humak</p>
                    <p className="text-sm text-gray-400">Islamabad, Pakistan</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">+92 303 333 6212</span>
                </div>
                
                <div className="group flex items-center space-x-4 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">info@finemedicine.com</span>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Clock className="h-5 w-5 text-green-400 mt-0.5" />
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-400">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="container-max section-padding py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-sm">
                <span>© 2024 Fine Medicine Company. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 text-red-500 fill-current" />
                  <span>in Pakistan</span>
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Quality Standards",
                  "Certifications"
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors hover:underline decoration-green-400 underline-offset-4"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;