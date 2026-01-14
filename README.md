# react-props

**Descripción**
- Proyecto demo en React y Vite que muestra testimonios sobre cinco ciudades relevantes de Galicia.
- Objetivo: practicar el paso de props entre componentes y la composición de la interfaz.

**Tecnologías**
- React 19
- Vite
- ESLint

**Estructura**
- Archivo raíz: [package.json](package.json)
- Componente principal: [src/App.jsx](src/App.jsx#L1-L400)
- Componentes: [src/components](src/components) — contiene `Navbar`, `Footer` y `Testimonio`
- Estilos: [src/App.css](src/App.css) y hojas CSS dentro de cada componente
- Imágenes: [src/assets/img](src/assets/img)

**Características**
- Componentes reutilizables (`Testimonio`, `Navbar`, `Footer`).
- Uso de props para pasar `nombre`, `pais`, `imagen` y `testimonio`.
- Configuración ligera con Vite para desarrollo rápido y HMR.

**Instalación**
- Instalar dependencias:
```bash
npm install