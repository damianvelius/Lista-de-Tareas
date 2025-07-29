# 📝 Lista de Tareas - Challenge ForIT 2025

Este proyecto es una aplicación básica de lista de tareas desarrollada como parte del proceso de ingreso a la **Academia ForIT 2025**.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) con [TypeScript](https://www.typescriptlang.org/)
- API Routes de Next.js (reemplazando un backend con Express)
- React con Hooks para el manejo de estado
- Fetch API para la comunicación cliente-servidor
- Estilos con CSS básico

## 📦 Estructura del proyecto

Este proyecto utiliza **Next.js** para unificar el frontend y el backend en una sola aplicación. En lugar de tener carpetas separadas (`/frontend` y `/backend`), todo el código vive en la misma estructura:

- `/app/` – Componentes y rutas del frontend
- `/pages/api/tasks.ts` – Implementación de la API (`GET`, `POST`, `PUT`, `DELETE`)
- `/components/` – Componentes como `TaskList`, `TaskItem`, `TaskForm`

> ⚠️ Justificación: Next.js permite implementar backend y frontend en un mismo proyecto. Esto simplifica la arquitectura sin perder funcionalidad, y se considera una práctica estándar en muchos entornos modernos. Por eso no se crearon carpetas separadas como `/frontend` y `/backend`.

## 🛠️ Cómo ejecutar la aplicación localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
Instalar dependencias:

bash
Copiar
Editar
npm install
Crear archivo .env.local si necesitás configurar alguna variable de entorno (opcional).

Iniciar el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
Abrí http://localhost:3000 en tu navegador para ver la app.

📸 Capturas de pantalla
Agregá acá algunas imágenes de la app funcionando (crear, editar, eliminar tareas).

✅ Funcionalidades implementadas
 Crear nueva tarea

 Mostrar lista de tareas

 Editar tarea existente

 Eliminar tarea

 Manejo básico de errores

🧠 Bonus opcionales (si aplican)
 Filtros por tareas completadas / pendientes

 Validación de formularios

 Estilos con Tailwind o Bootstrap

 Persistencia con sqlite3 (actualmente usa array en memoria)

📄 Licencia
Este proyecto fue realizado exclusivamente como parte del proceso de ingreso a ForIT 2025.

```

25/7
instalacion de next, creacion de esqueleto de la interface de las task
comiendo de la creacion de los metodos
