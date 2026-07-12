import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `오시는 길 | ${site.name}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Visit Us" title="오시는 길" />

      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-lg border border-black/5 bg-white px-7 py-7">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-deep">
                  주소 · Address
                </p>
                <p className="mt-1.5 font-serif-kr text-lg text-deep">
                  {site.contact.addressLine1}
                  <br />
                  {site.contact.addressLine2}
                </p>
                <p className="mt-2 text-[13px] text-muted">{site.contact.parkingNote}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full items-start gap-4 rounded-lg border border-black/5 bg-white px-7 py-7">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-deep">
                  전화 · Phone
                </p>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="mt-1.5 block font-serif-kr text-lg text-deep transition-colors hover:text-deep"
                >
                  {site.contact.phone}
                </a>
                <p className="mt-2 text-[13px] text-muted">문의사항은 전화로 연락 주세요</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-lg border border-black/5">
            <iframe
              src={site.mapEmbedSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="교회 위치 지도"
            />
          </div>
        </Reveal>
      </div>
    </>
  );
}
