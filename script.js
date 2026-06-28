document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Drawer Control Matrix
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = expanded 
        ? '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>'
        : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';
    });
  }

  // Accordion Logic Engine for High Performance Collapse
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      
      // Close all other items for neat presentation
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Client-Side Structural Form Verification
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusMessage = document.getElementById('statusMessage');
      statusMessage.style.display = 'block';
      statusMessage.style.color = '#10b981';
      statusMessage.textContent = 'Thank you for your message! Our engineering team will respond shortly.';
      contactForm.reset();
    });
  }

  // Active Navigation Link Tracking System
  const currentPath = window.location.pathname.split('/').pop();
  const menuItems = document.querySelectorAll('.nav-links a');
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });
});