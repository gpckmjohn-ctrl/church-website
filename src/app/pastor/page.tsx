import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import { leadership, logos, site } from "@/config/site";

export const metadata: Metadata = {
  title: `목회자 소개 | ${site.name}`,
};

function Mark({ mark }: { mark: string }) {
  if (mark === "cross")
    return <Logo value={logos.pastor} height={36} cross={{ w: 28, h: 36, bar: 5 }} />;
  if (mark === "diamond")
    return <span className="block h-7 w-7 rotate-45 rounded-sm bg-gold" />;
  return <span className="text-lg font-bold text-deep">{mark}</span>;
}

export default function PastorPage() {
  return (
    <>
      <PageHero label="Leadership" title="목회자 소개" />

      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.pastors.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="relative overflow-hidden rounded-lg border border-black/5 bg-white px-8 py-10 text-center transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold to-gold-light" />
                <span className="mb-5 inline-block rounded-full bg-warm px-3.5 py-1 text-[11px] font-medium text-deep">
                  {p.role}
                </span>
                <div className="flex h-14 items-center justify-center">
                  <Mark mark={p.mark} />
                </div>
                <p className="mt-4 font-serif-kr text-xl font-bold text-deep">{p.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{p.titleEn}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 시무장로 */}
        <Reveal delay={120}>
          <div className="mt-12 rounded-lg border border-line bg-warm px-8 py-8 text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep">
              {leadership.eldersLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {leadership.elders.map((e) => (
                <span key={e} className="font-serif-kr text-base text-deep">
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
