// ==========================================
// CONFIGURACIÓN DE EMAILJS - PATAGONIA RENTAL
// Versión: 3.0 - Incluye Email Cliente
// ==========================================

// 1. Inicialización con tu Public Key
emailjs.init("TIEqcLrCyLBLPkOGZ");

console.log("Sistema de Reserva Patagonia Rental: Cargado v3.0");

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-reserva');
    const btnSubmit = document.querySelector('.btn-submit');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            // BLOQUEO DE BOTÓN Y FEEDBACK
            btnSubmit.innerText = 'Enviando...';
            btnSubmit.disabled = true;

            // TUS IDS REALES (Verificados)
            const serviceID = 'service_2bilihz';
            const templateID = 'template_a4kxku3';

            // ENVÍO DEL FORMULARIO
            // 'this' captura automáticamente todos los campos con atributo 'name'
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    // ÉXITO
                    alert('✅ ¡Solicitud enviada con éxito! Nos contactaremos pronto.');
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                    formulario.reset(); // Limpiar campos
                    console.log("Email enviado correctamente.");
                })
                .catch((err) => {
                    // ERROR
                    console.error("ERROR AL ENVIAR:", err);
                    alert('❌ Hubo un error al enviar: ' + JSON.stringify(err));
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                });
        });
    }
});