import * as LucideIcons from 'lucide-react';
import { DIFFERENTIATORS } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function WhyUs() {
  return (
    <section id="por-que" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="¿POR QUÉ JS&JS?"
          title="Lo que nos diferencia"
          description="Combinamos seguridad, costos competitivos, talento capacitado y acompañamiento permanente."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((item, idx) => {
            const IconComponent =
              (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] ||
              LucideIcons.CheckCircle;

            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center group">
                  {/* Icon Circle */}
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-accent/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-accent-soft flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-h4 text-text-primary mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
