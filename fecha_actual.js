// Obtener la fecha actual
const fechaActual = new Date();

// Sumar 10 días a la fecha actual
fechaActual.setDate(fechaActual.getDate() + 10);

// Obtener el nombre completo del día de la semana en el formato requerido
const opcionesFormato = { weekday: 'long' };
const nombreDia = fechaActual.toLocaleDateString('es-ES', opcionesFormato);

// Mostrar el resultado
console.log(nombreDia);