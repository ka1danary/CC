
export interface IRequest {
    id : number,
    deviceType : "PC" | "PS" | "VR",
    date : Date,
    time: number,
    packageType : 1 | 2  | 3,
    place : number
}