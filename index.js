const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576; 


const gravity = 0.5;
const player = new Player();


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
}

animate();



