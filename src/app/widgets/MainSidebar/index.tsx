"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Runs", href: "/runs" },
  { label: "Projects", href: "/projects" },
  { label: "Devboxes", href: "/devboxes" },
  { label: "Previews", href: "/previews" },
  { label: "Snapshots", href: "/snapshots" },
  { label: "Settings", href: "/settings" },
];

export default function MainSidebar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";

  return (
    <aside className="sidebar">
      <h1 className="workspace-title">WORKSPACE</h1>
      <nav className="workspace-nav" aria-label="Workspace">
        {navItems.map((item) => {
          const isActive = normalizedPathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
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
