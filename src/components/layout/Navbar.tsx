"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { NavbarProps } from "@/types/landing";

interface NavbarPropsComponent {
  data: NavbarProps;
}

export default function Navbar({
  data: { logo, navigation, actions },
}: NavbarPropsComponent) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const activeSectionRef = useRef<string>("home");
  const isClickScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToTarget = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetY = Math.max(0, elementTop - navHeight);

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");

      // Lock scroll spy during smooth scroll animation
      isClickScrollingRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Update active section state
      activeSectionRef.current = targetId;
      setActiveSection(targetId);

      // Perform smooth scroll
      scrollToTarget(targetId);

      // Update URL hash
      window.history.pushState(null, "", href);
      setIsMobileMenuOpen(false);

      // Release scroll spy lock after smooth scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    // Initial check for URL hash on page load
    if (window.location.hash) {
      const initialId = window.location.hash.replace("#", "");
      activeSectionRef.current = initialId;
      setActiveSection(initialId);
      setTimeout(() => {
        scrollToTarget(initialId);
      }, 200);
    }

    const sectionIds = [
      "home",
      ...navigation.map((item) => item.href.replace("#", "")),
    ].filter(Boolean);

    const uniqueSectionIds = Array.from(new Set(sectionIds));

    const handleScroll = () => {
      // Ignore scroll events while smooth scrolling from click
      if (isClickScrollingRef.current) return;

      const navHeight = 80;
      const scrollPos = window.scrollY + navHeight + 60;

      let current = "home";
      for (let i = uniqueSectionIds.length - 1; i >= 0; i--) {
        const id = uniqueSectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            current = id;
            break;
          }
        }
      }

      if (activeSectionRef.current !== current) {
        activeSectionRef.current = current;
        setActiveSection(current);
        const newHash = `#${current}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, "", newHash);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navigation, scrollToTarget]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href={logo.href}
          onClick={(e) => handleNavClick(e, logo.href)}
          className="flex items-center gap-2"
        >
          <Image
            src={logo.image}
            alt={logo.alt}
            width={155}
            height={24}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map(({ id, href, label }) => {
              const targetId = href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "font-semibold text-[#4CAF4F]"
                        : "text-gray-600 hover:text-[#4CAF4F]"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link aria-disabled
            href={actions.login.href}
            className="text-sm font-semibold text-[#4CAF4F] transition hover:text-[#439947]"
          >
            {actions.login.label}
          </Link>

          <Link aria-disabled
            href={actions.signup.href}
            className="inline-flex min-h-11 items-center rounded-md bg-[#4CAF4F] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#439947]"
          >
            {actions.signup.label}
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map(({ id, href, label }) => {
              const targetId = href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "font-semibold text-[#4CAF4F]"
                        : "text-gray-600 hover:text-[#4CAF4F]"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <Link
              href={actions.login.href}
              className="text-center text-sm font-semibold text-[#4CAF4F] transition hover:text-[#439947]"
            >
              {actions.login.label}
            </Link>
            <Link
              href={actions.signup.href}
              className="flex min-h-11 items-center justify-center rounded-md bg-[#4CAF4F] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#439947]"
            >
              {actions.signup.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
