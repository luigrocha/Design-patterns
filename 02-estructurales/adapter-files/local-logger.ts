import { COLORS } from '../../helpers/colors.ts';


export class LocalLogger {
    constructor(
        private file: string
    ) {
    }

    writeLog(message: string): void {
        console.log(`%c[${this.file}] ${message}`, COLORS.blue);
    }
    writeError(message: string): void {
        console.log(`%c[${this.file}] ERROR: ${message}`, COLORS.red);
    }
    writeWarn(message: string): void {
        console.log(`%c[${this.file}] WARN: ${message}`, COLORS.yellow);
    }

}

