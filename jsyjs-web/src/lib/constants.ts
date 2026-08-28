// ============================================================
// lib/constants.ts — Datos empresariales verificados de JS&JS
// ============================================================
// REGLA: No se inventa información empresarial.
// Cuando falte un dato se usa "[DATO POR CONFIRMAR]".
// ============================================================

import type {
  CompanyInfo,
  Problem,
  ProcessStep,
  Differentiator,
  FAQItem,
  NavItem,
} from '@/types';

// ────────────────────────────────────────────────────────────
// INFORMACIÓN DE LA EMPRESA
// ────────────────────────────────────────────────────────────

export const COMPANY: CompanyInfo = {
  legalName: 'JSYJS S.A.S.',
  commercialName: 'JS&JS Apoyo Logístico',
  domain: 'www.jsapoyologistico.com',
  country: 'Colombia',
  address: 'Carrera 10 # 7b - 20',
  city: 'Mosquera',
  department: 'Cundinamarca',
  whatsapp: '573208330917',
  whatsappFormatted: '+57 320 833 0917',
  whatsappLink: 'https://wa.me/573208330917',
  phone: '3208330917',
  phoneFormatted: '320 833 0917',
  email: '[DATO POR CONFIRMAR]', // Protegido por Cloudflare en el sitio original
  yearsExperience: '[DATO POR CONFIRMAR]', // Inconsistencia: "más de 10 años" vs "más de dos décadas"
  type: 'Empresa familiar',
  specialization: 'Prestación y tercerización de procesos logísticos',
  socialMedia: {
    // [DATO POR CONFIRMAR] — No se detectaron redes sociales en el sitio original
  },
  schedule: '[DATO POR CONFIRMAR]',
};

// ────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────

export const HERO = {
  tag: 'APOYO LOGÍSTICO ESTRATÉGICO',
  headline: 'Un aliado para cada etapa de tu operación.',
  description:
    'Empresa familiar especializada en tercerización de procesos logísticos. Personal capacitado, operaciones eficientes y acompañamiento permanente.',
  ctaPrimary: 'Solicitar Cotización',
  ctaSecondary: 'Conocer Servicios',
};

// ────────────────────────────────────────────────────────────
// TRUST BAR / CAPACIDAD
// ────────────────────────────────────────────────────────────

export const TRUST_STATS = [
  {
    value: COMPANY.yearsExperience,
    label: 'años de experiencia',
    icon: 'Calendar',
  },
  {
    value: '[DATO POR CONFIRMAR]',
    label: 'clientes atendidos',
    icon: 'Building2',
  },
  {
    value: '8',
    label: 'servicios especializados',
    icon: 'Settings',
  },
  {
    value: 'Mosquera',
    label: 'Cundinamarca, Colombia',
    icon: 'MapPin',
  },
];

// ────────────────────────────────────────────────────────────
// PROBLEMAS QUE RESOLVEMOS
// ────────────────────────────────────────────────────────────

export const PROBLEMS: Problem[] = [
  {
    question: '¿Necesitas personal operativo?',
    solution: 'Personal de apoyo logístico',
    serviceSlug: 'personal-logistico',
    icon: 'Users',
  },
  {
    question: '¿Necesitas mover mercancía?',
    solution: 'Transporte + Cargue y descargue',
    serviceSlug: 'transporte',
    icon: 'Truck',
  },
  {
    question: '¿Necesitas optimizar tu bodega?',
    solution: 'Picking, Packing y Alistamiento',
    serviceSlug: 'picking-packing',
    icon: 'Package',
  },
  {
    question: '¿Necesitas equipos?',
    solution: 'Montacargas, apiladores y estibadores',
    serviceSlug: 'alquiler-equipos',
    icon: 'Forklift',
  },
  {
    question: '¿Necesitas acondicionar productos?',
    solution: 'Maquilas y cuartos fríos',
    serviceSlug: 'maquilas',
    icon: 'BoxSelect',
  },
];

// ────────────────────────────────────────────────────────────
// PROCESO OPERATIVO
// ────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Solicitud',
    description: 'Recibimos tu requerimiento y entendemos tu operación.',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Evaluación',
    description: 'Analizamos el alcance, recursos y condiciones necesarias.',
    icon: 'ClipboardCheck',
  },
  {
    number: '03',
    title: 'Planificación',
    description: 'Diseñamos la solución logística a la medida de tu operación.',
    icon: 'LayoutPanelLeft',
  },
  {
    number: '04',
    title: 'Operación',
    description: 'Desplegamos personal capacitado y ejecutamos con estándares.',
    icon: 'Cog',
  },
  {
    number: '05',
    title: 'Seguimiento',
    description: 'Acompañamiento permanente y mejora continua.',
    icon: 'TrendingUp',
  },
];

// ────────────────────────────────────────────────────────────
// DIFERENCIADORES — ¿POR QUÉ JS&JS?
// ────────────────────────────────────────────────────────────

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Seguridad laboral',
    description:
      'Operación respaldada por protocolos, dotación completa y cumplimiento normativo.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Costos competitivos',
    description:
      'Modelos flexibles ajustados a cada necesidad y escala de operación.',
    icon: 'BadgeDollarSign',
  },
  {
    title: 'Acompañamiento continuo',
    description:
      'Soporte antes, durante y después de cada operación. Nunca estás solo.',
    icon: 'HeadsetIcon',
  },
  {
    title: 'Talento capacitado',
    description:
      'Contratación formal, seguridad social completa, formación continua y condiciones que promueven desempeño y estabilidad.',
    icon: 'GraduationCap',
  },
];

// ────────────────────────────────────────────────────────────
// NOSOTROS + TALENTO HUMANO
// ────────────────────────────────────────────────────────────

export const ABOUT = {
  headline: 'Más que un proveedor, un aliado logístico',
  description:
    'Somos una empresa familiar especializada en la prestación y tercerización de procesos logísticos. Hemos acompañado compañías que necesitan operaciones eficientes, ordenadas y flexibles. Integramos personal capacitado, procesos estandarizados y acompañamiento permanente para asegurar continuidad en cada etapa operativa.',
  mission:
    'Desde el recibo de materias primas hasta la entrega del producto terminado, nuestro objetivo es convertir la logística en una ventaja competitiva.',
  talentHeadline: 'Las operaciones las hacen las personas.',
  talentDescription:
    'Nuestro equipo es el centro de nuestra capacidad operativa. Garantizamos contratación formal, seguridad social completa, formación continua y condiciones que promueven desempeño y estabilidad.',
  talentPoints: [
    'Personal capacitado y certificado',
    'Seguridad social y contratación formal',
    'Formación y entrenamiento continuo',
    'Acompañamiento en todas las etapas',
    'Condiciones que generan estabilidad',
  ],
};

// ────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: '¿Qué tipo de empresa es JS&JS?',
    answer:
      'Somos una empresa familiar colombiana especializada en la prestación y tercerización de procesos logísticos, ubicada en Mosquera, Cundinamarca.',
  },
  {
    question: '¿Qué servicios logísticos ofrecen?',
    answer:
      'Ofrecemos cargue y descargue de mercancía, alquiler y operación de montacargas, personal de apoyo logístico, transporte de mercancía, maquilas y acondicionamiento secundario, picking y packing, y operaciones en cuartos fríos.',
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer:
      'Puedes completar el formulario de cotización en nuestra página, contactarnos por WhatsApp al +57 320 833 0917, o llamarnos directamente. Nuestro equipo evaluará tu necesidad y te presentará una propuesta a la medida.',
  },
  {
    question: '¿En qué zonas operan?',
    answer:
      'Nuestra sede principal está en Mosquera, Cundinamarca. Para información sobre cobertura en otras zonas, contáctanos directamente.',
  },
  {
    question: '¿El personal que proporcionan está formalmente contratado?',
    answer:
      'Sí. Garantizamos contratación formal, seguridad social completa, formación continua y todas las prestaciones de ley para nuestro equipo operativo.',
  },
  {
    question: '¿Cómo garantizan la seguridad en las operaciones?',
    answer:
      'Trabajamos con protocolos de seguridad establecidos, dotación completa y personal capacitado en normas de seguridad industrial y salud ocupacional.',
  },
];

// ────────────────────────────────────────────────────────────
// NAVEGACIÓN
// ────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
];

// ────────────────────────────────────────────────────────────
// QUOTE FORM SERVICE OPTIONS
// ────────────────────────────────────────────────────────────

export const QUOTE_SERVICE_OPTIONS = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'personal-logistico', label: 'Personal logístico' },
  { value: 'transporte', label: 'Transporte de mercancía' },
  { value: 'cargue-descargue', label: 'Cargue y descargue' },
  { value: 'alquiler-equipos', label: 'Montacargas / equipos' },
  { value: 'operacion-montacargas', label: 'Operación de montacargas' },
  { value: 'picking-packing', label: 'Picking, packing y alistamiento' },
  { value: 'maquilas', label: 'Maquilas / acondicionamiento' },
  { value: 'cuartos-frios', label: 'Cuartos fríos' },
  { value: 'otro', label: 'Otro' },
];
