import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { SERVICE_CATEGORIES } from '@/lib/services';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Services() {
  return (
    <section id="servicios" className="section-alt py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="SERVICIOS"
          title="Nuestros Servicios"
          description="Soluciones logísticas especializadas que se adaptan a las necesidades de tu operación."
        />

        {/* Category tabs (visual grouping) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <span
              key={cat.id}
              className="px-4 py-2 text-sm font-medium rounded-full bg-surface border border-border text-text-secondary"
            >
              {cat.name}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent =
              (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ||
              LucideIcons.Box;

            const category = SERVICE_CATEGORIES.find(
              (c) => c.id === service.category
            );

            return (
              <ScrollReveal key={service.id} delay={idx * 60}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group flex flex-col h-full bg-surface rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                  id={`service-card-${service.id}`}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Category Label */}
                  <span className="text-label text-text-muted mb-2">
                    {category?.name}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
