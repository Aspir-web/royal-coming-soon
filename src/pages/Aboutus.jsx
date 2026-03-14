import React, { useEffect, useRef } from "react";
import { Award, Shield, Star } from "lucide-react";

// ─── Swap these imports in once client provides assets ────────────────────────
// import clientPhoto from "../assets/client-photo.jpg";
import cert1 from "../assets/aboutus/cert-aiscys.jpg";
import cert2 from "../assets/aboutus/anti-crime.jpg";
import cert3 from "../assets/aboutus/registration-auth.jpg";
import cert4 from "../assets/aboutus/farmer-union.jpg";

const CLIENT_NAME  = "Mr. Amit Kumar";         // ← update client name here
const CLIENT_TITLE = "Founder & Director, Royal Supreme Distillery & Beverage Company";

const designations = [
  {
    id: "01",
    org: "All India Scheduled Caste Yuvjan Samaj (Regd.) — 10721",
    role: "State Vice President",
    Icon: Shield,
    certImage: cert1,
  },
  {
    id: "02",
    org: "National Human Rights & Anti Crime Control Council India",
    role: "State President",
    Icon: Award,
    certImage: cert2,
  },
  {
    id: "03",
    org: "Registration Certificate Authority",
    role: "State President",
    Icon: Star,
    certImage: cert3,
  },
  {
    id: "04",
    org: "Indian Farmer's Union",
    role: "National General Secretary",
    Icon: Shield,
    certImage: cert4,
  },
];

// ─── Reveal on scroll ─────────────────────────────────────────────────────────
function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("rs-visible");
        }),
      { threshold: 0.12 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const add = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
  return add;
}

export default function AboutUs() {
  const reveal = useReveal();

  const nameParts   = CLIENT_NAME.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/, "").split(" ");
  const initials    = nameParts.slice(0, 2).map((n) => n[0]).join("");
  const firstName   = nameParts[0];
  const lastWord    = nameParts[nameParts.length - 1];
  const namePrefix  = CLIENT_NAME.replace(lastWord, "").trim();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .rs-display { font-family: 'Cormorant Garamond', serif; }
        .rs-body    { font-family: 'Jost', sans-serif; }

        @keyframes rs-up   { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rs-spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes rs-pulse{ 0%{transform:scale(1);opacity:.5} 100%{transform:scale(1.2);opacity:0} }
        @keyframes rs-scroll{ 0%,100%{opacity:.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.1)} }

        .a0{opacity:0;animation:rs-up .7s ease .1s forwards}
        .a1{opacity:0;animation:rs-up .7s ease .3s forwards}
        .a2{opacity:0;animation:rs-up .7s ease .5s forwards}
        .a3{opacity:0;animation:rs-up .7s ease .7s forwards}
        .a4{opacity:0;animation:rs-up .7s ease .9s forwards}
        .a5{opacity:0;animation:rs-up .7s ease 1.1s forwards}

        .rs-reveal { opacity:0; transform:translateY(30px); transition:opacity .65s ease, transform .65s ease; }
        .rs-visible { opacity:1 !important; transform:translateY(0) !important; }

        .rs-spin-slow  { animation: rs-spin 20s linear infinite; }
        .rs-spin-rev   { animation: rs-spin 16s linear infinite reverse; }
        .rs-pulse-ring { animation: rs-pulse 2s ease-out infinite; }
        .rs-pulse-ring2{ animation: rs-pulse 2s ease-out .7s infinite; }
        .rs-scroll-bar { animation: rs-scroll 2s ease-in-out infinite; }

        .desig-card { transition: background .3s ease; }
        .desig-card:hover { background: rgba(107,13,55,0.7) !important; }
        .desig-card .desig-bar { height: 0; transition: height .45s ease; }
        .desig-card:hover .desig-bar { height: 100%; }
      `}</style>

      <div className="rs-body bg-[#951049] min-h-screen mt-20 overflow-x-hidden">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden">
          {/* bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5c0928] via-[#7a0d3b] to-[#951049]" />
          {/* grid texture */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,215,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,1) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* glow blobs */}
          <div className="absolute top-16 left-1/4 w-72 h-72 bg-[#FFD700] rounded-full blur-3xl opacity-[0.06] pointer-events-none" />
          <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl opacity-[0.05] pointer-events-none" />
          {/* decorative rings */}
          <div className="rs-spin-slow absolute top-20 right-16 w-28 h-28 border border-[#FFD700]/10 rounded-full hidden lg:block" />
          <div className="rs-spin-rev  absolute bottom-28 left-10 w-20 h-20 border border-[#FFD700]/10 rounded-full hidden lg:block" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* eyebrow */}
            <p className="a0 rs-body text-[#FFD700] text-[11px] tracking-[.35em] uppercase font-medium mb-10">
              Royal Supreme · About the Founder
            </p>

            {/* avatar */}
            <div className="a1 relative inline-block mb-10">
              <div className="rs-pulse-ring  absolute inset-0 rounded-full border border-[#FFD700]/40 pointer-events-none" />
              <div className="rs-pulse-ring2 absolute -inset-3 rounded-full border border-[#FFD700]/20 pointer-events-none" />
              {/*
                Replace the placeholder div below with:
                <img src={clientPhoto} alt={CLIENT_NAME}
                     className="w-44 h-44 rounded-full object-cover border-4 border-[#FFD700] relative z-10" />
              */}
              <div className="w-44 h-44 rounded-full border-4 border-[#FFD700] bg-[#6b0d37] flex items-center justify-center relative z-10">
                <span className="rs-display text-6xl font-bold text-[#FFD700]">{initials}</span>
              </div>
            </div>

            {/* name */}
            <h1 className="a2 rs-display font-bold text-white leading-tight mb-2"
                style={{ fontSize: "clamp(44px,7vw,80px)" }}>
              {namePrefix}&nbsp;<span className="text-[#FFD700]">{lastWord}</span>
            </h1>
            <p className="a3 rs-display text-xl md:text-2xl italic text-white/60 mb-6">{CLIENT_TITLE}</p>

            {/* divider */}
            <div className="a3 flex items-center justify-center gap-4 my-6">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#FFD700]/60" />
              <span className="text-[#FFD700]">✦</span>
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#FFD700]/60" />
            </div>

            {/* role chips */}
            <div className="a4 flex flex-wrap gap-3 justify-center mt-6">
              {designations.map((d, i) => (
                <span key={i}
                  className="bg-[#6b0d37]/70 border border-[#FFD700]/25 text-[#FFD700] text-xs px-4 py-2 rounded-full font-medium tracking-wide">
                  {d.role}
                </span>
              ))}
            </div>
          </div>

          {/* scroll cue */}
          <div className="a5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="rs-body text-white/30 text-[10px] tracking-[.3em] uppercase">Scroll</span>
            <div className="rs-scroll-bar w-px h-10 bg-gradient-to-b from-[#FFD700] to-transparent" />
          </div>
        </section>

        {/* ══════════════════════════════════════
            GOLD QUOTE STRIP  (matches homepage closing card style)
        ══════════════════════════════════════ */}
        <section className="py-14 px-6 bg-[#FFD700]">
          <div className="max-w-4xl mx-auto text-center rs-reveal" ref={reveal}>
            <p className="rs-display text-2xl md:text-3xl font-bold text-[#951049] italic leading-relaxed">
              "A leader who builds not just businesses, but bridges — between communities, rights, and opportunity."
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ABOUT NARRATIVE
        ══════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#7a0d3b] to-[#951049] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 rs-reveal" ref={reveal}>
              <p className="text-[#FFD700] text-[11px] tracking-[.4em] uppercase font-medium mb-4">The Person Behind the Brand</p>
              <h2 className="rs-display text-5xl md:text-6xl font-bold text-[#FFD700] uppercase tracking-wider mb-4">
                About {firstName}
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20 rs-reveal" ref={reveal}>
                <h3 className="rs-display text-3xl font-bold text-[#FFD700] mb-4">The Entrepreneur</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {CLIENT_NAME} is the visionary founder of{" "}
                  <span className="text-[#FFD700] font-semibold">Royal Supreme Distillery & Beverage Company</span>,
                  established in 2018. Under his leadership, the company has scaled rapidly across North India,
                  becoming one of the fastest-growing names in India's premium alcoholic beverage industry.
                </p>
              </div>

              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20 rs-reveal" ref={reveal}>
                <h3 className="rs-display text-3xl font-bold text-[#FFD700] mb-4">The Social Leader</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Beyond business, {firstName} is deeply committed to social causes — championing human rights,
                  farmer welfare, and community development. He holds prestigious positions across national and
                  state-level organisations, reflecting an unwavering dedication to society and the people he serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            DESIGNATIONS
        ══════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#951049] to-[#7a0d3b]">
          <div className="max-w-7xl mx-auto">

            {/* header */}
            <div className="text-center mb-16 rs-reveal" ref={reveal}>
              <p className="text-[#FFD700] text-[11px] tracking-[.4em] uppercase font-medium mb-4">Official Positions & Affiliations</p>
              <h2 className="rs-display text-5xl md:text-6xl font-bold text-[#FFD700] uppercase tracking-wider mb-4">
                Designations
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6" />
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Recognised across multiple national and state-level bodies for leadership, advocacy, and service.
              </p>
            </div>

            {/* 2-col grid with gold gap lines */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#FFD700]/15"
              style={{ gap: "2px", background: "rgba(255,215,0,0.12)" }}
            >
              {designations.map((d, i) => {
                const { Icon } = d;
                return (
                  <div
                    key={d.id}
                    ref={reveal}
                    className="desig-card rs-reveal relative bg-[#6b0d37]/50 p-8 md:p-10 overflow-hidden"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    {/* left accent bar */}
                    <div className="desig-bar absolute top-0 left-0 w-[3px] bg-[#FFD700]" />

                    {/* giant bg number */}
                    <span className="rs-display absolute top-4 right-5 font-bold text-[#FFD700] select-none pointer-events-none leading-none"
                          style={{ fontSize: "88px", opacity: 0.04 }}>
                      {d.id}
                    </span>

                    {/* badge pill */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#FFD700] flex-shrink-0" />
                      <span className="rs-body text-[#FFD700] text-[11px] tracking-[.25em] uppercase font-medium">Official Position</span>
                    </div>

                    <div className="flex items-start gap-5">
                      {/* icon box */}
                      <div className="w-14 h-14 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#FFD700]" />
                      </div>
                      <div>
                        <h3 className="rs-display text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                          {d.org}
                        </h3>
                        <div className="w-8 h-px bg-[#FFD700]/60 mb-3" />
                        <p className="rs-body text-[#FFD700] text-sm font-semibold tracking-widest uppercase">
                          {d.role}
                        </p>
                      </div>
                    </div>

                    {/* Certificate image — visible once certImage is set */}
                    {d.certImage ? (
                      <img
                        src={d.certImage}
                        alt={`${d.org} certificate`}
                        className="mt-6 w-full rounded-xl object-contain border border-[#FFD700]/20 max-h-64"
                      />
                    ) : (
                      <div className="mt-6 rounded-xl border border-dashed border-[#FFD700]/20 p-4 flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <p className="text-white/40 text-xs leading-relaxed">
                          <span className="block text-white/60 text-sm mb-1">Certificate image goes here</span>
                          Import the image and uncomment <code className="text-[#FFD700]/60">certImage</code> in the designations array.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CLOSING QUOTE  (identical pattern to homepage)
        ══════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#7a0d3b] to-[#951049] border-t border-[#FFD700]/10">
          <div className="max-w-3xl mx-auto text-center rs-reveal" ref={reveal}>
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-12 rounded-3xl">
              <p className="rs-display text-2xl md:text-3xl font-bold text-[#951049] italic leading-relaxed">
                "True leadership is measured not by the titles you hold, but by the lives you uplift along the way."
              </p>
              <p className="mt-6 rs-body text-[#951049]/70 font-semibold tracking-widest text-sm uppercase">
                — {CLIENT_NAME}
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}