class Player{
    constructor() {
        this.position={
            x: 100,
            y:100,
        }
        this.velocity = {
            x: 0,
            y:1
        }
        this.width= 30
        this.height=30
    }

    draw() {
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
         if(this.position.y+this.height+this.velocity.y<=canvas.height) //verification que le joueur soit au dessus de la limite du canvas
            this.velocity.y += gravity
        else this.velocity.y=0
    }

}