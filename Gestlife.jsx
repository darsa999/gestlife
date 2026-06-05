// ════════════════════════════════════════════════════════════════
// Gestlife — Brand-Aligned FemTech Surrogacy Portal (2025 Guidelines)
// Refactored with Tailwind CSS v4 & Brand Gradients
// ════════════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";
import { I18nProvider, useTranslation } from "./src/i18n/i18nContext";

// ════════════════════════════════════════════════════
// SHARED DATA — Country Programs (Refactored visual accents)
// ════════════════════════════════════════════════════
const PROGRAMS = {
  georgia: {
    id: "georgia",
    name: "საქართველოს პროგრამა",
    nameEn: "Georgia Program",
    flag: "🇬🇪",
    // Brand book aligned theme configurations
    accentBg: "bg-red-50/50 border-red-100/80 text-red-800",
    accentBorder: "border-red-200",
    accentText: "text-red-600",
    stats: [
      { value: "20+", label: "წელი გამოცდილება" },
      { value: "98%", label: "წარმატების მაჩვენებელი" },
      { value: "500+", label: "ბედნიერი ოჯახი" },
    ],
    myths: [
      { myth: "სუროგაცია საქართველოში შეზღუდულია", truth: "სრულიად მცდარია! საქართველო წარმოადგენს ერთ-ერთ ყველაზე ლიბერალურ სამართლებრივ გარემოს სუროგაციისთვის მთელ მსოფლიოში. სამოქალაქო კოდექსი პირდაპირ ეხება სუროგაციას.", icon: "⚖️" },
      { myth: "სუროგატი დედა შეიძლება ბავშვი დაიტოვოს", truth: "საქართველოს კანონმდებლობით, სუროგატ დედას არანაირი სამართლებრივი უფლება არ აქვს ბავშვზე. სამშობიარო მოწმობა პირდაპირ განზრახ მშობლებს ეძლევა.", icon: "👨‍👩‍👧" },
      { myth: "პროცესი ძვირი და მიუწვდომელია", truth: "საქართველოს პროგრამა შეადგენს დასავლეთ ევროპის ღირებულების 40%-ს, ხოლო ხარისხი და სამართლებრივი დაცვა იდენტურია ან მაღალიც კი.", icon: "💰" },
      { myth: "სამედიცინო ხარისხი ეჭვქვეშ დგება", truth: "თბილისის წამყვანი კლინიკები ევროპული სტანდარტებით არის აკრედიტებული. ჩვენი პარტნიორი კლინიკები ISO სერტიფიცირებულია.", icon: "🏥" },
    ],
    headline: "სიყვარულით დაწყებული მოგზაურობა",
    subheadline: "საქართველო — სუროგაციის მსოფლიო ლიდერი 20 წლიანი სამართლებრივი ჩარჩოთი",
    legalNote: "საქართველოს სამოქალაქო კოდექსი, მუხლი 143-ე — სუროგაცია სრულად ლეგალურია. განზრახული მშობლები იბადება ბავშვის სამართლებრივ მშობლებად.",
    quizIntro: "გაიარეთ 30-წამიანი კვალიფიკაციის ტესტი საქართველოს პროგრამისთვის",
  },
  greece: {
    id: "greece",
    name: "საბერძნეთის პროგრამა",
    nameEn: "Greece Program",
    flag: "🇬🇷",
    accentBg: "bg-blue-50/50 border-blue-100/80 text-blue-800",
    accentBorder: "border-blue-200",
    accentText: "text-blue-600",
    stats: [
      { value: "2005", label: "სამართლებრივი ჩარჩო" },
      { value: "EU", label: "სტანდარტები" },
      { value: "300+", label: "ევროპული ოჯახი" },
    ],
    myths: [
      { myth: "ბერძნული სასამართლო პროცესი გრძელია", truth: "სასამართლო ნებართვა გაიცემა საშუალოდ 3-4 თვეში. ჩვენი სამართლებრივი გუნდი ზრუნავს ყველა საბუთზე თქვენი მონაწილეობის გარეშე.", icon: "⚖️" },
      { myth: "საბერძნეთში მხოლოდ ბერძნებს შეუძლიათ", truth: "კანონი 3305/2005 ნებადართავს ევროკავშირის მოქალაქეებს და გარკვეული პირობებით სხვა ქვეყნების მოქალაქეებსაც. ჩვენი გუნდი შეაფასებს თქვენს კვალიფიკაციას.", icon: "🌍" },
      { myth: "ბერძნული პროგრამა ნაკლებად სტრუქტურირებულია", truth: "პირიქით — საბერძნეთს ყველაზე სტრუქტურირებული სასამართლო ზედამხედველობა აქვს ევროპაში, რაც ყველა მხარეს იცავს.", icon: "🏛️" },
      { myth: "მედიკამენტები და კლინიკები ნაკლებად ხელმისაწვდომია", truth: "ათენის კლინიკები ევროკავშირის ყველაზე მაღალი სტანდარტების მქონეა. ყველა მედიკამენტი EMA (ევროპული სამედიცინო სააგენტო) სერტიფიცირებულია.", icon: "💊" },
    ],
    headline: "ოჯახის ოცნება ხმელთაშუა ზღვის სათავეში",
    subheadline: "საბერძნეთი — ევროკავშირის ერთადერთი ქვეყანა, სადაც სუროგაცია ლეგალურია",
    legalNote: "ბერძნული კანონი 3305/2005 — სუროგაცია ნებადართულია სასამართლო ნებართვით. ევროკავშირის მოქალაქეებისთვის ოპტიმალური სამართლებრივი უსაფრთხოება.",
    quizIntro: "გაიარეთ 30-წამიანი კვალიფიკაციის ტესტი საბერძნეთის პროგრამისთვის",
  },
};



// ════════════════════════════════════════════════════
// DASHBOARD STATIC DATA
// ════════════════════════════════════════════════════
const SURROGATE = {
  name: "ნინო გელაშვილი",
  avatar: "NG",
  program: "საქართველო 🇬🇪",
  stage: "ემბრიონის გადატანის მომზადება",
  coordinator: { name: "ლილე მამულაშვილი", avatar: "LL", title: "პირადი კოორდინატორი" },
  notifications: [
    { id: 1, text: "ანალიზის შედეგები მზადაა — 17 მაი", type: "medical", read: false },
    { id: 2, text: "ოპო: ვიზიტი 22 მაისს 10:00 — დადასტურება საჭიროა", type: "schedule", read: false },
    { id: 3, text: "კომპენსაცია ივნისი გადარიცხულია", type: "finance", read: true },
  ],
};



const MEDICAL_RESULTS = [
  { date: "17 მაი 2025", test: "ჰორმონული პანელი", result: "ნორმა", value: "E2: 245 pg/mL / P4: 1.2 ng/mL" },
  { date: "14 მაი 2025", test: "საშვილოსნოს ულტრაბგერა", result: "ოპტიმალური", value: "ენდომეტრიუმი: 10.2 მმ (ტრიფაზური)" },
  { date: "10 მაი 2025", test: "სისხლის საერთო ანალიზი", result: "ნორმა", value: "HGB: 13.4 g/dL / WBC: 6.2" },
  { date: "5 მაი 2025", test: "COVID / ინფექციური სკრინინგი", result: "უარყოფითი", value: "ყველა მარკერი უარყოფითი" },
  { date: "28 აპრ 2025", test: "ფსიქოლოგიური შეფასება", result: "კომპლიანსი", value: "სასარგებლო შეფასება — ნდობის ინდექსი: 98%" },
  { date: "20 აპრ 2025", test: "ციტოლოგია (PAP)", result: "ნეგატიური", value: "NILM — ანომალია არ გამოვლენილა" },
];

const FINANCES = [
  { month: "მარტი 2025", type: "კომპენსაცია", amount: "₾ 1,800", status: "გადარიცხული", icon: "✅" },
  { month: "აპრილი 2025", type: "სამედიცინო ხარჯების ანაზღაურება", amount: "₾ 320", status: "გადარიცხული", icon: "✅" },
  { month: "მაისი 2025", type: "კომპენსაცია", amount: "₾ 1,800", status: "გადარიცხული", icon: "✅" },
  { month: "ივნისი 2025", type: "კომპენსაცია", amount: "₾ 1,800", status: "მომლოდინე", icon: "⏳" },
  { month: "ივნისი 2025", type: "სატრანსპორტო კომპენსაცია", amount: "₾ 150", status: "მომლოდინე", icon: "⏳" },
  { month: "ივლისი 2025", type: "ბონუსი — ემბრიო გადატანა", amount: "₾ 500", status: "დაგეგმილი", icon: "📅" },
];

const SCHEDULE_DATA = [
  { date: "22 მაი 2025", time: "10:00", title: "ენდომეტრიუმის ფინალური ულტრაბგერა", location: "IVF-კლინიკა, ვერა", type: "medical", confirmed: false },
  { date: "25 მაი 2025", time: "09:30", title: "ემბრიონის გადატანის პროცედურა", location: "IVF-კლინიკა, ვერა", type: "procedure", confirmed: false },
  { date: "27 მაი 2025", time: "14:00", title: "პოსტ-ტრანსფერი კონსულტაცია", location: "ვიდეო-ზარი (Zoom)", type: "virtual", confirmed: true },
  { date: "4 ივნ 2025", time: "08:00", title: "β-hCG (ორსულობის ტესტი)", location: "სინევო ლაბორატორია", type: "medical", confirmed: true },
  { date: "10 ივნ 2025", time: "11:00", title: "ფსიქოლოგიური მხარდაჭერის სესია", location: "ვიდეო-ზარი", type: "virtual", confirmed: true },
];

const INITIAL_CHAT = [
  { id: 1, from: "coordinator", text: "გამარჯობა ნინო! 🌸 როგორ გრძნობ თავს დღეს? გუშინდელი ანალიზების შედეგები შესანიშნავია — ენდომეტრიუმი იდეალური სისქისაა!", time: "09:15" },
  { id: 2, from: "user", text: "გამარჯობა ლილე! ძალიან კარგად. ოდნავ ნერვიულობა მაქვს 25-ის გამო 😊", time: "09:22" },
  { id: 3, from: "coordinator", text: "ეს სრულიად ბუნებრივია! 💙 გახსოვდე — მთელი გუნდი შენთანაა. პროტოკოლი ზუსტად მიჰყვება. შენ ბრწყინვალედ აკეთებ ყველაფერს.", time: "09:24" },
];

const AUTO_RESPONSES = [
  "გესმის! ეს ძალიან მნიშვნელოვანია. ვუყურებ და დავუკავშირდები კლინიკასთან დამატებითი ინფორმაციისთვის 🌟",
  "რა კარგია, რომ გაგვიზიარე! 💙 გახსოვდეს — ნებისმიერ კითხვაზე პასუხი ყოველთვის 30 წუთში მოვა.",
  "შენი ჯანმრთელობა ყველაზე მნიშვნელოვანია. ექიმს ვამცნობ ამის შესახებ — ყველაფერი კონტროლირებადია ✅",
  "გმადლობ, რომ გამიზიარე! ეს ინფორმაცია შევიყვანე ჩვენი გუნდის ბაზაში. მალე მოგწერთ ოფიციალურ პასუხს 🌸",
  "ბრწყინვალეა! 🎉 შენ ყველაფერს სწორად აკეთებ. გუნდი ძალიან კმაყოფილია შენი პროგრესით.",
];

// ════════════════════════════════════════════════════
// SVG UNIFORM ICONS (Brand guidelines: centered, 1.5pt equivalent strokes)
// ════════════════════════════════════════════════════
function HomeIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UserIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MedicalIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

function FinanceIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
      <path d="M6 15h2" />
    </svg>
  );
}

function CalendarIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ChatIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}



// ════════════════════════════════════════════════════
// DYNAMIC THEME SYSTEM & ACCENT SWITCHER
// ════════════════════════════════════════════════════
const getTheme = (program) => {
  const isGreece = program === "greece";
  return {
    // gradients
    gradient: isGreece ? "bg-greece-gradient" : "bg-brand-gradient",
    textGradient: isGreece ? "text-greece-gradient" : "text-brand-gradient",
    
    // solid main brand colors
    accent: isGreece ? "text-gestlife-blue" : "text-gestlife-pink",
    accentBg: isGreece ? "bg-gestlife-blue" : "bg-gestlife-pink",
    accentBorder: isGreece ? "border-gestlife-blue" : "border-gestlife-pink",
    accentBorderSub: isGreece ? "border-gestlife-blue-sub" : "border-gestlife-pink-sub",
    accentBorderSub30: isGreece ? "border-gestlife-blue-sub/30" : "border-gestlife-pink-sub/30",
    accentBorderSub80: isGreece ? "border-gestlife-blue-sub/80" : "border-gestlife-pink-sub/80",
    accentBorder40: isGreece ? "border-gestlife-blue/40" : "border-gestlife-pink/40",
    accentBorder50: isGreece ? "border-gestlife-blue/50" : "border-gestlife-pink/50",
    accentBorder60: isGreece ? "border-gestlife-blue/60" : "border-gestlife-pink/60",
    accentBorder20: isGreece ? "border-gestlife-blue-sub/20" : "border-gestlife-pink-sub/20",
    
    // subtone / light overlays
    subBg5: isGreece ? "bg-gestlife-blue-sub/5" : "bg-gestlife-pink-sub/5",
    subBg10: isGreece ? "bg-gestlife-blue-sub/10" : "bg-gestlife-pink-sub/10",
    subBg30: isGreece ? "bg-gestlife-blue-sub/30" : "bg-gestlife-pink-sub/30",
    
    // hover states
    hoverBorder: isGreece ? "hover:border-gestlife-blue/40" : "hover:border-gestlife-pink/40",
    hoverBorder50: isGreece ? "hover:border-gestlife-blue/50" : "hover:border-gestlife-pink/50",
    hoverBorder30: isGreece ? "hover:border-gestlife-blue/30" : "hover:border-gestlife-pink/30",
    hoverBg5: isGreece ? "hover:bg-gestlife-blue-sub/5" : "hover:bg-gestlife-pink-sub/5",
    hoverBg10: isGreece ? "hover:bg-gestlife-blue-sub/10" : "hover:bg-gestlife-pink-sub/10",
    hoverText: isGreece ? "hover:text-gestlife-blue" : "hover:text-gestlife-pink",
    focusBorder: isGreece ? "focus:border-gestlife-blue" : "focus:border-gestlife-pink",
    focusBorder50: isGreece ? "focus:border-gestlife-blue/50" : "focus:border-gestlife-pink/50",
    
    // shadows and rings
    shadow: isGreece ? "shadow-gestlife-blue/20" : "shadow-gestlife-pink/20",
    ring: isGreece ? "ring-gestlife-blue/20" : "ring-gestlife-pink/20",
    
    // other specific elements
    legalBorder: isGreece ? "border-l-[#79B0F5]" : "border-l-[#F26BC1]",
    heroSvgColor: isGreece ? "text-gestlife-blue" : "text-gestlife-pink",
  };
};

// ════════════════════════════════════════════════════
// STANDALONE BRAND ISOTYPE WATERMARK (100% Brand Compliant)
// ════════════════════════════════════════════════════
function BrandWatermark({ className = "", rotation = 0, program = "georgia" }) {
  const bg = program === "greece" 
    ? "linear-gradient(40deg, #79B0F5 0%, #C7DBFF 100%)" // Blue gradient for Greece
    : "linear-gradient(40deg, #F26BC1 0%, #79B0F5 100%)"; // Pink-Blue gradient for Georgia
  
  return (
    <div
      style={{
        maskImage: "url(/logo_symbol.png)",
        WebkitMaskImage: "url(/logo_symbol.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        background: bg,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`absolute w-24 sm:w-32 aspect-[151/186] opacity-[0.15] z-0 pointer-events-none select-none transition-all duration-300 ${className}`}
    />
  );
}

// ════════════════════════════════════════════════════
// BRAND GEOMETRIC RESOURCE — The Pregnancy-Profile Wave
// ════════════════════════════════════════════════════
function BellyWaveBottom({ className = "", program = "georgia" }) {
  const isGreece = program === "greece";
  const fill1 = isGreece ? "#C7DBFF" : "#79B0F5";
  const fill2 = isGreece ? "#79B0F5" : "#F26BC1";
  const fill3 = isGreece ? "url(#greece-gradient-element)" : "url(#brand-gradient-element)";
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`}>
      <svg className="relative block w-full h-[80px] sm:h-[120px] md:h-[160px]" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Layer 1 (Subtone Blue) */}
        <path d="M0,96 C240,144 480,168 720,112 C960,56 1200,32 1440,80 L1440,160 L0,160 Z" fill={fill1} opacity="0.15" />
        {/* Layer 2 (Subtone Pink/Blue) */}
        <path d="M0,128 C280,168 560,128 840,96 C1120,64 1280,112 1440,128 L1440,160 L0,160 Z" fill={fill2} opacity="0.2" />
        {/* Layer 3 (Primary Gradient 40deg) */}
        <path d="M0,135 C320,165 640,110 960,135 C1120,150 1280,135 1440,140 L1440,160 L0,160 Z" fill={fill3} />
      </svg>
    </div>
  );
}

function BellyWaveTop({ className = "", program = "georgia" }) {
  const isGreece = program === "greece";
  const fill = isGreece ? "url(#greece-gradient-element)" : "url(#brand-gradient-element)";
  return (
    <div className={`relative w-full overflow-hidden leading-none rotate-180 ${className}`}>
      <svg className="relative block w-full h-[50px] sm:h-[80px]" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 C320,110 640,110 960,60 C1120,35 1280,15 1440,30 L1440,120 L0,120 Z" fill={fill} />
      </svg>
    </div>
  );
}

// ════════════════════════════════════════════════════
// ROOT ROUTER
// ════════════════════════════════════════════════════
// ════════════════════════════════════════════════════
// LANGUAGE DROPDOWN (Glassmorphic)
// ════════════════════════════════════════════════════
function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "ka", label: "KA", flag: "🇬🇪" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gestlife-grey-20/40 bg-white/40 hover:bg-white/60 backdrop-blur-md text-xs font-bold text-gestlife-grey-70 shadow-sm transition-all duration-300 ease-in-out cursor-pointer select-none"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <svg
          className={`w-3 h-3 text-gestlife-grey-50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-gestlife-grey-20/40 bg-white/90 backdrop-blur-md shadow-lg py-1.5 z-[100] transition-all duration-300 ease-in-out">
          {languages.map((lang) => {
            const isSelected = lang.code === i18n.language;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-gestlife-grey-20/40 text-gestlife-grey-80"
                    : "text-gestlife-grey-60 hover:bg-gestlife-grey-20/20 hover:text-gestlife-grey-80"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════
// ROOT ROUTER
// ════════════════════════════════════════════════════
export default function GestlifeApp() {
  const [currentView, setCurrentView] = useState("homepage");
  const [registeredUser, setRegisteredUser] = useState(null);

  // Load gradient assets globally
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col font-opensans bg-[#FCFBFE] text-gestlife-grey-80 select-none">
        {/* Brand Gradient Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="brand-gradient-element" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F26BC1" />
              <stop offset="100%" stopColor="#79B0F5" />
            </linearGradient>
            <linearGradient id="greece-gradient-element" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#79B0F5" />
              <stop offset="100%" stopColor="#C7DBFF" />
            </linearGradient>
          </defs>
        </svg>

        {currentView === "dashboard" ? (
          <SurrogateDashboard
            user={registeredUser}
            onLogout={() => { setRegisteredUser(null); setCurrentView("homepage"); }}
          />
        ) : (
          <SurrogacyHomepage
            onEnterDashboard={(userData) => { setRegisteredUser(userData); setCurrentView("dashboard"); }}
          />
        )}
      </div>
    </I18nProvider>
  );
}

// ════════════════════════════════════════════════════
// PHASE 1 — PUBLIC BRANDED HOMEPAGE
// ════════════════════════════════════════════════════
function SurrogacyHomepage({ onEnterDashboard }) {
  const { t } = useTranslation();
  const [program, setProgram] = useState("georgia");
  const [transitioning, setTransitioning] = useState(false);
  const [openMyth, setOpenMyth] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const quizRef = useRef(null);

  const data = {
    id: program,
    name: t(`programs.${program}.name`),
    nameEn: program === "greece" ? "Greece Program" : "Georgia Program",
    flag: program === "greece" ? "🇬🇷" : "🇬🇪",
    accentBg: program === "greece" ? "bg-blue-50/50 border-blue-100/80 text-blue-800" : "bg-red-50/50 border-red-100/80 text-red-800",
    accentBorder: program === "greece" ? "border-blue-200" : "border-red-200",
    accentText: program === "greece" ? "text-blue-600" : "text-red-600",
    stats: [
      { value: program === "greece" ? "2005" : "20+", label: t(`programs.${program}.stats.0`) },
      { value: program === "greece" ? "EU" : "98%", label: t(`programs.${program}.stats.1`) },
      { value: program === "greece" ? "300+" : "500+", label: t(`programs.${program}.stats.2`) },
    ],
    myths: [
      { myth: t(`programs.${program}.myths.0.myth`), truth: t(`programs.${program}.myths.0.truth`), icon: "⚖️" },
      { myth: t(`programs.${program}.myths.1.myth`), truth: t(`programs.${program}.myths.1.truth`), icon: program === "greece" ? "🌍" : "👨‍👩‍👧" },
      { myth: t(`programs.${program}.myths.2.myth`), truth: t(`programs.${program}.myths.2.truth`), icon: program === "greece" ? "🏛️" : "💰" },
      { myth: t(`programs.${program}.myths.3.myth`), truth: t(`programs.${program}.myths.3.truth`), icon: program === "greece" ? "💊" : "🏥" },
    ],
    headline: t(`programs.${program}.headline`),
    subheadline: t(`programs.${program}.subheadline`),
    legalNote: t(`programs.${program}.legalNote`),
    quizIntro: t(`programs.${program}.quizIntro`),
  };

  const theme = getTheme(program);

  const switchProgram = (newProg) => {
    if (newProg === program) return;
    setTransitioning(true);
    setTimeout(() => {
      setProgram(newProg);
      setOpenMyth(null);
      setQuizStep(0);
      setQuizScore(0);
      setFormSubmitted(false);
      setTransitioning(false);
    }, 250);
  };

  const handleAnswer = (option) => {
    setQuizScore((prev) => prev + option.score);
    setQuizStep((prev) => (prev < 4 ? prev + 1 : 5));
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.phone && formData.password) {
      setFormSubmitted(true);
    }
  };

  const getQualification = () => {
    if (quizScore >= 3) return { status: "qualified", label: t("quiz.result.qualified"), cls: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (quizScore >= 1) return { status: "review", label: t("quiz.result.review"), cls: "text-amber-700 bg-amber-50 border-amber-200" };
    return { status: "fail", label: t("quiz.result.fail"), cls: "text-red-700 bg-red-50 border-red-200" };
  };

  const localizedQuizQuestions = [
    {
      id: 1,
      question: t("quiz.questions.age.title"),
      icon: "🎂",
      options: [
        { label: t("quiz.questions.age.o1"), value: "ok", score: 1 },
        { label: t("quiz.questions.age.o2"), value: "ok", score: 1 },
        { label: t("quiz.questions.age.o3"), value: "review", score: 0 },
        { label: t("quiz.questions.age.o4"), value: "fail", score: -1 },
      ],
    },
    {
      id: 2,
      question: t("quiz.questions.bmi.title"),
      icon: "🏃‍♀️",
      options: [
        { label: t("quiz.questions.bmi.o1"), value: "ok", score: 1 },
        { label: t("quiz.questions.bmi.o2"), value: "ok", score: 1 },
        { label: t("quiz.questions.bmi.o3"), value: "review", score: 0 },
        { label: t("quiz.questions.bmi.o4"), value: "review", score: 0 },
      ],
    },
    {
      id: 3,
      question: t("quiz.questions.child.title"),
      icon: "👨‍👩‍👧‍👦",
      options: [
        { label: t("quiz.questions.child.o1"), value: "ok", score: 1 },
        { label: t("quiz.questions.child.o2"), value: "ok", score: 1 },
        { label: t("quiz.questions.child.o3"), value: "review", score: 0 },
      ],
    },
    {
      id: 4,
      question: t("quiz.questions.legal.title"),
      icon: "📋",
      options: [
        { label: t("quiz.questions.legal.o1"), value: "ok", score: 1 },
        { label: t("quiz.questions.legal.o2"), value: "review", score: 0 },
        { label: t("quiz.questions.legal.o3"), value: "fail", score: -1 },
      ],
    },
  ];

  const currentQuestion = localizedQuizQuestions[quizStep - 1];
  const qualification = quizStep === 5 ? getQualification() : null;

  return (
    <div className="flex-1 flex flex-col">
      {/* ── HEADER (Glassmorphic) ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gestlife-grey-20/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Official Logo Image */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => switchProgram("georgia")}>
            <img src={program === "greece" ? "/logo_blue.png" : "/logo_cropped.png"} alt="Gestlife Logo" className="h-9 sm:h-10 w-auto hover:scale-[1.02] transition-transform" />
          </div>

          {/* Program Switcher & Language Dropdown */}
          <div className="flex items-center gap-3.5">
            <div className="flex bg-gestlife-grey-20/50 rounded-full p-1 border border-gestlife-grey-20/30 shadow-inner">
              {Object.values(PROGRAMS).map((prog) => {
                const isActive = program === prog.id;
                const activeBg = prog.id === "greece" ? "bg-greece-gradient shadow-md" : "bg-brand-gradient shadow-md";
                return (
                  <button
                    key={prog.id}
                    onClick={() => switchProgram(prog.id)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ease-in-out ${
                      isActive
                        ? `${activeBg} text-white scale-105`
                        : "text-gestlife-grey-60 hover:text-gestlife-grey-80"
                    }`}
                  >
                    <span className="text-base">{prog.flag}</span>
                    <span className="hidden sm:inline font-montserrat">{prog.nameEn}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Language Selection Dropdown */}
            <LanguageDropdown />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-5 sm:gap-7 shrink-0">
            <a href="#myths" className="hidden md:inline text-sm font-semibold text-gestlife-grey-60 hover:text-gestlife-grey-80 transition-colors">{t("nav.myths")}</a>
            <a href="#quiz" className="hidden md:inline text-sm font-semibold text-gestlife-grey-60 hover:text-gestlife-grey-80 transition-colors">{t("nav.qualification")}</a>
            <button
              onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(6); }}
              className={`px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-md ${theme.gradient} hover:shadow-lg hover:scale-105 transition-all cursor-pointer`}
            >
              {t("nav.login")}
            </button>
          </nav>
        </div>
      </header>

      {/* Main content wrapper with transitions */}
      <main className={`flex-1 transition-all duration-300 ${transitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}>
        
        {/* ── HERO SECTION ── */}
        <section className={`relative pt-14 pb-20 overflow-hidden ${program === "greece" ? "bg-gradient-to-b from-[#FCFBFE] to-gestlife-blue-sub/10" : "bg-gradient-to-b from-[#FCFBFE] to-[#F5F5FA]"}`}>
          {/* Subtle logo watermark (Top-Left) */}
          <BrandWatermark program={program} rotation={15} className="top-8 right-6 sm:top-12 sm:right-[8%] md:right-[12%]" />
          {/* Pregnancy Belly Wave watermark in background */}
          <div className={`absolute right-[-100px] top-[-50px] opacity-[0.04] select-none pointer-events-none w-[600px] h-[800px] ${theme.heroSvgColor} rotate-45`}>
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M30,10 Q65,40 55,70 T85,90 L30,90 Z" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="space-y-7 text-left">
              {/* Program Badge */}
              <div className={`inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border text-xs font-bold tracking-wide shadow-sm bg-white ${data.accentBg}`}>
                <span className="text-xl leading-none">{data.flag}</span>
                <span className="font-montserrat font-bold">{data.nameEn.toUpperCase()}</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>

              {/* Title and subtext */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-gestlife-grey-80 leading-tight">
                {data.headline}
              </h1>
              <p className="text-base sm:text-lg text-gestlife-grey-60 font-medium leading-relaxed max-w-xl">
                {data.subheadline}
              </p>

              {/* Grid of Key Numbers */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-gestlife-grey-20/30 py-6 max-w-md">
                {data.stats.map((s, i) => (
                  <div key={i} className="text-left">
                    <div className={`text-2xl sm:text-3xl font-montserrat font-black ${theme.textGradient}`}>{s.value}</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-gestlife-grey-60 mt-1 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(1); }}
                  className={`px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide shadow-xl ${theme.gradient} hover:shadow-2xl hover:scale-105 active:scale-98 transition-all cursor-pointer`}
                >
                  {t("hero.startQuiz")}
                </button>
                <button 
                  onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(0); }}
                  className={`px-7 py-3.5 rounded-full border-2 border-gestlife-grey-20 text-gestlife-grey-80 font-bold text-sm hover:bg-white ${theme.hoverBorder} hover:shadow-sm transition-all cursor-pointer`}
                >
                  {t("hero.learnMore")}
                </button>
              </div>

              {/* Legal Notice */}
              <div className={`border rounded-xl p-4 text-xs font-medium leading-relaxed bg-white/60 backdrop-blur-sm shadow-sm border-l-4 ${theme.legalBorder} max-w-xl`}>
                <span className="font-bold text-gestlife-grey-80">{t("hero.legalInfo")}</span> {data.legalNote}
              </div>
            </div>

            {/* Video Preview Column */}
            <div className="relative">
              {/* Outer frame wave accent */}
              <div className={`absolute -inset-1.5 rounded-3xl ${theme.gradient} opacity-20 blur-lg -z-10 animate-pulse`} />
              
              <div
                className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gestlife-grey-80 flex items-center justify-center cursor-pointer group relative"
                onClick={() => setVideoPlaying(!videoPlaying)}
              >
                {/* Visual cover gradient overlay */}
                <div className={`absolute inset-0 opacity-40 ${program === "greece" ? "bg-gradient-to-tr from-[#79B0F5] to-[#C7DBFF]" : "bg-gradient-to-tr from-[#F26BC1] to-[#79B0F5]"} transition-opacity group-hover:opacity-30 z-0`} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6">
                  {videoPlaying ? (
                    <div className="text-center space-y-4">
                      <div className="text-5xl animate-bounce">🎬</div>
                      <div className="text-xs font-bold tracking-widest uppercase bg-black/40 rounded-full px-4 py-1.5">{t("hero.videoLoading")}</div>
                      <div className="text-[11px] text-white/70">{t("hero.videoDemoMode")}</div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4 flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${theme.gradient} opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all`}>
                        <span className="translate-x-0.5 text-xl">▶</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base leading-snug">
                          {program === "georgia" ? t("hero.videoTitleGeorgia") : t("hero.videoTitleGreece")}
                        </div>
                        <div className="text-[10px] text-white/70 mt-1 uppercase tracking-wide">
                          {program === "georgia" ? t("hero.videoSubtitleGeorgia") : t("hero.videoSubtitleGreece")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{t("hero.tagMedical")}</span>
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{t("hero.tagLegal")}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transition wave at the bottom */}
          <BellyWaveBottom program={program} className="absolute bottom-0 left-0" />
        </section>

        {/* ── MYTHS VS TRUTHS SECTION (White background space) ── */}
        <section id="myths" className="py-20 px-4 bg-white relative overflow-hidden">
          {/* Subtle logo watermark (Bottom-Right) */}
          <BrandWatermark program={program} rotation={-15} className="top-12 left-12" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 space-y-3.5">
              <div className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${theme.subBg30} text-gestlife-grey-80 border ${theme.accentBorder20}`}>
                {data.flag} {t("myths.tag")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-gestlife-grey-80">{t("myths.title")}</h2>
              <p className="text-gestlife-grey-60 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                {t("myths.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.myths.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                    openMyth === idx ? `${theme.accentBorder60} ${theme.subBg5}` : "border-gestlife-grey-20/60 hover:border-gestlife-grey-40/60"
                  }`}
                  onClick={() => setOpenMyth(openMyth === idx ? null : idx)}
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="text-3xl mt-1 shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-gestlife-grey-40 mb-1">❌ {t("myths.mythTag")}</div>
                          <h3 className="font-montserrat font-bold text-gestlife-grey-80 text-base leading-snug">"{item.myth}"</h3>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shrink-0 transition-transform duration-300 ${theme.gradient} ${openMyth === idx ? "rotate-180" : ""}`}>
                          ▼
                        </div>
                      </div>
                      {openMyth === idx && (
                        <div className="mt-4 pt-3 border-t border-gestlife-grey-20/30 space-y-2">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">✅ {t("myths.truthTag")}</div>
                          <p className="text-gestlife-grey-80 leading-relaxed text-sm font-medium pl-3 border-l-2 border-emerald-500">
                            {item.truth}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE QUALIFICATION QUIZ SECTION ── */}
        <section id="quiz" ref={quizRef} className="relative py-20 px-4 bg-gradient-to-b from-[#F5F5FA] to-[#FCFBFE] overflow-hidden">
          {/* Subtle logo watermark (Top-Right) */}
          <BrandWatermark program={program} rotation={10} className="bottom-12 right-12" />
          {/* Top wave spacer */}
          <BellyWaveTop program={program} className="absolute top-0 left-0" />

          <div className="max-w-2xl mx-auto px-4 relative z-10 mt-8">
            <div className="text-center mb-10 space-y-3">
              <div className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${theme.gradient} text-white`}>
                {t("quiz.duration")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-gestlife-grey-80">{t("quiz.title")}</h2>
              <p className="text-gestlife-grey-60 font-medium text-sm sm:text-base">{data.quizIntro}</p>
            </div>

            {/* Quiz Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gestlife-grey-20/40 overflow-hidden transition-all duration-300">
              {/* Progress bar */}
              {quizStep >= 1 && quizStep <= 4 && (
                <div className="h-1.5 bg-gestlife-grey-20/30">
                  <div
                    className={`h-full ${theme.gradient} transition-all duration-500 rounded-r-full`}
                    style={{ width: `${(quizStep / 4) * 100}%` }}
                  />
                </div>
              )}

              <div className="p-7 sm:p-10">
                {/* Step 0: Intro */}
                {quizStep === 0 && (
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${theme.gradient} text-white text-3xl mx-auto shadow-md`}>
                      ✨
                    </div>
                    <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">{t("quiz.intro.title")}</h3>
                    <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                      {t("quiz.intro.desc")}
                    </p>
                    <ul className="text-left space-y-3.5 max-w-xs mx-auto py-2 font-medium text-sm text-gestlife-grey-80">
                      {[t("quiz.intro.item1"), t("quiz.intro.item2"), t("quiz.intro.item3"), t("quiz.intro.item4")].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className={`w-5.5 h-5.5 rounded-full text-white text-[10px] flex items-center justify-center font-bold ${theme.gradient} shrink-0`}>
                            {i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setQuizStep(1)}
                      className={`w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all ${theme.gradient} cursor-pointer`}
                    >
                      {t("hero.startQuiz")}
                    </button>
                    <p className="text-[10px] text-gestlife-grey-40 font-semibold uppercase tracking-wide">{t("quiz.intro.badge")}</p>
                  </div>
                )}

                {/* Step 1-4: Questions */}
                {quizStep >= 1 && quizStep <= 4 && currentQuestion && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs font-bold text-gestlife-grey-40 uppercase tracking-widest">
                      <span>{t("quiz.questionStep", { step: quizStep })}</span>
                      <span>{data.flag} {data.nameEn}</span>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="text-5xl">{currentQuestion.icon}</div>
                      <h3 className="text-lg sm:text-xl font-montserrat font-bold text-gestlife-grey-80 leading-snug">{currentQuestion.question}</h3>
                    </div>
                    <div className="space-y-3 pt-2">
                      {currentQuestion.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(opt)}
                          className={`w-full text-left px-5 py-4 rounded-xl border border-gestlife-grey-20 ${theme.hoverBg5} ${theme.hoverBorder50} transition-all text-gestlife-grey-80 font-bold text-sm cursor-pointer flex items-center justify-between`}
                        >
                          <span>{opt.label}</span>
                          <span className="w-5 h-5 rounded-full border border-gestlife-grey-20 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-transparent" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Score Result */}
                {quizStep === 5 && qualification && (
                  <div className="text-center space-y-6">
                    <div className="text-6xl animate-bounce">
                      {qualification.status === "qualified" ? "🎉" : qualification.status === "review" ? "📋" : "💙"}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80 mb-3">{t("quiz.result.title")}</h3>
                      <div className={`inline-block px-6 py-2.5 rounded-full border font-bold text-base uppercase tracking-wide ${qualification.cls}`}>
                        {qualification.label}
                      </div>
                    </div>
                    {qualification.status !== "fail" ? (
                      <div className="space-y-5">
                        <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                          {qualification.status === "qualified"
                            ? t("quiz.result.qualifiedText")
                            : t("quiz.result.reviewText")}
                        </p>
                        <button
                          onClick={() => setQuizStep(6)}
                          className={`w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg ${theme.gradient} hover:scale-102 active:scale-98 transition-all cursor-pointer`}
                        >
                          {t("quiz.result.continue")}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                          {t("quiz.result.failText")}
                        </p>
                        <button
                          className="w-full py-3.5 rounded-2xl border-2 border-gestlife-grey-20 text-gestlife-grey-80 font-bold hover:bg-gestlife-grey-20/10 transition-all cursor-pointer"
                          onClick={() => { setQuizStep(0); setQuizScore(0); }}
                        >
                          {t("quiz.result.retry")}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 6: Registration Form */}
                {quizStep === 6 && (
                  <div className="space-y-6">
                    {!formSubmitted ? (
                      <>
                        <div className="text-center space-y-2">
                          <div className="text-4xl">📝</div>
                          <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">{t("quiz.form.title")}</h3>
                          <p className="text-gestlife-grey-60 text-xs font-semibold uppercase tracking-wider">{data.flag} {data.nameEn} — {t("quiz.form.registration", "Registration")}</p>
                        </div>
                        
                        <div className="space-y-4 text-left">
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">{t("quiz.form.fullName")}</label>
                            <input
                              type="text"
                              placeholder={t("quiz.form.fullNamePlaceholder")}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none ${theme.focusBorder} transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">{t("quiz.form.phone")}</label>
                            <input
                              type="tel"
                              placeholder={t("quiz.form.phonePlaceholder")}
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className={`w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none ${theme.focusBorder} transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">{t("quiz.form.password")}</label>
                            <input
                              type="password"
                              placeholder={t("quiz.form.passwordPlaceholder")}
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              className={`w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none ${theme.focusBorder} transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40`}
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleFormSubmit}
                          disabled={!formData.name || !formData.phone || !formData.password}
                          className={`w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg ${theme.gradient} hover:scale-102 active:scale-98 disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed transition-all cursor-pointer mt-4`}
                        >
                          {t("quiz.form.submit")}
                        </button>
                        
                        <p className="text-[10px] text-gestlife-grey-40 font-semibold leading-relaxed text-center">
                          {t("quiz.form.secure")}
                        </p>
                      </>
                    ) : (
                      <div className="text-center space-y-6 py-4">
                        <div className="text-6xl animate-bounce">🎊</div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">{t("quiz.form.welcome", { name: formData.name.split(" ")[0] })}</h3>
                          <p className="text-gestlife-grey-60 font-medium text-sm mt-1">
                            {t("quiz.form.activated")}
                          </p>
                        </div>
                        <button
                          onClick={() => onEnterDashboard({ name: formData.name, program: data.id })}
                          className={`w-full py-4 rounded-2xl text-white font-bold text-base shadow-xl ${theme.gradient} hover:scale-102 transition-all cursor-pointer`}
                        >
                          {t("quiz.form.goDashboard")}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── BRANDED FOOTER ── */}
      <footer className="bg-gestlife-grey-80 text-gestlife-grey-20 py-14 px-4 border-t border-gestlife-grey-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-left">
            <div className="space-y-4">
              <div className="mb-4">
                <img src="/logo_white.png" alt="Gestlife Logo" className="h-9 w-auto" />
              </div>
              <p className="text-sm font-medium text-gestlife-grey-40 leading-relaxed">
                {t("footer.desc")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-sm uppercase tracking-wider">{t("footer.legal")}</div>
              <ul className="text-sm font-medium text-gestlife-grey-40 space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t("footer.gdpr")}</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-sm uppercase tracking-wider">{t("footer.contact")}</div>
              <ul className="text-sm font-medium text-gestlife-grey-40 space-y-2">
                <li>📧 info@gestlife.com</li>
                <li>📞 +995 32 2XX XXXX</li>
                <li>🏥 {t("footer.cities")}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gestlife-grey-60/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-semibold text-gestlife-grey-40">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </div>
            <div className="flex gap-4">
              {/* Soft visual circles representing colors */}
              <span className="w-3.5 h-3.5 rounded-full bg-[#F26BC1]" title="Pink Gestlife" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#79B0F5]" title="Blue Gestlife" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#4D4F59]" title="Grey 80%" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ════════════════════════════════════════════════════
// PHASE 2 — SURROGATE PORTAL DASHBOARD
// ════════════════════════════════════════════════════
function SurrogateDashboard({ user, onLogout }) {
  const { t } = useTranslation();
  const [dashTab, setDashTab] = useState("overview");
  const theme = getTheme(user?.program || "georgia");
  
  // App State management
  const [scheduleItems, setScheduleItems] = useState(SCHEDULE_DATA);
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT);
  const [chatInput, setChatInput] = useState("");
  const [chatTyping, setChatTyping] = useState(false);

  const chatInputRef = useRef(null);
  const chatEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatTyping]);

  const confirmAppointment = (idx) => {
    setScheduleItems((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, confirmed: true } : item))
    );
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const newMsg = {
      id: Date.now(),
      from: "user",
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");
    setChatTyping(true);

    setTimeout(() => {
      setChatTyping(false);
      const resp = localizedResponses[Math.floor(Math.random() * localizedResponses.length)];
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "coordinator",
          text: resp,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1200);
  };

  const displayName = user?.name || SURROGATE.name;
  const displayFirst = displayName.split(" ")[0];

  const localizedStages = [
    { labelKey: "dashboard.stages.s0", icon: "🔍", done: true },
    { labelKey: "dashboard.stages.s1", icon: "📄", done: true },
    { labelKey: "dashboard.stages.s2", icon: "💉", done: true },
    { labelKey: "dashboard.stages.s3", icon: "🌱", done: false, active: true },
    { labelKey: "dashboard.stages.s4", icon: "🤰", done: false },
    { labelKey: "dashboard.stages.s5", icon: "👶", done: false },
    { labelKey: "dashboard.stages.s6", icon: "🏥", done: false },
  ].map((stage) => ({
    ...stage,
    label: t(stage.labelKey),
  }));

  const activeStage = localizedStages.find((s) => s.active) || localizedStages[3];
  const surrogateStageLabel = activeStage.label;

  const localizedMedicalResults = MEDICAL_RESULTS.map((r, i) => ({
    date: t(`dashboard.medicalTab.results.${i}.date`),
    test: t(`dashboard.medicalTab.results.${i}.test`),
    result: t(`dashboard.medicalTab.results.${i}.res`),
    value: r.value,
  }));

  const localizedFinances = FINANCES.map((f, i) => ({
    month: t(`dashboard.financeTab.trans.${i}.month`),
    type: t(`dashboard.financeTab.trans.${i}.type`),
    amount: f.amount,
    status: t(`dashboard.financeTab.trans.${i}.status`),
    icon: f.icon,
  }));

  const localizedScheduleItems = scheduleItems.map((s, i) => ({
    ...s,
    title: t(`dashboard.scheduleTab.items.${i}.title`),
    location: t(`dashboard.scheduleTab.items.${i}.loc`),
    date: t(`dashboard.scheduleTab.items.${i}.date`),
    time: t(`dashboard.scheduleTab.items.${i}.time`),
  }));

  const localizedChat = chatMessages.map((m, i) => {
    if (i < INITIAL_CHAT.length) {
      return {
        ...m,
        text: t(`dashboard.supportTab.chat.${i}`),
      };
    }
    return m;
  });

  const localizedResponses = AUTO_RESPONSES.map((resp, i) => 
    t(`dashboard.supportTab.responses.${i}`)
  );

  const DASH_TABS_CONFIG = [
    { id: "overview", label: t("dashboard.sidebar.overview"), icon: <HomeIcon /> },
    { id: "profile", label: t("dashboard.sidebar.profile"), icon: <UserIcon /> },
    { id: "medical", label: t("dashboard.sidebar.medical"), icon: <MedicalIcon /> },
    { id: "finance", label: t("dashboard.sidebar.finance"), icon: <FinanceIcon /> },
    { id: "schedule", label: t("dashboard.sidebar.schedule"), icon: <CalendarIcon /> },
    { id: "support", label: t("dashboard.sidebar.support"), icon: <ChatIcon /> },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-screen bg-[#F8F9FD]">
      
      {/* ── SIDEBAR (Desktop) ── */}
      <aside className="w-64 bg-white border-r border-gestlife-grey-20/40 flex-col justify-between hidden md:flex shrink-0">
        <div>
          {/* Logo brand segment */}
          <div className="p-5 border-b border-gestlife-grey-20/30 flex items-center justify-between gap-2">
            <img src={user?.program === "greece" ? "/logo_blue.png" : "/logo_cropped.png"} alt="Gestlife Logo" className="h-7 w-auto hover:scale-[1.02] transition-transform" />
            <LanguageDropdown />
          </div>

          {/* Mini profile header */}
          <div className={`p-5 ${theme.subBg10} border-b border-gestlife-grey-20/20 text-center`}>
            <div className={`w-12 h-12 rounded-full ${theme.gradient} flex items-center justify-center text-white font-extrabold text-base mx-auto mb-2.5 border-2 border-white shadow-sm`}>
              {displayName[0] + (displayName.split(" ")[1]?.[0] || "")}
            </div>
            <div className="font-bold text-sm text-gestlife-grey-80 leading-none">{displayName}</div>
            <div className="text-[10px] font-bold text-gestlife-grey-60 mt-1.5 bg-white py-1 px-2.5 rounded-full inline-block border border-gestlife-grey-20/40">
              {user?.program === "greece" ? "🇬🇷 " + t("dashboard.greece") : "🇬🇪 " + t("dashboard.georgia")}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="py-4 px-3 space-y-1">
            {DASH_TABS_CONFIG.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDashTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                  dashTab === tab.id
                    ? `${theme.gradient} text-white shadow-md ${theme.shadow}`
                    : "text-gestlife-grey-60 hover:bg-gestlife-grey-20/20 hover:text-gestlife-grey-80"
                }`}
              >
                <span className="shrink-0">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer Logout */}
        <div className="p-4 border-t border-gestlife-grey-20/30">
          <button
            onClick={onLogout}
            className="w-full py-3 rounded-xl border border-red-100 hover:border-red-200 bg-red-50/50 hover:bg-red-50 text-red-600 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
          >
            🚪 {t("nav.logout")}
          </button>
        </div>
      </aside>

      {/* ── MOBILE TAB BAR ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gestlife-grey-20/40 flex overflow-x-auto shadow-lg justify-around">
        {DASH_TABS_CONFIG.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setDashTab(tab.id)}
            className={`flex-1 min-w-[56px] flex flex-col items-center py-2.5 gap-1 text-[9px] font-bold tracking-wider transition-all cursor-pointer ${
              dashTab === tab.id ? theme.accent : "text-gestlife-grey-40"
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span className="truncate max-w-[64px] text-center">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="flex-1 p-5 sm:p-8 md:p-10 pb-24 md:pb-10 min-w-0 flex flex-col gap-6 relative overflow-hidden">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-2xl border border-gestlife-grey-20/30 shadow-sm gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-8 h-8 rounded-full ${theme.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {SURROGATE.avatar}
            </div>
            <div className="text-left min-w-0">
              <div className="font-bold text-xs text-gestlife-grey-80 truncate">{displayName}</div>
              <div className="text-[9px] font-bold text-gestlife-grey-40 uppercase truncate">Portal</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <LanguageDropdown />
            <button
              onClick={onLogout}
              className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 whitespace-nowrap"
            >
              {t("nav.logout")}
            </button>
          </div>
        </div>

        {/* ════ OVERVIEW TAB ════ */}
        {dashTab === "overview" && (
          <div className="flex flex-col gap-6 text-left relative">
            {/* Subtle logo watermark (Bottom-Right) */}
            <BrandWatermark program={user?.program} rotation={0} className="bottom-12 right-12 opacity-[0.12]" />
            {/* Welcome Dashboard Banner card */}
            <div className={`rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg ${theme.gradient}`}>
              {/* Flag backdrop indicator */}
              <div className="absolute right-[-20px] bottom-[-20px] text-[120px] sm:text-[160px] opacity-[0.08] select-none pointer-events-none leading-none rotate-12">
                {user?.program === "greece" ? "🇬🇷" : "🇬🇪"}
              </div>
              <div className="relative z-10 max-w-lg">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/80">{t("dashboard.overviewTab.panel")}</div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold mt-1.5 mb-2 leading-tight">
                  {t("dashboard.overviewTab.welcome", { name: displayFirst })}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed">
                  {t("dashboard.overviewTab.statusText", { stage: surrogateStageLabel })}
                </p>
              </div>
            </div>

            {/* Stages Horizontal Timeline track */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gestlife-grey-20/40">
              <h2 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-6">{t("dashboard.overviewTab.timelineTitle")}</h2>
              <div className="flex items-center overflow-x-auto pb-4 gap-0 scrollbar-thin">
                {localizedStages.map((stage, i) => (
                  <div key={i} className="flex items-center shrink-0">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all border ${
                        stage.done
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
                          : stage.active
                          ? `${theme.gradient} border-transparent text-white ring-4 ${theme.ring} shadow-md animate-pulse`
                          : "bg-gestlife-grey-20/40 border-transparent text-gestlife-grey-45"
                      }`}>
                        {stage.done ? "✓" : stage.icon}
                      </div>
                      <span className={`text-[9px] font-bold text-center max-w-[64px] leading-tight ${
                        stage.active ? theme.accent : stage.done ? "text-emerald-600" : "text-gestlife-grey-40"
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                    {i < localizedStages.length - 1 && (
                      <div className={`w-8 h-0.5 mx-1 mb-5 rounded-full ${i < 3 ? "bg-emerald-500" : "bg-gestlife-grey-20/50"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Overview grid cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Next Appointment Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gestlife-grey-20/40 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gestlife-grey-40 mb-3.5 flex items-center gap-1.5">
                    <span>📅</span> {t("dashboard.overviewTab.nextAppt")}
                  </div>
                  <h3 className="font-montserrat font-bold text-sm sm:text-base text-gestlife-grey-80 mb-2">{localizedScheduleItems[0].title}</h3>
                  <div className="space-y-1 text-xs font-semibold text-gestlife-grey-60">
                    <div>{t("dashboard.overviewTab.apptDate", { date: localizedScheduleItems[0].date, time: localizedScheduleItems[0].time })}</div>
                    <div>{t("dashboard.overviewTab.apptLoc", { location: localizedScheduleItems[0].location })}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gestlife-grey-20/20 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gestlife-grey-40 uppercase">{t("dashboard.overviewTab.apptStatus")}</span>
                  {localizedScheduleItems[0].confirmed ? (
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl px-4.5 py-1.5 text-xs font-bold flex items-center gap-1">
                      <span>✓</span> {t("dashboard.overviewTab.confirmed")}
                    </span>
                  ) : (
                    <button
                      onClick={() => confirmAppointment(0)}
                      className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow-md ${theme.gradient} hover:scale-102 active:scale-98 transition-all cursor-pointer`}
                    >
                      {t("dashboard.overviewTab.confirmBtn")}
                    </button>
                  )}
                </div>
              </div>

              {/* Personal Coordinator Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gestlife-grey-20/40 flex flex-col justify-between gap-4">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gestlife-grey-40 mb-4 flex items-center gap-1.5">
                    <span>💬</span> {t("dashboard.overviewTab.coordinatorTitle")}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className={`w-14 h-14 rounded-full ${theme.gradient} flex items-center justify-center text-white font-extrabold text-base border-2 border-white shadow-md`}>
                        {SURROGATE.coordinator.avatar}
                      </div>
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base text-gestlife-grey-80 leading-none">{SURROGATE.coordinator.name}</div>
                      <div className="text-xs text-gestlife-grey-60 mt-1 font-semibold">{t("dashboard.supportTab.coordinatorBadge")}</div>
                      <div className="text-[10px] text-emerald-500 font-extrabold mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("dashboard.overviewTab.online")}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setDashTab("support")}
                  className={`w-full py-2.5 rounded-xl border ${theme.accentBorder} ${theme.accent} ${theme.hoverBg10} text-xs font-bold tracking-wide transition-all cursor-pointer uppercase`}
                >
                  {t("dashboard.overviewTab.openChat")}
                </button>
              </div>
            </div>

            {/* Quick Metrics stats widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "🧬", label: t("dashboard.overviewTab.lastAnalysis"), value: t("dashboard.overviewTab.lastAnalysisVal"), sub: t("dashboard.overviewTab.lastAnalysisDate"), border: "border-emerald-200/80 bg-emerald-50/10", valCls: "text-emerald-600" },
                { icon: "💳", label: t("dashboard.overviewTab.lastPayout"), value: "₾ 1,800", sub: t("dashboard.overviewTab.lastPayoutDate"), border: `${theme.accentBorderSub80} ${theme.subBg5}`, valCls: theme.accent },
                { icon: "📅", label: t("dashboard.overviewTab.payoutProgress"), value: t("dashboard.overviewTab.payoutProgressVal"), sub: t("dashboard.overviewTab.payoutProgressSub"), border: "border-blue-200/80 bg-blue-50/10", valCls: "text-gestlife-blue" },
              ].map((c, i) => (
                <div key={i} className={`bg-white rounded-2xl p-5 shadow-sm border ${c.border}`}>
                  <div className="text-2xl mb-2.5">{c.icon}</div>
                  <div className="text-[9px] text-gestlife-grey-40 font-bold uppercase tracking-wider mb-1">{c.label}</div>
                  <div className={`text-xl font-extrabold mb-0.5 ${c.valCls}`}>{c.value}</div>
                  <div className="text-[10px] text-gestlife-grey-60 font-semibold">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════ PROFILE TAB ════ */}
        {dashTab === "profile" && (
          <div className="flex flex-col gap-6 text-left relative">
            {/* Subtle logo watermark (Top-Right) */}
            <BrandWatermark program={user?.program} rotation={0} className="top-24 right-12 opacity-[0.12]" />
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gestlife-grey-20/40">
              
              {/* Profile Card Header banner */}
              <div className={`p-6 sm:p-8 text-white relative ${theme.gradient}`}>
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-2xl border-4 border-white/30 shrink-0 shadow-md">
                    {SURROGATE.avatar}
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl sm:text-2xl font-montserrat font-extrabold leading-none">{displayName}</h1>
                    <div className="text-xs text-white/80 font-bold mt-1.5 uppercase tracking-wider">
                      {t("dashboard.profileInfo", { program: user?.program === "greece" ? t("dashboard.greece") : t("dashboard.georgia") })}
                    </div>
                    <div className="mt-3 inline-block bg-white/25 rounded-full px-3.5 py-1 text-white text-[10px] font-extrabold uppercase tracking-wide">
                      {t("dashboard.stageLabel", { stage: surrogateStageLabel })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile details grid fields */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: t("dashboard.profileTab.fields.fullName"), value: displayName, icon: "👤" },
                    { label: t("dashboard.profileTab.fields.dob"), value: t("dashboard.profileTab.fields.dobVal"), icon: "🎂" },
                    { label: t("dashboard.profileTab.fields.phone"), value: user?.phone || "+995 599 123 456", icon: "📱" },
                    { label: t("dashboard.profileTab.fields.email"), value: "nino.gelashvili@email.com", icon: "📧" },
                    { label: t("dashboard.profileTab.fields.address"), value: t("dashboard.profileTab.fields.addressVal"), icon: "🏠" },
                    { label: t("dashboard.profileTab.fields.civil"), value: t("dashboard.profileTab.fields.civilVal"), icon: "💍" },
                    { label: t("dashboard.profileTab.fields.children"), value: t("dashboard.profileTab.fields.childrenVal"), icon: "👨‍👩‍👧‍👦" },
                    { label: t("dashboard.profileTab.fields.blood"), value: t("dashboard.profileTab.fields.bloodVal"), icon: "🩸" },
                  ].map((field, i) => (
                    <div key={i} className="bg-gestlife-grey-20/10 rounded-xl p-4 border border-gestlife-grey-20/30 flex flex-col">
                      <span className="text-[10px] text-gestlife-grey-40 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span>{field.icon}</span> {field.label}
                      </span>
                      <span className="text-sm font-bold text-gestlife-grey-80">{field.value}</span>
                    </div>
                  ))}
                </div>

                {/* Subcontract details card */}
                <div className={`mt-6 ${theme.subBg10} border ${theme.accentBorderSub30} rounded-2xl p-5`}>
                  <div className={`text-xs font-bold ${theme.accent} uppercase tracking-widest mb-3.5`}>{t("dashboard.profileTab.contract.title")}</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: t("dashboard.profileTab.contract.docNo"), value: t("dashboard.profileTab.contract.docNoVal") },
                      { label: t("dashboard.profileTab.contract.date"), value: t("dashboard.profileTab.contract.dateVal") },
                      { label: t("dashboard.profileTab.contract.package"), value: user?.program === "greece" ? t("dashboard.profileTab.contract.packageValGreece") : t("dashboard.profileTab.contract.packageVal") },
                      { label: t("dashboard.profileTab.contract.clinic"), value: user?.program === "greece" ? t("dashboard.profileTab.contract.clinicValGreece") : t("dashboard.profileTab.contract.clinicVal") },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-[9px] text-gestlife-grey-40 font-bold uppercase tracking-wider">{item.label}</div>
                        <div className="text-xs font-extrabold text-gestlife-grey-80 mt-0.5">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════ MEDICAL TAB ════ */}
        {dashTab === "medical" && (
          <div className="flex flex-col gap-6 text-left relative">
            {/* Subtle logo watermark (Bottom-Left) */}
            <BrandWatermark program={user?.program} rotation={0} className="bottom-12 left-12 opacity-[0.12]" />
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-base font-bold text-gestlife-grey-80 uppercase tracking-widest">{t("dashboard.medicalTab.title")}</h2>
                <div className="bg-emerald-50 border border-emerald-100 rounded-full px-4.5 py-1.5 text-xs font-bold text-emerald-600">
                  {t("dashboard.medicalTab.badge", { count: MEDICAL_RESULTS.length })}
                </div>
              </div>

              <div className="space-y-3">
                {localizedMedicalResults.map((r, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 bg-gestlife-grey-20/10 rounded-xl border border-gestlife-grey-20/20 ${theme.hoverBorder30} ${theme.hoverBg5} transition-all`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-base shrink-0 shadow-sm">
                      ✓
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-gestlife-grey-80 mb-0.5">{r.test}</div>
                      <div className="text-[11px] font-semibold text-gestlife-grey-60 leading-none">{r.value}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 rounded-lg px-2 py-0.5 border border-emerald-100 uppercase inline-block mb-1">{r.result}</div>
                      <div className="text-[10px] font-bold text-gestlife-grey-40 block">{r.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom SVG Bar chart for Endometrium growth */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <h3 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-6">{t("dashboard.medicalTab.chartTitle")}</h3>
              
              <div className="flex items-end justify-between gap-4 h-28 max-w-sm pt-4 border-b border-gestlife-grey-20/30 pb-1.5">
                {[
                  { val: 7.2, date: t("dashboard.medicalTab.results.5.date").substring(0, 6), active: false },
                  { val: 8.5, date: t("dashboard.medicalTab.results.1.date").substring(0, 6), active: false },
                  { val: 9.1, date: t("dashboard.medicalTab.results.4.date").substring(0, 6), active: false },
                  { val: 10.2, date: t("dashboard.medicalTab.results.1.date").substring(0, 6), active: true },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1">
                    <span className={`text-[10px] font-black ${bar.active ? theme.accent : "text-gestlife-grey-60"}`}>{bar.val} mm</span>
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        bar.active 
                          ? `${theme.gradient} shadow-md` 
                          : "bg-gestlife-grey-20"
                      }`}
                      style={{ height: `${(bar.val / 12) * 85}px` }}
                    />
                    <span className="text-[10px] font-bold text-gestlife-grey-40 mt-1">{bar.date}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-emerald-50/50 border border-emerald-100 rounded-xl px-4.5 py-3 text-xs text-emerald-700 font-semibold leading-relaxed max-w-md">
                {t("dashboard.medicalTab.chartSub")}
              </div>
            </div>
          </div>
        )}

        {/* ════ FINANCE TAB ════ */}
        {dashTab === "finance" && (
          <div className="flex flex-col gap-6 text-left relative">
            {/* Subtle logo watermark (Top-Left) */}
            <BrandWatermark program={user?.program} rotation={0} className="top-12 left-12 opacity-[0.12]" />
            
            {/* Total Balance Card indicator */}
            <div className="bg-[#1C1D26] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
              <div className="absolute right-6 top-[-20px] text-[100px] opacity-[0.03] select-none pointer-events-none font-bold">₾</div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/70">{t("dashboard.financeTab.totalComp")}</div>
              <div className="text-3xl sm:text-4xl font-montserrat font-black mt-2 tracking-tight">₾ 28,500</div>
              
              <div className="text-xs font-semibold text-white/70 mt-3 flex flex-wrap gap-x-4 gap-y-1">
                <span>{t("dashboard.financeTab.paid")}: <strong className="text-emerald-400 font-bold">₾ 5,420</strong></span>
                <span>{t("dashboard.financeTab.pending")}: <strong className="text-amber-400 font-bold">₾ 1,950</strong></span>
              </div>
              
              <div className="mt-5.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full w-[19%] ${theme.gradient} rounded-full`} />
              </div>
              <div className="text-[9px] font-bold text-white/45 mt-2 uppercase tracking-wide">{t("dashboard.financeTab.progress", { percent: 19 })}</div>
            </div>

            {/* List of Transactions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <h2 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-5">{t("dashboard.financeTab.title")}</h2>
              <div className="space-y-3">
                {localizedFinances.map((f, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-4 bg-gestlife-grey-20/10 rounded-xl border border-gestlife-grey-20/20">
                    <div className="text-xl shrink-0 leading-none">{f.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-gestlife-grey-80 truncate">{f.type}</div>
                      <div className="text-[10px] font-semibold text-gestlife-grey-40 uppercase tracking-wide mt-0.5">{f.month}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-extrabold text-sm sm:text-base text-gestlife-grey-80">{f.amount}</div>
                      <div className={`text-[10px] font-extrabold uppercase mt-0.5 ${
                        f.status === t("dashboard.financeTab.trans.0.status") ? "text-emerald-500" : f.status === t("dashboard.financeTab.trans.3.status") ? "text-amber-500" : "text-gestlife-grey-40"
                      }`}>
                        {f.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════ SCHEDULE TAB ════ */}
        {dashTab === "schedule" && (
          <div className="flex flex-col gap-6 text-left relative">
            {/* Subtle logo watermark (Bottom-Right) */}
            <BrandWatermark program={user?.program} rotation={0} className="bottom-12 right-12 opacity-[0.12]" />
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-base font-bold text-gestlife-grey-80 uppercase tracking-widest">{t("dashboard.scheduleTab.title")}</h2>
                <div className={`${theme.subBg30} border ${theme.accentBorder20} rounded-full px-4 py-1 text-xs font-bold ${theme.accent}`}>
                  {t("dashboard.scheduleTab.badge", { count: localizedScheduleItems.length })}
                </div>
              </div>

              <div className="space-y-4">
                {localizedScheduleItems.map((s, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-5 rounded-2xl relative overflow-hidden border transition-all ${
                      s.type === "procedure" 
                        ? "border-red-100 bg-red-50/20" 
                        : s.type === "virtual" 
                        ? "border-blue-100 bg-blue-50/20" 
                        : "border-gestlife-grey-20 bg-gestlife-grey-20/10"
                    }`}
                  >
                    {/* Visual left bar border */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${
                      s.type === "procedure" ? "bg-red-500" : s.type === "virtual" ? "bg-blue-500" : "bg-gestlife-grey-40"
                    }`} />

                    {/* Date Block widget */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex flex-col items-center justify-center shrink-0 text-white shadow-sm font-montserrat ${
                      s.type === "procedure"
                        ? "bg-gradient-to-br from-red-400 to-red-600"
                        : s.type === "virtual"
                        ? "bg-gradient-to-br from-blue-400 to-blue-600"
                        : "bg-gestlife-grey-60"
                    }`}>
                      <span className="text-sm font-black leading-none">{s.date.split(" ")[0]}</span>
                      <span className="text-[8px] uppercase font-bold mt-0.5 tracking-wider">{s.date.split(" ")[1]?.substring(0, 3)}</span>
                    </div>

                    {/* Event Detail text */}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-gestlife-grey-80 mb-1">{s.title}</div>
                      <div className="text-[11px] font-semibold text-gestlife-grey-60 leading-relaxed mb-2">
                        ⏰ {s.time} • 📍 {s.location}
                      </div>
                      <span className={`inline-block text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        s.type === "procedure" ? "bg-red-100 text-red-700" : s.type === "virtual" ? "bg-blue-100 text-blue-700" : "bg-gestlife-grey-20 text-gestlife-grey-80"
                      }`}>
                        {s.type === "procedure" ? "🌱 ემბრიო გადატანა" : s.type === "virtual" ? "💻 ვიდეო ზარი" : "🏥 ანალიზები"}
                      </span>
                    </div>

                    {/* Confirmation state buttons */}
                    <div className="shrink-0 self-center">
                      {s.confirmed ? (
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl px-3 py-1.5 text-[10px] font-bold whitespace-nowrap block">
                          ✓ {t("dashboard.scheduleTab.confirmed")}
                        </span>
                      ) : (
                        <button
                          onClick={() => confirmAppointment(i)}
                          className={`px-3 py-2 rounded-xl text-white text-[10px] font-bold shadow-md ${theme.gradient} hover:scale-102 transition-all cursor-pointer whitespace-nowrap`}
                        >
                          {t("dashboard.scheduleTab.confirmBtn")}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════ SUPPORT TAB ════ */}
        {dashTab === "support" && (
          <div className="flex flex-col lg:flex-row gap-6 text-left relative">
            {/* Subtle logo watermark (Top-Right) */}
            <BrandWatermark program={user?.program} rotation={0} className="top-12 right-12 opacity-[0.12]" />
            {/* Chat Box panel */}
            <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gestlife-grey-20/40 flex flex-col overflow-hidden" style={{ minHeight: "500px", height: "calc(100vh - 220px)" }}>
              {/* Header profile segment */}
              <div className={`px-5 py-4 border-b border-gestlife-grey-20/30 flex items-center gap-3.5 ${theme.subBg10}`}>
                <div className="relative shrink-0">
                  <div className={`w-11 h-11 rounded-full ${theme.gradient} flex items-center justify-center text-white font-extrabold text-sm border-2 border-white shadow-sm`}>
                    {SURROGATE.coordinator.avatar}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-gestlife-grey-80 leading-none">{SURROGATE.coordinator.name}</div>
                  <div className="text-[10px] text-emerald-600 font-extrabold tracking-wide mt-1">{t("dashboard.supportTab.onlineText")}</div>
                </div>
                <div className={`ml-auto text-[10px] font-bold ${theme.accent} bg-white px-3 py-1 rounded-full border ${theme.accentBorderSub30} uppercase tracking-widest`}>
                  {t("dashboard.supportTab.coordinatorBadge")}
                </div>
              </div>

              {/* Chat messages Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3.5 bg-[#FBFBFF]">
                {localizedChat.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2.5 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {msg.from === "coordinator" && (
                      <div className={`w-6.5 h-6.5 rounded-full ${theme.gradient} text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-sm border border-white`}>
                        LL
                      </div>
                    )}
                    <div className={`max-w-[70%] px-4.5 py-3 text-xs sm:text-sm leading-relaxed shadow-sm font-medium ${
                      msg.from === "user"
                        ? `${theme.gradient} text-white rounded-[18px_18px_4px_18px]`
                        : "bg-white text-gestlife-grey-80 rounded-[18px_18px_18px_4px] border border-gestlife-grey-20/40"
                    }`}>
                      <div>{msg.text}</div>
                      <div className={`text-[9px] font-bold mt-1.5 opacity-60 ${msg.from === "user" ? "text-right" : "text-left"}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}

                {chatTyping && (
                  <div className="flex items-end gap-2.5">
                    <div className={`w-6.5 h-6.5 rounded-full ${theme.gradient} text-white flex items-center justify-center text-[10px] font-black shrink-0`}>
                      LL
                    </div>
                    <div className="bg-white rounded-[18px_18px_18px_4px] border border-gestlife-grey-20/40 shadow-sm px-4 py-3 flex gap-1 items-center">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${theme.accentBg} animate-bounce`}
                          style={{ animationDelay: `${dot * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input panel */}
              <div className="px-4 py-3 border-t border-gestlife-grey-20/30 flex gap-3 items-center bg-white">
                <input
                  ref={chatInputRef}
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder={t("dashboard.supportTab.placeholder")}
                  className={`flex-1 px-4.5 py-2.5 rounded-full border border-gestlife-grey-20 text-xs sm:text-sm font-semibold text-gestlife-grey-80 focus:outline-none ${theme.focusBorder50} bg-[#FBFBFF] transition-colors`}
                />
                <button
                  onClick={sendMessage}
                  disabled={!chatInput.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm shrink-0 transition-all ${
                    chatInput.trim()
                      ? `${theme.gradient} shadow-md ${theme.shadow} hover:scale-105 active:scale-95 cursor-pointer`
                      : "bg-gestlife-grey-20 text-gestlife-grey-45 cursor-default"
                  }`}
                >
                  ➤
                </button>
              </div>
            </div>

            {/* Sidebar quick support contacts info */}
            <div className="w-full lg:w-60 shrink-0 flex flex-col gap-4">
              {/* Emergency info card */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-gestlife-grey-20/40">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-gestlife-grey-40 mb-3 flex items-center gap-1.5">
                  <span>📞</span> {t("dashboard.supportTab.emergency")}
                </div>
                {[
                  { icon: "📱", label: t("dashboard.supportTab.contacts.phone"), val: "+995 32 2XX XXXX" },
                  { icon: "📧", label: t("dashboard.supportTab.contacts.email"), val: "lile@gestlife.com" },
                  { icon: "💬", label: t("dashboard.supportTab.contacts.whatsapp"), val: "+995 577 XXX XXX" },
                ].map((c, i) => (
                  <div key={i} className="mb-3.5 last:mb-0">
                    <div className="text-[9px] font-bold text-gestlife-grey-45 uppercase tracking-wide mb-0.5">{c.icon} {c.label}</div>
                    <div className="text-xs font-extrabold text-gestlife-grey-80">{c.val}</div>
                  </div>
                ))}
              </div>

              {/* copies copy request button lists */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-gestlife-grey-20/40">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-gestlife-grey-40 mb-3">
                  ❓ {t("dashboard.supportTab.quickRequests")}
                </div>
                {[
                  t("dashboard.supportTab.requests.contract"),
                  t("dashboard.supportTab.requests.medical"),
                  t("dashboard.supportTab.requests.finance"),
                  t("dashboard.supportTab.requests.emergency"),
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`block w-full text-left px-3 py-2.5 mb-2 last:mb-0 rounded-xl border border-gestlife-grey-20 ${theme.hoverBorder} bg-gestlife-grey-20/5 ${theme.hoverBg5} text-xs font-bold text-gestlife-grey-60 ${theme.hoverText} transition-all cursor-pointer`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
