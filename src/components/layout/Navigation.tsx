import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Menu, X, Printer, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // If we are strictly inside the full CRT Gateway experience, the Gateway has its own terminal navigation
  const isGateway = location.pathname === '/';

  const navItems = [
    { name: 'Gateway', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Puzzle', path: '/puzzle' },
    { name: 'Résumé', path: '/resume' },
  ];

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-[#33212C]/90 backdrop-blur-md border-b border-[#D8CFC2]/10 print:hidden">
      {/* Skip Navigation for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#EB0E31] focus:text-white focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      <Container width="wide">
        <div className="flex items-center justify-between h-16">
          {/* Identity */}
          <Link
            to={isGateway ? "/portfolio" : "/"}
            className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#EB0E31] rounded p-1 transition-opacity"
            aria-label="Wafiq Nawaz - Home"
          >
            <span className="font-mono text-xs text-[#EB0E31] font-semibold tracking-wider">
              WN·2026
            </span>
            <span className="font-medium text-sm tracking-tight text-[#D8CFC2] group-hover:text-white transition-colors">
              Wafiq Nawaz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors',
                    isActive
                      ? 'text-white bg-[#EB0E31]/20 border border-[#EB0E31]/40'
                      : 'text-[#D8CFC2]/80 hover:text-white hover:bg-[#3E2936]'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}

            {location.pathname === '/resume' && (
              <button
                onClick={() => window.print()}
                className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#D8CFC2] hover:text-white border border-[#D8CFC2]/20 hover:border-[#D8CFC2]/50 rounded cursor-pointer transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#EB0E31]" />
                <span>Print</span>
              </button>
            )}

            {!isGateway && (
              <Link
                to="/"
                className="ml-2 p-1.5 text-[#D8CFC2]/70 hover:text-[#EB0E31] transition-colors"
                title="Open CRT Gateway"
                aria-label="Open CRT Gateway"
              >
                <Terminal className="w-4 h-4" />
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

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-[#D8CFC2]/10 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-2 text-sm font-mono tracking-wider rounded',
                    isActive
                      ? 'text-white bg-[#EB0E31]/20 border-l-2 border-[#EB0E31]'
                      : 'text-[#D8CFC2]/80 hover:text-white hover:bg-[#3E2936]'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};
