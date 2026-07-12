import Link from "next/link";
import Logo from "@/components/Logo";
import { logos } from "@/config/site";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <Logo value={logos.notFound} height={72} cross={{ w: 40, h: 52, bar: 7 }} className="mb-8" />
      <p className="font-display text-6xl font-bold text-deep">404</p>
      <p className="mt-4 font-serif-kr text-lg text-muted">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-deep px-7 py-3 text-sm font-medium text-white transition-all hover:bg-gold"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
