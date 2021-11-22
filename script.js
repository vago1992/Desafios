function registro(){
    let registrar= document.getElementById("registroUsuario");
    registrar.innerHTML=`<input type="text" name="texto" value="" placeholder="Nombre de Usuario">
                        <input type="text" name="texto" value="" placeholder="Contraseña">
                        <input type="button" name="enviar" value="Enviar" onclick="guardarDatos();">`;
}
function ingreso(){
    let registrar= document.getElementById("ingresoUsuario");
    registrar.innerHTML=`<input type="text" name="texto" value="" placeholder="Nombre de Usuario">
                        <input type="text" name="texto" value="" placeholder="Contraseña">
                        <input type="button" name="enviar" value="Enviar" onclick="validar();">`;
}
function validar(){
    let Usuario=document.getElementsByName('texto')[0].value;
    let Pass=document.getElementsByName('texto')[1].value;
    let usuarioJSON=JSON.stringify(Usuario);
    let passJSON=JSON.stringify(Pass);

    for (let i=0;i<sessionStorage.length;i++ ){
        let usuarioReg=sessionStorage.key(i);
        let passReg=sessionStorage.getItem(usuarioReg);

        if (usuarioJSON==usuarioReg && passJSON==passReg){
            return alert ("Bienvenido");
            
        }
    }
    alert ("Usuario o contraseña equivocada vuelva a intentarlo");
}

function guardarDatos(){

    let nuevoUsuario=document.getElementsByName('texto')[0].value;
    let nuevaPass=document.getElementsByName('texto')[1].value;
    let nuevoUsuarioJSON=JSON.stringify(nuevoUsuario);
    let nuevaPassJSON=JSON.stringify(nuevaPass);
    sessionStorage.setItem(nuevoUsuarioJSON, nuevaPassJSON);
}



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