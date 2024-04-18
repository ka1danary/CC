import { deviceType, packageType } from "./IModel";

export interface IRequest {
    id : number | undefined,
    deviceType : deviceType | undefined,
    date : Date | undefined,
    time: number | undefined,
    packageType : packageType | undefined,
    place : number | undefined
}