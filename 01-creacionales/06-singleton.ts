
/**
 * ! Singleton:
 * It is a creational design pattern that ensures a class
 * has a single instance and provides a global access point to it.
 *
 * * It is useful when you need to control access to a single instance
 * * of a class, such as a database object or a configuration object.
 *
 * https://refactoring.guru/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


// Create class DragonBalls

class DragonBalls {

    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('====================================');
            console.log('%cNew instance of DragonBalls created', COLORS.green);
            console.log('====================================');

        }
        return DragonBalls.instance;
    }

    collectBall(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log('====================================');
            console.log(`%cBall collected! Total: ${this.ballsCollected}`, COLORS.yellow);
            console.log('====================================');
        } else {
            console.log('====================================');
            console.log('%cAll 7 balls collected! You can summon Shenron!', COLORS.pink);
            console.log('====================================');
        }


    }

    summponShenron(): void {
        if (this.ballsCollected === 7) {
            console.log('====================================');
            console.log('%cSummoning Shenron...', COLORS.red);
            console.log('====================================');
            this.ballsCollected = 0; // Reset the count after summoning
        } else {
            console.log('====================================');
            console.log(`%cYou need ${7 - this.ballsCollected} more balls to summon Shenron.`, COLORS.blue);
            console.log('====================================');
        }
    }
}


function main(): void {
    const goku = DragonBalls.getInstance();
    goku.collectBall();
    goku.collectBall();
    goku.collectBall();
    goku.summponShenron();

    const vegeta = DragonBalls.getInstance();
    vegeta.collectBall();
    vegeta.collectBall();
    vegeta.collectBall();
    vegeta.collectBall();
    vegeta.summponShenron();

    // Check if both instances are the same
    console.log('Are both instances the same?', goku === vegeta ? 'Yes' : 'No');
}

main();