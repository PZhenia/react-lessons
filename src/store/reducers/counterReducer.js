import { INCREMENT, DECREMENT} from "../actions/actionTypes";

const initialState = JSON.parse(localStorage.getItem("counter")) || 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;