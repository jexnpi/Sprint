/* ACTIVAR EL MODAL*/
alert('FLASH DAY! Te espero el sabado 25 de noviembre en el Studio Inercia, no te lo pierdas!')

const openModal = document.querySelector("#openmodal");
const closeModal = document.querySelector("#closemodal");
const modal = document.querySelector(".contenedor-modal");
const formulario = document.querySelector(".formulario");
const nombreInput = document.querySelector("#nombre");
const numeroInput = document.querySelector("#numero");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const ideaInput = document.querySelector("#idea");

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('contenedor-modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('contenedor-modal--show');
});

