<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "http://localhost"; $usuario = "root"; $contraseña = "root"; $nombreBaseDatos = "test";
$conexionBD = new mysqli($servidor, $usuario, $contraseña, $nombreBaseDatos);
