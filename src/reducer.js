import { NEW_CITY } from "../action";
const initialState = {
    city:'Helsinki',
}
export default function newCity(state=initialState, action){
    switch(action.type){
        case NEW_CITY :
            return {
                ...state, city: action.payload
            };break;
            
        default: return state;
    }
}