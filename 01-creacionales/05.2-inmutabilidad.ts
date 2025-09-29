/**
 * ! Immutability with Copy
 * Immutability is a good practice, but not always possible.
 * In these cases, you can create a copy of the object and modify the copy.
 *
 * This is useful for keeping a history of states in interactive applications.
 */

/**
 1. Complete the copyWith method in the Player class to allow creating a copy with changes in name, score, or level.
 2. Use the client code to test the functionality of copyWith by making changes to the player's score, level, and name.
 */

import { COLORS } from '../helpers/colors.ts';

// Immutable Player class
class Player {
  readonly name: string;
  readonly score: number;
  readonly level: number;

  constructor(name: string, score: number, level: number) {
    this.name = name;
    this.score = score;
    this.level = level;
  }

  // Creates a copy of the player with optional changes
  copyWith({ name, score, level }: Partial<Player>): Player {
    return new Player(
      name ?? this.name,
      score ?? this.score,
      level ?? this.level,
    );
  }

  // Displays the player's state in the console
  displayState(): void {
    console.log(`\n%cPlayer: ${this.name}`, COLORS.green);
    console.log(`%cScore: ${this.score}`, COLORS.yellow);
    console.log(`%cLevel: ${this.level}`, COLORS.blue);
  }
}

// Client code to test Player immutability
function main() {
  // Create initial player
  let player = new Player('Carlos', 0, 1);
  console.log('Initial state:');
  player.displayState();

  // Increase score
  player = player.copyWith({ score: 10 });
  console.log('\nAfter increasing score:');
  player.displayState();

  // Level up
  player = player.copyWith({ level: 2 });
  console.log('\nAfter leveling up:');
  player.displayState();

  // Change player name
  player = player.copyWith({ name: 'Carlos Pro' });
  console.log('\nAfter changing name:');
  player.displayState();
}

main();
