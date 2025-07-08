
const NOMBRE_CLUB = "Instituto Atlético Central Córdoba";
const DESCUENTO_SOCIO_PORCENTAJE = 20; 
const PRECIO_MEMBRESIA_BASE = 5000; 


let miembrosRegistrados = []; 
let cantidadNuevosRegistros = 0; 


const PLANES_MEMBRESIA = [
    { id: 1, nombre: "Básico", precio: PRECIO_MEMBRESIA_BASE },
    { id: 2, nombre: "Premium", precio: PRECIO_MEMBRESIA_BASE * 1.5 },
    { id: 3, nombre: "VIP", precio: PRECIO_MEMBRESIA_BASE * 2 }
];


console.log("=====================================");
console.log(`¡Bienvenido al sistema de registro de ${NOMBRE_CLUB}!`);
console.log("Planes de Membresía disponibles (para referencia):", PLANES_MEMBRESIA);
console.log("=====================================");


function iniciarRegistroSuscripcion() {
    
    alert(`¡Hola! Bienvenido al proceso de suscripción del ${NOMBRE_CLUB}.`);

    
    let esSocioRespuesta = prompt("¿Eres socio actual de nuestro club? Responde 'si' o 'no'.");

    
    esSocioRespuesta = esSocioRespuesta ? esSocioRespuesta.toLowerCase().trim() : '';

    let esSocio = false;
    let precioFinalMembresia = PRECIO_MEMBRESIA_BASE;
    let tipoRegistro = "General";

    
    if (esSocioRespuesta === "si") {
        esSocio = true;
        precioFinalMembresia = PRECIO_MEMBRESIA_BASE * (1 - DESCUENTO_SOCIO_PORCENTAJE / 100);
        tipoRegistro = "Socio Existente";
        alert(`¡Excelente! Como socio, tienes un ${DESCUENTO_SOCEIO_PORCENTAJE}% de descuento.`);
        
        console.log(`DEBUG: Precio inicial: $${PRECIO_MEMBRESIA_BASE}. Precio con descuento para socio: $${precioFinalMembresia}`);
    } else if (esSocioRespuesta === "no") {
        alert("¡No hay problema! Puedes registrarte como nuevo miembro con el precio estándar.");
        
        console.log(`DEBUG: Precio para nuevo miembro (sin descuento): $${precioFinalMembresia}`);
    } else {
        alert("Respuesta no reconocida. Se procederá con el registro general sin descuento.");
       
        console.warn("ADVERTENCIA: El usuario no respondió 'si' o 'no' al prompt de socio.");
    }

    
    let nombreUsuario = prompt("Por favor, ingresa tu nombre completo para el registro:");
    
    
    while (!nombreUsuario || nombreUsuario.trim() === "") {
        alert("El nombre no puede estar vacío. Por favor, inténtalo de nuevo.");
        
        console.error("ERROR: El usuario intentó registrarse sin nombre. Se solicitó de nuevo.");
        nombreUsuario = prompt("Por favor, ingresa tu nombre completo:");
    }
    nombreUsuario = nombreUsuario.trim(); 

    // Uso de Confirm: Confirmación final antes de registrar
    let confirmacion = confirm(`¿Estás seguro de que quieres registrarte como ${nombreUsuario} con un costo final de $${precioFinalMembresia}?`);

    if (confirmacion) {
        // Simulación de proceso de registro
        // Agregamos el usuario al array 'miembrosRegistrados'
        const nuevoMiembro = {
            nombre: nombreUsuario,
            esSocio: esSocio,
            tipoRegistro: tipoRegistro,
            precioPagado: precioFinalMembresia,
            fechaRegistro: new Date().toLocaleDateString('es-AR') // Formato de fecha para Argentina
        };
        miembrosRegistrados.push(nuevoMiembro);
        cantidadNuevosRegistros++;

        // Uso de Alert: Mensaje de éxito del registro
        alert(`¡Felicidades, ${nombreUsuario}! Te has registrado exitosamente en el ${NOMBRE_CLUB}.\nBienvenido a nuestra comunidad.`);

        // Uso de Consola JS: Mostrar todos los detalles del nuevo miembro y el estado del array
        console.log("\n--- Nuevo Miembro Registrado Exitosamente ---");
        console.log("Detalles:", nuevoMiembro); // Muestra el objeto completo
        console.log("----------------------------------------------");
        console.log("Lista actual de miembros registrados:", miembrosRegistrados);
        console.log("Total de nuevos registros en esta sesión:", cantidadNuevosRegistros);

    } else {
        // Uso de Alert: Mensaje de cancelación
        alert("Registro cancelado. ¡Esperamos verte pronto!");
        // Uso de Consola JS: Mensaje de cancelación
        console.log("INFO: El usuario canceló el registro.");
    }
}

// =========================================================
// Activación de la Función: Se ejecuta cuando el DOM está completamente cargado
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // Busca el botón que tiene el ID 'btnSuscribirse' en el HTML de contacto
    const botonRegistro = document.getElementById('btnSuscribirse');

    // Condicional: Verifica si el botón existe antes de intentar añadir un event listener
    if (botonRegistro) {
        // Añade un "escuchador de eventos" (event listener) para el clic en el botón
        // Cuando se haga clic, se ejecutará la función 'iniciarRegistroSuscripcion'
        botonRegistro.addEventListener('click', () => {
            iniciarRegistroSuscripcion(); // Llama a la función principal
        });
        console.log("INFO: Botón con ID 'btnSuscribirse' encontrado y escuchador de eventos asignado.");
    } else {
        // Si el botón no se encuentra, muestra una advertencia en la consola
        console.warn("ADVERTENCIA: El botón con ID 'btnSuscribirse' no fue encontrado en el HTML. La función de registro no se activará automáticamente al hacer clic.");
        // Opcional: Podrías ejecutar la función directamente aquí si NO quieres un botón
        // y que se active apenas carga la página de contacto. Pero para la consigna del botón,
        // esto no es lo que se busca.
        // iniciarRegistroSuscripcion(); // Descomentar si quieres que se ejecute sin botón
    }
});