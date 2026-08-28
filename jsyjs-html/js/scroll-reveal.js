document.addEventListener('DOMContentLoaded', () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // If they prefer reduced motion, immediately show all revealed elements
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
    return;
  }

  // Set up the Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add active class to trigger the CSS animation
        entry.target.classList.add('active');
        
        // Unobserve to only animate once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the 'reveal' class
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});
