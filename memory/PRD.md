# PRD - Landing Page de Visas USA

**Fecha de creación:** 15 de Diciembre, 2024

## Problema Original
Crear una landing page donde se ofrezca un servicio para realizar visas de viaje de Estados Unidos.

## Decisiones del Usuario
- **Tipos de visa:** Turista (B1/B2) y Trabajo (H1B/L1)
- **Funcionalidad:** Formulario de contacto para que puedan contactar por email
- **Diseño:** Profesional con colores rojo y azul
- **Secciones:** Servicios, Contacto, Proceso paso a paso, FAQ
- **Interacción:** Por mail y contacto
- **Requisito especial:** Código abierto y modificable

## Arquitectura Técnica
- **Frontend:** React con Vite, TailwindCSS, Shadcn UI
- **Backend:** FastAPI + MongoDB (para fase futura)
- **Componentes:** Modulares y reutilizables

## Implementado (Fase 1 - Frontend con Mock Data)

### ✅ Componentes Creados
1. **Navbar** (`/app/frontend/src/components/Navbar.jsx`)
   - Barra de navegación fija con scroll effect
   - Menú responsive (desktop y móvil)
   - Navegación smooth a todas las secciones
   - Botón CTA "Consulta Gratis"

2. **Hero Section** (`/app/frontend/src/components/Hero.jsx`)
   - Imagen de fondo a pantalla completa
   - Overlay oscuro para legibilidad
   - Título principal y descripción
   - CTA principal (rojo) y secundario (transparente)
   - Badge de 95% tasa de aprobación
   - Efecto parallax en background

3. **Services Section** (`/app/frontend/src/components/Services.jsx`)
   - 2 tarjetas de servicios (Visa Turista y Visa Trabajo)
   - Características de cada servicio
   - Duración estimada
   - Iconos profesionales (lucide-react)

4. **Process Section** (`/app/frontend/src/components/Process.jsx`)
   - 5 pasos del proceso
   - Timeline visual
   - Diseño responsivo

5. **FAQ Section** (`/app/frontend/src/components/FAQ.jsx`)
   - Accordion de Shadcn UI
   - 5 preguntas frecuentes
   - Animaciones suaves

6. **Contact Section** (`/app/frontend/src/components/Contact.jsx`)
   - Formulario completo con validación
   - Información de contacto
   - Toast notifications (sonner)

7. **Footer** (`/app/frontend/src/components/Footer.jsx`)
   - Enlaces rápidos
   - Información de contacto
   - Disclaimer legal

8. **ScrollToTop** (`/app/frontend/src/components/ScrollToTop.jsx`)
   - Botón flotante en esquina inferior derecha
   - Aparece solo a mitad de página hacia abajo
   - Animación smooth al volver arriba
   - Color azul con efecto hover

### 📦 Datos Mock
- **Archivo:** `/app/frontend/src/mock/visaData.js`
- Contiene: servicios, pasos del proceso, FAQs, info de contacto

### 🎨 Diseño
- Colores principales: Rojo (#DC2626) y Azul (#2563EB)
- Tipografía: Sistema por defecto con buenos pesos
- Componentes Shadcn: Button, Card, Input, Textarea, Label, Accordion
- Animaciones: Hover effects, smooth scroll, transitions

## Backlog Priorizado

### P0 - Backend Development (Próxima Fase)
- [ ] API para formulario de contacto
- [ ] Modelo de Contact en MongoDB
- [ ] Endpoint POST /api/contact
- [ ] Integración email (SendGrid/SMTP)
- [ ] Validación backend

### P1 - Mejoras de Funcionalidad
- [ ] Sistema de citas/calendario
- [ ] Panel admin para ver consultas
- [ ] Notificaciones por email automáticas
- [ ] WhatsApp integration

### P2 - Optimizaciones
- [ ] SEO optimization
- [ ] Analytics tracking
- [ ] A/B testing del CTA
- [ ] Testimonios de clientes reales
- [ ] Blog/recursos sobre visas

## Next Action Items
1. Recibir feedback del usuario sobre el diseño
2. Preparar backend para formulario de contacto
3. Integrar servicio de email
4. Testing end-to-end
