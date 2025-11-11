# ANEXOS — Veridia

Este documento muestra materiales complementarios al SRS, Historias de Usuario, Casos de Uso y Trazabilidad.  
Su propósito es ilustrar de manera visual y técnica cómo se concibe el sistema.

---

## 1. Mockups

### Pantalla de inicio de sesión
![Mockup Login](mockups/login.png)

### Pantalla principal (dashboard)
![Mockup Dashboard](mockups/dashboard.png)

### Pantalla de gestión de tareas
![Mockup Tareas](mockups/tareas.png)

---

## 2. DER (Diagrama Entidad-Relación)

El siguiente diagrama muestra las entidades principales y sus relaciones:

- **Usuario** (id_usuario, correo, contraseña, nombre).  
- **Cuenta** (id_cuenta, tipo, saldo, id_usuario).  
- **Transacción** (id_transacción, monto, fecha, categoría, id_cuenta).  
- **Meta** (id_meta, monto_objetivo, fecha_límite, id_usuario).  
- **Tarea** (id_tarea, título, descripción, fecha_vencimiento, estado, id_usuario).
