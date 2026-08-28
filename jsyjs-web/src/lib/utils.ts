// ============================================================
// lib/utils.ts — Utility functions
// ============================================================

import { type ClassValue, clsx } from 'clsx';

/**
 * Merge class names with clsx (no tailwind-merge needed with Tailwind 4)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a phone number for tel: links
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

/**
 * Generate WhatsApp link with optional message
 */
export function whatsappLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/\s|\+/g, '')}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Smooth scroll to an element by ID
 */
export function scrollToId(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
