function mostrarRecordatorio() {
  const dia = document.getElementById("dia").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje").value;
  let actividad = "";

  switch (dia) {
    case "lunes":
      actividad = "Atender un cliente específico";
      break;
    case "martes":
      actividad = "Visitar una agencia fuera de la ciudad";
      break;
    case "miercoles":
      actividad = "Llevar a tu hija al ballet";
      break;
    case "jueves":
      actividad = "Priorizar entregas de desarrollo";
      break;
    case "viernes":
      actividad = "Atender problemas de manera remota";
      break;
    case "sábado":
    case "sabado":
      actividad = "Hacer lo que tu esposa quiera";
      break;
    case "domingo":
      actividad = "Descansar";
      break;
    default:
      actividad = "Día no válido, intenta nuevamente.";
  }

  document.getElementById("resultado").innerHTML = 
    `<strong>Hoy es ${dia.charAt(0).toUpperCase() + dia.slice(1)}</strong><br>
     Actividad: ${actividad}<br>
     Mensaje personalizado: ${mensaje}`;
}
