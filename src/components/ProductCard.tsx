
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  link?: string;
}

const ProductCard = ({ title, description, link }: ProductCardProps) => (
  <div className="relative w-full h-full border border-lime-300 bg-white/5 rounded-md p-6 flex flex-col hover:bg-white/10 transition-all group">
    <h3 className="text-2xl font-medium mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-6">{description}</p>
    
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center mt-auto"
        aria-label={`Visit ${title}`}
      >
        <ArrowRight className="w-5 h-5 text-lime-500 transform transition-transform group-hover:translate-x-1" />
      </a>
    )}
    <div className="absolute bottom-0 right-0 w-3 h-3 bg-lime-300"></div>
  </div>
);

export default ProductCard;
