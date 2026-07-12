import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 → out/ 폴더 (Cloudflare Pages 등 정적 호스팅용)
  output: "export",
  images: { unoptimized: true },
  // 정적 호스팅에서 /about → /about/index.html 로 매핑되도록
  trailingSlash: true,
};

export default nextConfig;
