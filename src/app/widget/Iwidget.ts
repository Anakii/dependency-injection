import { InjectionToken } from "@angular/core";

export interface Iwidget {
    refresh: () => void,
    compName:string
}
export const WIDGET: InjectionToken<Iwidget> = new InjectionToken<Iwidget>('widget token')