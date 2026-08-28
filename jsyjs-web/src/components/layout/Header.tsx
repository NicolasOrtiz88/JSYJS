'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-dark shadow-lg py-3'
            : 'bg-primary/95 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Ir al inicio"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-extrabold text-white text-lg transition-transform group-hover:scale-105">
                JS
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg leading-tight">
                  {COMPANY.legalName}
                </div>
                <div className="text-white/60 text-xs">
                  Apoyo Logístico
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                aria-label="Llamar por teléfono"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.phoneFormatted}</span>
              </a>
              <Button
                href="/contacto"
                variant="accent"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                id="header-cta"
              >
                Cotizar
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed header */}
      <div className="h-[var(--header-height)]" />
    </>
  );
}
