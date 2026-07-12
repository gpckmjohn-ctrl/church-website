"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { worship } from "@/config/site";

export default function WorshipPage() {
  const [active, setActive] = useState(worship.tabs[0].id);
  const current = worship.tabs.find((t) => t.id === active) ?? worship.tabs[0];

  return (
    <>
      <PageHero label="Worship" title="예배 안내" />

      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        {/* 탭 */}
        <div className="mb-10 flex flex-wrap gap-2">
          {worship.tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-6 py-2.5 text-[13px] font-medium transition-all ${
                active === t.id
                  ? "border-gold bg-gold text-white"
                  : "border-line bg-white text-muted hover:border-gold hover:text-deep"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 카드 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.cards.map((c, i) => (
            <div
              key={`${current.id}-${i}`}
              className="fade-up relative overflow-hidden rounded-lg border border-black/5 bg-white px-9 py-10 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold to-gold-light" />
              <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-deep">
                {c.day}
              </p>
              <p className="mb-5 font-serif-kr text-xl font-bold text-deep">{c.name}</p>
              <p className="font-display text-[42px] font-bold leading-none text-deep">
                {c.time}
                <span className="ml-1 text-[15px] font-normal text-muted">{c.ampm}</span>
              </p>
              <div className="mt-5 border-t border-black/5 pt-4 text-[13px] leading-[1.7] text-muted">
                {c.note}
                <span className="mt-1.5 block text-xs font-medium text-deep">{c.leader}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
