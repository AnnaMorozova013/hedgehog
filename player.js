class Player {

    constructor() {
		this.width = 10;
		this.height = 10;
		this.x = 0;
		this.y = 1600 - this.height
	}

	draw() {
		image(game.playerImage, this.x, this.y, this.height, this.width)
	}

}