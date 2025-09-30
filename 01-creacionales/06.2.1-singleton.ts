/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


// import { COLORS } from '../helpers/colors.ts';
// Update the path below to the correct relative path to colors.ts
import { COLORS } from "../helpers/colors.ts";
import { configManager } from "./singleton/config-manager.ts";
// O crea el archivo en la ruta esperada si no existe.

configManager.setConfig('host', 'localhost');
configManager.setConfig('port', '5432');
configManager.getConfig('host');
configManager.getAllConfigs();

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Static method to get the unique instance
  public static getInstance(): DatabaseConnection {
    // Implementa el patrón Singleton
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('====================================');
      console.log('%cNueva instancia de DatabaseConnection creada', COLORS.green);
      console.log('====================================');
    }
    return DatabaseConnection.instance;
  }

  // Method to connect to the database
  public connect(): void {
    // Si no está conectado, muestra mensaje de conexión
    if (!this.connected) {
      this.connected = true;
      console.log('====================================');
      console.log('%cConectado a la base de datos', COLORS.yellow);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('%cYa estás conectado a la base de datos', COLORS.blue);
      console.log('====================================');
    }
  }

  // Method to disconnect from the database
  public disconnect(): void {
    // Desconecta y muestra mensaje de desconexión
    if (this.connected) {
      this.connected = false;
      console.log('====================================');
      console.log('%cDesconectado de la base de datos', COLORS.red);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('%cNo hay una conexión activa para desconectar', COLORS.pink);
      console.log('====================================');
    }
  }
}

// Usage example
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();

  const db2 = DatabaseConnection.getInstance();
  db2.connect();

  console.log('====================================');
  console.log('%c¿db1 y db2 son la misma instancia?', COLORS.green);
  console.log(db1 === db2); // true
  console.log('====================================');

  db1.disconnect();
  db2.disconnect();
}

main();