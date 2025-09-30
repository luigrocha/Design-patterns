import { Logger } from '@deno-library/logger';


interface ILoggerAdapter {
  
    file:string;
    writeLog(message: string): void;
    writeError(message: string): void;
    writeWarn(message: string): void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
    public file: string;
    private logger = new Logger();

    constructor(
        file: string
    ) {
        this.file = file;
    }

    writeLog(message: string): void {
        this.logger.info(`[${this.file}] ${message}`);
    }
    writeError(message: string): void {
        this.logger.error(`[${this.file}] ${message}`);
    }
    writeWarn(message: string): void {
        this.logger.warn(`[${this.file}] ${message}`);
    }

}