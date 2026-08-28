import ScrollReveal from '@/components/animations/ScrollReveal';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <ScrollReveal className={`max-w-3xl ${alignClass} mb-12 md:mb-16`}>
      {tag && (
        <span
          className={`text-label inline-block mb-4 px-4 py-1.5 rounded-full ${
            dark
              ? 'bg-white/10 text-accent'
              : 'bg-accent-soft text-accent-dark'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-h2 mb-4 ${
          dark ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
