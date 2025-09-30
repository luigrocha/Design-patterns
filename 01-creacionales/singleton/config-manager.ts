//create Class ConfigManager with singleton pattern
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

// Update the import path if colors.ts is located elsewhere, for example:
import { COLORS } from "../../helpers/colors.ts";
// Or create the file at the expected path if it does not exist.

class ConfigManager {

    private config: Record<string, string> = {};

    public setConfig(key: string, value: string): void {
        this.config[key] = value;
        console.log('====================================');
        console.log(`%cConfig set: ${key} = ${value}`, COLORS.yellow);
        console.log('====================================');
    }

    public getConfig(key: string): string | null {
        console.log('====================================');
        console.log(`%cConfig get: ${key} = ${this.config[key]}`, COLORS.blue);
        console.log('====================================');
        return this.config[key];
    }

    public getAllConfigs(): Record<string, string> {
        console.log('====================================');
        console.log(`%cAll configs: ${JSON.stringify(this.config)}`, COLORS.green);
        console.log('====================================');
        return {...this.config}
    }

}

export const configManager = new ConfigManager();