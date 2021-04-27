let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let draw1 =
    {
        a: 0,
        b: 650,
        w: 150,
        h: 30
    }
let y = 10
let x = 10
let speedY = 5
let speedX = 5

function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill()
    ctx.closePath()

    if (x > 570 || x < 0) {
        speedX = -speedX
    }
    x += speedX;
    if (y<0){
        speedY=-speedY
    }
    if (y>700) {
        alert("game over")
    }
    y += speedY
    if (draw1.a + draw1.w > 450) {
        draw1.a = 450
    }
    if (x +20> draw1.a && x <= draw1.a + draw1.w && y >= 680-draw1.h) {
        speedY = -speedY
    }
}

function draw2() {
    ctx.beginPath()
    ctx.rect(draw1.a, draw1.b, draw1.w, draw1.h)
    ctx.fill()
    ctx.closePath()
}

function draw3() {
    ctx.beginPath()
    ctx.moveTo(600, 0);
    ctx.lineTo(600, 680);
    ctx.lineWidth = 10
    ctx.fillStyle="#3fc41c"
    ctx.stroke();
    ctx.closePath()
}

function draw4() {
    let c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Score:", 620, 50);
}

function draw5() {
    let c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Lever:", 620, 80);
}

function animatetion() {

    ctx.clearRect(0, 0, 800, 700)
    draw()
    draw2()
    draw3()
    draw4()
    draw5()
    requestAnimationFrame(animatetion)

}

animatetion()

window.addEventListener("mousemove", function (e) {
    draw1.a = e.clientX
})

