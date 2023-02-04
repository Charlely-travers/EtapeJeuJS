const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576; 


const gravity = 0.5; //puissance de la gravitée
const player = new Player({
    imageSrc: "img/king/idle.png",
    animations: {
        idleRight: {
            frameRate: 11,
            frameTime: 0,
            imageSrc: "img/king/idle.png",
        },
         idleLeft: {
            frameRate: 11,
            frameTime: 0,
            imageSrc: "img/king/idleLeft.png",
        },
          runRight: {
            frameRate: 8,
              frameTime: 0,
            imageSrc: "img/king/runRight.png",
        },
          runLeft: {
            frameRate: 8,
              frameTime: 0,
            imageSrc: "img/king/runLeft.png",
        },
    },
});


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
    c.clearRect(0, 0, canvas.width, canvas.height);


    const backgroundImage = new Image();
    backgroundImage.src = "/img/horror.png";
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);


    
    player.update();


    if (keys.right.pressed && player.hitbox.position.x < canvas.width - player.hitbox.width) {
        player.switchSprite('runRight')
        player.velocity.x = 5
         player.lastDirection='right'
    }
    else if (keys.left.pressed && player.hitbox.position.x > 0 + 0.01) {
        player.switchSprite('runLeft')
        player.velocity.x = -5
        player.lastDirection = 'left'
    }
    else {
        player.velocity.x = 0;
        if(player.lastDirection==='left') player.switchSprite('idleLeft')
        else  player.switchSprite('idleRight')
       
    }

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


