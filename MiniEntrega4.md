# 📦 Cuarta Pre-entrega – JavaScript + Storage + JSON + (opcional API)

## 🔁 Conexión con la Tercera Pre-entrega

En la **tercera pre-entrega**, trabajaron en equipo en una aplicación web que:
- Usaba un array de usuarios como base de datos.
- Permitía agregar nuevos usuarios desde un formulario.
- Mostraba todos los usuarios en pantalla.
- Guardaba un dato extra en `localStorage` (como un saludo o color favorito).

Ahora, en esta **cuarta entrega**, vas a **mejorar y ampliar** ese proyecto, también se hace en equipo:

---

## 🗓️ Fecha de Entrega
Lunes 14/07/2025 a las 18hs.

## [Excel](https://docs.google.com/spreadsheets/d/1vxz52tYdVCRJbg4xW1ek7j8KtUjNJ2B7DLEcYHe_1dc/edit?usp=sharing) de Equipos

---

## 🎯 Objetivo General

Construir una aplicación web más robusta que:
- Capture, valide y almacene datos ingresados por la persona usuaria.
- Utilice `localStorage` para guardar toda la información de forma persistente.
- Lea datos desde un archivo `.js` con estructura JSON.
- Permita agregar nuevos datos a esa estructura.
- (Opcional) Consulte datos desde una API externa y los muestre en el sitio.

---

## ✅ Requisitos Obligatorios

### 1️⃣ **Guardar en Storage la base de datos completa**
- Ya no alcanza con guardar un solo valor como en la entrega anterior.
- Guardá el **array de usuarios completo** en `localStorage` usando `JSON.stringify`.

```js
localStorage.setItem("usuarios", JSON.stringify(usuarios));
```

- Al cargar la página, verificá si hay datos guardados y usalos:

```js
const datosGuardados = localStorage.getItem("usuarios");
if (datosGuardados) {
  usuarios = JSON.parse(datosGuardados);
}
```

---

### 2️⃣ **Mostrar los datos desde Storage**
- Al iniciar la app, **los usuarios deben cargarse desde el Storage** (si existen) y mostrarse en pantalla con `innerHTML` o `createElement`.

---

### 3️⃣ **Crear estructura de datos tipo JSON**
- En tu `app.js`, tenés que tener una base de datos simulada con objetos. Ejemplo:

```js
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];
```

- Este array simula una "base de datos JSON".

---

### 4️⃣ **Agregar nuevos elementos desde un formulario**
- El formulario debe permitir ingresar **nombre, edad, email**.
- Validá que:
  - El nombre no esté vacío.
  - El email contenga un "@".
  - La edad sea un número mayor a 0.

- Si la validación pasa:
  - Crear un nuevo objeto `usuario`.
  - Agregarlo al array.
  - Guardar el array actualizado en `localStorage`.
  - Volver a renderizar la lista.

---

## 🧪 Resultado Esperado

Cuando el usuario abre el sitio:
- Ve un saludo personalizado con datos del Storage (como en la entrega anterior).
- Se muestra la lista de usuarios (inicialmente cargada desde el array o Storage).
- Puede agregar nuevos usuarios desde un formulario.
- Los nuevos usuarios se agregan a la lista, se guardan en Storage y se muestran.
- Si actualiza o cierra el sitio, los datos persisten.

---

## 🧰 Estructura de carpetas sugerida

```
/proyecto
├── index.html
├── style.css
└── app.js
```

---

## 🌟 Requisitos Opcionales (si querés ir más allá) (Podes ver más info en la clase 28 pero todavía no llegamos)

### 🔌 1. Integrar una API externa
Elegí una API pública como:
- [Pokémon API](https://pokeapi.co/)
- [Star Wars API](https://swapi.dev/)
- [The Movie DB](https://www.themoviedb.org/documentation/api)
- [API de recetas](https://www.edamam.com/)

Y:
- Permití que el usuario busque información (por ejemplo, por nombre de Pokémon).
- Mostrá los resultados en pantalla.
- Usá `fetch()` y `.then()` para obtener y manejar la respuesta JSON.

```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => res.json())
  .then(data => {
    // Mostrar imagen y nombre de Pikachu
  });
```

---

### ✍️ 2. Validar y combinar todo
Hacé un flujo completo:
- El usuario llena un formulario con datos válidos.
- Se agrega el nuevo elemento al array (que simula el JSON).
- Se guarda el array completo en Storage.
- Se renderiza toda la información de nuevo.
- (Si usás API) Se consulta una API y se muestra algo extra.

---

## 📅 Entrega

- **Clase 28** (Lunes 14/07/2025).
- Entregar el link del GitHub que seguían usando en la 3era pre entrega.
- Incluir en un README los nombres y correos del equipo.

---

## 🧠 Tips finales

- No te preocupes si no te sale todo perfecto: **priorizá los requisitos obligatorios**.
- Si podés implementar la API, ¡genial! Pero si no, entregá el resto completo.
- Probá actualizar la página para verificar que los datos persisten.

---
