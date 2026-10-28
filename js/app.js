/**
 * CARPINTERÍA DE ALUMINIO URTAIN - INTERACTIVE APPLICATION
 * High-performance, zero-dependency client logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initEstimator();
  initEnergyCalculator();
  initBeforeAfterSlider();
  initGalleryFilter();
  initFaqAccordion();
  initContactForm();
  initModals();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = (open) => {
    if (open) {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  };

  menuBtn.addEventListener('click', () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* ==========================================================================
   2. INTERACTIVE PRESUPUESTADOR EXPRESS (Quote Estimator)
   ========================================================================== */
const ESTIMATOR_DATA = {
  service: 'ventanas',
  units: 3,
  glass: 'bajo-emisivo',
  finish: 'antracita',
  rates: {
    ventanas: { base: 360, name: 'Ventanas Aluminio con RPT' },
    cerramiento: { base: 1250, name: 'Cerramiento de Terraza / Porche' },
    puertas: { base: 780, name: 'Puerta de Entrada / Seguridad' },
    persianas: { base: 175, name: 'Persianas Térmicas / Motorizadas' },
    mosquiteras: { base: 65, name: 'Mosquiteras a Medida' },
    metalica: { base: 420, name: 'Carpintería Metálica / Rejas' }
  },
  glassMultiplier: {
    'standard': 1.0,
    'bajo-emisivo': 1.15,
    'triple': 1.35
  },
  finishMultiplier: {
    'blanco': 1.0,
    'antracita': 1.08,
    'madera': 1.22,
    'anodizado': 1.12
  }
};

function initEstimator() {
  const serviceCards = document.querySelectorAll('.calc-service-card');
  const unitsSlider = document.getElementById('calc-units-slider');
  const unitsDisplay = document.getElementById('calc-units-value');
  const glassCards = document.querySelectorAll('.calc-glass-card');
  const finishCards = document.querySelectorAll('.calc-finish-card');
  const priceMinEl = document.getElementById('calc-price-min');
  const priceMaxEl = document.getElementById('calc-price-max');
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');
  const summaryServiceEl = document.getElementById('calc-summary-service');

  if (!unitsSlider || !priceMinEl) return;

  function updateEstimate() {
    const serviceInfo = ESTIMATOR_DATA.rates[ESTIMATOR_DATA.service];
    const baseRate = serviceInfo.base;
    const units = parseInt(ESTIMATOR_DATA.units, 10);
    const glassMult = ESTIMATOR_DATA.glassMultiplier[ESTIMATOR_DATA.glass] || 1;
    const finishMult = ESTIMATOR_DATA.finishMultiplier[ESTIMATOR_DATA.finish] || 1;

    // Indicative estimation logic
    const singleUnitPrice = baseRate * glassMult * finishMult;
    const totalPrice = singleUnitPrice * units;
    
    // Spread range +/- 10%
    const minVal = Math.round(totalPrice * 0.92);
    const maxVal = Math.round(totalPrice * 1.08);

    priceMinEl.textContent = `${minVal.toLocaleString('es-ES')} €`;
    priceMaxEl.textContent = `${maxVal.toLocaleString('es-ES')} €`;

    if (summaryServiceEl) {
      summaryServiceEl.textContent = `${serviceInfo.name} (${units} ${units === 1 ? 'ud.' : 'uds.'})`;
    }

    // Prepare WhatsApp Message
    const glassNames = {
      'standard': 'Doble Climalit estándar',
      'bajo-emisivo': 'Climalit Bajo Emisivo Térmico',
      'triple': 'Triple Acristalamiento Acústico/Solar'
    };
    const finishNames = {
      'blanco': 'Blanco Lacado',
      'antracita': 'Gris Antracita RAL 7016',
      'madera': 'Imitación Madera (Roble/Nogal)',
      'anodizado': 'Anodizado Inox/Plata'
    };

    const text = `Hola Carpintería Urtain! He calculado un presupuesto en vuestra web:%0A%0A` +
      `🛠️ *Servicio:* ${serviceInfo.name}%0A` +
      `🔢 *Unidades aprox.:* ${units}%0A` +
      `🪟 *Vidrio/Aislamiento:* ${glassNames[ESTIMATOR_DATA.glass]}%0A` +
      `🎨 *Acabado:* ${finishNames[ESTIMATOR_DATA.finish]}%0A` +
      `💶 *Estimación estimada:* ${minVal}€ - ${maxVal}€%0A%0A` +
      `Me gustaría que me contactaseis para concertar una visita/medición sin compromiso. Gracias!`;

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/34619493659?text=${text}`;
    }
  }

  // Service Selection
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      ESTIMATOR_DATA.service = card.dataset.service;
      updateEstimate();
    });
  });

  // Slider Units
  unitsSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    ESTIMATOR_DATA.units = val;
    if (unitsDisplay) unitsDisplay.textContent = val;
    updateEstimate();
  });

  // Glass Selection
  glassCards.forEach(card => {
    card.addEventListener('click', () => {
      glassCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      ESTIMATOR_DATA.glass = card.dataset.glass;
      updateEstimate();
    });
  });

  // Finish Selection
  finishCards.forEach(card => {
    card.addEventListener('click', () => {
      finishCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      ESTIMATOR_DATA.finish = card.dataset.finish;
      updateEstimate();
    });
  });

  // Initial Calculation
  updateEstimate();
}

/* ==========================================================================
   3. ENERGY SAVING CALCULATOR
   ========================================================================== */
function initEnergyCalculator() {
  const currentWindowsSelect = document.getElementById('energy-current-windows');
  const houseSizeSlider = document.getElementById('energy-house-size');
  const sizeValueDisplay = document.getElementById('energy-size-value');
  const savingsEuroDisplay = document.getElementById('energy-savings-euro');
  const savingsKwhDisplay = document.getElementById('energy-savings-kwh');
  const savingsCo2Display = document.getElementById('energy-savings-co2');

  if (!houseSizeSlider || !savingsEuroDisplay) return;

  function updateEnergySavings() {
    const size = parseInt(houseSizeSlider.value, 10);
    const windowFactor = parseFloat(currentWindowsSelect ? currentWindowsSelect.value : '1.3');

    if (sizeValueDisplay) {
      sizeValueDisplay.textContent = `${size} m²`;
    }

    // Benchmark in Zamora climate: approx 35-65 kWh saved per m² per year by upgrading to RPT + Climalit
    const kwhSaved = Math.round(size * 42 * windowFactor);
    // Approx energy cost avg 0.14 €/kWh
    const eurosSaved = Math.round(kwhSaved * 0.155);
    // Approx 0.25 kg CO2 per kWh
    const co2Saved = Math.round(kwhSaved * 0.24);

    savingsEuroDisplay.textContent = `${eurosSaved.toLocaleString('es-ES')} €`;
    if (savingsKwhDisplay) savingsKwhDisplay.textContent = `${kwhSaved.toLocaleString('es-ES')} kWh`;
    if (savingsCo2Display) savingsCo2Display.textContent = `${co2Saved.toLocaleString('es-ES')} kg`;
  }

  houseSizeSlider.addEventListener('input', updateEnergySavings);
  if (currentWindowsSelect) currentWindowsSelect.addEventListener('change', updateEnergySavings);

  updateEnergySavings();
}

/* ==========================================================================
   4. BEFORE & AFTER INTERACTIVE SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('ba-comparison-slider');
  const beforeOverlay = document.getElementById('ba-before-overlay');
  const handle = document.getElementById('ba-handle');

  if (!container || !beforeOverlay || !handle) return;

  let isDragging = false;

  function setPosition(x) {
    const rect = container.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;

    beforeOverlay.style.width = `${pos}%`;
    handle.style.left = `${pos}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) setPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) setPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   5. GALLERY / PORTFOLIO FILTER
   ========================================================================== */
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-sky-500', 'text-white', 'shadow-lg', 'shadow-sky-500/25');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });

      btn.classList.add('bg-sky-500', 'text-white', 'shadow-lg', 'shadow-sky-500/25');
      btn.classList.remove('bg-slate-800', 'text-slate-300');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          item.classList.add('animate-fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');

      // Close all other items
      faqItems.forEach(other => {
        const otherAnswer = other.querySelector('.faq-answer');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherAnswer) otherAnswer.classList.add('hidden');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

/* ==========================================================================
   7. CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim() || '';
    const phone = document.getElementById('form-phone')?.value.trim() || '';
    const email = document.getElementById('form-email')?.value.trim() || '';
    const location = document.getElementById('form-location')?.value.trim() || 'Benavente y alrededores';
    const message = document.getElementById('form-message')?.value.trim() || '';

    if (!name || !phone) {
      if (statusMsg) {
        statusMsg.textContent = 'Por favor, introduce al menos tu nombre y un teléfono de contacto.';
        statusMsg.className = 'text-amber-400 font-medium text-sm mt-3';
      }
      return;
    }

    // Direct WhatsApp Bridge
    const waText = `*Nueva Solicitud de Presupuesto Web - Urtain*%0A%0A` +
      `👤 *Nombre:* ${name}%0A` +
      `📞 *Teléfono:* ${phone}%0A` +
      `📧 *Email:* ${email || 'No indicado'}%0A` +
      `📍 *Localidad:* ${location}%0A` +
      `📝 *Mensaje:* ${message}%0A`;

    window.open(`https://wa.me/34619493659?text=${waText}`, '_blank');

    if (statusMsg) {
      statusMsg.textContent = '✓ Redirigiendo a WhatsApp para confirmar los detalles directamente con el taller...';
      statusMsg.className = 'text-emerald-400 font-medium text-sm mt-3';
    }

    form.reset();
  });
}

/* ==========================================================================
   8. LEGAL & PRIVACY MODALS
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('legal-modal');
  const openButtons = document.querySelectorAll('.open-legal-modal');
  const closeBtn = document.getElementById('close-legal-modal');

  if (!modal) return;

  const toggleModal = (open) => {
    if (open) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(true);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(false);
  });
}
