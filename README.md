# react-props · Ciudades de Galicia 🇬🇦

![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-⚡-646cff?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)
![Status](https://img.shields.io/badge/Status-Educational-success)

---

## 📌 Descripción

Proyecto demo desarrollado con **React y Vite** cuyo objetivo principal es practicar el **uso de props**, la **composición de componentes** y el **diseño responsive**.

La aplicación muestra testimonios informativos sobre **cinco ciudades relevantes de Galicia**, utilizando una arquitectura basada en componentes reutilizables.

---

## 🎯 Objetivos del proyecto

- Practicar el paso de **props** entre componentes.
- Crear **componentes reutilizables** en React.
- Aprender a estructurar un proyecto con **Vite**.
- Aplicar **diseño responsive** con CSS.
- Separar lógica, estructura y estilos.

---

## 🧩 Funcionalidades

- 📍 Testimonios de:
  - A Coruña
  - Lugo
  - Ourense
  - Santiago de Compostela
  - Vigo
- 🧭 **Navbar responsive** con menú hamburguesa.
- ⬆️ **Botón flotante “volver arriba”** visible al hacer scroll.
- 🏳️ **Footer a ancho completo** con la bandera de Galicia.
- 🎨 Estilos CSS por componente.
- 📱 Diseño adaptable a móvil, tablet y escritorio.

---

## 🖼️ Capturas de pantalla

### Vista Desktop
![Vista Desktop](./screenshots/desktop.png)

### Vista Mobile
![Vista Mobile](./screenshots/mobile.png)

### Navbar responsive
![Navbar](./screenshots/navbar.png)

> Coloca las imágenes en una carpeta `screenshots` en la raíz del proyecto.

---

## 🛠️ Tecnologías utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**
- **ESLint**

---

## 📁 Estructura del proyecto

```text
react-props/
├─ public/
│  └─ assets/
│     └─ img/
│        └─ bandera-Galicia.png
│
├─ src/
│  ├─ assets/
│  │  └─ img/
│  │
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Navbar.css
│  │  ├─ Footer.jsx
│  │  ├─ Footer.css
│  │  ├─ Testimonio.jsx
│  │  └─ Testimonio.css
│  │
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
│
├─ package.json
└─ README.md

---

## 🧱 Componentes principales

### `App.jsx`

- Componente raíz de la aplicación.
- Encargado de estructurar la página.
- Renderiza:
  - `Navbar`
  - Lista de componentes `Testimonio`
  - `Footer`

---

### `Testimonio`

- Componente **reutilizable** que representa la información de una ciudad.
- Se renderiza varias veces cambiando los datos mediante props.

**Props utilizadas:**
- `nombre`
- `pais`
- `imagen`
- `testimonio`

---

### `Navbar`

- Barra de navegación principal de la aplicación.
- Incluye enlaces a las distintas ciudades.
- **Responsive**, con:
  - Menú hamburguesa en pantallas pequeñas.
- Navegación interna mediante **scroll** usando atributos `id`.

---

### `Footer`

- Ocupa **todo el ancho de la pantalla**.
- Fondo con la **bandera de Galicia**.
- Incluye:
  - Información del proyecto.
  - Botón flotante circular para **volver arriba**.
- El botón utiliza un **icono SVG** y solo aparece al hacer scroll.

---

## 📱 Diseño responsive

- Uso de **Flexbox** para la maquetación.
- **Media queries** para adaptar el diseño a distintos tamaños de pantalla.
- Experiencia optimizada para:
  - 📱 Móvil
  - 📱 Tablet
  - 💻 Escritorio

---

## ♿ Accesibilidad y UX

- Uso de **HTML semántico**:
  - `<nav>`
  - `<main>`
  - `<footer>`
- Scroll suave para mejorar la navegación.
- Contraste mejorado para facilitar la lectura del texto sobre imágenes.
- Botón flotante con atributo `aria-label` para accesibilidad.

---

## 🚀 Instalación y uso

### Instalar dependencias
```bash
npm install
