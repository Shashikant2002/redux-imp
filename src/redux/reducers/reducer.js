import { DEC, INC } from "../constance/constance"

const initial = 0

const changeNumber = (state = initial, action) => {
    switch (action.type) {
        case INC:
            return action.payload;

        case DEC:
            return action.payload;

        default:
            return state
    }
}

export default changeNumber;