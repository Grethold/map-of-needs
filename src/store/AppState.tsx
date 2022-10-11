import { combineReducers } from "redux";
import { CoordReducer } from "./CoordReducer";
import { MarkerReducer } from "./MarkerReducer";


export const rootReducer = combineReducers ({
    coord: CoordReducer,
    marker: MarkerReducer
})

export type AppState = ReturnType<typeof rootReducer>;