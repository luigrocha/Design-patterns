
/**
 * ! Factory Function
 * It is a design pattern that allows us to create objects or functions dynamically
 * that will be used later in the code.
 *
 * * It is useful when we need to create objects or functions dynamically,
 * * that is, at runtime and not at compile time.
 *
 */

// import { COLORS } from '../helpers/colors.ts';
// Update the path below to the correct relative path to colors.ts
import { COLORS } from "../helpers/colors.ts";
// Or create the file in the expected path if it does not exist.
type Languages = 'en' | 'es' | 'fr' | 'de' | 'it';
// Internationalization (i18n)
function createGreeter(greeting: string): (name: string) => void {
  return function (name: string): void {
    const messages = {
      en: `Hi, ${name}!`,
      es: `Hola, ${name}!`,
      fr: `Bonjour, ${name}!`,
      de: `Hallo, ${name}!`,
      it: `Ciao, ${name}!`
    };
    console.log('====================================');
    console.log(`%c${messages[greeting as Languages] || messages['en']}`, COLORS.green);
    console.log('====================================');
  };
}

function main(): void {
  const greetInEnglish = createGreeter('en');
  greetInEnglish('Jhon');

  const greetInSpanish = createGreeter('es');
  greetInSpanish('Juan');

  const greetInFrench = createGreeter('fr');
  greetInFrench('Jean');

  const greetInGerman = createGreeter('de');
  greetInGerman('Hans');

  const greetInItalian = createGreeter('it');
  greetInItalian('Giovanni');
}

main();