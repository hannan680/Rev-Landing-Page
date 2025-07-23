
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#20215A]/80 backdrop-blur-sm border border-[#00E5D6]/30 rounded-full px-6 py-3">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" alt="RevSquared AI Logo" className="w-8 h-8 object-contain" />
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('hero-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('problem-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Problem
          </button>
          <button 
            onClick={() => scrollToSection('solution-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Solution
          </button>
          <button 
            onClick={() => scrollToSection('ai-showcase-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Demo
          </button>
          <button 
            onClick={() => scrollToSection('testimonials-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('cta-section')}
            className="text-[#D3D4FF] hover:text-[#00E5D6] transition-colors text-sm font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
