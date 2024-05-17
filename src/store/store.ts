import { combineReducers, configureStore } from "@reduxjs/toolkit"
//import { userReduser } from "./redusers/userReduser"
import { requestAPI, userApi } from "./service/RequestService"
import requestReduser from './redusers/requestSlice'

const rootReduser = combineReducers({
    requestReduser,
    // rtc query
    [requestAPI.reducerPath]: requestAPI.reducer,
    [userApi.reducerPath]: userApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(requestAPI.middleware, userApi.middleware);        }
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
