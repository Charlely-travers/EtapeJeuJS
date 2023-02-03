class Sprite {
    constructor(url) {
        this.image = new Image();
        this.image.src = url;
        this.image.onload = () => {
            console.log("Image chargée");
        };
    }
}