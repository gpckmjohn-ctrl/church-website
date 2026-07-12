import { site, logos } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-deeper px-5 py-12 text-center md:px-10">
      <Logo value={logos.footer} height={44} cross={{ w: 20, h: 26, bar: 4 }} className="mb-4" />
      <p className="font-serif-kr text-[17px] text-white/80">{site.name}</p>
      <p className="mb-2.5 mt-1.5 text-xs tracking-[0.2em] text-white">
        &ldquo;{site.slogan}&rdquo;
      </p>
      <p className="text-xs leading-loose text-white/30">
        {site.founded} · {site.denomination}
        <br />
        {site.contact.addressLine1}, {site.contact.addressLine2} ·{" "}
        {site.contact.phone}
      </p>
    </footer>
  );
}
