/**
 * CONFIGURACIÓN DE EMAILJS - PATAGONIA RENTAL
 */

// 1. Inicialización con tu Public Key
emailjs.init("TIEqcLrCyLBLPkOGZ");

// 2. Selección de los elementos del DOM
const formulario = document.getElementById('form-reserva');
const btnSubmit = document.querySelector('.btn-submit');

// 3. Verificamos que el formulario exista para evitar errores
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Detenemos la recarga de la página

        // Feedback visual: Cambiamos el texto del botón y lo bloqueamos
        btnSubmit.innerText = 'Enviando...';
        btnSubmit.disabled = true;

        // TUS IDS REALES DE EMAILJS
        const serviceID = 'service_2bilihz';
        const templateID = 'template_a4kxku3';

        // 4. Envío del formulario
        // 'this' representa al formulario actual con todos sus datos
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // CASO ÉXITO
                alert('✅ ¡Solicitud enviada con éxito! Nos contactaremos pronto.');
                
                // Restauramos el botón
                btnSubmit.innerText = 'Solicitar Presupuesto';
                btnSubmit.disabled = false;
                
                // Limpiamos los campos del formulario
                formulario.reset();
            })
            .catch((err) => {
                // CASO ERROR
                alert('❌ Hubo un error al enviar: ' + JSON.stringify(err));
                
                // Restauramos el botón para que el usuario pueda intentar de nuevo
                btnSubmit.innerText = 'Solicitar Presupuesto';
                btnSubmit.disabled = false;
            });
    });
} else {
    console.error("Error: No se encontró el formulario con ID 'form-reserva'");
}