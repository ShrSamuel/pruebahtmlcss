var myGamePiece;
var myGameArea =
                 {
                    canvas :
                        document.createElement("canvas"),
                        start : function()
                        {
                            this.canvas.width = 200;
                            this.canvas.height = 480;
                            this.context = this.canvas.getContext("2d");
                            document.getElementById("zonaJuego").insertBefore(this.canvas,
                                                           document.getElementById("zonaJuego").childNodes[0]);
                            this.frameNo=0;
                            this.interval= setInterval(updateGameArea,20);
                        
                        },
                        clear : function(){
                                            this.context.clearRect(0,0,
                                                                    this.canvas.width,
                                                                    this.canvas.height);
                                          },
                        stop: function(){
                            clearInterval(this.interval);
                        }
                      
                }   





function component(width,height,color,x,y,type)
{
    this.type=type;
    if (type=="image")
                    {
                        this.image=new Image();
                        this.image.src=color;
                    }
    this.width=width;
    this.height=height;
    this.speedX=0;
    this.speedY=0;
    this.x=x;
    this.y=y;
    this.update = function()
                            {
                                ctx=myGameArea.context;
                                if (type == "image")
                                {
                                    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
                                }else
                                {
                                    ctx.fillStyle=color;
                                    ctx.fillRect(this.x,this.y,this.width,this.height)
                                }
                            }
    this.newPos=function()
                        {
                            this.x += this.speedX;
                            this.y += this.speedY;
                        }
}

function updateGameArea()
{
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY = -5; 
}

function movedown() {
    myGamePiece.speedY = 5; 
}

function moveleft() {
    myGamePiece.speedX = -5; 
}

function moveright() {
    myGamePiece.speedX = 5; 
}
function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


/*function updateGameArea()
{
    var x, height ,gap , minHeigth , maxHeigth, minGap, maxGap;
    for (i=0;)
}
*/


function imprimir()
			{
				window.print();
			}


function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "./js/gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}		