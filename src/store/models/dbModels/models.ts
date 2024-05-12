
export type device_type = "PC" | "PS" | "VR"
export type status_type = "occupied" | "free" 
export type package_type = 1 | 2 | 3

export interface USER {
    id_user : number,
    user_name : string,
    user_date : string
}

export interface BALANCE {
    id_balance : number,
    id_user : number,
    balance_amount : number 
}

export interface SESSION {
    id_session : number,
    id_user : number,
    id_account : number,
    id_workstation : number, 
    id_s_status : number,
    session_date1 : Date,
    session_date2 : Date
}

export interface STATION {
    id_station : number,
    id_workstation : number,
    station_key : string
}

export interface S_STATUS {
    id_s_status : number,
    name_s_status : string
}

export interface WORKSTATION {
    id_workstation : number,
    id_ws_type : number,
    id_ws_status : number
}

export interface WS_TYPE {
    id_ws_type : number,
    ws_type_name : device_type
}

export interface WS_STATUS {
    id_ws_status : number,
    ws_status_name : status_type
}

export interface USER_REQUEST {
    id_user_request : number,
    id_user : number,
    device_type : device_type,
    start_date_and_time : Date,
    end_date_and_time : Date,
    id_workstation : number
}
