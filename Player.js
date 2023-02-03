class Player extends Sprite {
    constructor() {
        super("img/king/idle.png");
        this.position = {
            x: 100,
            y: 100,
        };
        this.velocity = {
            x: 0,
            y: 1
        };
        this.width = 100;
        this.height = 100;
        this.frame = 0; // ajout du compteur d'images
        this.numFrames = 11; // nombre total d'images dans le sprite sheet
        this.frameWidth = this.image.width / this.numFrames; // largeur de chaque sprite
        this.frameTime = 0;
        this.frameDuration = 100; //rapidité de l'animation
    }

    draw() {
        let sourceX = this.frame * this.frameWidth;
        let sourceY = 0;
        let sourceWidth = this.frameWidth;
        let sourceHeight = this.image.height;

        let destinationX = this.position.x;
        let destinationY = this.position.y;
        let destinationWidth = this.width;
        let destinationHeight = this.height;

        c.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
    }

    update() {
        this.frameTime += 16; // incrémenter le compteur de temps de 16 millisecondes (60 fps)

        if (this.frameTime >= this.frameDuration) {
            this.frame = (this.frame + 1) % this.numFrames; // incrémentation du compteur d'images
            this.frameTime = 0;
        }

        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) //verification que le joueur soit au dessus de la limite du canvas
            this.velocity.y += gravity;
        else this.velocity.y = 0;
    }
}