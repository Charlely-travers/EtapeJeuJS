const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576; 


const gravity = 0.5; //puissance de la gravitée
const player = new Player();


const keys = {
    right: {
        pressed:false
    },
    left: {
        pressed:false
    }
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();


    if (keys.right.pressed && player.hitbox.position.x<canvas.width-player.hitbox.width) {
        player.velocity.x=5
    }
    else if (keys.left.pressed && player.hitbox.position.x>0+0.01) {
        player.velocity.x=-5
    } 
    else player.velocity.x = 0

}

animate();


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'z':
        case 'ArrowUp':
            if (player.velocity.y === 0) //verification que le joueur soit au sol
                player.velocity.y -= 15; //puissance de saut
            break
    
        case 'd':
        case 'ArrowRight':
                keys.right.pressed=true;
            break
    
        case 'q':
        case 'ArrowLeft':
                keys.left.pressed=true;
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
    
        case 'd':
        case 'ArrowRight':
                keys.right.pressed=false;
            break
    
        case 'q':
        case 'ArrowLeft':
                keys.left.pressed=false;
            break
    }
})


