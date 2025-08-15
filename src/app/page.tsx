<<<<<<< HEAD
import { useState } from 'react';
=======
'use client';

import React, { useEffect, useRef, useState } from "react";

/**
 * ⚡ Savage Tech Portfolio — single-file page
 * - Matrix background
 * - Hero + fixed Header
 * - Live Demos (Terminal + Aim Trainer)
 * - GitHub Arcade (orbits your repos)
 * - Projects, Skills, Contact, Footer
 */

const ROLES = [
  "Tech Titan",
  "SaaS Slayer",
  "Quantum Conqueror",
  "Empire Builder",
  "Captain Chaos",
];

const SKILLS = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind",
  "Kali Linux",
  "LLMs",
  "Prompt Engineering",
  "Automation",
  "APIs",
  "Git & GitHub",
  "First-Principles Thinking",
];

const PROJECTS = [
  {
    name: "AI for Students (Hero Page)",
    link: "#",
    tags: ["Education", "AI"],
    blurb:
      "Fast landing page prototype for student-first AI tools. Built for shipping velocity and clean onboarding.",
  },
  {
    name: "CareConnect (Pilot)",
    link: "#",
    tags: ["Health", "Ops"],
    blurb:
      "Matching caregivers with families + weekly logs. Privacy-first, human-centric workflows.",
  },
  {
    name: "Human-Only Rooms (Trust Layer)",
    link: "#",
    tags: ["Security", "Identity"],
    blurb:
      "Verification without creepy data grabs. Pass/fail primitives for real-world trust.",
  },
];

/* ========================== GitHub Arcade ========================== */

function RepoArcade({ username = "ripplewave2025" }: { username?: string }) {
  const [repos, setRepos] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    fetch(`/api/github?u=${username}`)
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setRepos(d); })
      .catch(() => {});
  }, [username]);

  const items = repos.slice(0, 24);
>>>>>>> e1e8979 (deploy: page.tsx drop-in + api route wired)

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxnIGZpbGw9IiMxZjJhMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+ICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-20">
          <Hero />
          <About />
        </main>
        <Footer />
=======
    <div className="relative h-72 md:h-96 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full border border-emerald-400/30" />
          {items.map((r, i) => {
            const ring = i % 3;                 // choose ring
            const radius = [42, 58, 74][ring];  // %
            const speed  = [10, 14, 18][ring];  // seconds
            const deg = (i * 360) / items.length;
            return (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="absolute text-xs md:text-sm px-2 py-1 rounded-xl bg-emerald-500/15 border border-emerald-400/30 hover:bg-emerald-500/30 hover:scale-105 transition shadow-[0_0_12px_rgba(16,185,129,.25)]"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${deg}deg) translateX(${radius}%) translateY(-50%)`,
                  animation: `orbit ${speed}s linear infinite`,
                  whiteSpace: "nowrap",
                }}
                title={r.name}
              >
                {r.name}
              </a>
            );
          })}
          <div className="absolute inset-12 rounded-full border border-white/10" />
          <div className="absolute inset-0 grid place-items-center text-center text-white/60 text-xs px-6">
            <div>Click any repo to open on GitHub.</div>
          </div>
        </div>
>>>>>>> e1e8979 (deploy: page.tsx drop-in + api route wired)
      </div>
    </div>
  );
}

<<<<<<< HEAD
function Header() {
  return (
    <header className="relative z-20 py-6">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Upesh</div>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-white/70 hover:text-white text-sm">
            About
          </a>
          <a href="#contact" className="text-white/70 hover:text-white text-sm">
            Contact
          </a>
=======
/* ============================ Page ================================ */

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden scroll-smooth">
      <MatrixBG />
      <Header />
      <Hero />

      {/* Live demos */}
      <Section id="demos" title="Live Demos">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Hacker Terminal">
            <Terminal />
          </Card>
          <Card title="Bug Hunt — Aim Trainer (30s)">
            <BugHunt />
          </Card>
        </div>
      </Section>

      {/* GitHub Arcade */}
      <Section id="arcade" title="GitHub Arcade">
        <div className="scroll-mt-28 md:scroll-mt-36" />
        <RepoArcade username="ripplewave2025" />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <Projects />
      </Section>

      {/* Skills */}
      <Section id="skills" title="Stack & Superpowers">
        <Skills />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact & Links">
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

/* ========================== Components ============================ */

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg">
          <span className="text-white">Upesh</span>
          <span className="text-emerald-400">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Demos", "#demos"],
            ["Arcade", "#arcade"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="opacity-80 hover:opacity-100">
              {label}
            </a>
          ))}
>>>>>>> e1e8979 (deploy: page.tsx drop-in + api route wired)
        </nav>
      </div>
    </header>
  );
}

function Hero() {
<<<<<<< HEAD
=======
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const role = ROLES[i % ROLES.length];
    setTyped("");
    let idx = 0;
    const type = setInterval(() => {
      idx++;
      setTyped(role.slice(0, idx));
      if (idx >= role.length) clearInterval(type);
    }, 50);
    const rot = setTimeout(() => setI((x) => x + 1), 2500);
    return () => { clearInterval(type); clearTimeout(rot); };
  }, [i]);

>>>>>>> e1e8979 (deploy: page.tsx drop-in + api route wired)
  return (
    <section id="home" className="py-20">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Ship {"&"} iterate
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Fast landing page prototype for student-first AI tools. Built for shipping velocity and clean onboarding.
          </p>
        </div>
<<<<<<< HEAD
        
        <div className="flex flex-wrap justify-center gap-4">
          <CopyEmail />
          <ActionButton
            onClick={() => window.open('https://github.com/ripplewave2025', '_blank')}
          >
            GitHub
          </ActionButton>
          <ActionButton
            onClick={() => window.open('https://twitter.com/upesh_py', '_blank')}
          >
            Twitter
          </ActionButton>
=======
        <div className="relative h-[320px] md:h-[420px]">
          <GlobeOrbit />
        </div>
      </div>
    </section>
  );
}

function MatrixBG() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let cols = Math.floor(w / 16) + 1;
    let ypos = Array(cols).fill(0);
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(16, 185, 129, 0.75)";
      ctx.font = "14px monospace";
      ypos.forEach((y, ind) => {
        const text = Math.random() > 0.5 ? "0" : "1";
        const x = ind * 16;
        ctx.fillText(text, x, y);
        if (y > h + Math.random() * 1000) ypos[ind] = 0;
        else ypos[ind] = y + 16;
      });
      requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / 16) + 1;
      ypos = Array(cols).fill(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,.75),rgba(0,0,0,.5),transparent)]"
    />
  );
}

function GlobeOrbit() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full border border-emerald-400/30" />
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-emerald-300 rounded-full shadow-[0_0_12px_2px_rgba(16,185,129,0.7)]"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${(i * 360) / 12}deg) translateX(40%) translateY(-50%)`,
              transformOrigin: "0 0",
              animation: `orbit ${6 + (i % 3)}s linear infinite`,
            }}
          />
        ))}
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-center text-sm text-white/70 max-w-[12rem]">
            "Make it work, make it right, make it scale."
          </span>
        </div>
      </div>
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg) translateX(40%) translateY(-50%); } to { transform: rotate(360deg) translateX(40%) translateY(-50%);} }
      `}</style>
    </div>
  );
}

function Section({ id, title, children }: any) {
  return (
    <section id={id} className="relative z-10 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-xl shadow-emerald-500/5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-xs text-white/50">interactive</span>
      </div>
      {children}
    </div>
  );
}

function Terminal() {
  const [lines, setLines] = useState<string[]>([
    "boot> Welcome to the Hacker Terminal demo.",
    "type 'help' to see commands",
  ]);
  const [cmd, setCmd] = useState("");

  const run = (c: string) => {
    const out: string[] = [];
    const lc = c.trim().toLowerCase();
    switch (lc) {
      case "help":
        out.push("whoami | skills | projects | clear | motto");
        break;
      case "whoami":
        out.push("Upesh — builder of ruthless, human-first systems.");
        break;
      case "skills":
        out.push(SKILLS.join(", "));
        break;
      case "projects":
        out.push(PROJECTS.map((p) => `- ${p.name} ${p.link !== "#" ? p.link : ""}`).join("\n"));
        break;
      case "motto":
        out.push("Either you're in, or I'm out.");
        break;
      case "clear":
        setLines([]);
        return;
      default:
        out.push(`unknown: ${c}`);
    }
    setLines((prev) => [...prev, `> ${c}`, ...out]);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!cmd.trim()) return;
    run(cmd);
    setCmd("");
  };

  return (
    <div className="h-72 bg-black/60 rounded-xl border border-emerald-400/20 overflow-hidden">
      <div className="px-3 py-2 text-xs bg-emerald-500/10 border-b border-emerald-400/20">
        <span className="text-emerald-300">/dev/tty0</span> — demo
      </div>
      <div className="p-3 h-[calc(18rem-40px-44px)] overflow-auto font-mono text-sm space-y-1">
        {lines.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap text-emerald-200/90">
            {l}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex items-center gap-2 p-2 border-t border-emerald-400/20">
        <span className="text-emerald-300 font-mono text-sm">$</span>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="type a command… (help)"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
        />
        <ActionButton type="submit">Run</ActionButton>
      </form>
    </div>
  );
}

function BugHunt() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(30);
  const [hits, setHits] = useState(0);
  const [miss, setMiss] = useState(0);
  const [targets, setTargets] = useState<any[]>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!running) return;
    setTime(30); setHits(0); setMiss(0); setTargets([]);
    let t = 30;
    const timer = setInterval(() => {
      t -= 1; setTime(t);
      if (t <= 0) { clearInterval(timer); setRunning(false); }
    }, 1000);
    const spawner = setInterval(() => { addTarget(); }, 850);
    return () => { clearInterval(timer); clearInterval(spawner); };
  }, [running]);

  const addTarget = () => {
    const el = boxRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;
    const size = 36 + Math.random() * 18;
    const x = Math.random() * (W - size);
    const y = Math.random() * (H - size);
    const id = Math.random().toString(36).slice(2, 7);
    setTargets((prev) => [...prev, { id, x, y, size, born: Date.now(), life: 1400 + Math.random() * 1200 }]);
    setTimeout(() => { setTargets((prev) => prev.filter((t) => t.id !== id)); setMiss((m) => m + 1); }, 1400);
  };

  const hit = (id: string) => {
    setTargets((prev) => prev.filter((t) => t.id !== id));
    setHits((h) => h + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-sm">
        <div className="flex gap-3">
          <Badge label={`⏱ ${time}s`} />
          <Badge label={`✅ ${hits}`} />
          <Badge label={`❌ ${miss}`} />
        </div>
        <div className="flex gap-2">
          <ActionButton onClick={() => setRunning(true)} disabled={running}>Start</ActionButton>
          <ActionButton onClick={() => setRunning(false)} disabled={!running}>Stop</ActionButton>
        </div>
      </div>
      <div
        ref={boxRef}
        className="relative h-72 rounded-xl border border-white/10 bg-gradient-to-b from-emerald-950/50 to-black overflow-hidden cursor-crosshair"
        onClick={() => { if (running) setMiss((m) => m + 1); }}
      >
        {targets.map((t) => (
          <button
            key={t.id}
            onClick={(e) => { e.stopPropagation(); hit(t.id); }}
            className="absolute rounded-full grid place-items-center border border-emerald-300/40 bg-emerald-500/20 hover:bg-emerald-400/40 shadow-[0_0_18px_2px_rgba(16,185,129,0.45)]"
            style={{ left: t.x, top: t.y, width: t.size, height: t.size }}
            title="Fix this bug!"
          >
            🐛
          </button>
        ))}
        {!running && (
          <div className="absolute inset-0 grid place-items-center text-center p-6">
            <div className="text-white/80">
              <div className="text-lg font-semibold">Aim Trainer</div>
              <div className="text-sm mt-1">Click the 🐛 as they appear. 30 seconds. Accuracy matters.</div>
            </div>
          </div>
        )}
      </div>
      {!running && (hits + miss > 0) && (
        <div className="mt-3 text-sm text-white/80">
          Score: <b>{hits}</b> hits, <b>{miss}</b> misses — accuracy {Math.round((hits / Math.max(1, hits + miss)) * 100)}%
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {PROJECTS.map((p) => (
        <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-white/60">{p.blurb}</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-200">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <a href={p.link} className="text-sm opacity-80 hover:opacity-100 underline underline-offset-4">
              {p.link === "#" ? "(Add link)" : "Open"}
            </a>
          </div>
        </div>
      ))}
      <div className="rounded-2xl border border-dashed border-white/15 p-5 text-white/60">
        Drop your next build here. Ship weekly, iterate daily.
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((s) => (
        <span
          key={s}
          className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:text-emerald-200"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="font-semibold">Let’s build.</div>
        <div className="text-white/70 mt-1 text-sm">
          Freelance, collab, or founder-to-founder. Zero fluff, maximum impact.
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CopyEmail />
          <a
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
            href="https://x.com/upeshinmars"
            target="_blank"
            rel="noreferrer"
          >X / Twitter</a>
          <a
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
            href="https://www.instagram.com/hotbpoison"
            target="_blank"
            rel="noreferrer"
          >Instagram</a>
          <a
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
            href="https://www.youtube.com/@techinahurry-A"
            target="_blank"
            rel="noreferrer"
          >YouTube</a>
          <a
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
            href="https://massive-industry-848.notion.site/Website-Structure-212983e5ce75804688b6e1b68f4d681e"
            target="_blank"
            rel="noreferrer"
          >Notion</a>
>>>>>>> e1e8979 (deploy: page.tsx drop-in + api route wired)
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js',
    'Python', 'AI/ML', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            I build tools that help students and developers ship faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-white mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-white mb-3">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <a
                className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
                href="https://www.instagram.com/upesh.py"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
                href="https://www.youtube.com/@techinahurry-A"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
              <a
                className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
                href="https://massive-industry-848.notion.site/Website-Structure-212983e5ce75804688b6e1b68f4d681e"
                target="_blank"
                rel="noreferrer"
              >
                Notion
              </a>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold">One-liner</div>
          <div className="text-white/70 mt-1 text-sm">
            {"I debug human workflows like a sysadmin, then automate them like an AI engineer."}
          </div>
          <div className="mt-3 text-white/60 text-sm">
            Available for: AI automation, onboarding funnels, dev-tools, trust/identity primitives.
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 py-10">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-sm text-white/50">
        <span>
          © {new Date().getFullYear()} Upesh — ship {"&gt;"} talk.
        </span>
        <a href="#home" className="hover:text-white/80">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("upesh@localhost.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  
  return (
    <button
      onClick={handleCopyEmail}
      className="px-4 py-2 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-sm"
    >
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

function ActionButton({ children, onClick, disabled, className, ...props }: ActionButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm disabled:opacity-50 ${className || ''}`}
    >
      {children}
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/10">
      {label}
    </span>
  );
}
