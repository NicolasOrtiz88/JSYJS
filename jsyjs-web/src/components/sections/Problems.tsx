import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { PROBLEMS } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="SOLUCIONES"
          title="Tu operación tiene retos. Nosotros tenemos la capacidad para resolverlos."
          description="Identificamos tu necesidad y conectamos con el servicio exacto que tu operación requiere."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, idx) => {
            const IconComponent =
              (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[problem.icon] ||
              LucideIcons.HelpCircle;

            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <Link
                  href={`/servicios/${problem.serviceSlug}`}
                  className="group block p-6 bg-surface rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-text-secondary text-sm mb-2 font-medium">
                        {problem.question}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-text-primary font-semibold group-hover:text-accent transition-colors">
                          {problem.solution}
                        </p>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
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
