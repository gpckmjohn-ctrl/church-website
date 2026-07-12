import Link from "next/link";
import { site, logos } from "@/config/site";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative flex min-h-screen items-center justify-center bg-cream px-6 pb-20 pt-32 text-center md:px-10">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(184,150,12,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(26,26,46,0.04) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-[760px]">
          <div className="fade-up mb-10 inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-deep">
            <span>—</span>
            {site.founded.replace("창립 ", "창립 ")} &nbsp;·&nbsp; {site.region}
            <span>—</span>
          </div>

          <div className="fade-up mb-8 flex justify-center" style={{ animationDelay: "0.1s" }}>
            <Logo value={logos.hero} height={84} cross={{ w: 48, h: 60, bar: 8 }} />
          </div>

          <h1
            className="fade-up font-serif-kr text-[clamp(36px,6vw,64px)] font-bold leading-[1.2] tracking-[-0.02em] text-deep"
            style={{ animationDelay: "0.2s" }}
          >
            시애틀
            <em className="block not-italic text-deep">은혜장로교회</em>
          </h1>

          <p
            className="fade-up mt-5 font-display text-sm italic leading-relaxed text-muted"
            style={{ animationDelay: "0.3s" }}
          >
            &ldquo;{site.heroVerse.text}&rdquo; — {site.heroVerse.ref}
          </p>

          <div
            className="fade-up mx-auto my-8 h-px w-16"
            style={{
              animationDelay: "0.35s",
              background:
                "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }}
          />

          <div className="fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/worship"
              className="rounded bg-deep px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-gold"
            >
              예배 시간 보기
            </Link>
            <Link
              href="/contact"
              className="rounded border border-deep px-8 py-3.5 text-sm font-medium text-deep transition-all hover:border-gold hover:text-deep"
            >
              오시는 길
            </Link>
          </div>
        </div>
      </section>

      {/* ───── QUICK LINKS ───── */}
      <section className="bg-deep px-6 py-15 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.quickLinks.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="block rounded-lg border border-gold/20 bg-white/5 px-6 py-8 text-center transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
            >
              <span className="mb-4 flex justify-center">
                <Logo value={logos.card} height={42} cross={{ w: 32, h: 42, bar: 6 }} />
              </span>
              <p className="font-serif-kr text-base font-semibold text-white">{q.label}</p>
              <p className="mt-1.5 text-xs text-white/40">{q.sub}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
