// ════════════════════════════════════════════════════════════════
// Gestlife — Brand-Aligned FemTech Surrogacy Portal (2025 Guidelines)
// Refactored with Tailwind CSS v4 & Brand Gradients
// ════════════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";

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
// QUIZ DATA
// ════════════════════════════════════════════════════
const QUIZ_QUESTIONS = [
  {
    id: 1, question: "რა ასაკი გაქვთ?", icon: "🎂",
    options: [
      { label: "25–35 წელი", value: "ok", score: 1 },
      { label: "36–42 წელი", value: "ok", score: 1 },
      { label: "43–50 წელი", value: "review", score: 0 },
      { label: "50+ წელი", value: "fail", score: -1 },
    ],
  },
  {
    id: 2, question: "თქვენი ჯანმრთელობის სტატუსი?", icon: "🏃‍♀️",
    options: [
      { label: "შესანიშნავი — BMI 18–24", value: "ok", score: 1 },
      { label: "კარგი — BMI 25–28", value: "ok", score: 1 },
      { label: "საშუალო — BMI 29–32", value: "review", score: 0 },
      { label: "განსახილველია — BMI 32+", value: "review", score: 0 },
    ],
  },
  {
    id: 3, question: "გყავთ თუ არა საკუთარი შვილი?", icon: "👨‍👩‍👧‍👦",
    options: [
      { label: "დიახ, 1 ან მეტი", value: "ok", score: 1 },
      { label: "არა, მაგრამ გვინდა", value: "ok", score: 1 },
      { label: "გვაქვს სამედიცინო მდგომარეობა", value: "review", score: 0 },
    ],
  },
  {
    id: 4, question: "სამართლებრივი ფონი", icon: "📋",
    options: [
      { label: "სრულიად სუფთა", value: "ok", score: 1 },
      { label: "მცირე ადმინ. დარღვევა", value: "review", score: 0 },
      { label: "სისხლის სამართლის სარჩელი", value: "fail", score: -1 },
    ],
  },
];

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

const STAGES = [
  { label: "სკრინინგი", icon: "🔍", done: true },
  { label: "შეთანხმება", icon: "📄", done: true },
  { label: "სინქრონიზაცია", icon: "💉", done: true },
  { label: "ემბრიო გადატანა", icon: "🌱", done: false, active: true },
  { label: "ორსულობის დადასტურება", icon: "🤰", done: false },
  { label: "ტრიმესტრი I–III", icon: "👶", done: false },
  { label: "მშობიარობა", icon: "🏥", done: false },
];

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

function HeartIcon({ className = "w-5 h-5", fill = "none" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

// ════════════════════════════════════════════════════
// BRAND GEOMETRIC RESOURCE — The Pregnancy-Profile Wave
// ════════════════════════════════════════════════════
function BellyWaveBottom({ className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`}>
      <svg className="relative block w-full h-[80px] sm:h-[120px] md:h-[160px]" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Layer 1 (Subtone Blue) */}
        <path d="M0,96 C240,144 480,168 720,112 C960,56 1200,32 1440,80 L1440,160 L0,160 Z" fill="#79B0F5" opacity="0.15" />
        {/* Layer 2 (Subtone Pink) */}
        <path d="M0,128 C280,168 560,128 840,96 C1120,64 1280,112 1440,128 L1440,160 L0,160 Z" fill="#F26BC1" opacity="0.2" />
        {/* Layer 3 (Primary Gradient 40deg) */}
        <path d="M0,135 C320,165 640,110 960,135 C1120,150 1280,135 1440,140 L1440,160 L0,160 Z" fill="url(#brand-gradient-element)" />
      </svg>
    </div>
  );
}

function BellyWaveTop({ className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none rotate-180 ${className}`}>
      <svg className="relative block w-full h-[50px] sm:h-[80px]" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 C320,110 640,110 960,60 C1120,35 1280,15 1440,30 L1440,120 L0,120 Z" fill="url(#brand-gradient-element)" />
      </svg>
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
    <div className="min-h-screen flex flex-col font-opensans bg-[#FCFBFE] text-gestlife-grey-80 select-none">
      {/* Brand Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="brand-gradient-element" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F26BC1" />
            <stop offset="100%" stopColor="#79B0F5" />
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
  );
}

// ════════════════════════════════════════════════════
// PHASE 1 — PUBLIC BRANDED HOMEPAGE
// ════════════════════════════════════════════════════
function SurrogacyHomepage({ onEnterDashboard }) {
  const [program, setProgram] = useState("georgia");
  const [transitioning, setTransitioning] = useState(false);
  const [openMyth, setOpenMyth] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizScore, setQuizScore] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const quizRef = useRef(null);

  const data = PROGRAMS[program];

  const switchProgram = (newProg) => {
    if (newProg === program) return;
    setTransitioning(true);
    setTimeout(() => {
      setProgram(newProg);
      setOpenMyth(null);
      setQuizStep(0);
      setQuizAnswers([]);
      setQuizScore(0);
      setFormSubmitted(false);
      setTransitioning(false);
    }, 250);
  };

  const handleAnswer = (option) => {
    setQuizAnswers((prev) => [...prev, option]);
    setQuizScore((prev) => prev + option.score);
    setQuizStep((prev) => (prev < 4 ? prev + 1 : 5));
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.phone && formData.password) {
      setFormSubmitted(true);
    }
  };

  const getQualification = () => {
    if (quizScore >= 3) return { status: "qualified", label: "კვალიფიცირებული ხართ! ✅", cls: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (quizScore >= 1) return { status: "review", label: "განსახილველი შემთხვევა 📋", cls: "text-amber-700 bg-amber-50 border-amber-200" };
    return { status: "fail", label: "ამ ეტაპზე ვერ ვაგრძელებთ ❌", cls: "text-red-700 bg-red-50 border-red-200" };
  };

  const currentQuestion = QUIZ_QUESTIONS[quizStep - 1];
  const qualification = quizStep === 5 ? getQualification() : null;

  return (
    <div className="flex-1 flex flex-col">
      {/* ── HEADER (Glassmorphic) ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gestlife-grey-20/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Official Logo Image */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => switchProgram("georgia")}>
            <img src="/logo_cropped.png" alt="Gestlife Logo" className="h-9 sm:h-10 w-auto hover:scale-[1.02] transition-transform" />
          </div>

          {/* Program Segmented Control Selector */}
          <div className="flex bg-gestlife-grey-20/50 rounded-full p-1 border border-gestlife-grey-20/30 shadow-inner">
            {Object.values(PROGRAMS).map((prog) => (
              <button
                key={prog.id}
                onClick={() => switchProgram(prog.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  program === prog.id
                    ? "bg-white shadow-md text-gestlife-grey-80 scale-105"
                    : "text-gestlife-grey-60 hover:text-gestlife-grey-80"
                }`}
              >
                <span className="text-base">{prog.flag}</span>
                <span className="hidden sm:inline font-montserrat">{prog.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-5 sm:gap-7 shrink-0">
            <a href="#myths" className="hidden md:inline text-sm font-semibold text-gestlife-grey-60 hover:text-gestlife-grey-80 transition-colors">მითები</a>
            <a href="#quiz" className="hidden md:inline text-sm font-semibold text-gestlife-grey-60 hover:text-gestlife-grey-80 transition-colors">კვალიფიკაცია</a>
            <button
              onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(6); }}
              className="px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-md bg-brand-gradient hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              შესვლა
            </button>
          </nav>
        </div>
      </header>

      {/* Main content wrapper with transitions */}
      <main className={`flex-1 transition-all duration-300 ${transitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}>
        
        {/* ── HERO SECTION ── */}
        <section className="relative bg-gradient-to-b from-[#FCFBFE] to-[#F5F5FA] pt-14 pb-20 overflow-hidden">
          {/* Subtle logo watermark (Top-Left) */}
          <img src="/logo_symbol.png" alt="" className="absolute top-10 left-10 w-44 sm:w-60 opacity-[0.025] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
          {/* Pregnancy Belly Wave watermark in background */}
          <div className="absolute right-[-100px] top-[-50px] opacity-[0.04] select-none pointer-events-none w-[600px] h-[800px] text-gestlife-pink rotate-45">
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
                    <div className="text-2xl sm:text-3xl font-montserrat font-black text-brand-gradient">{s.value}</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-gestlife-grey-60 mt-1 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(1); }}
                  className="px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide shadow-xl bg-brand-gradient hover:shadow-2xl hover:scale-105 active:scale-98 transition-all cursor-pointer"
                >
                  ტესტის დაწყება →
                </button>
                <button 
                  onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(0); }}
                  className="px-7 py-3.5 rounded-full border-2 border-gestlife-grey-20 text-gestlife-grey-80 font-bold text-sm hover:bg-white hover:border-gestlife-pink/40 hover:shadow-sm transition-all cursor-pointer"
                >
                  გაიგეთ მეტი
                </button>
              </div>

              {/* Legal Notice */}
              <div className={`border rounded-xl p-4 text-xs font-medium leading-relaxed bg-white/60 backdrop-blur-sm shadow-sm border-l-4 border-l-[#F26BC1] max-w-xl`}>
                <span className="font-bold text-gestlife-grey-80">⚖️ სამართლებრივი ინფო:</span> {data.legalNote}
              </div>
            </div>

            {/* Video Preview Column */}
            <div className="relative">
              {/* Outer frame wave accent */}
              <div className="absolute -inset-1.5 rounded-3xl bg-brand-gradient opacity-20 blur-lg -z-10 animate-pulse" />
              
              <div
                className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gestlife-grey-80 flex items-center justify-center cursor-pointer group relative"
                onClick={() => setVideoPlaying(!videoPlaying)}
              >
                {/* Visual cover gradient overlay */}
                <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#F26BC1] to-[#79B0F5] transition-opacity group-hover:opacity-30 z-0" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6">
                  {videoPlaying ? (
                    <div className="text-center space-y-4">
                      <div className="text-5xl animate-bounce">🎬</div>
                      <div className="text-xs font-bold tracking-widest uppercase bg-black/40 rounded-full px-4 py-1.5">ვიდეო იტვირთება...</div>
                      <div className="text-[11px] text-white/70">დემო რეჟიმი • Gestlife Media Embed</div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg bg-brand-gradient opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all">
                        <span className="translate-x-0.5 text-xl">▶</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base leading-snug">
                          {program === "georgia" ? "საქართველოს პროგრამის მიმოხილვა" : "საბერძნეთის პროგრამის მიმოხილვა"}
                        </div>
                        <div className="text-[10px] text-white/70 mt-1 uppercase tracking-wide">3:45 წთ • ქართული სუბტიტრები</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">⚕️ სამედიცინო</span>
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">⚖️ სამართლებრივი</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transition wave at the bottom */}
          <BellyWaveBottom className="absolute bottom-0 left-0" />
        </section>

        {/* ── MYTHS VS TRUTHS SECTION (White background space) ── */}
        <section id="myths" className="py-20 px-4 bg-white relative overflow-hidden">
          {/* Subtle logo watermark (Bottom-Right) */}
          <img src="/logo_symbol.png" alt="" className="absolute bottom-10 right-10 w-44 sm:w-60 opacity-[0.025] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3.5">
              <div className="inline-block px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gestlife-pink-sub/30 text-gestlife-grey-80 border border-gestlife-pink-sub/20">
                {data.flag} FACT CHECK
              </div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-gestlife-grey-80">მითები vs. სინამდვილე</h2>
              <p className="text-gestlife-grey-60 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                ბარათზე დაწკაპუნებით გაიგებთ სიმართლეს {program === "georgia" ? "საქართველოს" : "საბერძნეთის"} სუროგაციის შესახებ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.myths.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                    openMyth === idx ? "border-gestlife-pink/60 bg-gestlife-pink-sub/5" : "border-gestlife-grey-20/60 hover:border-gestlife-grey-40/60"
                  }`}
                  onClick={() => setOpenMyth(openMyth === idx ? null : idx)}
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="text-3xl mt-1 shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-gestlife-grey-40 mb-1">❌ მითი</div>
                          <h3 className="font-montserrat font-bold text-gestlife-grey-80 text-base leading-snug">"{item.myth}"</h3>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shrink-0 transition-transform duration-300 bg-brand-gradient ${openMyth === idx ? "rotate-180" : ""}`}>
                          ▼
                        </div>
                      </div>
                      {openMyth === idx && (
                        <div className="mt-4 pt-3 border-t border-gestlife-grey-20/30 space-y-2">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">✅ სინამდვილე</div>
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
          <img src="/logo_symbol.png" alt="" className="absolute top-20 right-10 w-44 sm:w-60 opacity-[0.025] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
          {/* Top wave spacer */}
          <BellyWaveTop className="absolute top-0 left-0" />

          <div className="max-w-2xl mx-auto px-4 relative z-10 mt-8">
            <div className="text-center mb-10 space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-brand-gradient text-white">
                ⏱ 30 წამი
              </div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-gestlife-grey-80">კვალიფიკაციის ტესტი</h2>
              <p className="text-gestlife-grey-60 font-medium text-sm sm:text-base">{data.quizIntro}</p>
            </div>

            {/* Quiz Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gestlife-grey-20/40 overflow-hidden transition-all duration-300">
              {/* Progress bar */}
              {quizStep >= 1 && quizStep <= 4 && (
                <div className="h-1.5 bg-gestlife-grey-20/30">
                  <div
                    className="h-full bg-brand-gradient transition-all duration-500 rounded-r-full"
                    style={{ width: `${(quizStep / 4) * 100}%` }}
                  />
                </div>
              )}

              <div className="p-7 sm:p-10">
                {/* Step 0: Intro */}
                {quizStep === 0 && (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-brand-gradient text-white text-3xl mx-auto shadow-md">
                      ✨
                    </div>
                    <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">მზად ხართ ტესტისთვის?</h3>
                    <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                      გაიარეთ 4 მარტივი კითხვა, რათა შეაფასოთ თქვენი პირველადი კვალიფიკაცია {program === "georgia" ? "საქართველოს" : "საბერძნეთის"} სუროგაციის პროგრამისთვის
                    </p>
                    <ul className="text-left space-y-3.5 max-w-xs mx-auto py-2 font-medium text-sm text-gestlife-grey-80">
                      {["ასაკობრივი ზღვარი", "ჯანმრთელობის ინდექსი / BMI", "ოჯახური მდგომარეობა", "სამართლებრივი ფონი"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-5.5 h-5.5 rounded-full text-white text-[10px] flex items-center justify-center font-bold bg-brand-gradient shrink-0">
                            {i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setQuizStep(1)}
                      className="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all bg-brand-gradient cursor-pointer"
                    >
                      ტესტის დაწყება →
                    </button>
                    <p className="text-[10px] text-gestlife-grey-40 font-semibold uppercase tracking-wide">⚕️ საინფორმაციო მიზნებისთვის • სრულიად უფასო</p>
                  </div>
                )}

                {/* Step 1-4: Questions */}
                {quizStep >= 1 && quizStep <= 4 && currentQuestion && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs font-bold text-gestlife-grey-40 uppercase tracking-widest">
                      <span>კითხვა {quizStep} / 4</span>
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
                          className="w-full text-left px-5 py-4 rounded-xl border border-gestlife-grey-20 hover:bg-gestlife-pink-sub/5 hover:border-gestlife-pink/50 transition-all text-gestlife-grey-80 font-bold text-sm cursor-pointer flex items-center justify-between"
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
                      <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80 mb-3">ტესტის შედეგი</h3>
                      <div className={`inline-block px-6 py-2.5 rounded-full border font-bold text-base uppercase tracking-wide ${qualification.cls}`}>
                        {qualification.label}
                      </div>
                    </div>
                    {qualification.status !== "fail" ? (
                      <div className="space-y-5">
                        <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                          {qualification.status === "qualified"
                            ? "გილოცავთ! თქვენ პირველადი კვალიფიკაციის კრიტერიუმებს აკმაყოფილებთ. შეავსეთ სარეგისტრაციო ფორმა თქვენი პორტალის გასააქტიურებლად."
                            : "თქვენი მონაცემები საჭიროებს ინდივიდუალურ შეფასებას. გთხოვთ გააგრძელოთ რეგისტრაცია, რათა ჩვენი კოორდინატორი დაგიკავშირდეთ."}
                        </p>
                        <button
                          onClick={() => setQuizStep(6)}
                          className="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg bg-brand-gradient hover:scale-102 active:scale-98 transition-all cursor-pointer"
                        >
                          რეგისტრაციის გაგრძელება →
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <p className="text-gestlife-grey-60 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                          სამწუხაროდ, პირველადი კრიტერიუმებით ვერ ვაგრძელებთ პროცესს, თუმცა ჩვენს სპეციალისტებს შეუძლიათ მოგაწოდონ დამატებითი დეტალები.
                        </p>
                        <button
                          className="w-full py-3.5 rounded-2xl border-2 border-gestlife-grey-20 text-gestlife-grey-80 font-bold hover:bg-gestlife-grey-20/10 transition-all cursor-pointer"
                          onClick={() => { setQuizStep(0); setQuizAnswers([]); setQuizScore(0); }}
                        >
                          ხელახლა ცდა
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
                          <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">პორტალის აქტივაცია</h3>
                          <p className="text-gestlife-grey-60 text-xs font-semibold uppercase tracking-wider">{data.flag} {data.nameEn} — რეგისტრაცია</p>
                        </div>
                        
                        <div className="space-y-4 text-left">
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">სრული სახელი</label>
                            <input
                              type="text"
                              placeholder="მაგ: ნინო გელაშვილი"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none focus:border-gestlife-pink transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">ტელეფონის ნომერი</label>
                            <input
                              type="tel"
                              placeholder="+995 5XX XXX XXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none focus:border-gestlife-pink transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gestlife-grey-60 uppercase tracking-wide mb-1.5">პაროლი</label>
                            <input
                              type="password"
                              placeholder="მინ. 8 სიმბოლო"
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gestlife-grey-20 focus:outline-none focus:border-gestlife-pink transition-colors font-bold text-sm text-gestlife-grey-85 placeholder:text-gestlife-grey-40"
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleFormSubmit}
                          disabled={!formData.name || !formData.phone || !formData.password}
                          className="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg bg-brand-gradient hover:scale-102 active:scale-98 disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed transition-all cursor-pointer mt-4"
                        >
                          ანგარიშის შექმნა და შესვლა →
                        </button>
                        
                        <p className="text-[10px] text-gestlife-grey-40 font-semibold leading-relaxed text-center">
                          🔒 მონაცემები დაცულია GDPR-ის შესაბამისად • ⚖️ რეგისტრაციით ეთანხმებით წესებს
                        </p>
                      </>
                    ) : (
                      <div className="text-center space-y-6 py-4">
                        <div className="text-6xl animate-bounce">🎊</div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-gestlife-grey-80">მოგესალმებით, {formData.name.split(" ")[0]}!</h3>
                          <p className="text-gestlife-grey-60 font-medium text-sm mt-1">
                            თქვენი ანგარიში წარმატებით გააქტიურდა.
                          </p>
                        </div>
                        <button
                          onClick={() => onEnterDashboard({ name: formData.name, program: data.id })}
                          className="w-full py-4 rounded-2xl text-white font-bold text-base shadow-xl bg-brand-gradient hover:scale-102 transition-all cursor-pointer"
                        >
                          🚀 Dashboard-ზე გადასვლა
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
              <div className="flex items-center gap-2 text-white font-montserrat font-extrabold text-lg">
                <span className="w-6.5 h-6.5 rounded-full flex items-center justify-center bg-brand-gradient text-white text-xs">
                  ♥
                </span>
                <span>Gestlife Platform</span>
              </div>
              <p className="text-sm font-medium text-gestlife-grey-40 leading-relaxed">
                FemTech პლატფორმა — საერთაშორისო სამედიცინო და იურიდიული მხარდაჭერა სუროგაციის მიმართულებით. INVESTMEDICAL-ის წევრი ჯგუფი.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-sm uppercase tracking-wider">სამართლებრივი</div>
              <ul className="text-sm font-medium text-gestlife-grey-40 space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">კონფიდენციალურობის პოლიტიკა</a></li>
                <li><a href="#" className="hover:text-white transition-colors">გამოყენების წესები</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR დაცვა</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-sm uppercase tracking-wider">კონტაქტი</div>
              <ul className="text-sm font-medium text-gestlife-grey-40 space-y-2">
                <li>📧 info@gestlife.com</li>
                <li>📞 +995 32 2XX XXXX</li>
                <li>🏥 თბილისი / ათენი / მადრიდი</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gestlife-grey-60/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-semibold text-gestlife-grey-40">
              © {new Date().getFullYear()} Gestlife. All rights reserved.
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
  const [dashTab, setDashTab] = useState("overview");
  
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
      const resp = AUTO_RESPONSES[Math.floor(Math.random() * AUTO_RESPONSES.length)];
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

  const DASH_TABS_CONFIG = [
    { id: "overview", label: "მიმოხილვა", icon: <HomeIcon /> },
    { id: "profile", label: "პროფილი", icon: <UserIcon /> },
    { id: "medical", label: "სამედ. შედეგები", icon: <MedicalIcon /> },
    { id: "finance", label: "ფინანსები", icon: <FinanceIcon /> },
    { id: "schedule", label: "განრიგი", icon: <CalendarIcon /> },
    { id: "support", label: "მხარდაჭერა", icon: <ChatIcon /> },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-screen bg-[#F8F9FD]">
      
      {/* ── SIDEBAR (Desktop) ── */}
      <aside className="w-64 bg-white border-r border-gestlife-grey-20/40 flex-col justify-between hidden md:flex shrink-0">
        <div>
          {/* Logo brand segment */}
          <div className="p-5 border-b border-gestlife-grey-20/30 flex items-center justify-center">
            <img src="/logo_cropped.png" alt="Gestlife Logo" className="h-8 w-auto hover:scale-[1.02] transition-transform" />
          </div>

          {/* Mini profile header */}
          <div className="p-5 bg-gestlife-pink-sub/10 border-b border-gestlife-grey-20/20 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white font-extrabold text-base mx-auto mb-2.5 border-2 border-white shadow-sm">
              {displayName[0] + (displayName.split(" ")[1]?.[0] || "")}
            </div>
            <div className="font-bold text-sm text-gestlife-grey-80 leading-none">{displayName}</div>
            <div className="text-[10px] font-bold text-gestlife-grey-60 mt-1.5 bg-white py-1 px-2.5 rounded-full inline-block border border-gestlife-grey-20/40">
              {user?.program === "greece" ? "🇬🇷 საბერძნეთი" : "🇬🇪 საქართველო"}
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
                    ? "bg-brand-gradient text-white shadow-md shadow-gestlife-pink/20"
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
            🚪 გამოსვლა
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
              dashTab === tab.id ? "text-gestlife-pink" : "text-gestlife-grey-40"
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
        <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-2xl border border-gestlife-grey-20/30 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold">
              {SURROGATE.avatar}
            </div>
            <div className="text-left">
              <div className="font-bold text-xs text-gestlife-grey-80">{displayName}</div>
              <div className="text-[9px] font-bold text-gestlife-grey-40 uppercase">პორტალი</div>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100"
          >
            გამოსვლა
          </button>
        </div>

        {/* ════ OVERVIEW TAB ════ */}
        {dashTab === "overview" && (
          <div className="flex flex-col gap-6 text-left">
            {/* Subtle logo watermark (Bottom-Right) */}
            <img src="/logo_symbol.png" alt="" className="absolute bottom-10 right-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            {/* Welcome Dashboard Banner card */}
            <div className="bg-brand-gradient rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
              {/* Flag backdrop indicator */}
              <div className="absolute right-[-20px] bottom-[-20px] text-[120px] sm:text-[160px] opacity-[0.08] select-none pointer-events-none leading-none rotate-12">
                {user?.program === "greece" ? "🇬🇷" : "🇬🇪"}
              </div>
              <div className="relative z-10 max-w-lg">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/80">პროგრამის პანელი</div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold mt-1.5 mb-2 leading-tight">
                  მოგესალმებით, {displayFirst}! ✨
                </h1>
                <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed">
                  თქვენი ორსულობის მოგზაურობა აქტიურ რეჟიმშია. მიმდინარე ეტაპი: <strong className="underline decoration-wavy decoration-white/50">{SURROGATE.stage}</strong>. ყველა კლინიკური მაჩვენებელი იდეალურ ნორმაშია.
                </p>
              </div>
            </div>

            {/* Stages Horizontal Timeline track */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gestlife-grey-20/40">
              <h2 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-6">📍 პროგრამის მიმდინარე ეტაპები</h2>
              <div className="flex items-center overflow-x-auto pb-4 gap-0 scrollbar-thin">
                {STAGES.map((stage, i) => (
                  <div key={i} className="flex items-center shrink-0">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all border ${
                        stage.done
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
                          : stage.active
                          ? "bg-brand-gradient border-transparent text-white ring-4 ring-gestlife-pink/20 shadow-md animate-pulse"
                          : "bg-gestlife-grey-20/40 border-transparent text-gestlife-grey-45"
                      }`}>
                        {stage.done ? "✓" : stage.icon}
                      </div>
                      <span className={`text-[9px] font-bold text-center max-w-[64px] leading-tight ${
                        stage.active ? "text-gestlife-pink" : stage.done ? "text-emerald-600" : "text-gestlife-grey-40"
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                    {i < STAGES.length - 1 && (
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
                    <span>📅</span> შემდეგი ვიზიტი
                  </div>
                  <h3 className="font-montserrat font-bold text-sm sm:text-base text-gestlife-grey-80 mb-2">{scheduleItems[0].title}</h3>
                  <div className="space-y-1 text-xs font-semibold text-gestlife-grey-60">
                    <div>📆 თარიღი: {scheduleItems[0].date} — {scheduleItems[0].time}</div>
                    <div>📍 მისამართი: {scheduleItems[0].location}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gestlife-grey-20/20 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gestlife-grey-40 uppercase">სტატუსი:</span>
                  {scheduleItems[0].confirmed ? (
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl px-4.5 py-1.5 text-xs font-bold flex items-center gap-1">
                      <span>✓</span> დადასტურებულია
                    </span>
                  ) : (
                    <button
                      onClick={() => confirmAppointment(0)}
                      className="px-5 py-2 rounded-xl text-white text-xs font-bold shadow-md bg-brand-gradient hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    >
                      ვიზიტის დადასტურება
                    </button>
                  )}
                </div>
              </div>

              {/* Personal Coordinator Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gestlife-grey-20/40 flex flex-col justify-between gap-4">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gestlife-grey-40 mb-4 flex items-center gap-1.5">
                    <span>💬</span> პირადი კოორდინატორი
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-full bg-brand-gradient flex items-center justify-center text-white font-extrabold text-base border-2 border-white shadow-md">
                        {SURROGATE.coordinator.avatar}
                      </div>
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base text-gestlife-grey-80 leading-none">{SURROGATE.coordinator.name}</div>
                      <div className="text-xs text-gestlife-grey-60 mt-1 font-semibold">{SURROGATE.coordinator.title}</div>
                      <div className="text-[10px] text-emerald-500 font-extrabold mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ონლაინ
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setDashTab("support")}
                  className="w-full py-2.5 rounded-xl border border-gestlife-pink text-gestlife-pink hover:bg-gestlife-pink-sub/10 text-xs font-bold tracking-wide transition-all cursor-pointer uppercase"
                >
                  ჩატის გახსნა
                </button>
              </div>
            </div>

            {/* Quick Metrics stats widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "🧬", label: "ბოლო ანალიზი", value: "ნორმა", sub: "17 მაი 2025", border: "border-emerald-200/80 bg-emerald-50/10", valCls: "text-emerald-600" },
                { icon: "💳", label: "ბოლო გადარიცხვა", value: "₾ 1,800", sub: "მაისი 2025", border: "border-gestlife-pink-sub/80 bg-gestlife-pink-sub/5", valCls: "text-gestlife-pink" },
                { icon: "📅", label: "ვიზიტამდე დარჩა", value: "4 დღე", sub: "22 მაი 10:00", border: "border-blue-200/80 bg-blue-50/10", valCls: "text-gestlife-blue" },
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
          <div className="flex flex-col gap-6 text-left">
            {/* Subtle logo watermark (Top-Right) */}
            <img src="/logo_symbol.png" alt="" className="absolute top-24 right-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gestlife-grey-20/40">
              
              {/* Profile Card Header banner */}
              <div className="bg-brand-gradient p-6 sm:p-8 text-white relative">
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-2xl border-4 border-white/30 shrink-0 shadow-md">
                    {SURROGATE.avatar}
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl sm:text-2xl font-montserrat font-extrabold leading-none">{displayName}</h1>
                    <div className="text-xs text-white/80 font-bold mt-1.5 uppercase tracking-wider">სუროგატი დედა • {SURROGATE.program}</div>
                    <div className="mt-3 inline-block bg-white/25 rounded-full px-3.5 py-1 text-white text-[10px] font-extrabold uppercase tracking-wide">
                      🟢 ეტაპი: {SURROGATE.stage}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile details grid fields */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "სრული სახელი", value: displayName, icon: "👤" },
                    { label: "დაბადების თარიღი", value: "15 მარტი 1992 (33 წელი)", icon: "🎂" },
                    { label: "ტელეფონის ნომერი", value: user?.phone || "+995 599 123 456", icon: "📱" },
                    { label: "ელ-ფოსტა", value: "nino.gelashvili@email.com", icon: "📧" },
                    { label: "ფაქტობრივი მისამართი", value: "თბილისი, ვაკე, ჭავჭავაძის გამზ. 12", icon: "🏠" },
                    { label: "სამოქალაქო სტატუსი", value: "გათხოვილი", icon: "💍" },
                    { label: "შვილები", value: "2 (7 და 10 წელი)", icon: "👨‍👩‍👧‍👦" },
                    { label: "სისხლის ჯგუფი", value: "A(II) Rh+", icon: "🩸" },
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
                <div className="mt-6 bg-gestlife-pink-sub/10 border border-gestlife-pink-sub/30 rounded-2xl p-5">
                  <div className="text-xs font-bold text-gestlife-pink uppercase tracking-widest mb-3.5">📋 ხელშეკრულების მონაცემები</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "დოკუმენტის №", value: "ARG-2025-0472" },
                      { label: "გაფორმების თარიღი", value: "12 მარტი 2025" },
                      { label: "პროგრამის პაკეტი", value: "საქართველო — სრული" },
                      { label: "სამედიცინო კლინიკა", value: "ReproMed, თბილისი" },
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
          <div className="flex flex-col gap-6 text-left">
            {/* Subtle logo watermark (Bottom-Left) */}
            <img src="/logo_symbol.png" alt="" className="absolute bottom-10 left-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-base font-bold text-gestlife-grey-80 uppercase tracking-widest">🧬 სამედიცინო შეფასებები & კვლევები</h2>
                <div className="bg-emerald-50 border border-emerald-100 rounded-full px-4.5 py-1.5 text-xs font-bold text-emerald-600">
                  ✅ {MEDICAL_RESULTS.length} ჩანაწერი — ნორმის ფარგლებში
                </div>
              </div>

              <div className="space-y-3">
                {MEDICAL_RESULTS.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gestlife-grey-20/10 rounded-xl border border-gestlife-grey-20/20 hover:border-gestlife-pink/30 hover:bg-gestlife-pink-sub/5 transition-all"
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
              <h3 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-6">📊 ენდომეტრიუმის დინამიკა (მმ)</h3>
              
              <div className="flex items-end justify-between gap-4 h-28 max-w-sm pt-4 border-b border-gestlife-grey-20/30 pb-1.5">
                {[
                  { val: 7.2, date: "28 მარ", active: false },
                  { val: 8.5, date: "12 აპრ", active: false },
                  { val: 9.1, date: "28 აპრ", active: false },
                  { val: 10.2, date: "14 მაი", active: true },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1">
                    <span className={`text-[10px] font-black ${bar.active ? "text-gestlife-pink" : "text-gestlife-grey-60"}`}>{bar.val} მმ</span>
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        bar.active 
                          ? "bg-brand-gradient shadow-md" 
                          : "bg-gestlife-grey-20"
                      }`}
                      style={{ height: `${(bar.val / 12) * 85}px` }}
                    />
                    <span className="text-[10px] font-bold text-gestlife-grey-40 mt-1">{bar.date}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-emerald-50/50 border border-emerald-100 rounded-xl px-4.5 py-3 text-xs text-emerald-700 font-semibold leading-relaxed max-w-md">
                🎉 <strong>10.2 მმ</strong> წარმოადგენს იდეალურ სამედიცინო სისქეს ემბრიონის გადატანისთვის (კლინიკური დიაპაზონი: 8–14 მმ).
              </div>
            </div>
          </div>
        )}

        {/* ════ FINANCE TAB ════ */}
        {dashTab === "finance" && (
          <div className="flex flex-col gap-6 text-left">
            {/* Subtle logo watermark (Top-Left) */}
            <img src="/logo_symbol.png" alt="" className="absolute top-10 left-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            
            {/* Total Balance Card indicator */}
            <div className="bg-[#1C1D26] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
              <div className="absolute right-6 top-[-20px] text-[100px] opacity-[0.03] select-none pointer-events-none font-bold">₾</div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/70">კომპენსაციის ჯამური მოცულობა</div>
              <div className="text-3xl sm:text-4xl font-montserrat font-black mt-2 tracking-tight">₾ 28,500</div>
              
              <div className="text-xs font-semibold text-white/70 mt-3 flex flex-wrap gap-x-4 gap-y-1">
                <span>გადახდილია: <strong className="text-emerald-400 font-bold">₾ 5,420</strong></span>
                <span>მომლოდინე: <strong className="text-amber-400 font-bold">₾ 1,950</strong></span>
              </div>
              
              <div className="mt-5.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[19%] bg-brand-gradient rounded-full" />
              </div>
              <div className="text-[9px] font-bold text-white/45 mt-2 uppercase tracking-wide">პროგრესი: 19% დასრულებული</div>
            </div>

            {/* List of Transactions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <h2 className="text-xs font-bold text-gestlife-grey-80 uppercase tracking-widest mb-5">📋 ტრანზაქციების რეესტრი</h2>
              <div className="space-y-3">
                {FINANCES.map((f, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-4 bg-gestlife-grey-20/10 rounded-xl border border-gestlife-grey-20/20">
                    <div className="text-xl shrink-0 leading-none">{f.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-gestlife-grey-80 truncate">{f.type}</div>
                      <div className="text-[10px] font-semibold text-gestlife-grey-40 uppercase tracking-wide mt-0.5">{f.month}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-extrabold text-sm sm:text-base text-gestlife-grey-80">{f.amount}</div>
                      <div className={`text-[10px] font-extrabold uppercase mt-0.5 ${
                        f.status === "გადარიცხული" ? "text-emerald-500" : f.status === "მომლოდინე" ? "text-amber-500" : "text-gestlife-grey-40"
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
          <div className="flex flex-col gap-6 text-left">
            {/* Subtle logo watermark (Bottom-Right) */}
            <img src="/logo_symbol.png" alt="" className="absolute bottom-10 right-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gestlife-grey-20/40">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-base font-bold text-gestlife-grey-80 uppercase tracking-widest">📅 კლინიკური და საკონსულტაციო ვიზიტები</h2>
                <div className="bg-gestlife-pink-sub/30 border border-gestlife-pink-sub/20 rounded-full px-4 py-1 text-xs font-bold text-gestlife-pink">
                  {scheduleItems.length} დაგეგმილი ღონისძიება
                </div>
              </div>

              <div className="space-y-4">
                {scheduleItems.map((s, i) => (
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
                          ✓ დადასტურდა
                        </span>
                      ) : (
                        <button
                          onClick={() => confirmAppointment(i)}
                          className="px-3 py-2 rounded-xl text-white text-[10px] font-bold shadow-md bg-brand-gradient hover:scale-102 transition-all cursor-pointer whitespace-nowrap"
                        >
                          დადასტურება
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
          <div className="flex flex-col lg:flex-row gap-6 text-left">
            {/* Subtle logo watermark (Top-Right) */}
            <img src="/logo_symbol.png" alt="" className="absolute top-10 right-10 w-48 sm:w-64 opacity-[0.02] -z-10 pointer-events-none select-none grayscale brightness-90 contrast-125" />
            {/* Chat Box panel */}
            <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gestlife-grey-20/40 flex flex-col overflow-hidden" style={{ minHeight: "500px", height: "calc(100vh - 220px)" }}>
              {/* Header profile segment */}
              <div className="px-5 py-4 border-b border-gestlife-grey-20/30 flex items-center gap-3.5 bg-gestlife-pink-sub/10">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center text-white font-extrabold text-sm border-2 border-white shadow-sm">
                    {SURROGATE.coordinator.avatar}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-gestlife-grey-80 leading-none">{SURROGATE.coordinator.name}</div>
                  <div className="text-[10px] text-emerald-600 font-extrabold tracking-wide mt-1">● ონლაინ • პასუხობს 30 წთ-ში</div>
                </div>
                <div className="ml-auto text-[10px] font-bold text-gestlife-pink bg-white px-3 py-1 rounded-full border border-gestlife-pink-sub/30 uppercase tracking-widest">
                  პირადი კოორდინატორი
                </div>
              </div>

              {/* Chat messages Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3.5 bg-[#FBFBFF]">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2.5 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {msg.from === "coordinator" && (
                      <div className="w-6.5 h-6.5 rounded-full bg-brand-gradient text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-sm border border-white">
                        LL
                      </div>
                    )}
                    <div className={`max-w-[70%] px-4.5 py-3 text-xs sm:text-sm leading-relaxed shadow-sm font-medium ${
                      msg.from === "user"
                        ? "bg-brand-gradient text-white rounded-[18px_18px_4px_18px]"
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
                    <div className="w-6.5 h-6.5 rounded-full bg-brand-gradient text-white flex items-center justify-center text-[10px] font-black shrink-0">
                      LL
                    </div>
                    <div className="bg-white rounded-[18px_18px_18px_4px] border border-gestlife-grey-20/40 shadow-sm px-4 py-3 flex gap-1 items-center">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className="w-1.5 h-1.5 rounded-full bg-gestlife-pink animate-bounce"
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
                  placeholder="ჩაწერეთ შეტყობინება..."
                  className="flex-1 px-4.5 py-2.5 rounded-full border border-gestlife-grey-20 text-xs sm:text-sm font-semibold text-gestlife-grey-80 focus:outline-none focus:border-gestlife-pink/50 bg-[#FBFBFF] transition-colors"
                />
                <button
                  onClick={sendMessage}
                  disabled={!chatInput.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm shrink-0 transition-all ${
                    chatInput.trim()
                      ? "bg-brand-gradient shadow-md shadow-gestlife-pink/20 hover:scale-105 active:scale-95 cursor-pointer"
                      : "bg-gestlife-grey-20 text-gestlife-grey-40 cursor-default"
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
                  <span>📞</span> კავშირი
                </div>
                {[
                  { icon: "📱", label: "ტელეფონი", val: "+995 32 2XX XXXX" },
                  { icon: "📧", label: "ელ-ფოსტა", val: "lile@gestlife.com" },
                  { icon: "💬", label: "WhatsApp", val: "+995 577 XXX XXX" },
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
                  ❓ სწრაფი მოთხოვნები
                </div>
                {["ხელშეკრულების ასლი", "სამედიცინო ცნობა", "ფინანსური ისტორია", "გადაუდებელი კონტაქტი"].map((item, i) => (
                  <button
                    key={i}
                    className="block w-full text-left px-3 py-2.5 mb-2 last:mb-0 rounded-xl border border-gestlife-grey-20 hover:border-gestlife-pink/40 bg-gestlife-grey-20/5 hover:bg-gestlife-pink-sub/5 text-xs font-bold text-gestlife-grey-60 hover:text-gestlife-pink transition-all cursor-pointer"
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
