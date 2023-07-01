import { ADD_AVATAR, DELETE_AVATAR } from "../actions/avatar.action";

const initialState = {
    avatar: null
};

const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AVATAR:
            return {
                ...state,
                avatar: action.payload
            };
        case DELETE_AVATAR:
            return {
                ...state,
                avatar: null
            };
        default:
            return state;
    }
};

export default avatarReducer;