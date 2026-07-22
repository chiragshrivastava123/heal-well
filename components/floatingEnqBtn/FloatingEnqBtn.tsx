"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { MessageCircle } from "lucide-react";

function subscribe(callback: () => void) {
  const navBtn = document.getElementById("nav-enquiry-btn");

  if (!navBtn) {
    callback();
    return () => {};
  }

  const observer = new IntersectionObserver(
    () => {
      callback();
    },
    { threshold: 0.1 },
  );

  observer.observe(navBtn);

  return () => observer.disconnect();
}

function getSnapshot() {
  const navBtn = document.getElementById("nav-enquiry-btn");

  if (!navBtn) return true;

  const rect = navBtn.getBoundingClientRect();

  return !(
    rect.top >= 0 &&
    rect.bottom <= window.innerHeight
  );
}

function getServerSnapshot() {
  return false;
}

export default function FloatingEnquiryButton() {
  const pathname = usePathname();
  const router = useRouter();

  const show = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Hide completely on enquiry page
  if (pathname === "/enquiry") return null;

  if (!show) return null;

  return (
    <button
      onClick={() => router.push("/enquiry")}
      className="
        lg:hidden
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-green-900 text-white
        shadow-lg
        flex items-center justify-center
        transition-transform duration-200
        active:scale-95 hover:scale-105
        cursor-pointer
      "
      aria-label="Book Enquiry"
    >
      <MessageCircle size={22} />
    </button>
  );
}