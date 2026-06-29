// ==========================================
// CONFIGURACIÓN DE EMAILJS - PATAGONIA RENTAL
// Versión: 2.0 - Corregida
// ==========================================

// 1. Inicialización con tu Public Key
emailjs.init("TIEqcLrCyLBLPkOGZ");

// Mensaje en consola para verificar que el script cargó correctamente
console.log("Sistema de Reserva Patagonia Rental: Cargado v2.0");

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

            // LOG DE DIAGNÓSTICO
            console.log("Intentando enviar mail...");
            console.log("Service ID:", serviceID);
            console.log("Template ID:", templateID);

            // ENVÍO DEL FORMULARIO
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
                    
                    // Si el error es 400 "Template ID not found", lo mostramos claro
                    if (err.status === 400) {
                        alert('❌ Error: EmailJS no reconoce el Template ID. Revisa que la plantilla esté GUARDADA en el panel.');
                    } else {
                        alert('❌ Hubo un error al enviar: ' + JSON.stringify(err));
                    }

                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                });
        });
    } else {
        console.error("Error: No se encontró el formulario con ID 'form-reserva'");
    }
});