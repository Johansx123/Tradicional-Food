<?php

if (!empty($_POST["btningresar"])) {
    echo "boton precionado"; 
        if (!empty($_POST["usuario"]) and !empty($_POST["password"])) { 
    
        $usuario = $_POST["usuario"];
        $password = $_POST["password"];
        echo $usuario . "<br>";
        echo $password . "<br>";
        $sql = $conexion->query("SELECT * FROM usuarios where usuario = '$usuario' and password = '$password'");
        if ($datos = $sql->fetch_object()) {
            header("Location: index.html");
         } else {
             echo "usuario o contraseña incorrecto"; 
        }
                }else{
                    echo "Campos Vacios"; 
                }
    }