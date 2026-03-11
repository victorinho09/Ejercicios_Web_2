## Contenido de la API

La API documenta tres recursos principales:

### 1. Movies (Películas)
- `GET /movies` - Listar todas las películas
- `GET /movies/{id}` - Obtener una película específica
- `POST /movies` - Crear una nueva película
- `PUT /movies/{id}` - Actualizar una película completa
- `PATCH /movies/{id}` - Actualizar parcialmente una película
- `DELETE /movies/{id}` - Eliminar una película

### 2. Rooms (Salas)
- `GET /rooms` - Listar todas las salas
- `GET /rooms/{id}` - Obtener una sala específica
- `POST /rooms` - Crear una nueva sala
- `PUT /rooms/{id}` - Actualizar una sala completa
- `PATCH /rooms/{id}` - Actualizar parcialmente una sala
- `DELETE /rooms/{id}` - Eliminar una sala

### 3. Sessions (Sesiones)
- `GET /sessions` - Listar todas las sesiones (con filtros opcionales por movieId o roomId)
- `GET /sessions/{id}` - Obtener una sesión específica
- `POST /sessions` - Crear una nueva sesión
- `PUT /sessions/{id}` - Actualizar una sesión completa
- `PATCH /sessions/{id}` - Actualizar parcialmente una sesión
- `DELETE /sessions/{id}` - Eliminar una sesión

## Códigos de Estado HTTP

- **200 OK**: Operación exitosa (GET, PUT, PATCH)
- **201 Created**: Recurso creado exitosamente (POST)
- **204 No Content**: Recurso eliminado exitosamente (DELETE)
- **400 Bad Request**: Faltan campos obligatorios
- **404 Not Found**: Recurso no encontrado
- **422 Unprocessable Entity**: Referencias inválidas (ej: movieId o roomId no existen)
- **500 Internal Server Error**: Error interno del servidor