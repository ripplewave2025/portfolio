import { useState } from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxnIGZpbGw9IiMxZjJhMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+ICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-20">
          <Hero />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

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
        </nav>
      </div>
    </header>
  );
}

function Hero() {
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
