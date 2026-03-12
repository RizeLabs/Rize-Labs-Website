
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  tag?: string;
  onClick?: () => void;
  link?: string;
}

const ProductCard = ({ title, description, tag, link }: ProductCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block border-b border-neutral-300/50 py-10 transition-all duration-300 ease-out group"
    aria-label={`Visit ${title}`}
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </h3>
      {tag && (
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 border border-neutral-300 rounded-full px-3 py-1 mt-2">
          {tag}
        </span>
      )}
    </div>
    <p className="text-sm text-neutral-500 leading-relaxed mb-6 max-w-md">{description}</p>

    <div className="inline-flex items-center gap-2">
      <ArrowRight className="w-5 h-5 text-neutral-400 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-600" />
    </div>
  </a>
);

export default ProductCard;
