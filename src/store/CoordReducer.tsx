export const COORD_TYPE = "COORD_TYPE";

export interface Coord {
    lat: number;
    lng: number;
}

export interface CoordAction {
    type:string;
    payload: Coord | null;
}


export const CoordReducer = (state: Coord | null = null, action: CoordAction): Coord | null => {
    switch(action.type) {
        case COORD_TYPE:
            console.log("reduktor CoordRedcuer", action.payload);
            return action.payload;
        default:
            return state;
    }
};
