class Player {

    constructor() {
		this.width = 350
		this.height = 350
		this.x = 250
		this.y = 650
		this.velocity = 0
		this.gravity = 1
	}

	draw() {
		this.velocity += this.gravity
		this.y += this.velocity
		if (this.y >= 650) {
			this.y = 650
		}
			
		image(game.playerImage, this.x, this.y, this.height, this.width)
	}
	jump() {
		this.velocity = - 15 
	}
}