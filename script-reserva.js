emailjs.init("TIEqcLrCyLBLPkOGZ"); 
const serviceID = 'service_2bilihz';
const templateID = 'template_a4kxku3';

const btn = document.getElementById('form-reserva');

document.getElementById('form-reserva').addEventListener('submit', function(event) {
   event.preventDefault(); // Evita que la página se recargue

    const btnSubmit = document.querySelector('.btn-submit');
    btnSubmit.innerText = 'Enviando...';
    btnSubmit.disabled = true;

   // Estos IDs los sacas de tu panel de EmailJS
    const serviceID = 'default_service'; // O tu Service ID
    const templateID = 'TU_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btnSubmit.innerText = 'Solicitar Presupuesto';
        btnSubmit.disabled = false;
        alert('✅ ¡Solicitud enviada con éxito! Nos contactaremos pronto.');
      this.reset(); // Limpia el formulario
    }, (err) => {
        btnSubmit.innerText = 'Solicitar Presupuesto';
        btnSubmit.disabled = false;
        alert('❌ Error al enviar: ' + JSON.stringify(err));
    });
});