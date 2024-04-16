import { combineReducers, configureStore } from "@reduxjs/toolkit"
//import { userReduser } from "./redusers/userReduser"
import { requestAPI } from "./service/RequestService"

const rootReduser = combineReducers({
    //userReduser,
    // rtc query
    [requestAPI.reducerPath]: requestAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(requestAPI.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
