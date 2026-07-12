// CSS 십자가 아이콘 — 세로 막대 + 가로 막대
export default function Cross({
  w,
  h,
  bar,
  color = "var(--color-gold)",
  className = "",
}: {
  w: number;
  h: number;
  bar: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width: w, height: h }}
      aria-hidden
    >
      <span
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-sm"
        style={{ width: bar, height: "100%", background: color }}
      />
      <span
        className="absolute left-0 rounded-sm"
        style={{ top: "28%", width: "100%", height: bar, background: color }}
      />
    </span>
  );
}
