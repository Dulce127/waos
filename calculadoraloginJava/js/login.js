let iniciar = document.getElementById("iniciar");


function login (){
    let user = document.getElementById("user").value;
    let contra = document.getElementById("contra").value;

    if (user === "NCT" && contra === "127"){
        document.getElementById("mostrarResultado").innerHTML = "Bienvenid@: " + user;
    }else if(user === "NCT" && contra !=="127" ){
        if (contra.trim() === ''){
            document.getElementById("mostrarResultado").innerHTML = "Campo contraseña vacio";
        }else{
            document.getElementById("mostrarResultado").innerHTML = "Contraseña incorrecta";
        }
        
    }else if(user !== "NCT" && contra === "127" ){
        if (user.trim() === ''){
            document.getElementById("mostrarResultado").innerHTML = "Campo usuario vacio";
        }else{
            document.getElementById("mostrarResultado").innerHTML = "Usuario incorrecta";
        }
        
    }else if (user.trim() === '' && contra.trim() === '') {
        document.getElementById("mostrarResultado").innerHTML = "Campos vacios";
    }else{
        document.getElementById("mostrarResultado").innerHTML = "Muy mal";
    }
}


iniciar.addEventListener("click", login);