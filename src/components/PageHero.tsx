import Logo from "./Logo";
import { logos, backgrounds } from "@/config/site";

// 하위 페이지 상단의 짙은 배경 헤더
export default function PageHero({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  const bg = backgrounds.pageHero;

  return (
    <div
      className="relative overflow-hidden bg-deep px-5 pb-14 pt-[70px] text-center md:px-10"
      style={
        bg
          ? {
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* 사진을 쓸 때만 위에 어두운 막을 덮어 글씨가 잘 보이게 함 */}
      {bg && (
        <div
          className="absolute inset-0 bg-deep"
          style={{ opacity: backgrounds.overlay / 100 }}
        />
      )}
      <div className="grid-overlay absolute inset-0" />
      <div className="relative pt-12">
        <Logo value={logos.pageHero} height={56} cross={{ w: 28, h: 36, bar: 5 }} className="mb-5" />
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
          {label}
        </p>
        <h1 className="font-serif-kr text-[clamp(28px,5vw,48px)] font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}
