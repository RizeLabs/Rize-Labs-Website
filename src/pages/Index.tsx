
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, Cpu, Shield, Lock, Layers } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import SketchButton from "@/components/SketchButton";

// Portfolio data
const products = [
  {
    title: "Encifher",
    description: "Built a programmable privacy engine enabling confidential DeFi transactions — now live on mainnet.",
    tag: "Privacy · FHE",
    link: "https://encifher.io",
  },
  {
    title: "Henosis",
    description: "Engineered Avail's proof aggregation system — collapsing multi-rollup validity proofs into single verification.",
    tag: "ZK Proofs · Avail",
    link: "https://github.com/availproject/Henosis",
  },
  {
    title: "Aze",
    description: "Shipped fully on-chain poker on Miden with hidden-hand state — proving ZK can power real-time consumer apps.",
    tag: "ZK Gaming · Miden",
    link: "https://x.com/aze_cards",
  },
  {
    title: "BananaHQ",
    description: "Created smart wallet infrastructure for dApps — seamless onboarding via account abstraction, no seed phrases.",
    tag: "Wallets · AA",
    link: "https://github.com/RizeLabs",
  },
];

// Service cards data
const services = [
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description: "Custom ML pipelines and agentic workflows — from research prototype to production, reducing manual processes and unlocking new product capabilities.",
  },
  {
    icon: Lock,
    title: "Cryptography & Privacy",
    description: "ZK proofs, FHE, and MPC systems engineered for real-world throughput — enabling confidential computation without sacrificing performance.",
  },
  {
    icon: Shield,
    title: "Security & Auditing",
    description: "Threat modeling, protocol audits, and adversarial testing for teams shipping cryptographic or AI-heavy systems.",
  },
  {
    icon: Layers,
    title: "Product Engineering",
    description: "End-to-end development from architecture to deployment — for teams that need engineers who understand both the research and the infra.",
  },
];

// Hook for scroll-triggered animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return { ref, isVisible };
}

/* ─── Gradient Orb Component ─── */
const GradientOrb = ({
  size,
  className,
  style,
  variant = "primary",
}: {
  size: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "small";
}) => {
  const gradients = {
    primary:
      "radial-gradient(circle at 45% 45%, #ef4444, #f97316 30%, #ea580c 50%, #c084fc 70%, transparent 85%)",
    secondary:
      "radial-gradient(circle at 50% 50%, #f59e0b, #f97316 35%, #dc2626 60%, #c084fc40 80%, transparent 90%)",
    small:
      "radial-gradient(circle at 50% 50%, #ef4444, #f97316 40%, #f59e0b 70%, transparent 90%)",
  };

  return (
    <div
      className={`rounded-full pointer-events-none ${className || ""}`}
      style={{
        width: size,
        height: size,
        background: gradients[variant],
        filter: variant === "small" ? "blur(30px)" : "blur(50px)",
        ...style,
      }}
    />
  );
};

const Index = () => {
  const whatWeDoReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const portfolioReveal = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f2ede8] overflow-x-hidden">
      {/* ═══ NAVBAR ═══ */}
      <nav className="w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Logo />

          <span className="hidden md:block text-[11px] text-neutral-400 tracking-wide">
            Research &amp; engineering studio — Singapore
          </span>

          <div className="flex items-center gap-8 text-[12px] text-neutral-400">
            <a
              href="mailto:rishabh@rizelabs.io"
              className="hidden md:inline hover:text-black transition-colors duration-300"
            >
              Connect with us
            </a>
            <a href="#contact" className="hover:text-black transition-colors duration-300">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="0" y1="2" x2="20" y2="2" />
                <line x1="0" y1="7" x2="20" y2="7" />
                <line x1="0" y1="12" x2="20" y2="12" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 min-h-[85vh] flex items-center">
        {/* Watermark background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="watermark text-[18vw] font-extrabold uppercase tracking-tight leading-none whitespace-nowrap">
            RIZE LABS
          </span>
        </div>

        {/* Main orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2 pointer-events-none">
          <GradientOrb
            size="min(700px, 80vw)"
            variant="primary"
            className="animate-orb-drift"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] text-[#1a1a1a] max-w-3xl">
            We build AI and cryptography systems that{" "}
            <em className="italic">ship.</em>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mt-6">
            Rize Labs is a research-to-production studio. We help founders and protocol teams turn frontier research into deployed infrastructure.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a href="#contact">
              <SketchButton variant="solid">
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </SketchButton>
            </a>
            <a href="#portfolio">
              <SketchButton variant="ghost">
                See our work
              </SketchButton>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="relative z-10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
            {/* Backed by */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 mr-2">
                Backed by
              </span>
              <a href="https://alliance.xyz/" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Alliance
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://polygon.technology/blog/polygon-ventures-backing-the-bold" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Polygon Ventures
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://www.longhash.vc/accelerator/safe-cohort" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                LongHashX
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://www.gnosis.io/ventures" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Gnosis
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-neutral-300 mx-8" />

            {/* Built for */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 mr-2">
                Built for
              </span>
              <a href="https://www.polygon.technology" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Polygon
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://www.availproject.org/" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Avail DA
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://world.org/" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Worldcoin
              </a>
              <span className="text-neutral-300">·</span>
              <a href="https://miden.xyz/" target="_blank" rel="noopener noreferrer" className="font-serif text-base md:text-lg text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Miden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO — Service Cards ═══ */}
      <section
        className="relative z-10 py-24 md:py-32"
        ref={whatWeDoReveal.ref}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-10 mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              What we do
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`transition-all ${
                    whatWeDoReveal.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: whatWeDoReveal.isVisible
                      ? `${i * 100}ms`
                      : "0ms",
                    transitionDuration: "700ms",
                  }}
                >
                  <Icon className="w-6 h-6 text-neutral-400 mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — Dark Section ═══ */}
      <section
        id="about"
        className="relative z-10 scroll-mt-20 bg-[#1a1a1a] py-32 md:py-48 overflow-hidden"
        ref={aboutReveal.ref}
      >
        {/* Orb */}
        <div className="absolute top-1/2 right-0 translate-x-[10%] -translate-y-1/2 pointer-events-none">
          <GradientOrb
            size="500px"
            variant="secondary"
            className="animate-orb-drift opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left: Big description */}
            <div className="lg:w-[55%]">
              <h2
                className={`font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-white transition-all duration-700 ${
                  aboutReveal.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Rize Labs is a research-driven, AI-native engineering studio
                building at the frontier of cryptography and{" "}
                <em className="italic">intelligence.</em>
              </h2>
            </div>

            {/* Right: Body text */}
            <div className="lg:w-[45%] flex items-center">
              <p
                className={`text-sm text-neutral-400 leading-relaxed transition-all duration-700 delay-200 ${
                  aboutReveal.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Every system we build starts as a research question. We go deep on the math, the cryptography, the model architecture — then we engineer it into infrastructure that runs in production under adversarial conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE'VE BUILT ═══ */}
      <section
        id="portfolio"
        className="relative z-10 scroll-mt-20 pt-24 pb-24 md:pb-32"
        ref={portfolioReveal.ref}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-10 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              What we've built
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {products.map((product, i) => (
              <div
                key={product.title}
                className={`transition-all ${
                  portfolioReveal.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: portfolioReveal.isVisible
                    ? `${i * 100}ms`
                    : "0ms",
                  transitionDuration: "700ms",
                }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  tag={product.tag}
                  link={product.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="relative z-10 py-24 md:py-32 border-t border-neutral-300/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            {/* Left: Form */}
            <div className="md:w-1/2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:rishabh@rizelabs.io";
                }}
                className="space-y-8"
              >
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block font-medium">
                    Message
                  </label>
                  <input
                    type="text"
                    placeholder="Reason for contacting Rize Labs"
                    className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>
                <a href="mailto:rishabh@rizelabs.io">
                  <SketchButton variant="ghost" className="mt-4 text-xs">
                    Send email <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </SketchButton>
                </a>
              </form>
            </div>

            {/* Right: Commercial CTA */}
            <div className="md:w-1/2 flex items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#1a1a1a]">
                  Need AI or cryptography infrastructure{" "}
                  <em className="italic">built?</em>
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed mt-6 max-w-md">
                  We work with founders and protocol teams on engagements from focused audits to full product builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default Index;
