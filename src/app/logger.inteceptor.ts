import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

import { LOGGER_CONFIG } from "./utils";

import {catchError} from "rxjs/operators"
export interface LoggerConfig {
    appName: string
}

@Injectable()
export class LoggerInteceptor implements HttpInterceptor{
    
    constructor(@Inject(LOGGER_CONFIG) private config:LoggerConfig[]){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`LoggerInteceptor in app : ${this.config[0].appName}`);
        return next.handle(req).pipe(
            catchError((err)=>{
                return throwError("err")
            })
        )
    }

}