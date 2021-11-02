class Game {

constructor() {
	this.background = new Background ();
	this.backgroundImages = [];
	this.player = new Player()
	}

preload() {
	this.playerImage = loadImage('./Assets/kisspng-european-hedgehog-u0418u0441u0442u043eu0440u0438u0-cartoon-hedgehog-5a7ac1116d4006.8550967915179942574475.png');
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
}
}
