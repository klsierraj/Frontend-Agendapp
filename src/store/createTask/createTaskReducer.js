
import {CREATE_TASK_FAILURE, CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS} from './createTaskTypes'

const initialState = {

    loading:false,
    data: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK_REQUEST:
            return {
                ...state,
                loading:true
            };
            case CREATE_TASK_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    data: action.payload
                };
                case CREATE_TASK_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload
                    };
                    default:
                        return state;
    }
}

export default reducer;