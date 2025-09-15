# Explicación paso a paso de los archivos (explanations.md)

A continuación explico, archivo por archivo, el propósito y las partes más importantes del código incluido en el paquete.

## 1) index.html
- `<!DOCTYPE html>`: Declara HTML5.
- `<html lang="es">`: Indica que el contenido está en español (ayuda a buscadores y a lectores de pantalla).
- `<meta name="viewport"...>`: Permite que la página sea responsive en móviles.
- `<link rel="stylesheet" href="styles.css">`: Enlace al CSS externo (cumple requisito).
- `<script defer src="script.js"></script>`: Carga el JavaScript sin bloquear el renderizado.
- Estructura general: `header` (navegación), `main` (contenido principal) y `footer`.
- La imagen está en `/img/foto-perfil.png` y tiene `alt` para accesibilidad.
- Enlaces a redes con `target="_blank"` y `rel="noopener"` (seguridad).

## 2) habilidades.html, logros.html, gustos.html
- Repiten la misma estructura base: header/nav, main y footer.
- Cada página marca la pestaña activa con la clase `activo` en el enlace correspondiente.
- Se incluye `script.js` y `styles.css` para mantener consistencia y funcionamiento del menú/tema.

## 3) styles.css (resumen)
- Mobile-first: estilos por defecto pensados para móviles y reglas `@media` para pantallas más grandes.
- Variables CSS en `:root` para colores y fácil personalización.
- `.site-header` con `position: sticky` para mantener la barra visible.
- `.nav-links` se transforma en un panel lateral en pantallas pequeñas; el body recibe la clase `nav-open` para mostrarlo.
- `.dark-mode` cambia las variables para tema oscuro.

## 4) script.js (resumen)
- Toggle de tema: usa `localStorage` para recordar preferencia.
- Toggle de menú: añade/remueve `nav-open` al `body`.
- Botón 'volver arriba': aparece cuando `scrollY > 300` y usa `window.scrollTo(..., behavior:'smooth')`.

## Cómo personalizar rápido
1. Reemplaza `img/foto-perfil.png` por tu propia imagen (optimizada, ~100-200 KB o menos).
2. Actualiza los enlaces de redes en `index.html`.
3. Cambia contenidos de cada página con tus datos reales.

---

Si quieres, en el próximo paso puedo:
- Generar un repositorio GitHub listo (con instrucciones `git init` + primer commit).
- Publicar automáticamente en GitHub Pages y darte el enlace (necesitaría que conectes tu cuenta o me des permiso para hacerlo tú mismo; también puedo guiarte paso a paso).
