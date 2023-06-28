let Boton = document.getElementById ("Boton")
let Nombre = document.getElementById("Nombre")
let cedula = document.getElementById("Cedula")
let fecha = document.getElementById("Fecha")

//Detectanto evento de clic en el boton del formulario 
Boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let errores=[]
    let valorNombre=Nombre.value
    if(!valorNombre){
        Nombre.classList.add("is-invalid")
        errores.push("Ingresar el nombre es obligatorio")

    }

    let valorCedula=Cedula.value
    if(!valorCedula){
        Cedula.classList.add("is-invalid")
        errores.push("Ingresar la cedula es obligatorio")

    }

    let valorFecha=Fecha.value
    if(!valorFecha){
        Fecha.classList.add("is-invalid")
        errores.push("Ingresar la fecha es obligatorio")

    }

    if(errores.length>0){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revisa, tienes campos por llenar',
            })

    }else{
        let datos={
            nombreUsuario:valorNombre,
            cedulaUsuario:valorCedula,
            fecha:valorFecha
        }
        
        let reservas

        if(JSON.parse(localStorage.getItem("memoria"))){
        reservas=JSON.parse(localStorage.getItem("memoria"))

        }else{
            reservas=[]
        }
        

        //almacenando datos en memoria
        let reserva=datos
        reservas.push(reserva)
        localStorage.setItem("memoria",JSON.stringify(reservas))

        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

    }

})

