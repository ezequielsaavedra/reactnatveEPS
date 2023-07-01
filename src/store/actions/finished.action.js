import { deleteAnimeFini, fetchAnimeFini, insertAnimeFini } from "../../db";

export const FETCH_ANIME_FINISHED = "FETCH_ANIME_FINISHED";

export const ADD_ANIME_FINISHED = "ADD_ANIME_FINISHED"
export const REMOVE_ANIME_FINISHED = "REMOVE_ANIME_FINISHED"

export const add_anime_finished = anime => {
    return async dispatch => {
        try {
            const result = await insertAnimeFini(
                anime.id, anime.name, anime.img, anime.date, anime.duracion, anime.categoria, anime.descripcion, anime.rating
            );
            console.log(result);
            dispatch({
                type: ADD_ANIME_FINISHED,
                anime,
            });
        } catch (error) {
            console.error('Failed to add finished anime:', error);
        }
    };
};

export const remove_anime_finished = (animeId) => {
    return async (dispatch) => {
        try {
            const result = await deleteAnimeFini(animeId);
            console.log(result);
            dispatch({
                type: REMOVE_ANIME_FINISHED,
                animeId,
            });
        } catch (error) {
            console.error('Failed to remove anime:', error);
        }
    };
};

export const fetch_anime_finished = () => {
    return async dispatch => {
        try {
            const result = await fetchAnimeFini(); 
            console.log(result);
            dispatch({
                type: FETCH_ANIME_FINISHED,
                animeFinished: result.rows._array,
            });
        } catch (error) {
            console.error('Failed to fetch finished anime:', error);
        }
    };
};