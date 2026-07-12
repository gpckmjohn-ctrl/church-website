import { site } from "@/config/site";
import Cross from "./Cross";

// value 에 따라 로고 자리에 무엇을 보여줄지 정합니다:
//   ""          → 금색 십자가 아이콘
//   "/logo.png" → public 폴더에 넣은 그 사진
//   "none"      → 아무것도 표시 안 함
export default function Logo({
  value,
  height,
  cross,
  className = "",
}: {
  value: string; // 이 위치의 로고 설정 (config의 logos 에서 넘어옴)
  height: number; // 사진을 썼을 때의 높이(px). 가로는 비율에 맞춰 자동.
  cross: { w: number; h: number; bar: number }; // 사진이 없을 때 쓰는 십자가 크기
  className?: string;
}) {
  if (value === "none") {
    return null;
  }
  if (value) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value}
        alt={site.name}
        style={{ height }}
        className={`inline-block w-auto ${className}`}
      />
    );
  }
}
