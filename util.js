let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

let x = 200;
let y = 200;
let w = 35;
let h = 20;
let speed = 0;
let aspeed = 0.5;
let maxspeed = 20;
let turnspeed = 2;
let angle = 0;

let pHeight = 35;
let pWidth = 20;

//Move Variables
let upMove = false;
let downMove = false;
let leftTurn = false
let rightTurn = false;
let cVar = "red";




//Movement Functions I stole from albert. 
document.addEventListener("keydown", MovementHandler)
document.addEventListener("keyup", MoveStopHandler)

function MovementHandler(event) {

    if (event.code === "ShiftLeft") {
        sprint = true;
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
        rightTurn = true;
    } else if (event.code === "ArrowUp" || event.code === "KeyW") {
        upMove = true;
    } else if (event.code === "ArrowDown" || event.code === "KeyS") {
        downMove = true;
    } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
        leftTurn = true;
    }
}

function MoveStopHandler(event) {

    if (event.code === "ShiftLeft") {
        sprint = false;
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
        rightTurn = false;
    } else if (event.code === "ArrowUp" || event.code === "KeyW") {
        upMove = false;
    } else if (event.code === "ArrowDown" || event.code === "KeyS") {
        downMove = false;
    } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
        leftTurn = false;

    }
}


requestAnimationFrame(draw);

function draw() {

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    
    let AngleRad = angle * (Math.PI / 180);
    if(-maxspeed < speed && speed < maxspeed){
        // x and y cos and sin. Multiply by speed. Get angles into Radians
        x += Math.cos(AngleRad) * speed;
        y += Math.sin(AngleRad) * speed;
    }else{
        x += Math.cos(AngleRad) * speed;
        y += Math.sin(AngleRad) * speed;
        if(speed > 0){
            speed = maxspeed
        }else{
            speed = -maxspeed
        }
    }
    //Movement Handler
    if (upMove) {
        speed += aspeed
    } else {
        if (speed > 0) {
            speed -= aspeed
        }
    }
    if (downMove) {
        speed -= aspeed
    } else {
        if (speed < 0) {
            speed += aspeed
        }
    }
    if (leftTurn) {
        angle -= turnspeed 
    }
    if (rightTurn) {
        angle += turnspeed 
    }
    if(y > cnv.height ){
        y = cnv.height - cnv.height
    }else if( y < cnv.height - cnv.height){
        y = cnv.height 
    }else if(x < cnv.width - cnv.width){
        x = cnv.width
    }else if(x > cnv.width){
        x = cnv.width - cnv.width
    }

    ctx.save();
    ctx.translate(x + w/2 , y + h/2)
    ctx.rotate(angle * Math.PI / 180);
    ctx.fillStyle = cVar;
    ctx.fillRect(-w/2, -h/2, w, h);
    ctx.restore();

    console.log(x,y)
    
    class parkSpot {
        constructor(height, width) {
            this.height = pHeight;
            this.width = pWidth;
            
        }
    }


    if(x>= 200 && x + w<= 400 && y>=200 && y+h<=400){
        //console.log("UR BUM KID")

    }

    requestAnimationFrame(draw)

}