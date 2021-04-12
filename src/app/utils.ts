import { InjectionToken } from "@angular/core"

export interface LoggerConfig {
    appName: string
}
export const loggerConfig: LoggerConfig = {
    appName: "or's App"
}
export const LOGGER_CONFIG: InjectionToken<LoggerConfig> = new InjectionToken<LoggerConfig>('logger config')