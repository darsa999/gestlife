// ════════════════════════════════════════════════════════════════
// ARIA FemTech Surrogacy — Unified Application
// Fully converted to inline styles — no Tailwind dependency
// ════════════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";

// ════════════════════════════════════════════════════
// SHARED DATA — Country Programs (Homepage)
// ════════════════════════════════════════════════════
const PROGRAMS = {
  georgia: {
    id: "georgia",
    name: "საქართველოს პროგრამა",
    nameEn: "Georgia Program",
    flag: "🇬🇪",
    color: "#C8102E",
    accent: "#E8B84B",
    heroGradient: "linear-gradient(135deg, #fff1f2 0%, #fffbeb 50%, #fce7e7 100%)",
    headline: "სიყვარულით დაწყებული მოგზაურობა",
    subheadline: "საქართველო — სუროგაციის მსოფლიო ლიდერი 20 წლიანი სამართლებრივი ჩარჩოთი",
    legalNote: "საქართველოს სამოქალაქო კოდექსი, მუხლი 143-ე — სუროგაცია სრულად ლეგალურია. განზრახული მშობლები იბადება ბავშვის სამართლებრივ მშობლებად.",
    legalBg: "#fff1f2",
    legalBorder: "#fecaca",
    legalText: "#9b1c1c",
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
    quizIntro: "გაიარეთ 30-წამიანი კვალიფიკაციის ტესტი საქართველოს პროგრამისთვის",
    gradientDark: "#8B0000",
  },
  greece: {
    id: "greece",
    name: "საბერძნეთის პროგრამა",
    nameEn: "Greece Program",
    flag: "🇬🇷",
    color: "#0D5EAF",
    accent: "#FFFFFF",
    heroGradient: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 50%, #dbeafe 100%)",
    headline: "ოჯახის ოცნება ხმელთაშუა ზღვის სათავეში",
    subheadline: "საბერძნეთი — ევროკავშირის ერთადერთი ქვეყანა, სადაც სუროგაცია ლეგალურია",
    legalNote: "ბერძნული კანონი 3305/2005 — სუროგაცია ნებადართულია სასამართლო ნებართვით. ევროკავშირის მოქალაქეებისთვის ოპტიმალური სამართლებრივი უსაფრთხოება.",
    legalBg: "#eff6ff",
    legalBorder: "#bfdbfe",
    legalText: "#1e3a8a",
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
    quizIntro: "გაიარეთ 30-წამიანი კვალიფიკაციის ტესტი საბერძნეთის პროგრამისთვის",
    gradientDark: "#003580",
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
// DASHBOARD DATA
// ════════════════════════════════════════════════════
const SURROGATE = {
  name: "ნინო გელაშვილი",
  avatar: "NG",
  program: "საქართველო 🇬🇪",
  stage: "ემბრიონის გადატანის მომზადება",
  stageIndex: 3,
  coordinator: { name: "ლილე მამულაშვილი", avatar: "LL", status: "online", title: "პირადი კოორდინატორი" },
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
  { date: "17 მაი 2025", test: "ჰორმონული პანელი", result: "ნორმა", value: "E2: 245 pg/mL / P4: 1.2 ng/mL", status: "ok" },
  { date: "14 მაი 2025", test: "საშვილოსნოს ულტრაბგერა", result: "ოპტიმალური", value: "ენდომეტრიუმი: 10.2 მმ (ტრიფაზური)", status: "ok" },
  { date: "10 მაი 2025", test: "სისხლის საერთო ანალიზი", result: "ნორმა", value: "HGB: 13.4 g/dL / WBC: 6.2", status: "ok" },
  { date: "5 მაი 2025", test: "COVID / ინფექციური სკრინინგი", result: "უარყოფითი", value: "ყველა მარკერი უარყოფითი", status: "ok" },
  { date: "28 აპრ 2025", test: "ფსიქოლოგიური შეფასება", result: "კომპლიანსი", value: "სასარგებლო შეფასება — ნდობის ინდექსი: 98%", status: "ok" },
  { date: "20 აპრ 2025", test: "ციტოლოგია (PAP)", result: "ნეგატიური", value: "NILM — ანომალია არ გამოვლენილა", status: "ok" },
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
  { id: 3, from: "coordinator", text: "ეს სრულიად ბუნებრივია! 💙 გახსოვდე — მთელი გუნდი შენთანაა. პროტოკოლი ზუსტად მიჰყვება. შენ ბრწყინვალედ კეთდები ყველაფერს.", time: "09:24" },
];

const AUTO_RESPONSES = [
  "გესმის! ეს ძალიან მნიშვნელოვანია. ვუყურებ და დავიკავშირები კლინიკასთან დამატებითი ინფორმაციისთვის 🌟",
  "რა კარგია, რომ გამოიხატე! 💙 გახსოვდე — ნებისმიერ კითხვაზე პასუხი ყოველთვის 30 წუთში მოვა.",
  "შენი ჯანმრთელობა ყველაზე მნიშვნელოვანია. ექიმს ვამცნობ ამის შესახებ — ყველაფერი კონტროლირებადია ✅",
  "გმადლობ, რომ გამიზიარე! ეს ინფორმაცია ვქვებ ჩვენი გუნდის ჩატში. 30 წუთში ოფიციალური პასუხი გეყოლება 🌸",
  "ბრწყინვალეა! 🎉 შენ ყველაფერს სწორად აკეთებ. გუნდი ძალიან კმაყოფილია შენი პროგრესით.",
];

const DASH_TABS = [
  { id: "overview", label: "მიმოხილვა", icon: "🏠" },
  { id: "profile", label: "პროფილი", icon: "👤" },
  { id: "medical", label: "სამედ. შედეგები", icon: "🧬" },
  { id: "finance", label: "ფინანსები", icon: "💳" },
  { id: "schedule", label: "განრიგი", icon: "📅" },
  { id: "support", label: "მხარდაჭერა", icon: "💬" },
];

// ════════════════════════════════════════════════════
// ROOT COMPONENT
// ════════════════════════════════════════════════════
export default function ARIASurrogacyApp() {
  const [currentView, setCurrentView] = useState("homepage");
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleRegistrationComplete = (userData) => {
    setRegisteredUser(userData);
    setCurrentView("dashboard");
  };

  if (currentView === "dashboard") {
    return <SurrogateDashboard user={registeredUser} onLogout={() => setCurrentView("homepage")} />;
  }

  return <SurrogacyHomepage onEnterDashboard={handleRegistrationComplete} />;
}

// ════════════════════════════════════════════════════
// PHASE 1: PUBLIC HOMEPAGE
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

  const switchProgram = (newProgram) => {
    if (newProgram === program) return;
    setTransitioning(true);
    setTimeout(() => {
      setProgram(newProgram);
      setOpenMyth(null);
      setQuizStep(0);
      setQuizAnswers([]);
      setQuizScore(0);
      setFormSubmitted(false);
      setTransitioning(false);
    }, 350);
  };

  const handleAnswer = (option) => {
    const newAnswers = [...quizAnswers, option];
    const newScore = quizScore + option.score;
    setQuizAnswers(newAnswers);
    setQuizScore(newScore);
    if (quizStep < 4) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(5);
    }
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.phone && formData.password) {
      setFormSubmitted(true);
    }
  };

  const getQualification = () => {
    if (quizScore >= 3) return { status: "qualified", label: "კვალიფიცირებული ხართ! ✅", bg: "#f0fdf4", border: "#bbf7d0", color: "#065f46" };
    if (quizScore >= 1) return { status: "review", label: "განსახილველი შემთხვევა 📋", bg: "#fffbeb", border: "#fde68a", color: "#92400e" };
    return { status: "fail", label: "ამ ეტაპზე ვერ ვაგრძელებთ ❌", bg: "#fef2f2", border: "#fecaca", color: "#991b1b" };
  };

  const currentQuestion = QUIZ_QUESTIONS[quizStep - 1];
  const qualification = quizStep === 5 ? getQualification() : null;
  const gradDark = data.gradientDark;

  const baseFont = "'Georgia', 'Times New Roman', serif";

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: baseFont,
      opacity: transitioning ? 0 : 1,
      transform: transitioning ? "scale(0.97)" : "scale(1)",
      transition: "opacity 0.35s ease, transform 0.35s ease",
    }}>
      <style>{`
        @keyframes ariaPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes ariaBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
        @keyframes ariaBounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .aria-myth-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; }
        .aria-quiz-opt:hover { transform: translateX(4px); }
        .aria-cta-primary:hover { transform: scale(1.04); box-shadow: 0 12px 40px rgba(0,0,0,0.22) !important; }
        .aria-cta-secondary:hover { background: white !important; box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important; }
        .aria-prog-btn:hover { background: rgba(255,255,255,0.5) !important; }
      `}</style>

      {/* ════ HEADER ════ */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 1px 16px rgba(0,0,0,0.07)",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: `linear-gradient(135deg, ${data.color}, ${gradDark})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 800, fontSize: 18,
              boxShadow: `0 4px 14px ${data.color}55`,
              transition: "all 0.3s",
            }}>♥</div>
            <div>
              <div style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 16, lineHeight: 1.2 }}>ARIA Surrogacy</div>
              <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.08em" }}>FemTech Platform</div>
            </div>
          </div>

          {/* Program Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#f3f4f6", borderRadius: 40, padding: "4px", boxShadow: "inset 0 1px 4px rgba(0,0,0,0.08)" }}>
            {Object.values(PROGRAMS).map((prog) => (
              <button
                key={prog.id}
                onClick={() => switchProgram(prog.id)}
                className="aria-prog-btn"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 18px", borderRadius: 36,
                  border: "none", cursor: "pointer",
                  fontFamily: baseFont,
                  fontSize: 13, fontWeight: program === prog.id ? 700 : 500,
                  background: program === prog.id ? "white" : "transparent",
                  color: program === prog.id ? "#1a1a2e" : "#6b7280",
                  boxShadow: program === prog.id ? "0 2px 10px rgba(0,0,0,0.12)" : "none",
                  transform: program === prog.id ? "scale(1.03)" : "scale(1)",
                  transition: "all 0.25s",
                }}
              >
                <span style={{ fontSize: 18 }}>{prog.flag}</span>
                <span>{prog.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="#myths" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#1a1a2e"}
              onMouseLeave={e => e.target.style.color = "#6b7280"}>მითები</a>
            <a href="#quiz" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#1a1a2e"}
              onMouseLeave={e => e.target.style.color = "#6b7280"}>კვალიფიკაცია</a>
            <button
              onClick={() => quizRef.current?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "9px 20px", borderRadius: 40, border: "none",
                background: `linear-gradient(135deg, ${data.color}, ${gradDark})`,
                color: "white", fontSize: 13, fontWeight: 600,
                cursor: "pointer", fontFamily: baseFont,
                boxShadow: `0 4px 16px ${data.color}44`,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 6px 24px ${data.color}55`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 4px 16px ${data.color}44`; }}
            >შესვლა</button>
          </nav>
        </div>
      </header>

      {/* ════ HERO ════ */}
      <section style={{ background: data.heroGradient, padding: "80px 20px 90px", position: "relative", overflow: "hidden" }}>
        {/* Background decorations */}
        <div style={{ position: "absolute", top: 20, right: 40, fontSize: 160, opacity: 0.05, userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>{data.flag}</div>
        <div style={{ position: "absolute", bottom: 30, left: 40, fontSize: 80, opacity: 0.08, userSelect: "none", pointerEvents: "none" }}>♥</div>

        <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", borderRadius: 40, background: `linear-gradient(135deg, ${data.color}dd, ${data.color})`, color: "white", fontSize: 13, fontWeight: 600, boxShadow: `0 4px 20px ${data.color}44`, width: "fit-content" }}>
              <span style={{ fontSize: 22 }}>{data.flag}</span>
              <span>{data.name}</span>
              <span style={{ width: 8, height: 8, background: "#86efac", borderRadius: "50%", animation: "ariaPulse 2s infinite" }} />
            </div>

            {/* Headline — fixed overlap with explicit block display and line-height */}
            <div style={{ display: "block" }}>
              <h1 style={{
                margin: 0,
                fontSize: 46,
                fontWeight: 800,
                color: "#1a1a2e",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                display: "block",
                wordBreak: "break-word",
              }}>{data.headline}</h1>
            </div>

            {/* Subheadline */}
            <p style={{ margin: 0, fontSize: 17, color: "#4b5563", lineHeight: 1.7, display: "block" }}>
              {data.subheadline}
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, paddingTop: 4 }}>
              {data.stats.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: data.color, lineHeight: 1.1, display: "block" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4, display: "block" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 16, paddingTop: 4, flexWrap: "wrap" }}>
              <button
                className="aria-cta-primary"
                onClick={() => { quizRef.current?.scrollIntoView({ behavior: "smooth" }); setQuizStep(1); }}
                style={{
                  padding: "16px 32px", borderRadius: 40, border: "none",
                  background: `linear-gradient(135deg, ${data.color}, ${gradDark})`,
                  color: "white", fontWeight: 700, fontSize: 16,
                  cursor: "pointer", fontFamily: baseFont,
                  boxShadow: `0 8px 28px ${data.color}44`,
                  transition: "all 0.25s",
                }}
              >დაიწყეთ მოგზაურობა →</button>
              <button
                className="aria-cta-secondary"
                style={{
                  padding: "16px 32px", borderRadius: 40,
                  border: `2px solid ${data.color}55`,
                  background: "transparent", color: "#374151",
                  fontWeight: 600, fontSize: 16,
                  cursor: "pointer", fontFamily: baseFont,
                  transition: "all 0.25s",
                }}
              >გაიგეთ მეტი</button>
            </div>

            {/* Legal Note */}
            <div style={{
              background: data.legalBg,
              border: `1px solid ${data.legalBorder}`,
              borderRadius: 14, padding: "14px 18px",
              fontSize: 12, lineHeight: 1.6,
              color: data.legalText,
              display: "block",
            }}>
              <strong>⚖️ სამართლებრივი ინფო:</strong> {data.legalNote}
            </div>
          </div>

          {/* Right Column — Video */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setVideoPlaying(!videoPlaying)}
              style={{
                borderRadius: 28, overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                aspectRatio: "16/9", background: "#1e293b",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", position: "relative",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${data.color}44 0%, ${gradDark}44 100%)`, opacity: 0.7 }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", zIndex: 2 }}>
                {videoPlaying ? (
                  <div style={{ textAlign: "center", padding: "0 32px" }}>
                    <div style={{ fontSize: 48, animation: "ariaBounceSlow 1.5s infinite" }}>▶️</div>
                    <div style={{ marginTop: 16, fontSize: 13, opacity: 0.85, background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: "8px 16px" }}>📹 ვიდეო იტვირთება... (Demo)</div>
                    <div style={{ marginTop: 6, fontSize: 11, opacity: 0.6 }}>რეალურ გარემოში: YouTube / Vimeo embed</div>
                  </div>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: `${data.color}cc`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 28, margin: "0 auto 14px",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
                      transition: "transform 0.25s",
                    }}>▶</div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>
                      {program === "georgia" ? "საქართველოს პროგრამის მიმოხილვა" : "საბერძნეთის პროგრამის მიმოხილვა"}
                    </div>
                    <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>3:45 წთ • ქართული სუბტიტრები</div>
                  </div>
                )}
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", gap: 8, zIndex: 3 }}>
                <span style={{ background: "rgba(0,0,0,0.5)", color: "white", fontSize: 11, padding: "4px 10px", borderRadius: 20 }}>⚕️ სამედიცინო</span>
                <span style={{ background: "rgba(0,0,0,0.5)", color: "white", fontSize: 11, padding: "4px 10px", borderRadius: 20 }}>⚖️ სამართლებრივი</span>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -12, right: -12, width: "100%", height: "100%", borderRadius: 28, background: `${data.color}18`, zIndex: -1 }} />
          </div>
        </div>
      </section>

      {/* ════ MYTHS SECTION ════ */}
      <section id="myths" style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: 40, background: data.color, color: "white", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
              {data.flag} {data.name}
            </div>
            <h2 style={{ margin: "0 0 12px", fontSize: 36, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.2 }}>მითები vs. სინამდვილე</h2>
            <p style={{ margin: 0, color: "#6b7280", maxWidth: 520, marginLeft: "auto", marginRight: "auto", fontSize: 15, lineHeight: 1.6 }}>
              ბარათზე დაჭერით გაიგებთ სიმართლეს — {program === "georgia" ? "საქართველოს" : "საბერძნეთის"} სუროგაციის შესახებ ყველაზე გავრცელებული მცდარი წარმოდგენები
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {data.myths.map((item, idx) => (
              <div
                key={idx}
                className="aria-myth-card"
                onClick={() => setOpenMyth(openMyth === idx ? null : idx)}
                style={{
                  borderRadius: 20,
                  border: `2px solid ${openMyth === idx ? data.color + "55" : "#f1f5f9"}`,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ padding: "22px 24px", background: openMyth === idx ? `${data.color}07` : "white", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 30, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginBottom: 6 }}>❌ მითი</div>
                        <h3 style={{ margin: 0, fontWeight: 700, color: "#1a1a2e", fontSize: 16, lineHeight: 1.4 }}>"{item.myth}"</h3>
                      </div>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%",
                        background: data.color, color: "white",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, flexShrink: 0,
                        transform: openMyth === idx ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s",
                      }}>▼</div>
                    </div>
                    {openMyth === idx && (
                      <div style={{ marginTop: 16 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", marginBottom: 8 }}>✅ სინამდვილე</div>
                        <p style={{ margin: 0, color: "#374151", fontSize: 14, lineHeight: 1.7, borderLeft: `4px solid ${data.color}`, paddingLeft: 14 }}>{item.truth}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ QUIZ SECTION ════ */}
      <section id="quiz" ref={quizRef} style={{ padding: "80px 20px", background: data.heroGradient }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: 40, background: data.color, color: "white", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>⏱ 30 წამი</div>
            <h2 style={{ margin: "0 0 10px", fontSize: 30, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.2 }}>კვალიფიკაციის ტესტი</h2>
            <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>{data.quizIntro}</p>
          </div>

          <div style={{ background: "white", borderRadius: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.1)", overflow: "hidden" }}>
            {/* Progress bar */}
            {quizStep >= 1 && quizStep <= 4 && (
              <div style={{ height: 4, background: "#f1f5f9" }}>
                <div style={{ height: "100%", width: `${(quizStep / 4) * 100}%`, background: data.color, transition: "width 0.5s ease", borderRadius: "0 2px 2px 0" }} />
              </div>
            )}

            <div style={{ padding: 36 }}>
              {/* Intro */}
              {quizStep === 0 && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>🌟</div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>მზად ხართ?</h3>
                  <p style={{ margin: "0 0 28px", color: "#6b7280", fontSize: 15, lineHeight: 1.6 }}>
                    4 მარტივი კითხვა • 30 წამი • სასუროგაციო პროგრამის {program === "georgia" ? "საქართველო" : "საბერძნეთი"} კვალიფიკაცია
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", textAlign: "left", display: "flex", flexDirection: "column", gap: 12 }}>
                    {["ასაკი", "ჯანმრთელობის სტატუსი / BMI", "შვილები", "სამართლებრივი ფონი"].map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#4b5563" }}>
                        <span style={{ width: 26, height: 26, borderRadius: "50%", background: data.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setQuizStep(1)}
                    style={{ width: "100%", padding: "16px", borderRadius: 20, border: "none", background: `linear-gradient(135deg, ${data.color}, ${gradDark})`, color: "white", fontWeight: 700, fontSize: 17, cursor: "pointer", fontFamily: baseFont, boxShadow: `0 8px 24px ${data.color}44`, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = `0 12px 32px ${data.color}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 8px 24px ${data.color}44`; }}
                  >ტესტის დაწყება →</button>
                  <p style={{ margin: "16px 0 0", fontSize: 11, color: "#9ca3af" }}>⚕️ ეს ტესტი ინფორმაციული მიზნებისთვისაა. სამედიცინო კონსულტაცია სავალდებულოა.</p>
                </div>
              )}

              {/* Questions */}
              {quizStep >= 1 && quizStep <= 4 && currentQuestion && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, fontSize: 13, color: "#9ca3af" }}>
                    <span>კითხვა {quizStep} / 4</span>
                    <span style={{ fontSize: 20 }}>{data.flag}</span>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>{currentQuestion.icon}</div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3 }}>{currentQuestion.question}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {currentQuestion.options.map((opt, i) => (
                      <button
                        key={i}
                        className="aria-quiz-opt"
                        onClick={() => handleAnswer(opt)}
                        style={{
                          width: "100%", textAlign: "left",
                          padding: "14px 22px", borderRadius: 14,
                          border: `2px solid #f1f5f9`,
                          background: "white", color: "#374151",
                          fontSize: 14, fontWeight: 500,
                          cursor: "pointer", fontFamily: baseFont,
                          transition: "all 0.2s", display: "flex", alignItems: "center", gap: 12,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = data.color + "77"; e.currentTarget.style.background = data.color + "08"; e.currentTarget.style.color = "#1a1a2e"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#374151"; }}
                      >
                        <span style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${data.color}55`, display: "inline-block", flexShrink: 0 }} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Result */}
              {quizStep === 5 && qualification && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 52, marginBottom: 24 }}>
                    {qualification.status === "qualified" ? "🎉" : qualification.status === "review" ? "📋" : "💙"}
                  </div>
                  <h3 style={{ margin: "0 0 16px", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>ტესტის შედეგი</h3>
                  <div style={{ display: "inline-block", padding: "10px 26px", borderRadius: 40, border: `2px solid ${qualification.border}`, background: qualification.bg, color: qualification.color, fontWeight: 700, fontSize: 16, marginBottom: 24 }}>
                    {qualification.label}
                  </div>
                  {qualification.status !== "fail" ? (
                    <div>
                      <p style={{ margin: "0 0 20px", color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>
                        {qualification.status === "qualified"
                          ? "შესანიშნავი! თქვენ პირველადი კვალიფიკაციის კრიტერიუმებს აკმაყოფილებთ. შეავსეთ სარეგისტრაციო ფორმა."
                          : "თქვენი განაცხადი დამატებით განხილვას საჭიროებს. ჩვენი სპეციალისტი დაგიკავშირდებათ."}
                      </p>
                      <button
                        onClick={() => setQuizStep(6)}
                        style={{ width: "100%", padding: "16px", borderRadius: 20, border: "none", background: `linear-gradient(135deg, ${data.color}, ${gradDark})`, color: "white", fontWeight: 700, fontSize: 17, cursor: "pointer", fontFamily: baseFont, boxShadow: `0 8px 24px ${data.color}44`, transition: "all 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >რეგისტრაციის გაგრძელება →</button>
                    </div>
                  ) : (
                    <div>
                      <p style={{ margin: "0 0 20px", color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>
                        ამ ეტაპზე ვერ ვაგრძელებთ, მაგრამ ჩვენი კონსულტანტი შეძლებს უფრო ზუსტი ინფორმაციის მოწოდებას.
                      </p>
                      <button
                        onClick={() => { setQuizStep(0); setQuizAnswers([]); setQuizScore(0); }}
                        style={{ width: "100%", padding: "16px", borderRadius: 20, border: `2px solid ${data.color}`, background: "white", color: data.color, fontWeight: 700, fontSize: 17, cursor: "pointer", fontFamily: baseFont, transition: "all 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
                        onMouseLeave={e => e.currentTarget.style.background = "white"}
                      >ხელახლა ცდა</button>
                    </div>
                  )}
                </div>
              )}

              {/* Registration Form */}
              {quizStep === 6 && (
                <div>
                  {!formSubmitted ? (
                    <div>
                      <div style={{ textAlign: "center", marginBottom: 28 }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
                        <h3 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>სარეგისტრაციო ფორმა</h3>
                        <p style={{ margin: 0, color: "#9ca3af", fontSize: 13 }}>{data.flag} {data.name} — პირველი ნაბიჯი</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                        {[
                          { label: "სრული სახელი", key: "name", type: "text", placeholder: "მაგ: ნინო გელაშვილი" },
                          { label: "ტელეფონის ნომერი", key: "phone", type: "tel", placeholder: "+995 5XX XXX XXX" },
                          { label: "პაროლი", key: "password", type: "password", placeholder: "მინ. 8 სიმბოლო" },
                        ].map(field => (
                          <div key={field.key}>
                            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>{field.label}</label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.key]}
                              onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                              style={{ width: "100%", padding: "12px 16px", borderRadius: 14, border: "2px solid #f1f5f9", fontSize: 14, color: "#1a1a2e", background: "white", outline: "none", fontFamily: baseFont, boxSizing: "border-box", transition: "border-color 0.2s" }}
                              onFocus={e => e.target.style.borderColor = data.color + "88"}
                              onBlur={e => e.target.style.borderColor = "#f1f5f9"}
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleFormSubmit}
                        disabled={!formData.name || !formData.phone || !formData.password}
                        style={{ width: "100%", padding: "16px", borderRadius: 20, border: "none", background: (formData.name && formData.phone && formData.password) ? `linear-gradient(135deg, ${data.color}, ${gradDark})` : "#e5e7eb", color: (formData.name && formData.phone && formData.password) ? "white" : "#9ca3af", fontWeight: 700, fontSize: 17, cursor: (formData.name && formData.phone && formData.password) ? "pointer" : "not-allowed", fontFamily: baseFont, transition: "all 0.2s", boxShadow: (formData.name && formData.phone && formData.password) ? `0 8px 24px ${data.color}44` : "none" }}
                      >გააქტიურება და Dashboard-ზე გადასვლა →</button>
                      <p style={{ margin: "16px 0 0", fontSize: 11, color: "#9ca3af", textAlign: "center" }}>
                        ⚕️ პირადი მონაცემები GDPR-ის შესაბამისად დაცულია • ⚖️ პლატფორმის გამოყენება ნიშნავს წესებზე თანხმობას
                      </p>
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: "24px 0" }}>
                      <div style={{ fontSize: 60, marginBottom: 24 }}>🎊</div>
                      <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>მოგესალმებით, {formData.name.split(" ")[0]}!</h3>
                      <p style={{ margin: "0 0 28px", color: "#6b7280", fontSize: 15, lineHeight: 1.6 }}>
                        თქვენი ანგარიში შეიქმნა. {data.flag} {data.name}-ის Dashboard-ი მზადაა.
                      </p>
                      <button
                        onClick={() => onEnterDashboard({ name: formData.name, program: data.id })}
                        style={{ width: "100%", padding: "18px", borderRadius: 20, border: "none", background: `linear-gradient(135deg, ${data.color}, ${gradDark})`, color: "white", fontWeight: 800, fontSize: 19, cursor: "pointer", fontFamily: baseFont, boxShadow: `0 10px 32px ${data.color}55`, transition: "all 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >🚀 Dashboard-ზე გადასვლა</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "52px 20px 32px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ color: "white", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>ARIA Surrogacy Platform</div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>FemTech პლატფორმა — სუროგაციის მსოფლიო სტანდარტი {data.flag}</p>
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 600, marginBottom: 12 }}>სამართლებრივი</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                <li>კონფიდენციალობა</li>
                <li>გამოყენების წესები</li>
                <li>GDPR პოლიტიკა</li>
              </ul>
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 600, marginBottom: 12 }}>კონტაქტი</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                <li>📧 info@aria-surrogacy.com</li>
                <li>📞 +995 32 2XX XXXX</li>
                <li>🏥 თბილისი / ათენი</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1f2937", paddingTop: 28 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
              {[
                { icon: "⚕️", title: "სამედიცინო კონტენტი", sub: "ლიცენზირებული სპეციალისტების მიერ დამოწმებული" },
                { icon: "⚖️", title: "სამართლებრივი კონტენტი", sub: program === "georgia" ? "საქართველოს კანონმდებლობის შესაბამისი" : "ბერძნული კანონი 3305/2005-ის შესაბამისი" },
                { icon: "🔒", title: "GDPR დაცვა", sub: "ევროპული სტანდარტი" },
              ].map((badge, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#1f2937", borderRadius: 40, padding: "8px 18px" }}>
                  <span style={{ fontSize: 18 }}>{badge.icon}</span>
                  <div>
                    <div style={{ color: "white", fontSize: 11, fontWeight: 600 }}>{badge.title}</div>
                    <div style={{ fontSize: 10, color: "#6b7280" }}>{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 11, color: "#4b5563" }}>
              © 2025 ARIA Surrogacy Platform. ყველა უფლება დაცულია. ეს პლატფორმა ინფორმაციული მიზნებისთვისაა და არ ცვლის სამედიცინო ან სამართლებრივ კონსულტაციას.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ════════════════════════════════════════════════════
// PHASE 2: SURROGATE DASHBOARD
// ════════════════════════════════════════════════════
function SurrogateDashboard({ user, onLogout }) {
  const [dashTab, setDashTab] = useState("overview");
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(SURROGATE.notifications);
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT);
  const [chatInput, setChatInput] = useState("");
  const [chatTyping, setChatTyping] = useState(false);
  const [scheduleItems, setScheduleItems] = useState(SCHEDULE_DATA);
  const [confirmedToast, setConfirmedToast] = useState(null);
  const chatEndRef = useRef(null);
  const chatInputRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatTyping]);

  const sendMessage = () => {
    const text = chatInput.trim();
    if (!text) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setChatMessages((prev) => [...prev, { id: Date.now(), from: "user", text, time }]);
    setChatInput("");
    setChatTyping(true);
    setTimeout(() => {
      setChatTyping(false);
      const reply = AUTO_RESPONSES[Math.floor(Math.random() * AUTO_RESPONSES.length)];
      const replyTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes() + 1).padStart(2, "0")}`;
      setChatMessages((prev) => [...prev, { id: Date.now() + 1, from: "coordinator", text: reply, time: replyTime }]);
    }, 1800);
  };

  const confirmAppointment = (idx) => {
    setScheduleItems((prev) => prev.map((s, i) => (i === idx ? { ...s, confirmed: true } : s)));
    setConfirmedToast("ვიზიტი დადასტურებულია ✅");
    setTimeout(() => setConfirmedToast(null), 2500);
  };

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const displayName = user?.name || SURROGATE.name;
  const displayFirstName = displayName.split(" ")[0];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #fdf6f0 0%, #fef9f5 40%, #f0f4ff 100%)", fontFamily: "'Georgia', 'Palatino Linotype', serif" }}>

      {/* Toast */}
      {confirmedToast && (
        <div style={{ position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", background: "#10b981", color: "white", padding: "12px 28px", borderRadius: 40, fontWeight: 700, zIndex: 9999, boxShadow: "0 8px 32px rgba(16,185,129,0.4)", fontSize: 15, letterSpacing: "0.02em" }}>
          {confirmedToast}
        </div>
      )}

      {/* Topbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(200,16,46,0.08)", boxShadow: "0 2px 24px rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #8B0000)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 18, boxShadow: "0 4px 14px rgba(200,16,46,0.35)" }}>♥</div>
            <div>
              <div style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 15, lineHeight: 1.2 }}>ARIA Surrogacy</div>
              <div style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.06em" }}>SURROGATE PORTAL</div>
            </div>
          </div>

          {/* Stage Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #fff1f2, #fef3c7)", border: "1.5px solid #fca5a5", borderRadius: 40, padding: "6px 18px", flex: 1, maxWidth: 460 }}>
            <span style={{ fontSize: 16 }}>🌱</span>
            <div>
              <div style={{ fontSize: 10, color: "#6b7280", letterSpacing: "0.08em", fontWeight: 600 }}>მიმდინარე ეტაპი</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#C8102E" }}>{SURROGATE.stage}</div>
            </div>
            <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.2)", animation: "ariaPulse 2s infinite" }} />
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: notifOpen ? "#fef2f2" : "#f9fafb", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, position: "relative", transition: "all 0.2s" }}
              >🔔
                {unreadCount > 0 && (
                  <span style={{ position: "absolute", top: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "#C8102E", color: "white", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>{unreadCount}</span>
                )}
              </button>
              {notifOpen && (
                <div style={{ position: "absolute", top: 50, right: 0, width: 340, background: "white", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", border: "1px solid #f1f5f9", overflow: "hidden", zIndex: 200 }}>
                  <div style={{ padding: "14px 18px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>შეტყობინებები</span>
                    <button onClick={markAllRead} style={{ fontSize: 11, color: "#C8102E", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>ყველა წაკითხულია</button>
                  </div>
                  {notifications.map((n) => (
                    <div key={n.id} style={{ padding: "12px 18px", background: n.read ? "white" : "#fef9f5", borderBottom: "1px solid #f8fafc", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 16 }}>{n.type === "medical" ? "🧬" : n.type === "schedule" ? "📅" : "💳"}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{n.text}</div>
                      </div>
                      {!n.read && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C8102E", flexShrink: 0, marginTop: 5 }} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #E8B84B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 13, boxShadow: "0 3px 12px rgba(200,16,46,0.3)" }}>{SURROGATE.avatar}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px", display: "flex", gap: 24, alignItems: "flex-start" }}>

        {/* Sidebar */}
        <aside style={{ width: 220, flexShrink: 0, background: "white", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(200,16,46,0.06)", overflow: "hidden", position: "sticky", top: 88 }}>
          <div style={{ padding: "20px 16px", background: "linear-gradient(135deg, #C8102E, #8B0000)", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 20, margin: "0 auto 10px", border: "3px solid rgba(255,255,255,0.4)" }}>{SURROGATE.avatar}</div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>{displayName}</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, marginTop: 3 }}>{SURROGATE.program}</div>
          </div>
          <nav style={{ padding: "8px 0" }}>
            {DASH_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDashTab(tab.id)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", border: "none", background: dashTab === tab.id ? "linear-gradient(135deg, #fff1f2, #fef3c7)" : "transparent", cursor: "pointer", borderLeft: dashTab === tab.id ? "3px solid #C8102E" : "3px solid transparent", transition: "all 0.2s", textAlign: "left", fontFamily: "'Georgia', serif" }}
              >
                <span style={{ fontSize: 16 }}>{tab.icon}</span>
                <span style={{ fontSize: 13, fontWeight: dashTab === tab.id ? 700 : 500, color: dashTab === tab.id ? "#C8102E" : "#6b7280" }}>{tab.label}</span>
              </button>
            ))}
          </nav>
          <div style={{ padding: "8px 16px 16px" }}>
            <button
              onClick={onLogout}
              style={{ width: "100%", padding: "10px", borderRadius: 12, border: "1.5px solid #fee2e2", background: "#fff5f5", color: "#C8102E", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Georgia', serif" }}
            >🚪 გამოსვლა</button>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* ════ OVERVIEW ════ */}
          {dashTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "linear-gradient(135deg, #C8102E 0%, #8B0000 50%, #4a0010 100%)", borderRadius: 20, padding: "28px 32px", color: "white", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -20, top: -20, fontSize: 140, opacity: 0.07, lineHeight: 1, userSelect: "none" }}>🇬🇪</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 6, letterSpacing: "0.06em" }}>გამარჯობა, {displayFirstName}!</div>
                  <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.3 }}>შენი მოგზაურობა მიმდინარეობს ✨</h1>
                  <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>მიმდინარე ეტაპი: <strong>{SURROGATE.stage}</strong> — ყველა მაჩვენებელი ნორმაშია</p>
                </div>
              </div>

              {/* Stage Timeline */}
              <div style={{ background: "white", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>📍 პროგრამის ეტაპები</h2>
                <div style={{ display: "flex", gap: 0, alignItems: "center", overflowX: "auto", paddingBottom: 4 }}>
                  {STAGES.map((stage, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: stage.done ? "linear-gradient(135deg, #10b981, #059669)" : stage.active ? "linear-gradient(135deg, #C8102E, #8B0000)" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: stage.active ? "0 0 0 4px rgba(200,16,46,0.2), 0 4px 16px rgba(200,16,46,0.3)" : stage.done ? "0 3px 10px rgba(16,185,129,0.3)" : "none", border: stage.active ? "2px solid #C8102E" : "2px solid transparent", transition: "all 0.3s" }}>
                          {stage.done ? "✓" : stage.icon}
                        </div>
                        <span style={{ fontSize: 10, fontWeight: stage.active ? 700 : 500, color: stage.active ? "#C8102E" : stage.done ? "#10b981" : "#9ca3af", textAlign: "center", maxWidth: 70, lineHeight: 1.3 }}>{stage.label}</span>
                      </div>
                      {i < STAGES.length - 1 && (
                        <div style={{ width: 32, height: 2, background: i < 3 ? "#10b981" : "#e5e7eb", margin: "0 2px", marginBottom: 20, borderRadius: 2 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div style={{ background: "white", borderRadius: 20, padding: "22px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1.5px solid rgba(200,16,46,0.1)" }}>
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 12 }}>📅 შემდეგი ვიზიტი</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>{SCHEDULE_DATA[0].title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 4 }}>📆 {SCHEDULE_DATA[0].date} — {SCHEDULE_DATA[0].time}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>📍 {SCHEDULE_DATA[0].location}</div>
                  <button
                    onClick={() => confirmAppointment(0)}
                    style={{ padding: "9px 18px", borderRadius: 12, border: "none", background: scheduleItems[0].confirmed ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #C8102E, #8B0000)", color: "white", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", fontFamily: "'Georgia', serif" }}
                  >{scheduleItems[0].confirmed ? "✅ დადასტურებულია" : "დადასტურება"}</button>
                </div>

                <div style={{ background: "white", borderRadius: 20, padding: "22px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1.5px solid rgba(200,16,46,0.1)", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.06em" }}>💬 პირადი კოორდინატორი</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #E8B84B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16, boxShadow: "0 4px 14px rgba(200,16,46,0.3)" }}>{SURROGATE.coordinator.avatar}</div>
                      <div style={{ position: "absolute", bottom: 1, right: 1, width: 12, height: 12, borderRadius: "50%", background: "#10b981", border: "2px solid white" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>{SURROGATE.coordinator.name}</div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>{SURROGATE.coordinator.title}</div>
                      <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>● ონლაინ</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setDashTab("support")}
                    style={{ padding: "9px 18px", borderRadius: 12, border: "1.5px solid #C8102E", background: "transparent", color: "#C8102E", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", fontFamily: "'Georgia', serif" }}
                  >💬 ჩატის გახსნა</button>
                </div>
              </div>

              {/* Quick Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                {[
                  { icon: "🧬", label: "ბოლო ანალიზი", value: "ნორმა", sub: "17 მაი 2025", color: "#10b981" },
                  { icon: "💳", label: "ბოლო გადარიცხვა", value: "₾ 1,800", sub: "მაისი 2025", color: "#C8102E" },
                  { icon: "📅", label: "ვიზიტამდე", value: "4 დღე", sub: "22 მაი 10:00", color: "#E8B84B" },
                ].map((card, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: "18px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: `1.5px solid ${card.color}22` }}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{card.icon}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, marginBottom: 4, letterSpacing: "0.06em" }}>{card.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: card.color, marginBottom: 2 }}>{card.value}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════ PROFILE ════ */}
          {dashTab === "profile" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <div style={{ background: "linear-gradient(135deg, #C8102E, #8B0000)", padding: "32px 32px 24px", position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 26, border: "3px solid rgba(255,255,255,0.4)" }}>{SURROGATE.avatar}</div>
                    <div>
                      <h1 style={{ color: "white", margin: 0, fontSize: 22, fontWeight: 800 }}>{displayName}</h1>
                      <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 4 }}>სუროგატი • {SURROGATE.program}</div>
                      <div style={{ marginTop: 8, display: "inline-block", background: "rgba(255,255,255,0.2)", borderRadius: 20, padding: "4px 12px", color: "white", fontSize: 11, fontWeight: 600 }}>🟢 ეტაპი: {SURROGATE.stage}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    {[
                      { label: "სრული სახელი", value: displayName, icon: "👤" },
                      { label: "დაბადების თარიღი", value: "15 მარტი 1992 (33 წელი)", icon: "🎂" },
                      { label: "ტელეფონი", value: "+995 599 123 456", icon: "📱" },
                      { label: "ელ-ფოსტა", value: "nino.gelashvili@email.com", icon: "📧" },
                      { label: "მისამართი", value: "თბილისი, ვაკე, .... ქ. 12", icon: "🏠" },
                      { label: "სამოქალაქო სტატუსი", value: "გათხოვილი", icon: "💍" },
                      { label: "შვილების რაოდენობა", value: "2 (7 და 10 წელი)", icon: "👨‍👩‍👧‍👦" },
                      { label: "სისხლის ჯგუფი", value: "A(II) Rh+", icon: "🩸" },
                    ].map((field, i) => (
                      <div key={i} style={{ background: "#f9fafb", borderRadius: 14, padding: "14px 18px", border: "1px solid #f1f5f9" }}>
                        <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 5 }}>{field.icon} {field.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>{field.value}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20, background: "linear-gradient(135deg, #fff1f2, #fef9f5)", border: "1.5px solid #fca5a5", borderRadius: 16, padding: "16px 20px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#C8102E", marginBottom: 8 }}>📋 კონტრაქტის ინფო</div>
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                      {[
                        { label: "კონტრაქტის ნომერი", value: "ARG-2025-0472" },
                        { label: "გაფორმების თარიღი", value: "12 მარტი 2025" },
                        { label: "პროგრამა", value: "საქართველო — სრული" },
                        { label: "IVF კლინიკა", value: "ReproMed, თბილისი" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>{item.label}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ MEDICAL ════ */}
          {dashTab === "medical" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "white", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#1a1a2e" }}>🧬 სამედიცინო შედეგები</h2>
                  <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#10b981" }}>✅ {MEDICAL_RESULTS.length} ჩანაწერი — ყველა ნორმა</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {MEDICAL_RESULTS.map((r, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "#f9fafb", borderRadius: 14, border: "1px solid #f1f5f9", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#fff1f2"; e.currentTarget.style.borderColor = "#fca5a5"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.borderColor = "#f1f5f9"; }}
                    >
                      <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, #10b981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 18, flexShrink: 0 }}>✓</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 3 }}>{r.test}</div>
                        <div style={{ fontSize: 12, color: "#6b7280" }}>{r.value}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#10b981", background: "#f0fdf4", borderRadius: 8, padding: "3px 10px", marginBottom: 4 }}>{r.result}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>{r.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "white", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <h3 style={{ margin: "0 0 18px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>📊 ენდომეტრიუმის სისქე (მმ) — ბოლო 4 კვლევა</h3>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 100 }}>
                  {[
                    { val: 7.2, date: "28 მარ" },
                    { val: 8.5, date: "12 აპრ" },
                    { val: 9.1, date: "28 აპრ" },
                    { val: 10.2, date: "14 მაი", active: true },
                  ].map((bar, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: bar.active ? "#C8102E" : "#6b7280" }}>{bar.val}</div>
                      <div style={{ width: "100%", height: `${(bar.val / 12) * 80}px`, borderRadius: "8px 8px 0 0", background: bar.active ? "linear-gradient(180deg, #C8102E, #8B0000)" : "linear-gradient(180deg, #fca5a5, #fecaca)", transition: "all 0.5s" }} />
                      <div style={{ fontSize: 10, color: "#9ca3af" }}>{bar.date}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#059669", fontWeight: 600 }}>
                  ✅ 10.2 მმ — ოპტიმალური სისქე ემბრიონის გადატანისთვის (8–14 მმ)
                </div>
              </div>
            </div>
          )}

          {/* ════ FINANCE ════ */}
          {dashTab === "finance" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)", borderRadius: 20, padding: "28px 32px", color: "white", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: 30, top: -20, fontSize: 100, opacity: 0.05, userSelect: "none" }}>₾</div>
                <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: "0.1em", marginBottom: 8 }}>💳 საერთო კომპენსაცია (ხელშეკრულებით)</div>
                <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.02em" }}>₾ 28,500</div>
                <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>გადახდილია: <strong style={{ color: "#10b981" }}>₾ 5,420</strong> • მომლოდინე: <strong style={{ color: "#E8B84B" }}>₾ 1,950</strong></div>
                <div style={{ marginTop: 16, height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "19%", background: "linear-gradient(90deg, #10b981, #059669)", borderRadius: 4 }} />
                </div>
                <div style={{ fontSize: 11, opacity: 0.6, marginTop: 6 }}>19% — ₾ 5,420 / ₾ 28,500</div>
              </div>
              <div style={{ background: "white", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <h2 style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 800, color: "#1a1a2e" }}>📋 გადახდების ისტორია</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {FINANCES.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: "#f9fafb", borderRadius: 14, border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: 22 }}>{f.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e" }}>{f.type}</div>
                        <div style={{ fontSize: 12, color: "#9ca3af" }}>{f.month}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a2e" }}>{f.amount}</div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: f.status === "გადარიცხული" ? "#10b981" : f.status === "მომლოდინე" ? "#f59e0b" : "#6b7280" }}>{f.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ SCHEDULE ════ */}
          {dashTab === "schedule" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "white", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#1a1a2e" }}>📅 ჩემი განრიგი</h2>
                  <div style={{ background: "#fff1f2", border: "1.5px solid #fca5a5", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "#C8102E" }}>{scheduleItems.length} ვიზიტი</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {scheduleItems.map((s, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", gap: 16, padding: "18px 20px", background: "#f9fafb", borderRadius: 16, border: `1.5px solid ${s.type === "procedure" ? "#fca5a5" : s.type === "virtual" ? "#bfdbfe" : "#e5e7eb"}`, position: "relative", overflow: "hidden" }}
                    >
                      {s.type === "procedure" && (
                        <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "linear-gradient(180deg, #C8102E, #8B0000)" }} />
                      )}
                      <div style={{ width: 54, height: 54, borderRadius: 14, background: s.type === "procedure" ? "linear-gradient(135deg, #C8102E, #8B0000)" : s.type === "virtual" ? "linear-gradient(135deg, #3b82f6, #2563eb)" : "linear-gradient(135deg, #6b7280, #4b5563)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "white" }}>
                        <div style={{ fontSize: 14, fontWeight: 900, lineHeight: 1 }}>{s.date.split(" ")[0]}</div>
                        <div style={{ fontSize: 10, opacity: 0.8 }}>{s.date.split(" ")[1]?.substring(0, 3)}</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>{s.title}</div>
                        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>⏰ {s.time} • 📍 {s.location}</div>
                        <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 8, background: s.type === "procedure" ? "#fff1f2" : s.type === "virtual" ? "#eff6ff" : "#f1f5f9", color: s.type === "procedure" ? "#C8102E" : s.type === "virtual" ? "#3b82f6" : "#6b7280" }}>
                          {s.type === "procedure" ? "🌱 პროცედურა" : s.type === "virtual" ? "💻 ვირტუალური" : "🏥 სამედიცინო"}
                        </div>
                      </div>
                      <div>
                        {s.confirmed ? (
                          <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 12, padding: "6px 12px", fontSize: 11, fontWeight: 700, color: "#10b981", whiteSpace: "nowrap" }}>✅ დადასტურდა</div>
                        ) : (
                          <button
                            onClick={() => confirmAppointment(i)}
                            style={{ background: "linear-gradient(135deg, #C8102E, #8B0000)", border: "none", borderRadius: 12, padding: "8px 14px", fontSize: 11, fontWeight: 700, color: "white", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 3px 12px rgba(200,16,46,0.3)", fontFamily: "'Georgia', serif" }}
                          >დადასტურება</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ SUPPORT ════ */}
          {dashTab === "support" && (
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ flex: 1, background: "white", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(200,16,46,0.06)", display: "flex", flexDirection: "column", overflow: "hidden", height: "calc(100vh - 200px)", minHeight: 480, maxHeight: 680 }}>
                <div style={{ padding: "18px 22px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 14, background: "linear-gradient(135deg, #fff9f9, white)" }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #E8B84B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16, boxShadow: "0 4px 14px rgba(200,16,46,0.3)" }}>{SURROGATE.coordinator.avatar}</div>
                    <div style={{ position: "absolute", bottom: 1, right: 1, width: 11, height: 11, borderRadius: "50%", background: "#10b981", border: "2px solid white" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>{SURROGATE.coordinator.name}</div>
                    <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>● ონლაინ • პასუხობს &lt; 30 წთ</div>
                  </div>
                  <div style={{ marginLeft: "auto", background: "#fff1f2", border: "1.5px solid #fca5a5", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "#C8102E" }}>💬 პირადი ჩატი</div>
                </div>
                <div style={{ flex: 1, overflowY: "auto", padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14, background: "#fafafa" }}>
                  {chatMessages.map((msg) => (
                    <div key={msg.id} style={{ display: "flex", flexDirection: msg.from === "user" ? "row-reverse" : "row", alignItems: "flex-end", gap: 8 }}>
                      {msg.from === "coordinator" && (
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #E8B84B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 11, flexShrink: 0 }}>LL</div>
                      )}
                      <div style={{ maxWidth: "72%", padding: "12px 16px", borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", background: msg.from === "user" ? "linear-gradient(135deg, #C8102E, #8B0000)" : "white", color: msg.from === "user" ? "white" : "#1a1a2e", fontSize: 13, lineHeight: 1.6, boxShadow: msg.from === "user" ? "0 4px 16px rgba(200,16,46,0.3)" : "0 2px 10px rgba(0,0,0,0.06)", border: msg.from === "coordinator" ? "1px solid #f1f5f9" : "none" }}>
                        {msg.text}
                        <div style={{ fontSize: 10, opacity: 0.6, marginTop: 4, textAlign: msg.from === "user" ? "right" : "left" }}>{msg.time}</div>
                      </div>
                    </div>
                  ))}
                  {chatTyping && (
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #C8102E, #E8B84B)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 11, flexShrink: 0 }}>LL</div>
                      <div style={{ padding: "12px 18px", background: "white", borderRadius: "18px 18px 18px 4px", border: "1px solid #f1f5f9", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", gap: 4, alignItems: "center" }}>
                        {[0, 1, 2].map((dot) => (
                          <div key={dot} style={{ width: 8, height: 8, borderRadius: "50%", background: "#C8102E", opacity: 0.6, animation: `ariaBounce 1.2s ${dot * 0.2}s infinite` }} />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <div style={{ padding: "16px 18px", borderTop: "1px solid #f1f5f9", display: "flex", gap: 10, alignItems: "center", background: "white" }}>
                  <input
                    ref={chatInputRef}
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="შეტყობინება..."
                    style={{ flex: 1, padding: "11px 18px", borderRadius: 20, border: "1.5px solid #e5e7eb", fontSize: 13, outline: "none", fontFamily: "'Georgia', serif", color: "#1a1a2e", background: "#f9fafb", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C8102E88")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!chatInput.trim()}
                    style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: chatInput.trim() ? "linear-gradient(135deg, #C8102E, #8B0000)" : "#f1f5f9", color: chatInput.trim() ? "white" : "#9ca3af", fontSize: 16, cursor: chatInput.trim() ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", boxShadow: chatInput.trim() ? "0 4px 14px rgba(200,16,46,0.35)" : "none", flexShrink: 0 }}
                  >➤</button>
                </div>
              </div>

              <div style={{ width: 220, display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
                <div style={{ background: "white", borderRadius: 16, padding: "18px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 12 }}>📞 კავშირი</div>
                  {[
                    { icon: "📱", label: "ტელეფონი", val: "+995 32 2XX XXXX" },
                    { icon: "📧", label: "ელ-ფოსტა", val: "lile@aria-surrogacy.com" },
                    { icon: "💬", label: "WhatsApp", val: "+995 577 XXX XXX" },
                  ].map((c, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 2 }}>{c.icon} {c.label}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e" }}>{c.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "white", borderRadius: 16, padding: "18px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(200,16,46,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 12 }}>❓ სწრაფი დახმარება</div>
                  {["ხელშეკრულების ასლი", "სამედიცინო ცნობა", "გადახდის ისტორია", "გადაუდებელი კონტაქტი"].map((item, i) => (
                    <button
                      key={i}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "8px 12px", marginBottom: 6, borderRadius: 10, border: "1px solid #f1f5f9", background: "#f9fafb", fontSize: 11, color: "#374151", fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "'Georgia', serif" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#fff1f2"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#C8102E"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.color = "#374151"; }}
                    >{item}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @keyframes ariaPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes ariaBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
