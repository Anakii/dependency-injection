import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { LoggerInteceptor } from "./logger.inteceptor";
import { LoggerConfig, LOGGER_CONFIG } from "./utils";

@NgModule({
    declarations: [],
    exports: [],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoggerInteceptor, multi: true },
    ]
})

export class LoggerModule {
    static init(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LOGGER_CONFIG, useValue: config, multi: true }
            ]
        }
    }
}