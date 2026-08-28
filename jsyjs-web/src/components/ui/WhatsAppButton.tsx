'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-accent group"
      aria-label="Comunícate por WhatsApp"
      id="whatsapp-button"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    </a>
  );
}
