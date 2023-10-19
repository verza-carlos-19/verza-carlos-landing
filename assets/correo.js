const asunto = document.getElementById("formulario--motivo");
const nombre = document.getElementById("formulario--nombre");
const telefono = document.getElementById("formulario--telefono");
const mensaje = document.getElementById("formulario--mensaje");

export function enviarEmail() {
  // Obtener los valores del formulario
  const asunt = asunto.value;
  const message = `
    mi nombre = ${nombre.value},
    mi telefono = ${telefono.value},
    ${mensaje.value}`;
  // console.log(asunt + message);
  asunto.value = "";
  mensaje.value = "";
  telefono.value = "";
  nombre.value = "";
  // Componer el enlace "mailto"
  const mailtoLink = `mailto: carlosverza168@gmail.com?subject=${encodeURIComponent(
    asunt
  )}&body=${encodeURIComponent(message)}`;

  // Abrir la aplicación de correo predeterminada
  window.location.href = mailtoLink;
}
