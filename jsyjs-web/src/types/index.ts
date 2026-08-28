// ============================================================
// types/index.ts — TypeScript interfaces for JS&JS
// ============================================================

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  icon: string; // Lucide icon name
  benefits: string[];
  ctaText: string;
}

export type ServiceCategory = 'operacion' | 'equipos' | 'transporte' | 'acondicionamiento';

export interface ServiceCategoryInfo {
  id: ServiceCategory;
  name: string;
  description: string;
}

export interface Problem {
  question: string;
  solution: string;
  serviceSlug: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  legalName: string;
  commercialName: string;
  domain: string;
  country: string;
  address: string;
  city: string;
  department: string;
  whatsapp: string;
  whatsappFormatted: string;
  whatsappLink: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  yearsExperience: string;
  type: string;
  specialization: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  schedule: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
