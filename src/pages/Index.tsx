
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import SketchButton from "@/components/SketchButton";

// Portfolio data
const products = [
  {
    title: "Encifher",
    description: "Programmable privacy engine for crypto — enabling confidential transactions and private smart contract execution.",
    tag: "Privacy",
    link: "https://encifher.io",
  },
  {
    title: "Henosis",
    description: "Avail Nexus's proof aggregation engine — unifying validity proofs across rollups into a single verification layer.",
    tag: "ZK",
    link: "https://github.com/availproject/Henosis",
  },
  {
    title: "Aze",
    description: "ZK-based fully on-chain and private poker on Miden — provably fair gameplay with hidden hand state.",
    tag: "Gaming",
    link: "https://x.com/aze_cards",
  },
  {
    title: "BananaHQ",
    description: "Smart contract wallet infrastructure for dApps — seamless onboarding with account abstraction.",
    tag: "Wallets",
    link: "https://github.com/RizeLabs",
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
  const servicesReveal = useScrollReveal();
  const portfolioReveal = useScrollReveal();
  const partnerReveal = useScrollReveal();

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

      {/* ═══ HERO — Orb + overlapping headline ═══ */}
      <section className="relative z-10 min-h-[85vh] flex items-center">
        {/* Watermark background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="watermark text-[18vw] font-extrabold uppercase tracking-tight leading-none whitespace-nowrap">
            RIZE LABS
          </span>
        </div>

        {/* Main orb — center-right like Meridian */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2 pointer-events-none">
          <GradientOrb
            size="min(700px, 80vw)"
            variant="primary"
            className="animate-orb-drift"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] text-[#1a1a1a] max-w-3xl">
            We don't just research.
            <br />
            We{" "}
            <em className="italic">ship.</em>
          </h1>
        </div>
      </section>

      {/* ═══ BACKED BY ═══ */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              Backed by
            </span>

            <div className="flex items-center justify-start gap-14 md:gap-24 flex-wrap mt-10">
              <a href="https://alliance.xyz/" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl md:text-3xl text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Alliance
              </a>
              <a href="https://polygon.technology/blog/polygon-ventures-backing-the-bold" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl md:text-3xl text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Polygon
              </a>
              <a href="https://www.longhash.vc/accelerator/safe-cohort" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl md:text-3xl text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                LongHashX
              </a>
              <a href="https://www.gnosis.io/ventures" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl md:text-3xl text-neutral-400 hover:text-[#1a1a1a] transition-colors duration-300">
                Gnosis
              </a>
              <span className="font-serif text-2xl md:text-3xl text-neutral-400">
                &amp; others
              </span>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-xl mt-10">
              Over $1.1M raised to advance frontier research in cryptography, AI, and security.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — "Rize Labs is a research-driven..." ═══ */}
      <section
        id="services"
        className="relative z-10 scroll-mt-20 bg-[#1a1a1a] py-32 md:py-48 overflow-hidden"
        ref={servicesReveal.ref}
      >
        {/* Orb — pushed to right so it doesn't overlap the headline */}
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
                  servicesReveal.isVisible
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
              <div
                className={`text-sm text-neutral-400 leading-relaxed space-y-4 transition-all duration-700 delay-200 ${
                  servicesReveal.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p>
                  The gap between a breakthrough paper and production
                  infrastructure is where most teams stall. We exist to close
                  that gap.
                </p>
                <p>
                  From custom ML pipelines and autonomous agents to
                  zero-knowledge proof systems and privacy-preserving
                  protocols — we turn frontier research in ZK, FHE, and AI
                  into systems that ship, scale, and survive adversarial
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY — Companies we've worked with ═══ */}
      <section
        className="relative z-10 pt-12 pb-6 overflow-hidden"
        ref={partnerReveal.ref}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-10 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              Trusted by
            </span>
          </div>

          <div
            className={`flex items-center justify-start gap-16 md:gap-28 flex-wrap transition-all duration-700 ${
              partnerReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a href="https://www.polygon.technology" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300">
              Polygon
            </a>
            <a href="https://www.availproject.org/" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300">
              Avail DA
            </a>
            <a href="https://world.org/" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300">
              Worldcoin
            </a>
            <a href="https://miden.xyz/" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300">
              Miden
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section
        id="portfolio"
        className="relative z-10 scroll-mt-20 pt-12 pb-24 md:pb-32"
        ref={portfolioReveal.ref}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-300/50 pt-10 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              Portfolio
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

            {/* Right: Large serif text */}
            <div className="md:w-1/2 flex items-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#1a1a1a]">
                Let's build
                <br />
                something
                <br />
                <em className="italic">together.</em>
              </h2>
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
