"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // hide enquiry button only on enquiry page
  const hideEnquiryBtn = pathname === "/enquiry";

  return (
    <header className="fixed top-0 z-50 w-full nav-bg">
      <div className="mx-auto max-w-7xl px-8">
        <nav className="flex h-[88px] items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logonav.png"
              alt="HealWell"
              width={190}
              height={40}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-[18px] font-medium text-white">
            <li className="relative">
              <Link href="/">Home</Link>
              {pathname === "/" && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent-gold)]" />
              )}
            </li>

            <li className="relative">
              <Link href="/about">About</Link>
              {pathname === "/about" && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent-gold)]" />
              )}
            </li>

            <li className="relative">
              <Link href="/services">Services</Link>
              {pathname === "/services" && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent-gold)]" />
              )}
            </li>

            <li className="relative">
              <Link href="/blog">Resources</Link>
              {pathname.startsWith("/blog") && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent-gold)]" />
              )}
            </li>

            {/* ✅ ENQUIRY BUTTON (SPACE PRESERVED, NO SHIFTING) */}
            <li
              className={`ml-20 ${
                hideEnquiryBtn ? "invisible pointer-events-none" : ""
              }`}
            >
              <Link
                href="/enquiry"
                className="rounded-md bg-[var(--accent-gold)] px-4 py-2 font-semibold text-[var(--green-dark)] transition hover:opacity-90"
              >
                Book an Enquiry
              </Link>
            </li>
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-3xl text-white cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--green-primary)] border-t border-white/10">
          <ul className="flex flex-col gap-6 px-8 py-8 text-white text-base">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={pathname === "/" ? "text-[var(--accent-gold)]" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={
                  pathname === "/about" ? "text-[var(--accent-gold)]" : ""
                }
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={
                  pathname === "/services" ? "text-[var(--accent-gold)]" : ""
                }
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className={
                  pathname.startsWith("/blog")
                    ? "text-[var(--accent-gold)]"
                    : ""
                }
              >
                Resources
              </Link>
            </li>

            {/* ✅ MOBILE ENQUIRY (NO SHIFTING) */}
            <li className={hideEnquiryBtn ? "invisible pointer-events-none" : ""}>
              <Link
                href="/enquiry"
                onClick={() => setOpen(false)}
                className="
                  inline-flex
                  items-center
                  rounded-md
                  bg-[var(--accent-gold)]
                  px-5 py-2.5
                  font-semibold
                  text-[var(--green-dark)]
                  self-start
                  active:scale-95
                "
              >
                Book an Enquiry
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}