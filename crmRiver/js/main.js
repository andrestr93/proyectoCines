


let dragged;

function create_Petition() {


    peticion = document.getElementById("peticion").value;

    console.log(peticion)

}

function values_Form() {

    let form = document.forms["form-contact"]

    let nombre = form.name.value

    let apellidos = form.surname.value

    let email = form.email.value

    let telefono = form.telephone.value

    let tecnologia = form.tecnology.value


    let documento1 = form.document1.value

    let documento2 = form.document2.value

    let documento3 = form.document3.value



    let contacto = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        tecnologia: tecnologia,
        documento1: documento1,
        documento2: documento2,
        documento3: documento3

    }


    localStorage.setItem("contacto", JSON.stringify(contacto));




}






function getInformation() {

    const contacto = JSON.parse(localStorage.getItem("contacto"))
    document.getElementById('sugerencia').innerHTML = "Nombre: " + contacto.nombre + " " + contacto.apellidos + " documentos :  " + contacto.documento1 + " " +
        "email : " + contacto.email + " tecnologia: " + contacto.tecnologia + " </br> " + "Telefono " + contacto.telefono


}


/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "container") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "container") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "container") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);