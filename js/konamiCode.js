

var allowedKeys =
{
37:"left",
38:"up",
39:"right",
40:"down",
65:"a",
66:"b"
};



var konamiCode = [
"up",
"up",
"down",
"down",
"left",
"right",
"left",
"right",
"b",
"a"
] ;

var konamiCodePosition=0;

document.addEventListener('keydown',function(e){
	console.log(e);
var key = allowedKeys[e.keyCode];

var reqKey = konamiCode[konamiCodePosition];
console.log("tecla pulsada "+key);
console.log("Tecla que pedimos "+ reqKey);
if (key == reqKey)
						{
						konamiCodePosition++;
						console.log("PosicionActual konami code "+konamiCodePosition);
						console.log("longitud konami code "+konamiCode.length);
						if (konamiCodePosition == konamiCode.length){
						activateCheats();
						konamiCodePosition=0;

						}

}else{
console.log("ERROR konami code "+konamiCodePosition);
konamiCodePosition =0 ;
	  }
												}
						);

function activateCheats(){
var foto = document.createElement("img");
foto.src="./images/emoticono.png";
foto.id="smyly"
//foto.setAttribute("src","../images/emoticono.jpg");
//elem.setAttribute("height", "768");
//elem.setAttribute("width", "1024");
document.getElementById("Konami").appendChild(foto)


//Como remove no es una funcion que suela ser de cola hay que ponerla 
//dentro para que funcione el delay
$("foto").addClass=".rotated";
$("#smyly").delay(15000).queue(function(){$(this).remove();
});
//alert ("WebD desarroyada por Samuel Herrera");
}