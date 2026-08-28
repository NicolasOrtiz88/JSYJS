// ============================================================
// lib/services.ts — Servicios de JS&JS organizados por categoría
// ============================================================

import type { Service, ServiceCategoryInfo } from '@/types';

// ────────────────────────────────────────────────────────────
// CATEGORÍAS
// ────────────────────────────────────────────────────────────

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'operacion',
    name: 'Operación',
    description: 'Servicios operativos para su cadena logística',
  },
  {
    id: 'equipos',
    name: 'Equipos',
    description: 'Equipos y maquinaria para su operación',
  },
  {
    id: 'transporte',
    name: 'Transporte',
    description: 'Movilización segura de mercancía',
  },
  {
    id: 'acondicionamiento',
    name: 'Acondicionamiento',
    description: 'Preparación y procesamiento de productos',
  },
];

// ────────────────────────────────────────────────────────────
// SERVICIOS (8 servicios independientes)
// ────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  // ── OPERACIÓN ──
  {
    id: 'cargue-descargue',
    slug: 'cargue-descargue',
    name: 'Cargue y descargue de mercancía',
    shortDescription:
      'Operación segura y eficiente para el movimiento de mercancías.',
    fullDescription:
      'Realizamos operaciones de cargue y descargue de mercancía con personal capacitado, garantizando la integridad de los productos y la eficiencia en cada movimiento. Nuestro equipo sigue protocolos de seguridad establecidos para minimizar riesgos y optimizar tiempos.',
    category: 'operacion',
    icon: 'ArrowUpDown',
    benefits: [
      'Personal capacitado en manipulación de carga',
      'Protocolos de seguridad establecidos',
      'Optimización de tiempos de operación',
      'Reducción de riesgos y daños a la mercancía',
    ],
    ctaText: 'Cotizar cargue y descargue',
  },
  {
    id: 'personal-logistico',
    slug: 'personal-logistico',
    name: 'Personal de apoyo logístico',
    shortDescription:
      'Talento operativo para fortalecer su operación.',
    fullDescription:
      'Proporcionamos personal operativo capacitado y formalmente contratado para fortalecer su operación logística. Nuestro equipo humano cuenta con seguridad social completa, formación continua y acompañamiento permanente.',
    category: 'operacion',
    icon: 'Users',
    benefits: [
      'Contratación formal y seguridad social',
      'Formación y capacitación continua',
      'Flexibilidad según demanda operativa',
      'Acompañamiento y supervisión permanente',
    ],
    ctaText: 'Cotizar personal logístico',
  },
  {
    id: 'picking-packing',
    slug: 'picking-packing',
    name: 'Picking, packing y alistamiento',
    shortDescription:
      'Precisión en preparación y despacho.',
    fullDescription:
      'Ejecutamos procesos de picking, packing y alistamiento con precisión y eficiencia. Garantizamos que cada pedido sea preparado correctamente, empacado con cuidado y despachado a tiempo.',
    category: 'operacion',
    icon: 'PackageCheck',
    benefits: [
      'Precisión en selección y empaque',
      'Reducción de errores en despacho',
      'Procesos estandarizados y medibles',
      'Adaptación a diferentes tipos de producto',
    ],
    ctaText: 'Cotizar picking y packing',
  },
  {
    id: 'operacion-montacargas',
    slug: 'operacion-montacargas',
    name: 'Operación de montacargas',
    shortDescription:
      'Movilización eficiente de mercancía.',
    fullDescription:
      'Contamos con operadores de montacargas certificados y experimentados para la movilización eficiente de mercancía en bodega, centro de distribución o planta. Nuestro personal cumple con todas las normas de seguridad industrial.',
    category: 'operacion',
    icon: 'Container',
    benefits: [
      'Operadores certificados y experimentados',
      'Cumplimiento de normas de seguridad',
      'Eficiencia en movilización de carga',
      'Disponibilidad según turnos requeridos',
    ],
    ctaText: 'Cotizar operación de montacargas',
  },

  // ── EQUIPOS ──
  {
    id: 'alquiler-equipos',
    slug: 'alquiler-equipos',
    name: 'Alquiler de montacargas, apiladores y estibadores',
    shortDescription:
      'Equipos disponibles para fortalecer su operación logística.',
    fullDescription:
      'Ofrecemos en alquiler montacargas, apiladores y estibadores para fortalecer su operación logística. Equipos disponibles en las capacidades y especificaciones que su operación requiere.',
    category: 'equipos',
    icon: 'Forklift',
    benefits: [
      'Equipos en diferentes capacidades',
      'Mantenimiento preventivo incluido',
      'Flexibilidad en tiempos de alquiler',
      'Soporte técnico disponible',
    ],
    ctaText: 'Cotizar alquiler de equipos',
  },

  // ── TRANSPORTE ──
  {
    id: 'transporte',
    slug: 'transporte',
    name: 'Transporte de mercancía',
    shortDescription:
      'Movilizamos su carga con seguridad y cumplimiento.',
    fullDescription:
      'Movilizamos su carga con seguridad y cumplimiento. Nuestro servicio de transporte de mercancía garantiza la entrega oportuna y en óptimas condiciones de sus productos.',
    category: 'transporte',
    icon: 'Truck',
    benefits: [
      'Entregas seguras y puntuales',
      'Seguimiento de la carga',
      'Cumplimiento normativo',
      'Cobertura según necesidad',
    ],
    ctaText: 'Cotizar transporte',
  },

  // ── ACONDICIONAMIENTO ──
  {
    id: 'maquilas',
    slug: 'maquilas',
    name: 'Maquilas y acondicionamiento secundario',
    shortDescription:
      'Agilidad para preparar productos listos para mercado.',
    fullDescription:
      'Realizamos procesos de maquila y acondicionamiento secundario con agilidad y precisión. Preparamos sus productos para que estén listos para distribución y comercialización.',
    category: 'acondicionamiento',
    icon: 'Wrench',
    benefits: [
      'Agilidad en procesos de preparación',
      'Control de calidad en cada etapa',
      'Flexibilidad para diferentes productos',
      'Optimización de costos operativos',
    ],
    ctaText: 'Cotizar maquilas',
  },
  {
    id: 'cuartos-frios',
    slug: 'cuartos-frios',
    name: 'Operaciones en cuartos fríos',
    shortDescription:
      'Continuidad operativa bajo temperatura controlada.',
    fullDescription:
      'Ejecutamos operaciones logísticas en cuartos fríos con personal capacitado para trabajar bajo condiciones de temperatura controlada, garantizando la continuidad operativa y la integridad de la cadena de frío.',
    category: 'acondicionamiento',
    icon: 'Snowflake',
    benefits: [
      'Personal capacitado para cuartos fríos',
      'Respeto a la cadena de frío',
      'Protocolos de seguridad específicos',
      'Continuidad operativa garantizada',
    ],
    ctaText: 'Cotizar operaciones en cuartos fríos',
  },
];

// ────────────────────────────────────────────────────────────
// HELPERS
// ────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
