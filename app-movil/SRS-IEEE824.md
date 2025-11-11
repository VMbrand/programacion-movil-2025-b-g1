# Software Requirements Specification (SRS) - IEEE830


**Proyecto:** Veridia – App móvil para gestión de cuentas y ahorro  
**Norma:** IEEE 830 - 08/09/2025 
**Parcticipantes:** Brandow Stivent Claros Polania y Victor manuel brand cepeda

---

## 1. Introducción

### 1.1 Propósito
El propósito de este documento es especificar de manera clara y verificable los requisitos del sistema **Veridia**, una aplicación móvil que permite a los usuarios gestionar sus cuentas financieras, registrar transacciones, establecer metas de ahorro y analizar sus gastos.

Este SRS está dirigido a:  
- **Desarrolladores:** para implementar las funciones descritas.  
- **Diseñadores:** para definir UI/UX.  
- **Stakeholders/Usuarios:** para validar que el sistema cumpla sus expectativas.

### 1.2 Alcance
**Veridia** es una app de una plataforma (Android) que ofrece:  
- Gestión de múltiples cuentas (ahorro, corriente, efectivo).  
- Registro de ingresos y gastos categorizados.  
- Establecimiento y seguimiento de metas de ahorro.  
- Visualización de balances y reportes gráficos.  
- Recordatorios de pagos o revisiones de metas.  
- Exportación y respaldo de datos en la nube.

**Beneficios esperados:**  
- Mayor control y claridad financiera personal.  
- Facilidad de uso con una interfaz amigable.  
- Seguridad de la información con cifrado.

**Fuera de alcance (MVP):** Integración con APIs bancarias, pagos en línea, asesoría financiera avanzada.

### 1.3 Definiciones, acrónimos y abreviaturas
- **RF:** Requisito Funcional.  
- **RNF:** Requisito No Funcional.  
- **MVP:** Producto mínimo viable.  
- **CSV:** *Comma Separated Values* (formato de exportación de datos).  
- **WCAG:** *Web Content Accessibility Guidelines*.  
- **Stakeholder:** Persona interesada en el sistema.

### 1.4 Referencias
- IEEE Std 830-1998, *Recommended Practice for Software Requirements Specifications*.  
- WCAG 2.1 AA, *W3C Accessibility Guidelines*.  
- ISO/IEC 9126 – *Software Quality Model*.

### 1.5 Visión general del documento
Este SRS describe en detalle los requisitos funcionales y no funcionales del sistema. Incluye actores, casos de uso, restricciones, y requisitos de calidad que guiarán el desarrollo y validación.

---

## 2. Descripción general

### 2.1 Perspectiva del producto
El sistema es independiente y se instalará como aplicación móvil. Puede operar offline y sincronizar datos con la nube cuando haya conexión. Se construirá sobre un framework multiplataforma (ej. Flutter).

### 2.2 Funciones principales
- Crear cuentas financieras.  
- Registrar y categorizar transacciones.  
- Establecer metas de ahorro.  
- Generar reportes visuales (gráficos).  
- Enviar recordatorios y notificaciones.  
- Exportar datos a CSV/PDF y generar backups.

### 2.3 Características de los usuarios
- **Ahorrador casual:** requiere simplicidad.  
- **Controlador de gastos:** desea reportes detallados.  
- **Usuario con múltiples cuentas:** necesita consolidación de saldos.

### 2.4 Restricciones
- El sistema debe funcionar en dispositivos Android 9+ e iOS 13+.  
- El almacenamiento de datos será cifrado (AES-256).  
- Tiempo de carga de pantalla principal ≤ 2.5 s en dispositivos gama media.

### 2.5 Suposiciones y dependencias
- Conexión a internet disponible para sincronización.  
- Dependencia de Firebase/servicio en la nube para backups.

---


## 3. Requisitos específicos

### Tabla de Requisitos Funcionales (RF)

| Código   | Descripción                                                                                  |
|----------|----------------------------------------------------------------------------------------------|
| RF-01    | El sistema permitirá registrarse con correo y contraseña (≥ 8 caracteres).                     |
| RF-02    | El sistema permitirá crear, editar y eliminar cuentas.                                       |
| RF-03    | El sistema permitirá registrar ingresos y gastos con categoría, monto y fecha.               |
| RF-04    | El sistema permitirá establecer metas con monto objetivo y fecha límite.                     |
| RF-05    | El sistema debe permitir a los usuarios crear tareas, solicitando como mínimo un título, una descripción y una fecha de vencimiento. |
| RF-06    | El sistema debe permitir a los usuarios cambiar el estado de una tarea entre "pendiente", "en progreso" y "completada". |

### Tabla de Requisitos No Funcionales (RNF)

| Código         | Descripción                                                                                 |
|---------------|---------------------------------------------------------------------------------------------|
| RNF-SEC-01     | Datos cifrados en reposo (AES-256) y tránsito (TLS 1.2+).                                  |
| RNF-SEC-02     | Bloqueo tras 3 intentos fallidos; opción de 2FA.                                           |
| RNF-PERF-01    | Respuesta de consultas ≤ 3000 ms (p95).                                                     |
| RNF-DISP-01    | Uptime del servicio de sincronización ≥ 99.5%.                                             |
| RNF-ACC-01     | Cumplir con WCAG AA (contraste, etiquetas, tamaño mínimo).                                 |
| RNF-MANT-01    | Código modular y plataforma (Android).                                            |


### 3.3 Interfaces externas
- **Interfaz usuario:** Pantallas móviles con navegación tipo tabs y notificaciones push.  
- **Interfaz hardware:** Uso de almacenamiento local cifrado y conexión a internet.  
- **Interfaz software:** API REST para backups y exportaciones.

---

## 4. Otras consideraciones
- El sistema deberá escalar para soportar hasta 10,000 usuarios concurrentes en la nube.  
- Actualizaciones deben instalarse sin pérdida de datos.

---

## 5. Apéndices

### 5.1 Glosario
- **Balance:** suma de saldos en todas las cuentas.  
- **Meta de ahorro:** objetivo financiero definido por monto y fecha.  
- **Transacción:** ingreso o gasto registrado por el usuario.  
- **Backup:** copia de seguridad almacenada en la nube.


