import { ADD_AVATAR } from "../actions/avatar.action";

const initialState = {
    avatar: null
};

const AvatarReducer = (state = initialState, action) => {
    if (action.type === ADD_AVATAR) {
        const avatar = { ...action.avatar };
        return {  ...state, avatar: avatar };
    } else {
        return state;
    }
};

export default AvatarReducer;