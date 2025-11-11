# Historias de Usuario — Veridia

## 2 Historias de usuario 

| ID   | Como (rol)            | Quiero (objetivo)                                              | Para (beneficio)                                          | Prioridad | RF/RNF relacionados |
|------|-----------------------|----------------------------------------------------------------|----------------------------------------------------------|-----------|----------------------|
| HU-01 | Usuario nuevo         | registrarme con Correo, Nombre de Usuario, Genero y Contraseña                            | acceder a todas las funciones de la app                   | Alta      | RF-01, RNF-SEC-02    |
| HU-02 | Usuario ahorrador     | crear una cuenta de ahorro o corriente                         | organizar mi dinero en diferentes bolsillos               | Alta      | RF-02, RNF-MANT-01   |
| HU-03 | Usuario activo        | registrar ingresos y gastos con categorías                     | llevar control detallado de mis finanzas                  | Alta      | RF-03, RNF-PERF-01   |
| HU-04 | Usuario planificador  | establecer metas de ahorro con monto y fecha                   | alcanzar mis objetivos financieros                       | Media     | RF-04, RNF-DISP-01   |
| HU-05 | Usuario analítico     | ver gráficos de mis gastos y ahorros                           | comprender mis hábitos financieros                        | Media     | RF-05, RNF-ACC-01    |
| HU-06 | Usuario organizado    | exportar mis transacciones a CSV o PDF                         | respaldar y analizar mis datos en otras herramientas      | Baja      | RF-06, RNF-SEC-01    |

---

## 2.1 Criterios de aceptación (Gherkin)

### Funcionalidad: Registro de usuario
```gherkin
Escenario: Registro exitoso con credenciales válidas
  Dado que ingreso un correo válido
  Y una contraseña de al menos 8 caracteres
  Cuando presiono el botón "Registrarme"
  Entonces debo ver un mensaje de confirmación
  Y mi cuenta debe crearse correctamente
``` 
### Funcionalidad: Gestión de cuentas
```gherkin
Escenario: Creación de una nueva cuenta
  Dado que accedo a la sección "Cuentas"
  Cuando ingreso el nombre "Cuenta de Ahorro" y saldo inicial de $500
  Entonces debo ver esa cuenta listada en mi panel
  Y el saldo total debe actualizarse correctamente
``` 
### Funcionalidad: Registro de transacciones
```gherkin
Escenario: Registro de un gasto categorizado
  Dado que selecciono mi "Cuenta Corriente"
  Cuando registro un gasto de $50 con categoría "Supermercado"
  Entonces el saldo de la cuenta debe disminuir en $50
  Y la transacción debe aparecer en el historial con la categoría correcta

```
### Funcionalidad: Metas de ahorro
```gherkin
Escenario: Creación y seguimiento de una meta
  Dado que estoy en la sección "Metas"
  Cuando creo una meta de $1000 con fecha límite en 3 meses
  Entonces debo ver el progreso en porcentaje
  Y recibir notificaciones si voy por debajo del plan

```
### Funcionalidad: Gestión de tareas
```gherkin
Escenario: Creación de una nueva tarea
  Dado que accedo a la sección "Tareas"
  Cuando ingreso un título "Pagar factura de luz"
  Y una descripción "Antes del 10 de septiembre"
  Y una fecha de vencimiento "2025-09-09"
  Entonces debo ver la tarea creada en la lista
  Y la tarea debe mostrar su estado inicial como "pendiente"

```
### Funcionalidad: Cambio de estado de tarea
```gherkin
Escenario: Actualización del estado de una tarea
  Dado que tengo una tarea creada con estado "pendiente"
  Cuando cambio su estado a "en progreso"
  Entonces el sistema debe mostrar la tarea con estado "en progreso"
  Y debo poder cambiarla posteriormente a "completada"

```