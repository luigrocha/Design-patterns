
/**
 * ! Singleton:
 * It is a creational design pattern that ensures a class
 * has a single instance and provides a global access point to it.
 *
 * * It is useful when you need to control access to a single instance
 * * of a class, such as a database object or a configuration object.
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Static method to get the unique instance
  public static getInstance(): DatabaseConnection {
  // Complete: implement the Singleton pattern
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('====================================');
      console.log('%cNew instance of DatabaseConnection created', COLORS.green);
      console.log('====================================');
    }
    return DatabaseConnection.instance;
  }

  // Method to connect to the database
  public connect(): void {
  // Complete: if not connected, show connection message
    if (!this.connected) {
      this.connected = true;
      console.log('====================================');
      console.log('%cConnected to the database', COLORS.yellow);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('%cAlready connected to the database', COLORS.blue);
      console.log('====================================');
    }
  }

  // Method to disconnect from the database
  public disconnect(): void {
  // Complete: disconnect and show disconnection message
    if (this.connected) {
      this.connected = false;
      console.log('====================================');
      console.log('%cDisconnected from the database', COLORS.red);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('%cNo active connection to disconnect', COLORS.pink);
      console.log('====================================');
    }
  }
}

// Tests
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Should connect to the database

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Should show that there is already an active connection

  console.log('Are they equal:', db1 === db2); // Should show true

  db1.disconnect(); // Should close the connection

  db2.connect(); // Now should connect again, since the previous one was closed
}

main();
