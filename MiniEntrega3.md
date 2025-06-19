# 📄 Tercera Pre-entrega – Versión con Array en JavaScript 

> [!IMPORTANT]
> Grupos de mínimo dos personas y máximo tres. **Obligatorio**
> 
> Los grupos pueden ser los mismos que ya vienen trabajando, o pueden reorganizarse; acuerdenlo en el grupo.
>
> Este mini TP no está relacionado con el trabajo anterior. Es un proyecto **nuevo, desde cero**. Aprovechen para trabajar con otras personas.

## 🗓️ Fecha de Entrega

Lunes 30/06/2025 a las 18hs, se da dos fines de semanas para que se puedan organizar.

## 🎯 Objetivo General

Crear una aplicación web con HTML, CSS y JavaScript que:
1. Simule una base de datos de usuarios utilizando un array en el código,
2. Permita agregar nuevos usuarios desde un formulario,
3. Guarde información del usuario en el navegador (`localStorage` o `sessionStorage`),
4. Muestre toda la información en pantalla.
5. Entregar al repositorio en el excel con el:
     - Nombre y apellido de cada integrante del equipo
     - Correo de cada integrante del equipo

---

## ✅ Requisitos Obligatorios

### 1️⃣ Crear un array de usuarios directamente en `app.js`

```js
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];
```

- Este array será tu “base de datos”.
- No necesitás ningún archivo .json.

### 2️⃣ Mostrar los usuarios en pantalla

Usar innerHTML o createElement() para mostrar los usuarios dentro de un ```<div>``` o ```<ul>```

### 3️⃣ Agregar nuevos usuarios desde un formulario

Crear un formulario con inputs (nombre, edad, email).

Al hacer clic en el botón “Agregar usuario”:

  - Crear un nuevo objeto usuario con los datos del formulario.

  - Agregarlo al array usuarios.

  - Volver a mostrar la lista completa en pantalla.

### 4️⃣ Guardar información en Storage
1. Pedir un dato extra al usuario (por ejemplo, su nombre o color favorito).
2. Guardarlo con localStorage.setItem("clave", "valor").
3. Al cargar la página, leerlo con getItem() y mostrarlo en pantalla.

---

### 📁 Estructura del Proyecto

```
/proyecto-array
├── index.html
├── style.css
└── app.js
```

---

### 🧪 Resultado Esperado
Cuando el usuario abre la página:
  - Se ve un saludo personalizado con el dato del Storage.
  - Se lista el contenido inicial del array de usuarios.
  - Al agregar un usuario con el formulario, se actualiza la lista.

