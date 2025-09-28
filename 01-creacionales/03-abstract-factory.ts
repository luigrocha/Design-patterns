/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Burger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class ChickenBurger implements Burger {
    prepare(): void {
        console.log('====================================');
        console.log('%cPreparing Chicken Burger', COLORS.yellow);
    }
}

class BeefBurger implements Burger {
    prepare(): void {
        console.log('====================================');
        console.log('%cPreparing Beef Burger', COLORS.red);
    }
}

class Water implements Drink {
    pour(): void {
        console.log('====================================');
        console.log('%cServing Water', COLORS.blue);
        console.log('====================================');
    }
}

class Soda implements Drink {
    pour(): void {
        console.log('====================================');
        console.log('%cServing Soda', COLORS.pink);
        console.log('====================================');
    }
}

interface RestaurantFactory {
    createBurger(): Burger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
    createBurger(): Burger {
        return new BeefBurger();
    }
    createDrink(): Drink {
        return new Soda();
    }

}

class HealthyRestaurantFactory implements RestaurantFactory {
    createBurger(): Burger {
        return new ChickenBurger();
    }
    createDrink(): Drink {
        return new Water();
    }

}

function main(factory: RestaurantFactory) {

    const burger = factory.createBurger();
    const drink = factory.createDrink();
    burger.prepare();
    drink.pour();
}


console.log('\n%c Regular Order: ', COLORS.green);
main(new FastFoodRestaurantFactory());

console.log('\n%c Healty Order: ', COLORS.green);
main(new HealthyRestaurantFactory());
