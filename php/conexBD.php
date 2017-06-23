<?phph
/*
###################################################
							variables
#####################################################
*/

$conect=conexion();



/*
###################################################
					FUNCIONES
#####################################################
*/
function conexion(){
$conexion = mysqli_connect("localhost","id1965636_shr","heat1021","id1965636_productos");

if(!$conexion){
	echo("NO SE PUDO CONECTAR");
}
echo ("Conexion Realizada");

mysqli_close($conexion);
};
?>