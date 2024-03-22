import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageReduser from './reducers/messages'

const  rootReduser = combineReducers({
    messageReduser
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
