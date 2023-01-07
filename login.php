<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

//$usuario = usuario;
//$password = password;
include "models/conexion.php";
include "controlador/controlador_login.php";


?>
 
 <form action="javascript:void(0);" method="post" onsubmit="">                
   <div class="mb-3">
     <label for="" class="form-label">Nombre</label>
     <input type="text" class="form-control" required="" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Usuario">
   </div>
   <div class="mb-3">
     <label for="password" class="form-label">contraseña</label>
     <input type="password" required="" class="form-control" name="password" id="password" aria-describedby="emailHelpId" placeholder="Contraseña">
   </div>
   <button type="submit" class="btn btn-success">Iniciar Session</button>
</form>

</body>
</html>
