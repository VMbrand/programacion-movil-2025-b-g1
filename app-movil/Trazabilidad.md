# Matriz de Trazabilidad — Veridia

La siguiente matriz enlaza **Requisitos (RF/RNF)** con sus **Historias de Usuario (HU)**, **Casos de Uso (UC)** y **Casos de Prueba (TC)**.  
De esta forma se asegura consistencia y cobertura en todo el ciclo de desarrollo.  

---

## Tabla de Trazabilidad

| Requisito | Historias relacionadas | Casos de Uso | Casos de Prueba |
|-----------|-------------------------|--------------|-----------------|
| **RF-01** Registro de usuario | HU-01 | UC-01 Registro de usuario | TC-01 Registro válido; TC-02 Email inválido; TC-03 Contraseña < 8 caracteres |
| **RF-02** Gestión de cuentas | HU-02 | UC-02 Gestión de cuentas | TC-04 Crear cuenta; TC-05 Editar cuenta; TC-06 Eliminar cuenta |
| **RF-03** Registro de transacciones | HU-03 | UC-03 Registro de transacciones | TC-07 Registrar ingreso; TC-08 Registrar gasto; TC-09 Categoría inválida |
| **RF-04** Metas de ahorro | HU-04 | UC-04 Gestión de metas | TC-10 Crear meta; TC-11 Notificación de retraso; TC-12 Seguimiento de progreso |
| **RF-05** Creación de tareas | HU-05 | UC-05 Gestión de tareas | TC-13 Crear tarea válida; TC-14 Tarea sin fecha; TC-15 Listar tareas |
| **RF-06** Cambio de estado de tareas | HU-06 | UC-06 Cambio de estado | TC-16 Cambiar a "en progreso"; TC-17 Cambiar a "completada"; TC-18 Estado inválido |
| **RNF-SEC-01** Cifrado de datos | HU-06 | UC-07 Seguridad de datos | TC-19 Validar cifrado en reposo y tránsito |
| **RNF-SEC-02** Bloqueo tras 3 intentos fallidos | HU-01 | UC-08 Autenticación segura | TC-20 Intentos de acceso fallidos; TC-21 Activación de 2FA |
| **RNF-PERF-01** Rendimiento (≤ 3000 ms) | HU-03 | UC-09 Rendimiento consultas | TC-22 Medición de respuesta; TC-23 Carga de reportes |
| **RNF-DISP-01** Disponibilidad (≥ 99.5%) | HU-04 | UC-10 Sincronización en la nube | TC-24 Simulación de caída de servicio; TC-25 Reintento de sincronización |
| **RNF-ACC-01** Accesibilidad (WCAG AA) | HU-05 | UC-11 Accesibilidad UI | TC-26 Contraste de colores; TC-27 Uso con lector de pantalla |
| **RNF-MANT-01** Portabilidad Android | HU-02 | UC-12 Instalación y despliegue | TC-28 Instalación en Android 9+; TC-29 Migración de datos |
