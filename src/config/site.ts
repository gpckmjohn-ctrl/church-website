// ============================================================
//  교회 정보 설정 파일  (이 파일만 고치면 사이트 전체가 바뀝니다)
// ============================================================

export type NavChild = { label: string; href: string; coming?: boolean };
export type NavItem = {
  label: string;
  href: string;
  coming?: boolean;
  dropdown?: NavChild[];
};

export const site: {
  name: string;
  nameEn: string;
  slogan: string;
  denomination: string;
  founded: string;
  foundedShort: string;
  region: string;
  heroVerse: { text: string; ref: string };
  contact: {
    addressLine1: string;
    addressLine2: string;
    phone: string;
    phoneHref: string;
    parkingNote: string;
  };
  mapEmbedSrc: string;
  nav: NavItem[];
  quickLinks: { label: string; sub: string; href: string }[];
} = {
  // ── 기본 정보 ─────────────────────────────────────────────
  name: "시애틀은혜장로교회",
  nameEn: "Seattle Grace Presbyterian Church",
  slogan: "오직 예수",
  denomination: "미주 한인 예수교 장로회 (KAPC) 소속",
  founded: "창립 1985년 9월 8일",
  foundedShort: "1985년 9월 8일",
  region: "Shoreline, WA",
  heroVerse: {
    text: "하나님은 신령과 진정으로 예배하는 자를 찾으시느니라",
    ref: "요한복음 4:23",
  },

  // ── 연락처 ────────────────────────────────────────────────
  contact: {
    addressLine1: "616 NE 165th St",
    addressLine2: "Shoreline, WA 98155",
    phone: "206.362.6176",
    phoneHref: "+12063626176",
    parkingNote: "주차: 교회 건물 뒤쪽 주차장 이용 가능",
  },

  // 구글지도 임베드 src
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.9!2d-122.3133!3d47.7542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014f56c4af5c5%3A0x1!2s616+NE+165th+St%2C+Shoreline%2C+WA+98155!5e0!3m2!1sko!2sus!4v1",

  // ── 상단 메뉴 ─────────────────────────────────────────────
  //  dropdown 안의 coming:true 는 "준비중"으로 표시되고 클릭 시 알림.
  nav: [
    {
      label: "교회소개",
      href: "/about",
      dropdown: [
        { label: "환영인사 & 교회소개", href: "/about" },
        { label: "목회자 소개", href: "/pastor" },
      ],
    },
    { label: "예배안내", href: "/worship" },
    {
      label: "커뮤니티",
      href: "#",
      coming: true,
      dropdown: [
        { label: "공지사항", href: "#", coming: true },
        { label: "간증게시판", href: "#", coming: true },
        { label: "자유게시판", href: "#", coming: true },
      ],
    },
    { label: "동영상", href: "#", coming: true },
    { label: "오시는길", href: "/contact" },
  ],

  // ── 홈 화면 빠른 링크 카드 ────────────────────────────────
  quickLinks: [
    { label: "교회소개", sub: "About Us", href: "/about" },
    { label: "예배안내", sub: "Worship", href: "/worship" },
    { label: "목회자소개", sub: "Leadership", href: "/pastor" },
    { label: "오시는길", sub: "Visit Us", href: "/contact" },
  ],
};

// ── 로고 설정 (위치마다 따로 지정) ──────────────────────────
//  각 칸에 넣을 수 있는 값 (따옴표 안에 입력):
//    ""           → 금색 십자가 아이콘 (기본)
//    "/logo.png"  → public 폴더에 넣은 사진  (예: public 에 logo.png 를 넣고 "/logo.png")
//    "none"       → 아무것도 표시 안 함
export const logos = {
  header: "", // 상단 메뉴바 왼쪽 로고
  hero: "", // 홈 화면 가운데 큰 로고
  pageHero: "none", // 각 페이지 상단(교회소개·예배안내 등) 로고
  footer: "none", // 맨 아래 푸터 로고
  card: "none", // 홈 화면 아래 4개 바로가기 카드 아이콘
  pastor: "", // 목회자 카드의 십자가 마크
  notFound: "", // 404 페이지 아이콘
};

// ── 배경 사진 설정 ──────────────────────────────────────────
//  각 페이지 상단 배너(네이비 띠)의 배경입니다.
//    ""         → 네이비 단색 (기본)
//    "/bg.jpg"  → public 폴더에 넣은 사진 (사진 위에 어두운 막이 덮여 글씨가 잘 보임)
export const backgrounds = {
  pageHero: "", // 교회소개·예배안내·목회자·오시는길 상단 배너 배경사진
  overlay: 65, // 사진 위 어두운 막의 진하기 (0=투명 ~ 100=완전 검정). 글씨 안 보이면 숫자 ↑
};

// ── 교회 소개 본문 ──────────────────────────────────────────
export const about = {
  badge: "미주 한인 예수교 장로회 (KAPC) 소속",
  paragraphs: [
    "시애틀 은혜장로교회에 오신 것을 환영합니다. 우리 교회는 예배, 기도, 말씀 중심으로 신앙생활을 합니다. 세상에 빛과 소금이 되어 착한 행실로 세상을 섬기며 하나님의 사랑을 나누는 교회가 되겠습니다.",
    "예배 후에 친교실에서 식사와 친교를 나누시고 가시기 바랍니다. 처음 오시는 모든 분들을 주님의 이름으로 환영합니다.",
  ],
  verses: [
    {
      text: "하나님은 신령과 진정으로 예배하는 자를 찾으시느니라",
      ref: "요한복음 4:23",
    },
    {
      text: "오직 성령이 너희에게 임하시면 너희가 권능을 받고 예루살렘과 온 유대와 사마리아와 땅 끝까지 이르러 내 증인이 되리라",
      ref: "사도행전 1:8",
    },
  ],
  principlesTitle: "섬기는 봉사자 수행 원리",
  principles: [
    { text: "모든 영광을 하나님께 돌립시다", ref: "(고전 10:31)" },
    { text: "먼저 주님이 최우선입니다", ref: "(마 6:33)" },
    { text: "형제 화합이 우선입니다", ref: "(롬 12:18)" },
    { text: "감사하며 충성합시다", ref: "(딤전 1:12)" },
    {
      text: "내가 살면 교회가 죽고 내가 죽으면 교회가 사는 원리",
      ref: "(고전 15:31)",
    },
  ],
};

// ── 목회자 / 장로 ───────────────────────────────────────────
export const leadership = {
  pastors: [
    { role: "담임목사", name: "이문규 목사", titleEn: "Senior Pastor", mark: "cross" },
    { role: "원로목사", name: "최용주 목사", titleEn: "Pastor Emeritus", mark: "cross" },
    { role: "부목사", name: "서영진 목사", titleEn: "Associate Pastor", mark: "cross" },
    { role: "EM 전도사", name: "조나단 조", titleEn: "EM Pastor", mark: "EM" },
  ],
  eldersLabel: "시무장로",
  elders: ["박원호 장로", "이종권 장로", "최종래 장로"],
};

// ── 예배 시간 (탭별) ────────────────────────────────────────
export const worship = {
  tabs: [
    {
      id: "주일",
      label: "주일 예배",
      cards: [
        {
          day: "Sunday Morning · 주일 오전",
          name: "주일 오전 예배",
          time: "11:00",
          ampm: "AM",
          note: "전 교인이 함께 드리는 주일 예배입니다",
          leader: "인도: 이문규 목사",
        },
        {
          day: "Sunday Afternoon · 주일 오후",
          name: "공동체 소그룹 예배",
          time: "1:30",
          ampm: "PM",
          note: "주일 오후 소그룹별 공동체 예배입니다",
          leader: "인도: 각 그룹장",
        },
      ],
    },
    {
      id: "주중",
      label: "주중 예배",
      cards: [
        {
          day: "Tuesday · 화요일",
          name: "청년 화요 찬양 예배",
          time: "7:00",
          ampm: "PM",
          note: "매주 화요일 저녁 7시",
          leader: "인도: 서영진 부목사",
        },
        {
          day: "Tuesday · 화요일",
          name: "화요 중보 기도회",
          time: "7:00",
          ampm: "PM",
          note: "오후 7:00 ~ 8:30",
          leader: "함께 기도합니다",
        },
        {
          day: "Friday · 금요일",
          name: "금요 성령 집회",
          time: "7:40",
          ampm: "PM",
          note: "매주 금요일 저녁 7시 40분",
          leader: "인도: 이문규 목사",
        },
      ],
    },
    {
      id: "새벽",
      label: "새벽 기도",
      cards: [
        {
          day: "Monday · 월요일",
          name: "새벽 기도회",
          time: "6:00",
          ampm: "AM",
          note: "매주 월요일 새벽 6시",
          leader: "인도: 박원호 장로",
        },
        {
          day: "Tue – Fri · 화요일~금요일",
          name: "새벽 기도회",
          time: "6:00",
          ampm: "AM",
          note: "화요일 ~ 금요일 새벽 6시",
          leader: "인도: 이문규 목사",
        },
      ],
    },
  ],
};
