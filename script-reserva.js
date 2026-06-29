// ==========================================
// CONFIGURACIÓN DE EMAILJS - PATAGONIA RENTAL
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicialización dentro del DOMContentLoaded para asegurar que la librería cargó
    try {
        emailjs.init("TIEqcLrCyLBLPkOGZ");
        console.log("✅ EmailJS: Sistema inicializado correctamente.");
    } catch (error) {
        console.error("❌ EmailJS: Error al inicializar. Revisa el link del HTML.", error);
    }

    const formulario = document.getElementById('form-reserva');
    const btnSubmit = document.querySelector('.btn-submit');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita recarga de página

            console.log("🚀 Iniciando envío de formulario...");

            // 2. Feedback visual inmediato
            btnSubmit.innerText = 'Enviando...';
            btnSubmit.disabled = true;

            // 3. IDs de tu cuenta
            const serviceID = 'service_2bilihz';
            const templateID = 'template_a4kxku3';

            // 4. Envío usando el ID del formulario directamente (más seguro que 'this')
            emailjs.sendForm(serviceID, templateID, '#form-reserva')
                .then((response) => {
                    console.log("✅ ÉXITO:", response.status, response.text);
                    
                    alert('✅ ¡Solicitud enviada con éxito! Nos contactaremos pronto.');
                    
                    // Restaurar formulario
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                    formulario.reset(); 
                })
                .catch((err) => {
                    console.error("❌ ERROR DETECTADO:", err);

                    // Si entra aquí, te dirá exactamente por qué falló
                    alert('❌ Hubo un error al enviar: ' + (err.text || JSON.stringify(err)));
                    
                    btnSubmit.innerText = 'Solicitar Presupuesto';
                    btnSubmit.disabled = false;
                });
        });
    } else {
        console.error("⚠️ Error: No se encontró el elemento #form-reserva en el HTML.");
    }
});