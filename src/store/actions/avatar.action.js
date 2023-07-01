import * as FileSystem from "expo-file-system";

export const ADD_AVATAR = 'ADD_AVATAR';

export const addAvatar = (photo) => {
    return async (dispatch) => {
        try {
            const fileName = photo.split('/').pop();
            const newPath = FileSystem.documentDirectory + fileName;

            await FileSystem.moveAsync({
                from: photo,
                to: newPath
            });

            dispatch({
                type: ADD_AVATAR,
                payload: newPath
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const DELETE_AVATAR = 'DELETE_AVATAR';

export const deleteAvatar = () => {
    return async (dispatch, getState) => {
        const { avatar } = getState().avatar;

        try {
            await FileSystem.deleteAsync(avatar);
            dispatch({
                type: DELETE_AVATAR
            });
        } catch (error) {
            console.log(error);
        }
    };
};