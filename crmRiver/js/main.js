


/*
let peticion= "";
let nombre = "";
let apellidos= "";
let email = "";
let telefono = "";
let tecnologia = "";
let document1= "";
let document2 = "";
let documento3 = "";

*/



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


function dragStart(event) { // cuando vamos a arrastrar

    event.dataTransfer.setData("sugerencia", event.target.id)




}



function onDragOver(event) { //mientras se esta arrastrando

    event.preventDefault();
}




function onDrop(event) { // cuando terminamos de soltar 
    let contenedor = document.getElementById("caja2")
    let contenedor2 = document.getElementById("caja3")
    let contenedor3 = document.getElementById("caja4")
    let contenedor4 = document.getElementById("caja5")
    let contenedor5 = document.getElementById("caja2")

    let contacto = document.getElementById("caja")

    event.preventDefault

    contenedor.appendChild(contacto)






}
