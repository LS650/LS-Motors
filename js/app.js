/**
 * LS MOTORS – TECNISERVICIO AUTOMOTRIZ
 * Main Application Logic
 */

// Configuración de WhatsApp
// REEMPLAZAR con el número real de LS Motors (con código de país, ej. 593987654321)
const WHATSAPP_NUMBER = "593963014177"; // LS Motors – Tecniservicio Automotriz

/**
 * Genera la URL de WhatsApp con el mensaje codificado
 * @param {string} text Mensaje a enviar
 * @returns {string} URL de WhatsApp
 */
function buildWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // ──────────────────────────────────────────
  // 1. Inicialización de Enlaces de WhatsApp
  // ──────────────────────────────────────────
  
  // WhatsApp del Menú / Botón Destacado
  const navWhatsApp = document.getElementById("nav-whatsapp");
  if (navWhatsApp) {
    navWhatsApp.href = buildWhatsAppUrl("Hola, quiero agendar una cita en LS Motors.");
  }

  // Hero: Escribir por WhatsApp
  const heroWhatsApp = document.getElementById("hero-whatsapp");
  if (heroWhatsApp) {
    heroWhatsApp.href = buildWhatsAppUrl("Hola, quiero información sobre los servicios de LS Motors.");
  }

  // Botón Flotante de WhatsApp
  const floatWhatsApp = document.getElementById("float-whatsapp");
  if (floatWhatsApp) {
    floatWhatsApp.href = buildWhatsAppUrl("Hola, quiero información sobre los servicios de LS Motors.");
  }

  // Botones de Servicios (Agendar por WhatsApp)
  const serviceButtons = document.querySelectorAll(".btn-service-whatsapp");
  serviceButtons.forEach(btn => {
    const serviceName = btn.getAttribute("data-service");
    btn.href = buildWhatsAppUrl(`Hola, quiero agendar el servicio de: ${serviceName} en LS Motors.`);
  });

  // Botones de Catálogo de Productos
  const productButtons = document.querySelectorAll(".btn-product-whatsapp");
  productButtons.forEach(btn => {
    const productName = btn.getAttribute("data-product");
    btn.href = buildWhatsAppUrl(`Hola, quiero información sobre el producto: ${productName}.`);
  });

  // Botones de Combos / Promociones
  const comboButtons = document.querySelectorAll(".btn-combo-whatsapp");
  comboButtons.forEach(btn => {
    const comboName = btn.getAttribute("data-combo");
    btn.href = buildWhatsAppUrl(`Hola, quiero información sobre el combo: ${comboName}.`);
  });

  // Contacto: Botón WhatsApp
  const contactWhatsApp = document.getElementById("contact-whatsapp");
  if (contactWhatsApp) {
    contactWhatsApp.href = buildWhatsAppUrl("Hola, me gustaría contactar con un asesor de LS Motors.");
  }

  // Banner de Delivery
  const deliveryWhatsApp = document.getElementById("delivery-whatsapp");
  if (deliveryWhatsApp) {
    deliveryWhatsApp.href = buildWhatsAppUrl("Hola, quiero realizar una compra de productos a domicilio para aprovechar el descuento adicional por delivery.");
  }

    // Botones de Agendamiento / Reservas (redirigiendo a WhatsApp)
  const heroReservar = document.getElementById("hero-reservar");
  if (heroReservar) {
    heroReservar.href = buildWhatsAppUrl("Hola, me gustaría agendar una cita de mantenimiento en LS Motors.");
  }

  const footerReservar = document.getElementById("footer-reservar");
  if (footerReservar) {
    footerReservar.href = buildWhatsAppUrl("Hola, me gustaría agendar una cita de mantenimiento en LS Motors.");
  }

  const mobileReservar = document.getElementById("mobile-reservar");
  if (mobileReservar) {
    mobileReservar.href = buildWhatsAppUrl("Hola, me gustaría agendar una cita de mantenimiento en LS Motors.");
  }

  // ──────────────────────────────────────────
  // 2. Menú de Navegación Móvil (Hamburger)
  // ──────────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Cerrar el menú al hacer clic en un enlace
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  // Cambiar estilo del Header al hacer Scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // Resaltar sección activa en el menú
    updateActiveLink();
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }
});