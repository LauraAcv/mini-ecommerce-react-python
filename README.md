# 🛒 Mini E‑Commerce — Prueba Técnica React + Python

Este proyecto corresponde a una **prueba técnica Full Stack** que implementa un mini e‑commerce utilizando **React + TypeScript** en el frontend y **Django REST Framework** en el backend.

El objetivo es demostrar buenas prácticas de arquitectura, consumo de APIs, manejo de estado global, persistencia de datos y una interfaz limpia y funcional.

---

## 🚀 Tecnologías utilizadas

### Frontend
- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 📦 Axios
- 🎨 CSS puro

### Backend
- 🐍 Python
- 🌐 Django
- 🔗 Django REST Framework
- 🗄️ SQLite

---

## 📂 Estructura del proyecto

```
MINI-ECOMMERCE/
├── backend/          # API REST (Django)
├── frontend/         # Aplicación React
├── .gitignore
└── README.md
```

### Frontend (`/frontend/src`)
- `components/` → Componentes reutilizables (productos, carrito, botones)
- `contexts/` → Context API para el carrito de compras
- `hooks/` → Hooks personalizados
- `pages/` → Vistas principales
- `services/` → Servicios de comunicación con la API
- `types/` → Tipos TypeScript
- `utils/` → Utilidades (localStorage, formateo de precios)

---

## ✨ Funcionalidades implementadas

### 🧾 Listado de Productos
- Carga de productos desde la API (`GET /api/products/`)
- Manejo de estados: loading y error
- Diseño responsive

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Manejo de duplicados (incrementa cantidad)
- Editar cantidades con botones + / −
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático de subtotales y total
- Persistencia en `localStorage`

### 💾 Guardar carrito
- Envío del carrito al backend (`POST /api/cart/`)
- Confirmación visual de guardado exitoso
- Limpieza automática del carrito después de guardar

---

## 🖥️ Cómo ejecutar el proyecto

### 1️⃣ Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Servidor disponible en:
```
http://127.0.0.1:8000
```

Panel de administración:
```
http://127.0.0.1:8000/admin/
```

---

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación disponible en:
```
http://localhost:5173
```

---

## ⚙️ Variables de entorno

El frontend utiliza un archivo `.env` para definir la URL del backend:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## 🎨 Diseño

- Estilo **Minimal UI**
- Colores basados en la identidad de Softseguros:
  - Azul principal: `#0E75FA`
  - Azul claro: `#EAF3FE`
  - Texto oscuro: `#192738`
- Interfaz responsive y clara

---

## 🧪 Pruebas manuales

1. Crear productos desde Django Admin
2. Ver listado en el frontend
3. Agregar productos al carrito
4. Editar cantidades
5. Guardar carrito
6. Ver registros creados en el admin

---

## ✅ Estado del proyecto

✔️ Prueba técnica **completada**
✔️ Funcionalidad completa y estable
✔️ Código organizado y documentado

---

## 👤 Autor

Desarrollado como prueba técnica por **Laura Valeria Acosta Vélez**

---

Gracias! 🚀