'use client';

import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-primary shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menú de navegación móvil"
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Nav Links */}
          <div className="flex-1 space-y-1">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-lg text-white/90 hover:text-white border-b border-white/10 transition-colors"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-3 py-3 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{COMPANY.phoneFormatted}</span>
            </a>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <Link
              href="/contacto"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
