class Game {

constructor() {
	this.background = new Background ();
	this.backgroundImages = [];
	}

preload() {
	this.backgroundImages = [
		{ src: loadImage('assets/_11_background.png'), x: 0, speed: 0 },
		{ src: loadImage('assets/_10_distant_clouds.png'), x: 0, speed: 1 },
		{ src: loadImage('assets/_09_distant_clouds1.png'), x: 0, speed: 1 },
		{ src: loadImage('assets/_08_clouds.png'), x: 0, speed: 2 },
		{ src: loadImage('assets/_07_huge_clouds.png'), x: 0, speed: 2 },
		{ src: loadImage('assets/_06_hill2.png'), x: 0, speed: 3 },
		{ src: loadImage('assets/_05_hill1.png'), x: 0, speed: 4 },
		{ src: loadImage('assets/_04_bushes.png'), x: 0, speed: 4 },
		{ src: loadImage('assets/_03_distant_trees.png'), x: 0, speed: 5 },
		{ src: loadImage('assets/_02_trees and bushes.png'), x: 0, speed: 6 },
		{ src: loadImage('assets/_01_ground.png'), x: 0, speed: 7 },
	]
}

draw() {
	clear();
	this.background.draw()
}

}