import { COLORS } from "../helpers/colors.ts";
/**
 * ! Patrón Prototype
 *
 * Es un patrón de diseño creacional que permite copiar objetos existentes sin depender de sus clases.
 * Es útil para duplicar objetos complejos, como documentos, personajes, etc.
 *
 * Referencia: https://refactoring.guru/es/design-patterns/prototype
 */

class Pokemon {
  constructor(
    public name: string,
    public type: string,
    public level: number,
    public attacks: string[],
  ) {
  }

  /**
   * Clona el Pokémon actual.
   * Los ataques se copian en un nuevo arreglo para evitar referencias compartidas.
   */
  clone(): Pokemon {
    return new Pokemon(this.name, this.type, this.level, [...this.attacks]);
  }

  /**
   * Muestra la información del Pokémon en consola.
   */
  displayInfo(): void {
    console.log(
      `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${this.level}\nAtaques: ${
        this.attacks.join(", ")
      }`,
    );
  }
}

// Ejemplo de uso del patrón Prototype:

// 1. Crear un Pokémon base usando la clase Pokemon
const basePokemon = new Pokemon("Charmander", "Fuego", 1, [
  "Llamarada",
  "Arañazo",
]);

// 2. Clonar el Pokémon base y modificar atributos en los clones
const clone1 = basePokemon.clone();
clone1.name = "Charmeleon";
clone1.level = 16;
clone1.attacks.push("Lanzallamas");

const clone2 = basePokemon.clone();
clone2.name = "Charizard";
clone2.level = 36;
clone2.attacks.push("Garra Dragón");

// 3. Mostrar detalles de cada Pokémon
console.log("%cPokémon Charmander:", COLORS.cyan);
basePokemon.displayInfo(); // No debe mostrar "Lanzallamas" ni "Garra Dragón"
console.log("%cPokémon Charmeleon:", COLORS.pink);
clone1.displayInfo();
console.log("%cPokémon Charizard:", COLORS.yellow);
clone2.displayInfo();
