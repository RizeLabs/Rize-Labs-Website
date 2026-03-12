
import React from "react";

const Footer = () => (
  <footer className="w-full border-t border-neutral-300/40 bg-[#f2ede8]">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-neutral-400">
        <div>
          <p>Rize Labs</p>
          <p>HQ Singapore</p>
        </div>

        <div className="flex gap-6">
          <a href="https://x.com/rizelabs" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            Twitter/X
          </a>
          <a href="https://github.com/RizeLabs" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            GitHub
          </a>
          <a href="mailto:rishabh@rizelabs.io" className="hover:text-black transition-colors duration-300">
            Contact
          </a>
        </div>

        <p>© 2026 Rize Labs. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
