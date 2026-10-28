# 🏗️ Carpintería de Aluminio Urtain — Official Showcase & Landing Page

<div align="center">

![GitHub Workflow Status](https://img.shields.io/badge/Deploy-GitHub%20Pages-2563eb?style=for-the-badge&logo=github)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SEO Schema.org](https://img.shields.io/badge/SEO-LocalBusiness_JSON--LD-10b981?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-slate?style=for-the-badge)

**Sitio web corporativo de alta conversión publicitaria y catálogo interactivo para el negocio familiar «Carpintería de Aluminio Urtain».**

[🌐 Ver Demo en Directo](https://abraveses-de-tera.github.io/URTAIN/) • [📍 Ficha en Google Maps](https://www.google.com/maps/place/Carpinter%C3%ADa+De+Aluminio+Urtain/@41.9952967,-5.8938086,17z) • [📞 Contacto Directo](#-datos-de-contacto-del-negocio)

</div>

---

## 📌 Sobre el Negocio

**Carpintería de Aluminio Urtain S.L.** cuenta con más de 25 años de trayectoria en el sector de la carpintería metálica, cerramientos y ventanas de alta eficiencia energética en **Micereces de Tera, Benavente y toda la provincia de Zamora y León**.

* **Especialidades:**
  * Ventanas con **Rotura de Puente Térmico (RPT)** y doble/triple acristalamiento Climalit Guardian Sun.
  * Cerramientos estancos para porches, terrazas, balcones y áticos.
  * Puertas de entrada acorazadas y portales comunitarios en aluminio lacado.
  * Persianas térmicas extrusionadas con inyección de poliuretano y motorizaciones automáticas Somfy.
  * Mosquiteras a medida (enrollables, plisadas y correderas).
  * Carpintería metálica, rejas de seguridad y barandillas con vidrio laminado.

---

## ✨ Características de la Web (Inspirada en los Repositorios Top de GitHub)

Este repositorio ha sido desarrollado siguiendo las mejores prácticas de UX/UI y diseño de landing pages modernas (Tailwind UI, Flowbite, Cruip, Shadcn):

1. **Calculador de Presupuesto Express Interactivo**:
   * Permite al cliente seleccionar tipo de trabajo, número de estancias, nivel de acristalamiento y acabados RAL/madera.
   * Calcula un rango de estimación en tiempo real.
   * Genera un botón directo a **WhatsApp** con todos los datos cumplimentados para pedir cita de medición.

2. **Comparador Interactivo de Aislamiento Térmico (Antes / Después)**:
   * Slider deslizante táctil y con ratón que demuestra visualmente la diferencia entre una ventana tradicional fría con condensación y la perfilería **URTAIN RPT** hermética.

3. **Simulador de Ahorro en Calefacción**:
   * Calcula el ahorro anual en euros (€) y kilovatios-hora (kWh) según el tamaño de la vivienda y la carpintería actual en el clima de Zamora y Castilla y León.

4. **Portfolio y Galería con Filtros**:
   * Trabajos reales categorizados: *Ventanas RPT*, *Cerramientos*, *Puertas* y *Persianas*.

5. **Integración con Google Maps**:
   * Mapa interactivo centrado exactamente en el taller en **Micereces de Tera / Benavente** (coordenadas `41.9952967, -5.8938086`).
   * Enlaces directos a rutas en Google Maps y llamada directa telefónica.

6. **SEO Local Avanzado & Schema.org**:
   * Microdatos JSON-LD `LocalBusiness` / `HomeAndConstructionBusiness` completos para que Google indexe los teléfonos, horario comercial y servicios en los primeros resultados de búsqueda.
   * Meta etiquetas OpenGraph y Twitter Cards para vistas previas al compartir por WhatsApp o redes sociales.

7. **Botón Flotante de WhatsApp con Efecto Pulso**:
   * Canal de venta directo e instantáneo optimizado para dispositivos móviles.

8. **Aviso Legal y RGPD**:
   * Modal accesible cumpliendo con la legislación de privacidad y LSSI-CE española.

---

## 📁 Estructura del Proyecto

```text
URTAIN/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Despliegue automático en GitHub Pages
├── assets/
│   ├── favicon.svg           # Icono vectorial de perfil de aluminio
│   ├── logo.svg              # Logo corporativo Urtain
│   └── og-image.svg          # Banner de previsualización para WhatsApp/Twitter
├── css/
│   └── styles.css            # Estilos personalizados, glassmorphism y slider
├── js/
│   └── app.js                # Lógica del presupuestador, comparador y filtros
├── index.html                # Página principal completa y semántica
├── robots.txt                # Configuración de rastreo SEO
├── sitemap.xml               # Mapa del sitio para Google Search Console
├── LICENSE                   # Licencia de código abierto MIT
└── README.md                 # Documentación completa del proyecto
```

---

## 🚀 Cómo Publicar este Repositorio en GitHub

El repositorio local ya está inicializado y vinculado a la rama principal (`main`). Para publicarlo en tu cuenta de GitHub, sigue estos sencillos pasos:

### Paso 1: Crear el repositorio en GitHub
1. Entra en [GitHub.com](https://github.com/new).
2. Ponle el nombre: `URTAIN`.
3. Déjalo **Público** (sin marcar "Add README", ya lo tenemos aquí).
4. Pulsa en **Create repository**.

### Paso 2: Subir el código desde la consola
Abre una terminal PowerShell en esta carpeta (`C:\Users\Andoni\.gemini\antigravity\scratch\URTAIN`) y ejecuta:

```bash
git add .
git commit -m "Publicación inicial: Web publicitaria Carpintería Urtain con calculador interactivo y SEO"
git push -u origin main
```

*(Si tu usuario u organización en GitHub es diferente a `Abraveses-de-tera`, cambia la URL del remoto con: `git remote set-url origin https://github.com/TU-USUARIO/URTAIN.git`)*

### Paso 3: Activar GitHub Pages (Web Gratis 24/7)
1. En tu repositorio en GitHub, ve a **Settings** -> **Pages**.
2. En **Build and deployment** > **Source**, elige **GitHub Actions** (se desplegará automáticamente usando el archivo `.github/workflows/deploy.yml` ya incluido).
3. En 1 minuto, la web estará disponible en vivo en:
   `https://<tu-usuario>.github.io/URTAIN/`

---

## 📞 Datos de Contacto del Negocio

* **Nombre:** Carpintería de Aluminio Urtain S.L.
* **Ubicación:** Calle Santiago, s/n (Bajo), 49624 Micereces de Tera (Zamora, España).
* **Zona de servicio:** Benavente, Los Valles, Zamora, La Bañeza y León.
* **Teléfono móvil / WhatsApp:** [619 49 36 59](tel:619493659)
* **Teléfono fijo:** [980 65 30 90](tel:980653090)
* **Google Maps:** [Ver ubicación y opiniones](https://www.google.com/maps/place/Carpinter%C3%ADa+De+Aluminio+Urtain/@41.9952967,-5.8938086,17z)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
