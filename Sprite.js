class Sprite {
    constructor({imageSrc,animations}) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () => {
            this.loaded = true;
        };
        this.loaded = false

        this.animations = animations
        if (this.animations) {
            for (let key in this.animations) { //creer des images pour chaque animations et les associe avec l'image source
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            }
        }
    }
}