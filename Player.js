class Player extends Sprite {
    constructor({imageSrc,animations}) {
        super({imageSrc,animations});
        this.position = {
            x: 100,
            y: 100,
        };
        this.velocity = {
            x: 0,
            y: 1 
        };
        this.width = 150;
        this.height = 150;


        this.frame = 0; // ajout du compteur d'images
        this.frameRate = 11; // nombre total d'images dans le sprite sheet
        this.frameWidth = this.image.width / this.frameRate; // largeur de chaque sprite
        this.frameTime = 0;
        this.frameDuration = 100; //rapidité de l'animation
       
    }

    draw() {
        if (!this.loaded) return 
        let sourceX = this.frame * this.frameWidth;
        let sourceY = 0;
        let sourceWidth = this.frameWidth;
        let sourceHeight = this.image.height;

        let destinationX = this.position.x;
        let destinationY = this.position.y+23; //+23 triche car je ne sais pas comment faire autrement
        let destinationWidth = this.width;
        let destinationHeight = this.height;

        c.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
    }

    update() {
        this.frameTime += 16; // incrémenter le compteur de temps de 16 millisecondes (60 fps)

        if (this.frameTime >= this.frameDuration) {
            this.frame = (this.frame + 1) % this.frameRate; // incrémentation du compteur d'images
            this.frameTime = 0;
        }

        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) //verification que le joueur soit au dessus de la limite du canvas
            this.velocity.y += gravity;
        else this.velocity.y = 0;
        this.updateHitbox()
    }

    switchSprite(spriteNom) { //change de sprite en fonction de l'endroit ou veux allez le joueur
        if(this.image===this.animations[spriteNom].image) return //vérifie tout d'abord si l'image actuelle est déjà celle de l'animation spécifiée et si c'est le cas, elle ne fait rien
        this.frame = 0;
        this.image = this.animations[spriteNom].image;
        this.frameRate = this.animations[spriteNom].frameRate; //change le frameRate en fonction du framerate definit pour l'animation
        this.frameTime= this.animations[spriteNom].frameTime;
    }

    updateHitbox() { //dans cette méthode il faut positionner la hitbox à la main pour qu'elle corresponde à l'endroit ou est le sprite et à sa taille
          this.hitbox = {
            position: {
                x: this.position.x+50, 
                y:this.position.y+70,
            },
            width: 60,
            height:67,
        }
        c.fillStyle = 'rgba(255, 165, 0, 0.5)';
        c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
     }
}