let tasas = {};

// Cargar las tasas desde el JSON
async function cargarTasas() {
  try {
    const response = await fetch("data/monedas.json");
    tasas = await response.json();
    console.log("Tasas cargadas:", tasas);
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
}

// Conversión
function convertirMoneda() {
  const montoARS = parseFloat(document.getElementById("montoARS").value);
  const moneda = document.getElementById("moneda").value;

  if (isNaN(montoARS) || montoARS <= 0) {
    Swal.fire("Error", "Por favor ingresá un monto válido.", "error");
    return;
  }

  if (!tasas[moneda]) {
    Swal.fire("Error", "Moneda no disponible.", "error");
    return;
  }

  const resultado = montoARS / tasas[moneda];

  document.getElementById(
    "resultado"
  ).innerText = `${montoARS} ARS equivalen a ${resultado.toFixed(2)} ${moneda}`;

  guardarHistorial(montoARS, moneda, resultado);
  mostrarHistorial();

  Swal.fire(
    "Conversión realizada",
    `${montoARS} ARS → ${resultado.toFixed(2)} ${moneda}`,
    "success"
  );
}

// Guardar historial
function guardarHistorial(monto, moneda, resultado) {
  const historial = JSON.parse(localStorage.getItem("historial")) || [];
  historial.push({
    monto,
    moneda,
    resultado,
    fecha: new Date().toLocaleString(),
  });
  localStorage.setItem("historial", JSON.stringify(historial));
}

// Mostrar historial
function mostrarHistorial() {
  const historial = JSON.parse(localStorage.getItem("historial")) || [];
  const lista = document.getElementById("historial");
  lista.innerHTML = "";
  historial.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.monto} ARS = ${item.resultado.toFixed(2)} ${
      item.moneda
    } ( ${item.fecha} )`;
    lista.appendChild(li);
  });
}

// Limpiar historial
function limpiarHistorial() {
  localStorage.removeItem("historial");
  mostrarHistorial();
  Swal.fire(
    "Historial eliminado",
    "Se borraron todas las conversiones.",
    "info"
  );
}

// Ejecutar al cargar
window.onload = () => {
  cargarTasas().then(() => mostrarHistorial());
};
