console.log("Start in the Game Scene ");

const gameSize = {
	width: 960,
	height: 500,
}

const defaultGravitySpeed = 300;

/**
 * A base GameScene class for defining the catch words game.
 */
class GameScene extends Phaser.Scene {
	constructor() {
		super("GameScene");
		this.player;
		this.playerSpeed;
		this.fallingSprite;
		// The cursor field defining how to move player object.
		this.cursor;
		this.score;
		this.remainingTime;
		this.onCollide = this.onCollide.bind(this);
	}

	// Preloading data needed for initial rendering.
	preload() {
		this.load.image("background", '/static/firstGame/assets/background.jpg');
		this.load.image("tree", '/static/firstGame/assets/tree2.png');
		this.load.image("rock", '/static/firstGame/assets/Rocks.png');
	}

	// Initial stage of creation when the game start.
	create() {
		this.initializeDefaultSettings();

		// Set up button controlling game start.
		document.getElementById('startButton').addEventListener('click', () => {
			console.log('The start button has been clicked');

			this.startTimer();
			this.initializeBackground();
			this.initializeObjects();
			this.initializePlayer();
			this.initializeInteractions();
		});
	}

	update() {
		if (this.remainingTime <= 0) {
			this.scene.stop();
			this.renderFinalScore();
		}

		// Reset functions for falling sprites.
		if (this.fallingSprite && this.fallingSprite.y >= gameSize.height) {
			this.fallingSprite.setY(0);
			this.fallingSprite.setX(this.getRandom(gameSize.width - 1));
		}

		// Update functions for player.
		const {left, right} = this.cursor;

		if (this.player) {
			if (left.isDown) {
				this.player.setVelocityX(-this.playerSpeed);
			} else if (right.isDown) {
				this.player.setVelocityX(this.playerSpeed);
			} else {
				this.player.setVelocityX(0);
			}
		}

		// Rendering text Content for the game.
		document.getElementById('score').textContent = `Score: ${this.score}`;
		document.getElementById('timeRemaining').textContent = `Time Remaining: ${this.remainingTime}`;
	}

	// Callback function when collision happen between player & sprites.
	onCollide() {
		console.log('Enter onCollide');
		console.log('Prev Score: ' + this.score);
		if (this.fallingSprite) {
			this.fallingSprite.setY(0);
			this.fallingSprite.setX(this.getRandom(gameSize.width - 1));
		}
		this.score += 1;
		console.log('Score: ' + this.score);
	}

	startTimer() {
		let timeEvent = this.time.addEvent({
			delay: 1000,
			callback: () => {
				this.remainingTime--;

				if (this.remainingTime <= 0) {
					timeEvent.remove();
				}
			},
			loop: true
		});
	}

	initializeBackground() {
		// Define configs for background.
		this.add.image(0, 0, "background").setOrigin(0, 0);
	}

	initializeObjects() {
		// Define configs for fallingSprite.
		this.fallingSprite = this.physics.add.image(0, 0, "tree").setOrigin(0, 0).setMaxVelocity(0, defaultGravitySpeed);
		this.fallingSprite.displayWidth = 30;
		this.fallingSprite.displayHeight = 30;
	}

	initializePlayer() {
		// Define configs for player.
		this.player = this.physics.add.image(0, gameSize.height, "rock").setOrigin(0, 0);
		this.player.setImmovable(true);
		this.player.body.allowGravity = false;
		this.player.setCollideWorldBounds(true);
		this.player.displayWidth = 50;
		this.player.displayHeight = 50;

		// Default user move speed is 1.5 * defaultGravitySpeed.
		this.playerSpeed = defaultGravitySpeed * 1.5;
		console.log("playerSpeed: " + this.playerSpeed);
	}

	initializeDefaultSettings() {
		this.score = 0;
		this.remainingTime = 10;

		// Define the cursor key.
		this.cursor = this.input.keyboard.createCursorKeys();

		// Display the score board.
		document.getElementById('finalScore').style.display = "none";
		document.getElementById('score').textContent = `Score: ${this.score}`;
		document.getElementById('timeRemaining').textContent = `Time Remaining: ${this.remainingTime}`;
	}
	
	initializeInteractions() {
		this.physics.add.collider(this.player, this.fallingSprite, this.onCollide);
	}

	// Return a random number [0, maxThredhold - 1].
	getRandom(maxThreshold) {
		return Math.floor(Math.random() * maxThreshold);
	}

	renderFinalScore() {
		document.getElementById('finalScore').textContent = `Final Score is: ${this.score}`;
		document.getElementById('finalScore').style.display = "block";
	}
}

// Phaser surface configs for creating game scene. 
const config = {
	type: Phaser.WEBGL,
	width: gameSize.width,
	height: gameSize.height,
	canvas: gameCanvas,
	physics: {
		default: 'arcade',
	    arcade: {
			gravity: { y: defaultGravitySpeed },
	        debug: true
	    }
	},
	scene: [GameScene],
	autoStart: false,
}

const game = new Phaser.Game(config);