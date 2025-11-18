"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { dropdownContent } from "@/constants";
import { TrelloLogo } from "@/constants/TrelloLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  // Navigation configuration
  const navItems = [
    { label: "Features", key: "features", items: dropdownContent.features },
    { label: "Solutions", key: "solutions", items: dropdownContent.solutions },
    { label: "Plans", key: "plans", items: dropdownContent.plans },
    { label: "Pricing" },
    { label: "Resources", key: "resources", items: dropdownContent.resources },
  ];

  return (
    <header className="bg-background shadow-sm fixed top-0 w-full z-50 border-b border-border">
      <nav 
        className="flex justify-between items-center px-3 relative" 
        ref={dropdownRef}
        aria-label="Main navigation"
      >
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Trello Home">
            <TrelloLogo />
          </Link>

          {/* Desktop Navigation */}
          <ul 
            className="hidden lg:flex list-none items-center gap-8" 
            role="menubar"
          >
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.label}
                label={item.label}
                dropdownKey={item.key}
                activeDropdown={activeDropdown}
                onToggle={toggleDropdown}
                items={item.items}
              />
            ))}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="bg-transparent text-foreground hover:text-primary cursor-pointer text-base hover:bg-transparent shadow-none"
            asChild
          >
            <Link href="#">Login</Link>
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 rounded-md transition-colors"
            asChild
          >
            <Link href="#">Get Trello for free</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-4 text-foreground hover:text-primary transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-background shadow-lg overflow-hidden transition-all duration-500 ease-in-out border-b border-border ${
          isMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col py-4 list-none" role="menubar">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item.label}
                label={item.label}
                dropdownKey={item.key}
                activeDropdown={activeMobileDropdown}
                onToggle={toggleMobileDropdown}
                items={item.items}
                isMenuOpen={isMenuOpen}
                delay={`${(index + 1) * 50 + 50}ms`}
              />
            ))}

            {/* Action Buttons Mobile */}
            <li
              className={`px-6 py-3 flex flex-col gap-3 mt-2 transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
              role="none"
            >
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base text-center py-6 rounded-md transition-colors"
                asChild
              >
                <Link href="#">Get Trello for free</Link>
              </Button>
              <Button 
                className="w-full bg-transparent text-foreground border border-border hover:bg-accent py-6 text-base"
                asChild
              >
                <Link href="#">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;