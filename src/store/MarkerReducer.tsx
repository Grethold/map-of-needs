export const MARKER_TYPE = "MARKER_TYPE"

export interface Marker {
    id: number;
    kind: string,
    description: string;
    telephone: number;
    lat: number;
    lng: number;
}

export interface MarkerAction {
    type: string;
    payload: Marker | null;
}

export const MarkerReducer = (state: Marker | null = null, action : MarkerAction) : Marker | null => {
    switch(action.type) {
        case MARKER_TYPE:
            return action.payload
        default:
            return state
    }
}