const formulario = document.getElementById('formContato');
const aviso = document.getElementById('avisoFormulario');

formulario.addEventListener('submit', (evento) => {
   evento.preventDefault();
    aviso.classList.add('d-none');
      formulario.classList.add('was-validated');

  if (!formulario.checkValidity()) {
    return;
  }

     aviso.textContent = 'Formulário validado com sucesso! Esta é uma demonstração: os dados não foram enviados.';
      aviso.classList.remove('d-none');
        formulario.reset();
           formulario.classList.remove('was-validated');
});
