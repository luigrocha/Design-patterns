/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { LocalLogger } from "./adapter-files/local-logger.ts";

const logger = new LocalLogger('01-adapter.ts');

logger.writeLog('Iniciando el patrón Adapter');
logger.writeLog('Creando instancias de los adaptadores de pago');
logger.writeWarn('Este es un mensaje de advertencia');
logger.writeError('Este es un mensaje de error');