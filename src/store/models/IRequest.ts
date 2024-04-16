
export interface IRequest {
    id : number,
    deviceType : "PC" | "PS" | "VR",
    date : Date,
    package : 1 | 2  | 3,
    place : number
}