![Administrador de Citas](./mini-art.png)

## Administrador de Citas de Veterinaria

Una aplicación web interactiva para la gestión y seguimiento de pacientes en una clínica veterinaria. El proyecto permite registrar, editar, listar y eliminar citas médicas de forma dinámica y en tiempo real, implementado con una arquitectura modular basada en **JavaScript Moderno (ES6+)** y estilos con **Tailwind CSS**.

---

### Características Principales

- **Registro de Pacientes**: Formulario con validación completa de campos (Nombre de paciente, Propietario, Email, Fecha de alta y Síntomas).
- **CRUD Completo**:
  - **Crear**: Agrega nuevas citas a la lista activa.
  - **Leer**: Renderizado dinámico de las tarjetas de pacientes con toda su información.
  - **Actualizar**: Permite modificar cualquier cita existente, precargando los datos en el formulario y adaptando la interfaz (cambio de botón a "Actualizar Paciente").
  - **Eliminar**: Remueve registros individuales con confirmación visual.
- **Sistema de Notificaciones**: Alertas visuales dinámicas (éxito y error) con autodestrucción tras 3 segundos y prevención de duplicados.
- **Identificadores Únicos**: Generación de IDs automáticos y pseudoaleatorios basados en timestamp para cada cita.
- **Diseño Responsivo**: Interfaz optimizada para pantallas móviles, tablets y escritorio gracias a Tailwind CSS.

---

### Tecnologías Utilizadas

- **HTML5 Semántico**
- **Tailwind CSS** (compilado en `dist/output.css`)
- **JavaScript ES6+** (Módulos nativos, Clases, Desestructuración, `structuredClone`, `Object.assign`, Programación Orientada a Objetos).

---

### Estructura del Proyecto

```text
26-PROYECTO-AdministrarCitas/
├── dist/
│   └── output.css           # Estilos compilados de Tailwind CSS
├── js/
│   ├── classes/
│   │   ├── AdminCitas.js    # Clase administradora del estado y renderizado de citas
│   │   └── Notificacion.js  # Clase encargada de generar y remover alertas en el DOM
│   ├── app.js               # Punto de entrada y suscripción a eventos principales
│   ├── funciones.js         # Lógica de negocio (validación, submit, edición, reseteo)
│   ├── selectores.js        # Referencias a elementos del DOM
│   └── variables.js         # Estado compartido (objeto cita y bandera de edición)
├── .gitignore               # Reglas de exclusión para Git
├── index.html               # Estructura principal de la interfaz
└── README.md                # Documentación del proyecto
```

---

### Hoja de Ruta y Migración a TypeScript

Este proyecto tiene planeada una migración progresiva a **TypeScript** para incorporar tipado estático, interfaces para el modelo de datos (`Cita`, `NotificacionConfig`), autocompletado avanzado y mayor robustez en tiempo de compilación.

### Estrategia de Ramas (Git Branching Strategy)

Para mantener la trazabilidad del aprendizaje y preservar la versión original, el repositorio se organizará de la siguiente manera:

- **`main`**: Rama principal que contendrá la versión evolucionada con **TypeScript** y soporte para desarrollo moderno.
- **`javascript-version`**: Rama dedicada que mantendrá de forma permanente la implementación pura en **JavaScript nativo (ES Modules)** sin dependencias de compilación adicionales.

---

### Cómo Ejecutar el Proyecto Localmente

Debido a que el proyecto utiliza módulos de JavaScript nativos (`import` / `export`), los navegadores requieren que se ejecute bajo un servidor web local (para evitar restricciones de CORS con el protocolo `file://`):

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/MkrCode-Labs/js-ts-admin-citas
   cd js-ts-admin-citas
   ```

2. **Iniciar un servidor local**:
   - Con la extensión **Live Server** de Visual Studio Code: Haz clic derecho en `index.html` y selecciona *"Open with Live Server"*.
   - O usando cualquier servidor HTTP rápido de Node.js:
     ```bash
     npx serve .
     # o
     npx live-server
     ```

3. Abrir en el navegador en la URL indicada (habitualmente `http://localhost:5500` o `http://localhost:3000`).
