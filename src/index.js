const buttonSuscribe = document.querySelector('button');
const linkContact = document.querySelector('.linkContactanos');

const MAIL_TO = "pvejarasem@gmail.com";
const SUBJECT = "Informacion acerca de manganimus";
const BODY = "Hola quiero saber mas acerca de manganimus";

buttonSuscribe.addEventListener('click', contact);
linkContact.addEventListener('click', contact);


function contact(event) {
  event.preventDefault();
  window.open(`mailto:${MAIL_TO}?subject=${SUBJECT}&body=${BODY}`);
}