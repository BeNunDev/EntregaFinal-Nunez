# 💱 Proyecto Final - Conversor de Moneda
**Alumno:** Nuñez Brian 
**Curso:** Diplomatura Full Stack  

---

## 📌 Descripción
Este proyecto es un **simulador interactivo de conversión de moneda** desarrollado en **JavaScript, HTML y CSS**.  

El objetivo es permitir al usuario convertir un monto en **pesos argentinos (ARS)** a diferentes monedas extranjeras (USD, EUR, BRL) utilizando tasas de cambio obtenidas desde un archivo **JSON**.  

Además, incluye un **historial de conversiones** almacenado en `localStorage` y un **botón para limpiarlo**, junto con notificaciones interactivas utilizando **SweetAlert2**.

---

## 🚀 Funcionalidades
- Conversión de ARS a distintas monedas según tasas definidas en `monedas.json`.
- Tasas de cambio cargadas de forma **asíncrona** con `fetch`.
- **Historial dinámico** de conversiones que se mantiene en el navegador.
- **Botón para limpiar historial** de conversiones.
- Alertas modernas con **SweetAlert2** en lugar de `alert`, `prompt` o `confirm`.
- Estilo visual mejorado con CSS y fondo personalizado.

---

## 📂 Estructura del proyecto
ProyectoFinal-Nuñez/
│
├── css/
│ └── styles.css
├── data/
│ └── monedas.json
├── img/
│ └── fondo2.jpg
├── js/
│ └── conversor.js
├── index.html

---

## 🛠 Tecnologías utilizadas
- **HTML5** → estructura del simulador  
- **CSS3** → estilos y diseño visual  
- **JavaScript (ES6+)** → lógica de negocio  
- **JSON** → simulación de datos remotos  
- **SweetAlert2** → alertas interactivas  

---

## 📖 Uso
1. Abrir el archivo `index.html` en cualquier navegador moderno.
2. Ingresar un monto en ARS.
3. Seleccionar la moneda a convertir.
4. Presionar el botón **Convertir**.
5. Ver el resultado en pantalla y el historial de conversiones.
6. Si se desea, presionar el botón **🗑 Limpiar historial** para borrar todo.

---

## 📊 Ejemplo de tasas en `monedas.json`
```json
{
  "USD": 1000,
  "EUR": 1100,
  "BRL": 200
}

---

## 🔹 Estas tasas son simuladas y se pueden modificar fácilmente editando el archivo data/monedas.json.

---

## 📦 Instalación      

No requiere instalación.
Solo es necesario clonar el repositorio y abrir index.html:

git clone https://github.com/BeNunDev/EntregaFinal-Nunez.git
cd EntregaFinal-Nunez

Abrir el archivo index.html en el navegador.


