let botonRegistro= document.getElementById("botonRegistro");

botonRegistro.addEventListener("click", function(){
    let registrar= document.getElementById("registroUsuario");
    registrar.innerHTML=`<input type="text"  id="usuario" placeholder="Nombre de Usuario">
                        <input type="text"  id="pass" placeholder="Contraseña">
                        <input type="button" id="registroForm" value="Enviar">`;
    
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
                        <input type="button" id="ingresoForm"value="Enviar">`;
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