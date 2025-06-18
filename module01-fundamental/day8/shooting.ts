class Player {
  health: number = 100;
  power: number = 10;
  constructor(public name: string = "Guest") {}

  damage(power: number): void {
    this.health = this.health - power;
  }
  useItem(item: { health: number; power: number }): void {
    this.health = this.health + item.health;
    this.power = this.power + item.power;
  }
  showStatus(): string {
    return `${this.name} (Health: ${this.health}, Power: ${this.power})`;
  }
}

class ShootingGame extends Player {
  constructor(private player1: {} = {}, private player2: {} = {}) {
    super();
    this.player1 = { name: this.name, health: this.health, power: this.power };
    this.player2 = { name: this.name, health: this.health, power: this.power };
  }

  getRandomItem() {
    const rand = Math.floor(Math.random() * 10) + 1;
    return {
      health: rand,
      power: rand,
    };
  }
}
const player1 = new Player("Player1");
const player2 = new Player("Player2");
const shootingGame = new ShootingGame(player1, player2);
const players = [player1, player2];
let counter = 0;
while (player1.health > 0 && player2.health > 0) {
  counter = counter % 2;
  console.log(players[counter].showStatus());
  const randItem = shootingGame.getRandomItem();
  players[counter].useItem(randItem);
  players[counter].damage(player2.power);
  console.log(players[counter].showStatus());
  counter++;
}

console.log(`WINNER IS ${players[counter].name}!!!`);
