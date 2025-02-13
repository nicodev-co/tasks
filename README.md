# Instrucciones de Instalación: API de Tareas y Frontend en React

Este proyecto es una solución fullstack que forma parte de la prueba técnica para desarrollador PHP/Fullstack. Se compone de:

- **Backend:** Una API RESTful desarrollada en Laravel que gestiona un recurso sencillo (tareas) con operaciones CRUD, validación, persistencia en PostgreSQL y seguridad mediante Laravel Sanctum (usado por Laravel Breeze).
- **Frontend:** Una aplicación en React (con Vite y Tailwind CSS) que consume la API y permite a los usuarios registrarse, iniciar sesión y gestionar las tareas.

Ambas aplicaciones están dockerizadas y se orquestan mediante Docker Compose.

## Instalación y Configuración

### Prerrequisitos

- Docker y Docker Compose instalados en el sistema.

### Pasos para la instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/nicodev-co/tasks.git
   cd tasks
   ```

2. **Configurar las variables de entorno**
   Copiar los archivos de ejemplo y modificarlos según sea necesario:

   ```bash
   cp backend/.env.example backend/.env
   ```

   **Configurar la base de datos en `backend/.env`**:

   ```ini
   DB_CONNECTION=pgsql
   DB_HOST=postgres
   DB_PORT=5432
   DB_DATABASE=laravel
   DB_USERNAME=laravel
   DB_PASSWORD=secret
   ```
   **Configurar la URL del frontend en backend/.env:**

   ```ini
   FRONTEND_URL=http://localhost:5173
   ```

3. **Levantar los contenedores con Docker Compose**
   ```bash
   docker compose up -d --build
   ````

4. **Acceder a la aplicación**
   - API Laravel: [http://localhost:8000](http://localhost:8000)
   - Frontend React: [http://localhost:5173](http://localhost:5173)
