import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-extrabold text-white text-lg">
                JS
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  {COMPANY.legalName}
                </div>
                <div className="text-white/50 text-xs">Apoyo Logístico</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {COMPANY.specialization}. Más que un proveedor, un aliado logístico.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Cargue y descargue', href: '/servicios/cargue-descargue' },
                { label: 'Personal logístico', href: '/servicios/personal-logistico' },
                { label: 'Montacargas', href: '/servicios/alquiler-equipos' },
                { label: 'Transporte', href: '/servicios/transporte' },
                { label: 'Picking y packing', href: '/servicios/picking-packing' },
                { label: 'Maquilas', href: '/servicios/maquilas' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contáctanos
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{COMPANY.phoneFormatted}</span>
                </a>
              </li>
              {COMPANY.email !== '[DATO POR CONFIRMAR]' && (
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{COMPANY.email}</span>
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}, {COMPANY.department}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {COMPANY.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/faq"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
