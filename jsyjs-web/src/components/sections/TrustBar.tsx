import * as LucideIcons from 'lucide-react';
import { TRUST_STATS } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function TrustBar() {
  return (
    <section id="trust" className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-surface rounded-2xl shadow-xl shadow-primary/5 border border-border-light p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST_STATS.map((stat, idx) => {
              const IconComponent =
                (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[stat.icon] ||
                LucideIcons.Star;

              return (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-soft text-accent mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold text-text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
