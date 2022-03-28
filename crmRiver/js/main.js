
let arrayContact = []
let dragged;
function create_Petition() {

    peticion = document.getElementById("peticion").value;
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


    if (localStorage.getItem("data") == null) {

        localStorage.setItem('data', '[]');
    }

    arrayContact = JSON.parse(localStorage.getItem('data'));

    arrayContact.push(contacto)




    localStorage.setItem('data', JSON.stringify(arrayContact))

    location.href = "./crear_peticion.html";


}



function getInformation() {


    let fragment = document.createDocumentFragment();

    if (localStorage.getItem('data') != null) {

        let contenedor = document.getElementById("caja")
        let arrayContactaux = JSON.parse(localStorage.getItem('data'));

        arrayContactaux.forEach(element => {

            let list = document.createElement("p");
            list.setAttribute("draggable", true);
            list.innerHTML = element.nombre + "</br>" + element.telefono + "</br>" + element.email + "</br>" + "<button onclick = "+infoDocuments(arrayContactaux) +"id= 'but-documentos'>Revisar documentos</button>";
            fragment.appendChild(list)
        });

        contenedor.appendChild(fragment)

    }





}


 function infoDocuments(arrayContactaux){

    arrayContactaux.forEach(element => {

        console.log(element.nombre)
        
    });
  

    /*
    arraycandidate.forEach(element => {
        
        element.nombre
    });
*/
  




}




document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);
-
    /* events fired on the drop targets */
    document.addEventListener("dragover", function (event) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "container") {
        event.target.style.background = "#FFC629";
        if (event.target.id === "cont-papelera") {
            event.target.style.background = "#D62D2D";
        }

    }

}, false);

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "container") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "container") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        if (event.target.id == "elemento-caja") {
            let caja = document.getElementById("caja")
            caja.setAttribute("draggable", false)
        }

    }

}, false);



