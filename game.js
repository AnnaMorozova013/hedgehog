class Game {

	constructor() {
		this.background = new Background()
		this.backgroundImages = []
		this.player = new Player()
		this.obstacles = []
		this.collections = []
	}

	preload() {

		this.obstacleImage = loadImage('assets/kisspng-mushroom-cartoon-snacks-5acaa7e9d23ae5.2640844415232306978611.png')

		this.collectionImage = loadImage('assets/kisspng-cartoon-illustration-cartoon-mushrooms-5a99dc89e28990.8592031715200329059279.png')

		this.playerImage = loadImage('assets/kisspng-european-hedgehog-u0418u0441u0442u043eu0440u0438u0-cartoon-hedgehog-5a7ac1116d4006.8550967915179942574475.png')

		this.backgroundImages = [
			{ src: loadImage('assets/_11_background.png'), x: 0, speed: 0 },
			{ src: loadImage('assets/_10_distant_clouds.png'), x: 0, speed: 0.3 },
			{ src: loadImage('assets/_09_distant_clouds1.png'), x: 0, speed: 0.7 },
			{ src: loadImage('assets/_08_clouds.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/_07_huge_clouds.png'), x: 0, speed: 1.3 },
			{ src: loadImage('assets/_06_hill2.png'), x: 0, speed: 1.7 },
			{ src: loadImage('assets/_05_hill1.png'), x: 0, speed: 2 },
			{ src: loadImage('assets/_04_bushes.png'), x: 0, speed: 2.3 },
			{ src: loadImage('assets/_03_distant_trees.png'), x: 0, speed: 2.7 },
			{ src: loadImage('assets/_02_trees and bushes.png'), x: 0, speed: 3 },
			{ src: loadImage('assets/_01_ground.png'), x: 0, speed: 3.5 },
		]

	}
	draw() {
		clear()
		this.background.draw()
		this.player.draw()

	if (frameCount % 150 === 0) {
			// push only when they meet the condition to have enough distance from collection
			// use array.every method
			this.obstacles.push(new Obstacle(this.obstacleImage))
		}
		this.obstacles.forEach(function (obstacle, index, array) {
			obstacle.draw()
			if (obstacle.x < 0) {
				array.splice(index, 1)
			}
		})

	if (frameCount % 250 === 0) {
		this.collections.push(new Collection(this.collectionImage))
	}
	this.collections.forEach(function (collection, index, array) {
		collection.draw()
		if (collection.x < 0) {
			array.splice(index, 1)
		}
	})
}
}

