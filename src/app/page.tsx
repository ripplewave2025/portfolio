'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Pin your repos so they appear first ---------- */
const PIN_REPOS = [
  "village-delivery-app","portfolio","aiforstudents.online","Lamahatta",
  "LamahattaCyberhub-cyberhatta-","Homestayinhimalayasofdarjeeling","portfolio-site",
  "aiforstudents-web","Cockpit","DarjeelingTeaAndTourism","AadikaviAwakens",
  "publiclearning","corner-spot-website","digital-readme-upesh","mydigitalcyborg",
  "allofme","readmethrough","landoforchids","airbnb-rooms-site","Fresho",
  "AI-For-Beginners","SimpleSite","Techforall","Upesh0070",
];
const repoKey = (r: { url?: string; name?: string }) =>
  (r?.url?.split("/").pop() || r?.name || "").toLowerCase();

/* ---------- GitHub Repo Arcade ---------- */
type RepoItem = { name: string; url: string; description: string | null; language: string | null; stars: number; forks: number };

function RepoArcade({ repos }: { repos: RepoItem[] }) {
  const items = useMemo(() => {
    const map = new Map(repos.map((r) => [repoKey(r), r]));
    const pinned = PIN_REPOS
      .map((n) => map.get(n.toLowerCase()))
      .filter(Boolean) as RepoItem[];
    const pinnedSet = new Set(pinned.map(repoKey));
    const rest = repos.filter((r) => !pinnedSet.has(repoKey(r)));
    return [...pinned, ...rest].slice(0, 24);
  }, [repos]);

  return (
    <div className="relative h-72 md:h-96 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full border border-emerald-400/30 pointer-events-none animate-pulse-slow" />
          {items.map((r, i) => {
            const ring = i % 3;
            const radius = [42, 58, 74][ring];
            const speed = [10, 14, 18][ring];
            const deg = (i * 360) / items.length;
            return (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute z-10 text-xs md:text-sm px-2 py-1 rounded-xl bg-emerald-500/15 border border-emerald-400/30 hover:bg-emerald-500/30 hover:scale-105 transition shadow-[0_0_12px_rgba(16,185,129,.25)] hover:shadow-[0_0_20px_rgba(16,185,129,.5)]"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${deg}deg) translateX(${radius}%) translateY(-50%)`,
                  animation: `orbit ${speed}s linear infinite`,
                  whiteSpace: "nowrap",
                  '--r': `${radius}%`,
                } as React.CSSProperties}
                title={`${r.name}${r.description ? `\n${r.description}` : ''}\n⭐ ${r.stars} 🍴 ${r.forks}${r.language ? `\nLang: ${r.language}` : ''}`}
              >
                {r.name}
              </a>
            );
          })}
          <div className="absolute inset-12 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute inset-0 grid place-items-center text-center text-white/60 text-xs px-6 pointer-events-none">
            <div>Hover for details, click to conquer GitHub.</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--r)) translateY(-50%); }
          to   { transform: rotate(360deg) translateX(var(--r)) translateY(-50%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ---------- Constants ---------- */
const ROLES = ["Tech Titan","SaaS Slayer","Quantum Conqueror","Empire Builder","Captain Chaos","Code Annihilator","AI Overlord"];
const SKILL_CATEGORIES = [
  { category: "Core Weapons", items: ["Python","JavaScript","React","Node.js","Tailwind"] },
  { category: "Battle Tools", items: ["Kali Linux","Git & GitHub","APIs"] },
  { category: "Mind Powers", items: ["LLMs","Prompt Engineering","Automation","First-Principles Thinking"] },
];

type GitHubUser = { followers: number; following: number; public_repos: number; avatar_url: string; bio: string | null };

/* ---------- Root Page ---------- */
export default function Portfolio() {
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const username = "ripplewave2025";
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => setUser({ followers: d.followers, following: d.following, public_repos: d.public_repos, avatar_url: d.avatar_url, bio: d.bio }));
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((r) => r.json())
      .then((d) => {
        const repoData = d.map((r: any) => ({
          name: r.name,
          url: r.html_url,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
        }));
        setRepos(repoData);
        setTotalStars(repoData.reduce((acc: number, r: RepoItem) => acc + r.stars, 0));
      })
      .catch(() => {});
  }, []);

  const pinnedRepos = useMemo(() => {
    const map = new Map(repos.map((r) => [repoKey(r), r]));
    const pinned = PIN_REPOS
      .map((n) => map.get(n.toLowerCase()))
      .filter(Boolean) as RepoItem[];
    return pinned;
  }, [repos]);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
      <MatrixBG />
      <Header />
      <Hero user={user} />

      <Section id="demos" title="Live Demos" className="fade-in" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Hacker Terminal"><Terminal /></Card>
          <Card title="Bug Hunt — Aim Trainer (30s)"><BugHunt /></Card>
        </div>
      </Section>

      <Section id="arcade" title="GitHub Arcade" className="fade-in" style={{ animationDelay: '0.4s' } as React.CSSProperties}>
        <RepoArcade repos={repos} />
      </Section>

      <Section id="stats" title="GitHub Domination" className="fade-in" style={{ animationDelay: '0.6s' } as React.CSSProperties}>
        <Stats user={user} totalStars={totalStars} totalRepos={repos.length} />
      </Section>

      <Section id="projects" title="Featured Conquests" className="fade-in" style={{ animationDelay: '0.8s' } as React.CSSProperties}>
        <Projects repos={pinnedRepos} />
      </Section>

      <Section id="skills" title="Arsenal & Superpowers" className="fade-in" style={{ animationDelay: '1s' } as React.CSSProperties}>
        <Skills />
      </Section>

      <Section id="contact" title="Forge Alliances" className="fade-in" style={{ animationDelay: '1.2s' } as React.CSSProperties}>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

/* ---------- UI Pieces ---------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg">
          <span className="text-white">Upesh</span><span className="text-emerald-400">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Demos", "#demos"],
            ["Arcade", "#arcade"],
            ["Stats", "#stats"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="opacity-80 hover:opacity-100 transition hover:text-emerald-300">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ActionButton onClick={() => window.print()}>Print Intel</ActionButton>
        </div>
      </div>
    </header>
  );
}

function Hero({ user }: { user: GitHubUser | null }) {
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

  return (
    <section id="home" className="relative z-10 pt-28 md:pt-36 pb-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300/80 mb-3 animate-pulse">
            First-Principles • Automation • Domination
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Forging ruthless, human-first empires.
          </h1>
          <p className="mt-4 text-white/70 max-w-prose">
            From tech warlord to code conqueror. I deploy systems that obliterate inefficiency, amplify trust, and weaponize chaos into victory.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#demos" className="px-4 py-2 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 hover:shadow-[0_0_12px_rgba(16,185,129,.5)] transition">▶ Engage Demo</a>
            <a href="#projects" className="px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,.1)] transition">Scan Projects</a>
            <CopyEmail />
          </div>
          <div className="mt-6 text-sm text-white/60">
            Active Mode: <span className="text-emerald-300 font-semibold">{typed}_</span>
          </div>
        </div>
        <div className="relative h-[320px] md:h-[420px]"><GlobeOrbit user={user} /></div>
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
    const chars = "0123456789ABCDEF";
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(16, 185, 129, 0.75)";
      ctx.font = "14px monospace";
      ypos.forEach((y, ind) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = ind * 16;
        ctx.fillText(text, x, y);
        ypos[ind] = y > h + Math.random() * 1000 ? 0 : y + 16;
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
  return <canvas ref={ref} className="fixed inset-0 z-0 opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,.75),rgba(0,0,0,.5),transparent)]" />;
}

function GlobeOrbit({ user }: { user: GitHubUser | null }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-spin-slow" />
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-emerald-300 rounded-full shadow-[0_0_12px_2px_rgba(16,185,129,0.7)]"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${(i * 360) / 16}deg) translateX(45%) translateY(-50%)`,
              transformOrigin: "0 0",
              animation: `orbit ${5 + (i % 4)}s linear infinite`,
              '--r': '45%',
            } as React.CSSProperties}
          />
        ))}
        <div className="absolute inset-10 rounded-full border border-white/10 animate-spin-slow-reverse" />
        <div className="absolute inset-0 grid place-items-center">
          {user?.avatar_url ? (
            <img src={user.avatar_url} alt="Upesh" className="w-24 h-24 rounded-full border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
          ) : (
            <span className="text-center text-sm text-white/70 max-w-[12rem]">
              &quot;Code or perish.&quot;
            </span>
          )}
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      `}</style>
    </div>
  );
}

type SectionProps = { id: string; title: string; children: React.ReactNode; className?: string };
function Section({ id, title, children, className = "", ...props }: SectionProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={`relative z-10 py-14 md:py-20 ${className}`} {...props}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">{title}</span>
        </h2>
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  );
}

type CardProps = { title: string; children: React.ReactNode };
function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/20 transition">
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
    "boot> Initiating savage mode.",
    "type 'help' for commands to unleash",
  ]);
  const [cmd, setCmd] = useState("");

  const run = (c: string) => {
    const out: string[] = [];
    const lc = c.trim().toLowerCase();
    switch (lc) {
      case "help": out.push("whoami | skills | projects | clear | motto | nuke"); break;
      case "whoami": out.push("Upesh — annihilator of mediocre code, builder of empires."); break;
      case "skills": out.push(SKILL_CATEGORIES.map(cat => `${cat.category}: ${cat.items.join(", ")}`).join("\n")); break;
      case "projects": out.push("Deploy to #projects sector for intel."); break;
      case "motto": out.push("Code hard, deploy harder."); break;
      case "nuke": out.push("System overload initiated... just kidding. Stay savage."); break;
      case "clear": setLines([]); return;
      default: out.push(`Target missed: ${c}. Try again, warrior.`);
    }
    setLines((prev) => [...prev, `> ${c}`, ...out]);
  };

  return (
    <div className="h-72 bg-black/60 rounded-xl border border-emerald-400/20 overflow-hidden">
      <div className="px-3 py-2 text-xs bg-emerald-500/10 border-b border-emerald-400/20">
        <span className="text-emerald-300">/dev/domination</span> — savage demo
      </div>
      <div className="p-3 h-[calc(100%-3.5rem)] overflow-auto font-mono text-sm space-y-1">
        {lines.map((l, i) => (<div key={i} className="whitespace-pre-wrap text-emerald-200/90">{l}</div>))}
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); if (!cmd.trim()) return; run(cmd); setCmd(""); }}
        className="flex items-center gap-2 p-2 border-t border-emerald-400/20"
      >
        <span className="text-emerald-300 font-mono text-sm">$</span>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="deploy command… (help)"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
        />
        <ActionButton type="submit">Execute</ActionButton>
      </form>
    </div>
  );
}

type Target = { id: string; x: number; y: number; size: number; vx: number; vy: number };
function BugHunt() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(30);
  const [hits, setHits] = useState(0);
  const [miss, setMiss] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!running) return;
    setTime(30); setHits(0); setMiss(0); setTargets([]);
    let t = 30;
    const timer = setInterval(() => { t -= 1; setTime(t); if (t <= 0) { clearInterval(timer); setRunning(false); } }, 1000);
    const spawner = setInterval(() => addTarget(), 700); // Faster spawn for savage mode
    const mover = setInterval(() => moveTargets(), 50);
    return () => { clearInterval(timer); clearInterval(spawner); clearInterval(mover); };
  }, [running]);

  const addTarget = () => {
    const el = boxRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;
    const size = 30 + Math.random() * 24;
    const x = Math.random() * (W - size), y = Math.random() * (H - size);
    const vx = (Math.random() - 0.5) * 4, vy = (Math.random() - 0.5) * 4;
    const id = Math.random().toString(36).slice(2, 7);
    setTargets((prev) => [...prev, { id, x, y, size, vx, vy }]);
    setTimeout(() => {
      setTargets((prev) => prev.filter((t) => t.id !== id));
      setMiss((m) => m + 1);
    }, 1200); // Shorter life
  };

  const moveTargets = () => {
    const el = boxRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;
    setTargets((prev) => prev.map((t) => {
      let nx = t.x + t.vx, ny = t.y + t.vy;
      if (nx < 0 || nx > W - t.size) t.vx *= -1;
      if (ny < 0 || ny > H - t.size) t.vy *= -1;
      return { ...t, x: nx, y: ny };
    }));
  };

  const hit = (id: string) => { setTargets((prev) => prev.filter((t) => t.id !== id)); setHits((h) => h + 1); };

  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-sm">
        <div className="flex gap-3"><Badge label={`⏱ ${time}s`} /><Badge label={`✅ ${hits}`} /><Badge label={`❌ ${miss}`} /></div>
        <div className="flex gap-2">
          <ActionButton onClick={() => setRunning(true)} disabled={running}>Launch</ActionButton>
          <ActionButton onClick={() => setRunning(false)} disabled={!running}>Abort</ActionButton>
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
            className="absolute rounded-full grid place-items-center border border-emerald-300/40 bg-emerald-500/20 hover:bg-emerald-400/40 shadow-[0_0_18px_2px_rgba(16,185,129,0.45)] transition-all"
            style={{ left: t.x, top: t.y, width: t.size, height: t.size } as React.CSSProperties}
            title="Crush this pest!"
          >
            🐛
          </button>
        ))}
        {!running && (
          <div className="absolute inset-0 grid place-items-center text-center p-6">
            <div className="text-white/80">
              <div className="text-lg font-semibold">Savage Aim Assault</div>
              <div className="text-sm mt-1">
                Annihilate moving 🐛. 30s of chaos. Precision or perish.
              </div>
            </div>
          </div>
        )}
      </div>
      {!running && (hits + miss > 0) && (
        <div className="mt-3 text-sm text-white/80">
          Carnage: <b>{hits}</b> kills, <b>{miss}</b> escapes — hit rate {Math.round((hits / Math.max(1, hits + miss)) * 100)}%
        </div>
      )}
    </div>
  );
}

function Stats({ user, totalStars, totalRepos }: { user: GitHubUser | null; totalStars: number; totalRepos: number }) {
  if (!user) return <div className="text-white/60">Deploying stats...</div>;
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <StatCard label="Repos Conquered" value={totalRepos} icon="🏰" />
      <StatCard label="Stars Harvested" value={totalStars} icon="⭐" />
      <StatCard label="Followers Recruited" value={user.followers} icon="👥" />
      <StatCard label="Allies Tracked" value={user.following} icon="🔗" />
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-bold text-2xl text-emerald-300">{value}</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function Projects({ repos }: { repos: RepoItem[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {repos.map((p) => (
        <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition hover:shadow-[0_0_12px_rgba(16,185,129,.3)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold text-lg">{p.name}</div>
              <div className="mt-1 text-sm text-white/60">{p.description || "Classified mission."}</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.language && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-200">{p.language}</span>
            )}
            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-200">⭐ {p.stars}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-200">🍴 {p.forks}</span>
          </div>
          <div className="mt-4">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 underline underline-offset-4 hover:text-emerald-300">
              Infiltrate on GitHub
            </a>
          </div>
        </div>
      ))}
      {!repos.length && (
        <div className="rounded-2xl border border-dashed border-white/15 p-5 text-white/60 col-span-3">
          Arming projects... Stand by for launch.
        </div>
      )}
    </div>
  );
}

function Skills() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {SKILL_CATEGORIES.map((cat) => (
        <div key={cat.category} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold mb-3">{cat.category}</div>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((s) => (
              <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:text-emerald-200 transition">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="font-semibold">Initiate Conquest.</div>
        <div className="text-white/70 mt-1 text-sm">
          Mercenary ops, alliances, or war council. No mercy for mediocrity.
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CopyEmail />
          <a className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm hover:text-emerald-300" href="https://github.com/ripplewave2025" target="_blank" rel="noreferrer">GitHub</a>
          <a className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm hover:text-emerald-300" href="https://x.com/upeshinmars" target="_blank" rel="noreferrer">X / Twitter</a>
          <a className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm hover:text-emerald-300" href="https://www.instagram.com/hotbpoison" target="_blank" rel="noreferrer">Instagram</a>
          <a className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm hover:text-emerald-300" href="https://www.youtube.com/@techinahurry-A" target="_blank" rel="noreferrer">YouTube</a>
          <a className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm hover:text-emerald-300" href="https://massive-industry-848.notion.site/Website-Structure-212983e5ce75804688b6e1b68f4d681e" target="_blank" rel="noreferrer">Notion</a>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="font-semibold">Battle Cry</div>
        <div className="text-white/70 mt-1 text-sm">
          &quot;I dismantle workflows like a predator, then rebuild them as AI juggernauts.&quot;
        </div>
        <div className="mt-3 text-white/60 text-sm">
          Mobilizing for: AI warfare, funnel domination, dev armaments, trust fortresses.
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 py-10">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-sm text-white/50">
        <span>© {new Date().getFullYear()} Upesh — Conquer &gt; Complain.</span>
        <a href="#home" className="hover:text-white/80">Ascend to Command ↑</a>
      </div>
    </footer>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText("upesh@localhost.dev"); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      className="px-4 py-2 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-sm hover:shadow-[0_0_12px_rgba(16,185,129,.5)] transition"
    >
      {copied ? "Secured!" : "Intercept Email"}
    </button>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };
function ActionButton({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm disabled:opacity-50 hover:text-emerald-300 transition">
      {children}
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return <span className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/10">{label}</span>;
}