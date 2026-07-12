import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { about, site } from "@/config/site";

export const metadata: Metadata = {
  title: `교회소개 | ${site.name}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About Us" title="교회 소개" />

      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-18">
          {/* 환영 인사 */}
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-line bg-warm px-4 py-1.5 text-xs font-medium text-deep">
              {about.badge}
            </span>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4.5 text-[15px] leading-[2] text-[#444]">
                {p}
              </p>
            ))}

            <div className="mt-2 rounded-r-lg border-l-[3px] border-gold bg-warm px-6 py-5">
              {about.verses.map((v, i) => (
                <p
                  key={i}
                  className={`font-serif-kr text-sm leading-[1.9] text-deep ${i > 0 ? "mt-3.5" : ""}`}
                >
                  &ldquo;{v.text}&rdquo;
                  <span className="mt-1 block text-xs font-medium text-deep">— {v.ref}</span>
                </p>
              ))}
            </div>
          </Reveal>

          {/* 봉사자 수행 원리 */}
          <Reveal delay={120}>
            <h2 className="mb-6 flex items-center gap-3 font-serif-kr text-xl font-bold text-deep">
              {about.principlesTitle}
              <span className="h-px flex-1 bg-line" />
            </h2>
            <div className="flex flex-col gap-3">
              {about.principles.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-line bg-warm px-5 py-4"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-[1.7] text-ink">
                    {p.text} <span className="text-xs font-medium text-deep">{p.ref}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
