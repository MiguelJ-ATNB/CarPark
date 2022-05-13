let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

let x = 200;
let y = 200;
let w = 20;
let h = 35;
let speed = 0;
let aspeed = 0.5;
//Move Variables
let upMove = false;
let downMove = false;
let leftTurn = false


let cnvRect = cnv.getBoundingClientRect();
//Movement Functions I stole from albert. 
document.addEventListener("keydown", MovementHandler)
document.addEventListener("keyup", MoveStopHandler)

function MovementHandler(event) {

    if (event.code === "ShiftLeft") {
        sprint = true;
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
        rightMove = true;
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
        rightMove = false;
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
    y += speed

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
        ctx.save();
        ctx.translate(x, y)
        ctx.rotate(160 * Math.PI / 180);
        ctx.restore();

    }


    console.log(x, y)


    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);

    requestAnimationFrame(draw)
}