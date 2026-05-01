import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background text-foreground py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6 max-w-6xl">
        <p className="text-sm">© 2026 Aniruddha Debroy. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          aria-label="Back to top"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
