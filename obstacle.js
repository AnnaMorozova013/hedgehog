class Obstacle {
    constructor(image) {
        this.width = 130
        this.height = 130
        this.x = 2000 
        this.y = Math.floor(Math.random() * (850 - 690 + 1) + 690)
        this.image = image
    } 
    draw() {
		this.x -= 5
		image(this.image, this.x, this.y, this.width, this.height)
	}

}

class Collection {

constructor(image) {
        this.width = 130
        this.height = 130
        this.x = 2000 
        this.y = Math.floor(Math.random() * (850 - 690 + 1) + 690)
        this.image = image
    } 
    draw() {
		this.x -= 5
		image(this.image, this.x, this.y, this.width, this.height)
	}
}



