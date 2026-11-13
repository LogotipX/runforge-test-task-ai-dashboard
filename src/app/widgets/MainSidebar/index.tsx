"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Runs", href: "/runs" },
  { label: "Projects", href: "/projects" },
  { label: "Devboxes", href: "/devboxes" },
  { label: "Previews", href: "/previews" },
  { label: "Snapshots", href: "/snapshots" },
  { label: "Settings", href: "/settings" },
];

export default function MainSidebar() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  useEffect(() => {
    const syncActiveSegment = () => {
      const segments = window.location.pathname.split("/").filter(Boolean);
      setActiveSegment(segments.at(-1) ?? null);
    };

    syncActiveSegment();
    window.addEventListener("popstate", syncActiveSegment);
    return () => window.removeEventListener("popstate", syncActiveSegment);
  }, []);

  return (
    <aside className="sidebar">
      <h1 className="workspace-title">WORKSPACE</h1>
      <nav className="workspace-nav" aria-label="Workspace">
        {navItems.map((item) => {
          const isActive = activeSegment === item.href.slice(1);

          console.log(activeSegment, item.href, item.href.slice(1), isActive);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveSegment(item.href.slice(1))}
              className={`nav-item ${isActive ? "nav-item-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
