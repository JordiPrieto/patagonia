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
            
            // Feedback visual: Cambiar botón
            btnSubmit.innerText = 'Enviando...';
            btnSubmit.disabled = true;

            // Tus IDs de EmailJS
            const serviceID = 'service_2bilihz';
            const templateID = 'template_a4kxku3';

            // Enviar el formulario
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('✅ ¡Solicitud enviada con éxito! Nos contactaremos pronto.');
                    formulario.reset(); // Limpia los campos
                })
                .catch((err) => {
                    alert('❌ Error al enviar el mensaje. Por favor intenta de nuevo.');
                    console.error("Detalle del error:", err);
                })
                .finally(() => {
                    // Restaurar botón al finalizar (éxito o error)
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                });
        });
    } else {
        console.error("No se encontró el formulario con ID 'form-reserva'");
    }
});