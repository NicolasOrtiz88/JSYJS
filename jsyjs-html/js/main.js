// Disable automatic browser scroll restoration so page always starts at top
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (!window.location.hash) {
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ensure top position on load if no specific anchor hash
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  // Smooth scroll to top when clicking Logo or 'Inicio'
  const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="#inicio"], .logo');
  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';
      const href = link.getAttribute('href');
      if (isIndex && (href === 'index.html' || href === '#inicio' || link.classList.contains('logo'))) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      }
    });
  });
  /* ─── STICKY HEADER ─── */
  const header = document.getElementById('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* ─── MOBILE MENU ─── */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }

  function closeMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);
  
  // Close menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking a sublink
  document.querySelectorAll('.mobile-nav-sublink').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ─── MOBILE ACCORDION ─── */
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-trigger');
  
  mobileAccordions.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const accordion = trigger.parentElement;
      const content = accordion.querySelector('.mobile-accordion-content');
      const isActive = accordion.classList.contains('active');

      // Close all accordions
      document.querySelectorAll('.mobile-accordion').forEach(acc => {
        acc.classList.remove('active');
        const accContent = acc.querySelector('.mobile-accordion-content');
        if (accContent) accContent.style.maxHeight = null;
      });

      // Open if it wasn't active
      if (!isActive) {
        accordion.classList.add('active');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

  /* ─── SUB-NAV SCROLL SPY ─── */
  const subNavLinks = document.querySelectorAll('.sub-nav-link');
  
  if (subNavLinks.length > 0) {
    const sections = [];
    subNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) sections.push({ link, section });
      }
    });

    if (sections.length > 0) {
      window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 200;
        
        let current = sections[0];
        sections.forEach(s => {
          if (scrollPos >= s.section.offsetTop) {
            current = s;
          }
        });

        subNavLinks.forEach(l => l.classList.remove('active'));
        if (current) current.link.classList.add('active');
      });

      // Set first link as active by default
      subNavLinks[0].classList.add('active');
    }
  }

  /* ─── FAQ ACCORDION ─── */
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => {
          faq.classList.remove('active');
          const answer = faq.querySelector('.faq-answer');
          if (answer) answer.style.maxHeight = null;
        });

        // Open if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          }
        }
      });
    }
  });

  /* ─── SCROLL TO TOP & FLOATING ACTIONS ─── */
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  if (scrollToTopBtn) {
    let isScrolling = false;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    function smoothScrollToTop(duration = 750) {
      if (isScrolling) return;
      isScrolling = true;
      
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (startPosition === 0) {
        isScrolling = false;
        return;
      }
      
      const startTime = performance.now();

      // Custom easeInOutQuart for ultra-smooth acceleration and deceleration
      function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      }

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutQuart(progress);
        
        window.scrollTo(0, Math.round(startPosition * (1 - easeProgress)));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, 0);
          isScrolling = false;
        }
      }

      requestAnimationFrame(step);
    }

    scrollToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollToTop(750);
    });
  }
});

/* ─── SERVICE MODAL LOGIC ─── */
const serviceDetails = {
    'cargue': {
        title: 'Cargue y descargue',
        desc: 'Servicio especializado en manejo de mercancía con personal capacitado para realizar procesos de carga y descarga de forma segura y eficiente.',
        features: ['Personal certificado', 'Cuidado de mercancía delicada', 'Disponibilidad 24/7', 'Reportes de operación']
    },
    'personal': {
        title: 'Personal logístico',
        desc: 'Suministramos personal altamente calificado para apoyar sus operaciones logísticas en bodega, distribución y más.',
        features: ['Auxiliares de bodega', 'Operarios de montacargas', 'Supervisores de logística', 'Cumplimiento normativo SST']
    },
    'equipos': {
        title: 'Alquiler de equipos',
        desc: 'Disponemos de equipos de manipulación de carga (montacargas, estibadores) con mantenimiento al día para garantizar continuidad.',
        features: ['Montacargas eléctricos y a combustión', 'Estibadores manuales', 'Mantenimiento preventivo', 'Flexibilidad de tiempo']
    },
    'transporte': {
        title: 'Transporte de mercancía',
        desc: 'Servicio de transporte de carga a nivel local y nacional con flota moderna y seguimiento en tiempo real.',
        features: ['Flota con GPS', 'Conductores experimentados', 'Seguro de mercancía', 'Entregas oportunas']
    },
    'picking': {
        title: 'Picking y packing',
        desc: 'Optimizamos su proceso de preparación de pedidos, garantizando exactitud en los despachos y un embalaje adecuado.',
        features: ['Control de inventarios', 'Embalaje de seguridad', 'Etiquetado preciso', 'Reducción de mermas']
    },
    'maquilas': {
        title: 'Maquilas',
        desc: 'Servicios de acondicionamiento de productos, armado de promocionales, etiquetado y termoencogido.',
        features: ['Termoencogido', 'Armado de kits', 'Codificación y etiquetado', 'Control de calidad']
    },
    'cuartos': {
        title: 'Operación en Cuartos fríos',
        desc: 'Manejo logístico especializado para productos que requieren cadena de frío, con personal dotado adecuadamente.',
        features: ['Control de temperatura', 'Dotación térmica especializada', 'Rotación FEFO/FIFO', 'Monitoreo constante']
    },
    'operacion_montacargas': {
        title: 'Operación de montacargas',
        desc: 'Personal certificado para operar montacargas de diferentes tipos, asegurando el movimiento seguro de su mercancía.',
        features: ['Operadores certificados', 'Inspección pre-operacional', 'Movimiento en racks de gran altura', 'Prevención de accidentes']
    }
};

window.openServiceModal = function(serviceKey) {
    const modal = document.getElementById('service-modal');
    const body = document.getElementById('modal-body');
    const data = serviceDetails[serviceKey];
    
    if (modal && body && data) {
        let featuresHtml = data.features.map(f => `<li><i data-lucide="check-circle"></i> ${f}</li>`).join('');
        
        body.innerHTML = `
            <div class="modal-header">
                <h3 class="modal-title">${data.title}</h3>
                <p class="modal-desc">${data.desc}</p>
            </div>
            <div class="modal-body">
                <h4 style="color:var(--color-primary); font-weight:600; margin-bottom:16px;">¿Qué incluye este servicio?</h4>
                <ul class="modal-list">
                    ${featuresHtml}
                </ul>
                <div style="margin-top:32px; display:flex; gap:16px;">
                    <a href="https://wa.me/573208330917?text=Hola,%20me%20interesa%20conocer%20más%20detalles%20sobre%20${encodeURIComponent(data.title)}" target="_blank" class="btn btn-accent" style="flex:1; justify-content:center;">
                        <i data-lucide="message-circle"></i> Cotizar ahora
                    </a>
                </div>
            </div>
        `;
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons({ root: body });
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
};

window.closeServiceModal = function() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('service-modal');
    if (modal && e.target === modal) {
        window.closeServiceModal();
    }
});

/* ─── VIDEO PROCESSES CAROUSEL & FOCUS PLAYER ─── */
const processVideosData = [
  {
    id: 1,
    title: "Cargue y Descargue Especializado",
    category: "Operación Logística",
    description: "Personal certificado para realizar procesos de carga y descarga de forma segura, cuidando la mercancía y optimizando tiempos de rotación en muelle.",
    poster: "img/cargue y descargue.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4 (ej: 'videos/cargue-descargue.mp4')
    badge: "01 / 06"
  },
  {
    id: 2,
    title: "Operación de Montacargas de Alto Rendimiento",
    category: "Equipos y Movilidad",
    description: "Operadores certificados para el movimiento de carga pesada y estibado en alturas con máxima precisión y cumplimiento de normativas de seguridad.",
    poster: "img/operacion de montacargas.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4
    badge: "02 / 06"
  },
  {
    id: 3,
    title: "Picking, Packing y Alistamiento de Pedidos",
    category: "Gestión de Bodega",
    description: "Preparación de pedidos con cero margen de error, embalaje de alta resistencia y etiquetado preciso para distribución inmediata.",
    poster: "img/Picking paking y alistamiento.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4
    badge: "03 / 06"
  },
  {
    id: 4,
    title: "Operación en Cuartos Fríos y Congelados",
    category: "Cadena de Frío",
    description: "Manejo logístico especializado de productos que requieren temperaturas controladas, garantizando la preservación estricta de la cadena de frío.",
    poster: "img/operacion de cuartos frios.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4
    badge: "04 / 06"
  },
  {
    id: 5,
    title: "Maquilas y Acondicionamiento de Producto",
    category: "Valor Agregado",
    description: "Termosellado, armado de promociones, codificación y embalaje especial adaptado a las necesidades de cada canal comercial.",
    poster: "img/maquilas y acondicionamiento.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4
    badge: "05 / 06"
  },
  {
    id: 6,
    title: "Transporte y Distribución Segura",
    category: "Transporte y Flota",
    description: "Flota moderna con monitoreo satelital GPS en tiempo real y conductores experimentados para entregas oportunas y seguras.",
    poster: "img/transporte de mercancia.webp",
    videoSrc: "", // Agrega aquí la ruta de tu video mp4
    badge: "06 / 06"
  }
];

function initVideoCarousel() {
  const videoPlayer = document.getElementById('focus-video-player');
  const videoSource = document.getElementById('focus-video-source');
  const focusTitle = document.getElementById('focus-video-title');
  const focusCategory = document.getElementById('focus-video-category');
  const focusDesc = document.getElementById('focus-video-desc');
  const focusCounter = document.getElementById('focus-video-counter');
  const focusCta = document.getElementById('focus-video-cta');
  const autoNextOverlay = document.getElementById('video-auto-next-overlay');
  const thumbsTrack = document.getElementById('video-thumbs-track');
  const prevBtn = document.getElementById('video-prev-btn');
  const nextBtn = document.getElementById('video-next-btn');
  const scrollLeftBtn = document.getElementById('video-scroll-left');
  const scrollRightBtn = document.getElementById('video-scroll-right');
  const emptyOverlay = document.getElementById('focus-empty-overlay');

  if (!videoPlayer || !thumbsTrack) return;

  let currentVideoIndex = 0;
  let autoAdvanceTimeout = null;

  function loadVideo(index, shouldAutoplay = false) {
    if (index < 0) index = processVideosData.length - 1;
    if (index >= processVideosData.length) index = 0;
    
    currentVideoIndex = index;
    const item = processVideosData[index];

    // Update metadata
    if (focusTitle) focusTitle.textContent = item.title;
    if (focusCategory) {
      focusCategory.innerHTML = `<i data-lucide="play-circle" style="width:14px;height:14px;"></i> ${item.category}`;
    }
    if (focusDesc) focusDesc.textContent = item.description;
    if (focusCounter) focusCounter.textContent = `${index + 1} / ${processVideosData.length}`;
    if (focusCta) {
      focusCta.href = `https://wa.me/573208330917?text=Hola,%20quisiera%20cotizar%20el%20servicio%20de%20${encodeURIComponent(item.title)}`;
    }

    // Update player poster & source
    videoPlayer.poster = item.poster;
    
    if (item.videoSrc && item.videoSrc.trim() !== "") {
      if (videoSource) videoSource.src = item.videoSrc;
      if (emptyOverlay) emptyOverlay.style.display = 'none';
      videoPlayer.load();
      if (shouldAutoplay) {
        videoPlayer.play().catch(e => console.log('Autoplay interaction policy:', e));
      }
    } else {
      if (videoSource) videoSource.src = "";
      if (emptyOverlay) {
        emptyOverlay.style.display = 'flex';
        const titleEl = emptyOverlay.querySelector('.empty-overlay-title');
        if (titleEl) titleEl.textContent = item.title;
      }
    }

    // Update active thumb
    const thumbCards = thumbsTrack.querySelectorAll('.video-thumb-card');
    thumbCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
        // Only scroll the carousel track horizontally if user triggered video change or autoplay
        if (shouldAutoplay) {
          const trackRect = thumbsTrack.getBoundingClientRect();
          const cardRect = card.getBoundingClientRect();
          const offset = (cardRect.left - trackRect.left) + thumbsTrack.scrollLeft - (thumbsTrack.clientWidth / 2) + (card.clientWidth / 2);
          thumbsTrack.scrollTo({ left: offset, behavior: 'smooth' });
        }
      } else {
        card.classList.remove('active');
      }
    });

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Handle when current video finishes playing -> auto advance to next video!
  videoPlayer.addEventListener('ended', () => {
    if (autoNextOverlay) {
      autoNextOverlay.classList.add('active');
    }
    
    autoAdvanceTimeout = setTimeout(() => {
      if (autoNextOverlay) {
        autoNextOverlay.classList.remove('active');
      }
      loadVideo(currentVideoIndex + 1, true);
    }, 1200);
  });

  // Thumbnail clicks
  const thumbCards = thumbsTrack.querySelectorAll('.video-thumb-card');
  thumbCards.forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-video-index'), 10);
      if (!isNaN(idx)) {
        clearTimeout(autoAdvanceTimeout);
        if (autoNextOverlay) autoNextOverlay.classList.remove('active');
        loadVideo(idx, true);
      }
    });
  });

  // Prev / Next button clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearTimeout(autoAdvanceTimeout);
      if (autoNextOverlay) autoNextOverlay.classList.remove('active');
      loadVideo(currentVideoIndex - 1, false);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearTimeout(autoAdvanceTimeout);
      if (autoNextOverlay) autoNextOverlay.classList.remove('active');
      loadVideo(currentVideoIndex + 1, false);
    });
  }

  // Track arrow scrolling
  if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => {
      thumbsTrack.scrollBy({ left: -260, behavior: 'smooth' });
    });
  }
  if (scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
      thumbsTrack.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // Initial load
  loadVideo(0, false);
}

// Ensure init executes on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoCarousel);
} else {
  initVideoCarousel();
}

