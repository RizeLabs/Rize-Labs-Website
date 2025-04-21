
import React from "react";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sun } from "lucide-react";
import Footer from "@/components/Footer";

// Product data
const products = [
  {
    title: "Encifher",
    description: "Programmable privacy engine for crypto",
    link: "https://encifher.io"
  },
  {
    title: "Henosis",
    description: "Avail Nexus's proof aggregation engine",
    link: "https://github.com/availproject/Henosis"
  },
  {
    title: "Aze",
    description: "ZK based fully on-chain and private Poker on miden",
    link: "https://x.com/aze_cards"
  },
  {
    title: "BananaHQ",
    description: "Smart contract wallet Infra for dApps",
    link: "https://github.com/RizeLabs"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative font-poppins bg-gray-50">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] z-0">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: `${(i / 20) * 100}%` }} />
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-gray-200" style={{ top: `${(i / 20) * 100}%` }} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-6xl mx-auto px-4 w-full">
        {/* NAVBAR */}
        <nav className="w-full flex items-center justify-between py-8">
          <div className="flex items-center space-x-6 text-sm">
            <a href="https://rizelabs.io" className="hover:text-lime-500">About</a>
            <a href="https://x.com/rizelabs" target="_blank" rel="noopener noreferrer" className="hover:text-lime-500">Twitter</a>
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          
          <a 
            href="mailto:rishabh@rizelabs.io" 
            className="flex items-center bg-lime-100 hover:bg-lime-200 text-black px-6 py-2 rounded-full transition-colors"
          >
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        {/* Hero */}
        <div className="flex flex-col items-center justify-center flex-grow text-center max-w-3xl mx-auto my-16">
          <h1 className="text-6xl font-bold tracking-tight mb-8">RIZE LABS</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Building decentralized infrastructure for verifiable and performant on-chain systems.
          </p>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h2 className="text-center text-xl mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full py-8 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <div>© 2025 RIZE LABS, HQ SINGAPORE. All Rights Reserved.</div>
          <div className="flex items-center">
            BACKED BY 
            <svg width="200" height="24" viewBox="0 0 100 30" className="ml-2">
              <text x="0" y="20" fontSize="14" fontWeight="700" fill="currentColor">LongHashX</text>
              <text x="100" y="20" fontSize="14" fontWeight="700" fill="currentColor">f.actor</text>

            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
