import { deleteAnimeFav, fetchAnimeFav, insertAnimeFav } from "../../db";

export const ADD_ANIME_FAV = "ADD_ANIME_FAV"
export const REMOVE_ANIME_FAV = "REMOVE_ANIME_FAV"
export const FETCH_ANIME_FAV = "FETCH_ANIME_FAV";


export const add_anime_fav = anime => {
    return async dispatch => {
        try {
            const result = await insertAnimeFav(
                anime.id, anime.name, anime.img, anime.date, anime.duracion, anime.categoria, anime.descripcion, anime.rating
            );
            console.log(result);
            dispatch({
                type: ADD_ANIME_FAV,
                anime,
            });
        } catch (error) {
            console.error('Failed to add anime favorite:', error);
        }
    };
};

export const remove_anime_fav = (animeId) => {
    return async (dispatch) => {
        try {
            const result = await deleteAnimeFav(animeId);
            console.log(result);
            dispatch({
                type: REMOVE_ANIME_FAV,
                animeId,
            });
        } catch (error) {
            console.error('Failed to remove anime:', error);
        }
    };
};

export const fetch_anime_fav = () => {
    return async (dispatch) => {
        try {
            const result = await fetchAnimeFav();
            console.log(result);
            dispatch({
                type: FETCH_ANIME_FAV,
                animes: result.rows._array,
            });
        } catch (error) {
            console.error("Failed to fetch anime favorites:", error);
        }
    };
};