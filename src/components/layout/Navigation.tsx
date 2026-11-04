import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Menu, X, Printer } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isGateway = location.pathname === '/';

  const navItems = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Puzzle', path: '/puzzle' },
    { name: 'Résumé', path: '/resume' },
  ];

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-[#33212C]/95 backdrop-blur-sm border-b border-[#D8CFC2]/10 print:hidden">
      {/* Skip Navigation for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#EB0E31] focus:text-white focus:rounded focus:outline-none text-xs font-mono"
      >
        Skip to main content
      </a>

      <Container width="wide">
        <div className="flex items-center justify-between h-16">
          {/* Identity */}
          <Link
            to={isGateway ? "/portfolio" : "/"}
            className="group flex items-baseline gap-2 focus-visible:ring-2 focus-visible:ring-[#EB0E31] rounded p-1"
            aria-label="Wafiq Nawaz - Home"
          >
            <span className="font-display text-lg text-white group-hover:text-[#FDA2AC] transition-colors">
              Wafiq Nawaz
            </span>
            <span className="font-mono text-[11px] text-[#857A6E]">
              Bengaluru
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'text-xs font-mono tracking-wide transition-colors py-1 border-b',
                    isActive
                      ? 'text-white border-[#EB0E31]'
                      : 'text-[#D8CFC2]/70 hover:text-white border-transparent'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}

            {location.pathname === '/resume' && (
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#D8CFC2] hover:text-white border border-[#D8CFC2]/20 hover:border-[#D8CFC2] rounded cursor-pointer transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#EB0E31]" />
                <span>Print</span>
              </button>
            )}

            {!isGateway && (
              <Link
                to="/"
                className="text-xs font-mono text-[#857A6E] hover:text-[#FDA2AC] transition-colors"
                title="Return to gateway"
              >
                Gateway
              </Link>
            )}
          </nav>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#D8CFC2] hover:text-white rounded focus-visible:ring-2 focus-visible:ring-[#EB0E31] cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D8CFC2]/10 space-y-2 font-mono text-xs">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-2 py-2 rounded transition-colors',
                    isActive
                      ? 'text-white bg-[#1E131A] text-[#EB0E31]'
                      : 'text-[#D8CFC2]/80 hover:text-white'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            {!isGateway && (
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2 text-[#857A6E] hover:text-[#FDA2AC]"
              >
                Gateway
              </Link>
            )}
          </div>
        )}
      </Container>
    </header>
  );
};
