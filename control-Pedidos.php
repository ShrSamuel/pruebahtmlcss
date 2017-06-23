<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link rel="stylesheet" href="./css/main.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="./js/main.js"></script>
<script src="./js/konamiCode.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


		<!--<script >$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
});</script>-->

<title>PaginaEnGithub</title>


</head>
<body>
 

<nav class="navbar navbar-inverse">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">Pagina Prueba </a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">Principal</a></li>
			<li><a href="control-Pedidos.php">Control de pedidos</a></li>
			<li><a href="#">pagina2</a></li>
			<li><a href="#">pagina3</a></li>
		</ul>
	</div>
</nav>
<div class="row">
		<div class="col-sm-5" >	
		<?php require 'php/conexBD.php';
		
		
		echo $conect;
		
		?>	
		</div>
		<div class="col-sm-2">
		
			
			
		</div>
		<div class="col-sm-5">

			

			
		
		</div>		
</div>

<div class="row">

		<div class="col-sm-1">

		</div>		
		<div class="col-sm-10" >
		</div>
		
		<div class="col-sm-1">
		</div>
</div>
<div class="row">
	<div class=col-sm-4></div>
	<div class=col-sm-4>
	<div class="envoltorio">
		
	</div>
		  
	<div class="envoltorio">
	</div>
	
	<div class="envoltorio">
		  
	</div>
	</div>
	<div id="Konami" class=col-sm-4>
		
	</div>
</div>



<div style="text-align:center;width:480px;">
 </div>
 
</body>
<footer>
  <p></p>
  <p>informacion de Contacto: <a href="mailto:shrsamuelherrera@gmail.com">
  shrsamuelher@gmail.com</a>.</p>
</footer>
</html>