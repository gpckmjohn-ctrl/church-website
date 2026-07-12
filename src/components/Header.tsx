"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, logos } from "@/config/site";
import Logo from "./Logo";

function comingSoon(e: React.MouseEvent) {
  e.preventDefault();
  alert("현재 준비 중입니다.\n곧 오픈될 예정입니다.");
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] flex h-[70px] items-center justify-between border-b border-line bg-cream/95 px-5 backdrop-blur-md transition-shadow md:px-10 ${
          scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo value={logos.header} height={32} cross={{ w: 16, h: 20, bar: 3 }} />
          <span className="font-serif-kr text-[15px] font-semibold leading-tight text-deep">
            {site.name}
            <span className="block text-[10px] font-light uppercase tracking-[0.15em] text-deep">
              {site.nameEn}
            </span>
          </span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden items-center md:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.label} className="group relative">
                {item.coming ? (
                  <a
                    href="#"
                    onClick={comingSoon}
                    className="flex h-[70px] items-center gap-1 px-4 text-[13px] font-medium text-ink transition-colors hover:text-deep"
                  >
                    {item.label}
                    {item.dropdown && <Arrow />}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex h-[70px] items-center gap-1 px-4 text-[13px] font-medium transition-colors hover:text-deep ${
                      active ? "text-deep" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <Arrow />}
                  </Link>
                )}

                {item.dropdown && (
                  <div className="invisible absolute left-0 top-[70px] min-w-[170px] -translate-y-2 rounded-b-lg border border-line border-t-2 border-t-gold bg-white opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.dropdown.map((d) =>
                      d.coming ? (
                        <a
                          key={d.label}
                          href="#"
                          onClick={comingSoon}
                          className="block border-b border-black/5 px-5 py-3 text-[13px] text-muted last:border-0"
                        >
                          {d.label}
                          <span className="ml-1 text-[10px] text-deep/70">준비중</span>
                        </a>
                      ) : (
                        <Link
                          key={d.label}
                          href={d.href}
                          className="block border-b border-black/5 px-5 py-3 text-[13px] text-ink transition-all last:border-0 hover:bg-warm hover:pl-6 hover:text-deep"
                        >
                          {d.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="메뉴"
        >
          <span
            className={`block h-0.5 w-6 bg-deep transition-all ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-deep transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-deep transition-all ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[70px] z-[99] border-b-2 border-gold bg-white py-3 shadow-[0_12px_40px_rgba(0,0,0,0.1)] md:hidden">
          {site.nav.map((item) => (
            <div key={item.label}>
              <p className="px-6 pb-1.5 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-deep">
                {item.label}
              </p>
              {item.dropdown ? (
                item.dropdown.map((d) =>
                  d.coming ? (
                    <a
                      key={d.label}
                      href="#"
                      onClick={(e) => {
                        setMobileOpen(false);
                        comingSoon(e);
                      }}
                      className="block border-b border-black/5 px-8 py-3 text-sm text-muted"
                    >
                      {d.label} <span className="text-[11px] text-deep">(준비중)</span>
                    </a>
                  ) : (
                    <Link
                      key={d.label}
                      href={d.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-black/5 px-8 py-3 text-sm text-ink"
                    >
                      {d.label}
                    </Link>
                  )
                )
              ) : item.coming ? (
                <a
                  href="#"
                  onClick={(e) => {
                    setMobileOpen(false);
                    comingSoon(e);
                  }}
                  className="block border-b border-black/5 px-8 py-3 text-sm text-muted"
                >
                  바로가기 <span className="text-[11px] text-deep">(준비중)</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-black/5 px-8 py-3 text-sm text-ink"
                >
                  바로가기
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Arrow() {
  return <span className="text-[9px] opacity-50">▾</span>;
}
