import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/50 to-primary" />
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              {HERO.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-display text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            {HERO.headline}
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {HERO.description}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              href="/contacto"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              id="hero-cta-primary"
            >
              {HERO.ctaPrimary}
            </Button>
            <Button
              href="/servicios"
              variant="secondary"
              size="lg"
              className="!border-white/20 !text-white hover:!bg-white/10 hover:!text-white"
              id="hero-cta-secondary"
            >
              {HERO.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
}
