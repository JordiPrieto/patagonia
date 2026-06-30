// ==========================================
// CONFIGURACIÓN DE EMAILJS - PATAGONIA RENTAL
// ==========================================

(function() {
    // Inicialización con tu Public Key
    emailjs.init("TIEqcLrCyLBLPkOGZ");
})();

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-reserva');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            const btnSubmit = formulario.querySelector('.btn-submit');
            
            // Feedback visual: Cambiar botón mientras procesa
            btnSubmit.innerText = 'Procesando reserva...';
            btnSubmit.disabled = true;

            // --- CONFIGURACIÓN DE IDS ---
            const serviceID = 'service_2bilihz';
            const templateID_Dueno = 'template_a4kxku3';  // Recibes tú la info
            const templateID_Cliente = 'template_ofbe0se'; // Recibe el cliente la confirmación

            // 1. ENVIAR CORREO AL DUEÑO (EL RENTAL)
            emailjs.sendForm(serviceID, templateID_Dueno, this)
                .then(() => {
                    console.log("✅ Éxito: Notificación enviada al dueño.");

                    // 2. ENVIAR CORREO DE CONFIRMACIÓN AL CLIENTE
                    return emailjs.sendForm(serviceID, templateID_Cliente, this);
                })
                .then(() => {
                    // Si ambos correos se enviaron correctamente:
                    console.log("✅ Éxito: Confirmación enviada al cliente.");
                    alert('✅ ¡Solicitud enviada con éxito! Revisa tu correo (y la carpeta de spam) para ver la confirmación.');
                    formulario.reset(); // Limpia los campos del formulario
                })
                .catch((err) => {
                    // Si ocurre un error en cualquiera de los dos envíos:
                    alert('❌ Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
                    console.error("Detalle del error:", err);
                })
                .finally(() => {
                    // Restaurar el botón a su estado original al terminar todo
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                });
        });
    } else {
        console.error("Error: No se encontró el formulario con ID 'form-reserva'.");
    }
});