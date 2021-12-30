let botonRegistro= document.getElementById("botonRegistro");

botonRegistro.addEventListener("click", function(){
    let registrar= document.getElementById("registroUsuario");
    registrar.innerHTML=`<input type="text"  id="usuario" placeholder="Nombre de Usuario">
                        <input type="text"  id="pass" placeholder="Contraseña">
                        <input type="button" id="registroForm" value="Registrar">`;
    
    let registroForm=document.getElementById("registroForm");
    registroForm.addEventListener("click", e=>{
        e.preventDefault();
        let nuevoUsuario=document.getElementById("usuario");
        let nuevaPass=document.getElementById("pass");
        let nuevoUsuarioJSON=JSON.stringify(nuevoUsuario.value);
        let nuevaPassJSON=JSON.stringify(nuevaPass.value);
        sessionStorage.setItem(nuevoUsuarioJSON, nuevaPassJSON);
})
})
let botonIngreso= document.getElementById("botonIngreso");

botonIngreso.addEventListener("click",function(){
    let registrar= document.getElementById("ingresoUsuario");
    registrar.innerHTML=`<input type="text" id="user" placeholder="Nombre de Usuario">
                        <input type="text" id="password" placeholder="Contraseña">
                        <input type="button" id="ingresoForm" value="Ingreso">`;
    let validar=document.getElementById("ingresoForm");
    validar.addEventListener("click", e=>{
        let usuario=document.getElementById("user");
        let pass=document.getElementById("password");
        let usuarioJSON=JSON.stringify(usuario.value);
        let passJSON=JSON.stringify(pass.value);


        for (let i=0;i<sessionStorage.length;i++ ){
            let usuarioReg=sessionStorage.key(i);
            let passReg=sessionStorage.getItem(usuarioReg);

            if (usuarioJSON==usuarioReg && passJSON==passReg){
                return alert ("Bienvenido");
            
            }
        }
        alert ("Usuario o contraseña equivocada vuelva a intentarlo");
    })
})

$("#ingresoUsuario").slideUp();
$("#registroUsuario").slideUp();

$("#botonIngreso").click(function(){
    $("#ingresoUsuario").slideToggle(1200);
    $("#registroUsuario").slideUp();
})
$("#botonRegistro").click(function(){
    $("#registroUsuario").slideToggle(1200);
    $("#ingresoUsuario").slideUp();
})

let urlClima= ("http://api.openweathermap.org/data/2.5/weather?lat=-34.4940625&lon=-58.5429665&appid=d950eb83df611b17e8a4cbd7741e1681");

$.get(urlClima, function(respuesta){
    console.log(respuesta);
    let contenido=`<div>
                        <h6>${respuesta.name}</h6>
                        <p> Clima: ${respuesta.weather[0].description} - Temp. Max: ${respuesta.main.temp_max} - Temp. Min: ${respuesta.main.temp_min}</p>
                    </div>
    `;

    $("#clima").append(contenido);
})





/*let climaAJAX=$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather",
    type:"GET",
    data:{
        q:"Buenos Aires",
        appid: "d950eb83df611b17e8a4cbd7741e1681",
        dataType:"json",
        units:"metric"
    },
    success:function(data){
        console.log(data);
    }
})

console.log(climaAJAX);*/



/*function ingreso(usuarioReg,passReg){
    let fallos=0;
    let usuario;
    let pass;
    while (true){
        usuario=prompt ("Ingresar Usuario:");
        pass= prompt("Ingresar contraseña:");
        if (usuario != usuarioReg|| pass!=passReg){
            fallos++;
            alert("Usuario o contraseña invalida intente de nuevo:");
        }
        if (fallos==3){
            alert("Usuario Bloqueado por multiples fallos");
            break
        }
        else if (usuario==usuarioReg && pass== passReg){
            alert("Bienvenido "+usuario);
            break
        }  
    }
}*/



/*let usuarioReg= document.createElement("input");
    let user= document.getElementById("registroUsuario");
    user.appendChild(usuarioReg);
    let passReg= document.createElement("input");
    user.appendChild(passReg);
    let boton= document.createElement("button");
    user.appendChild(boton);*/