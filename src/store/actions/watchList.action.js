import { deleteAnimeWatch, fetchAnimeWatch, insertAnimeWacth } from "../../db"

export const ADD_ANIME_WATCHLIST = "ADD_ANIME_WATCHLIST"
export const REMOVE_ANIME_WATCHLIST = "REMOVE_ANIME_WATCHLIST"
export const FETCH_ANIME_WATCH = "FETCH_ANIME_WATCH";

export const add_anime_watchList = anime => {
    return async dispatch => {
        try {
            const result = await insertAnimeWacth(
                anime.id, anime.name, anime.img, anime.date, anime.duracion, anime.categoria, anime.descripcion, anime.rating
            );
            console.log(result);
            dispatch({
                type: ADD_ANIME_WATCHLIST,
                anime,
            });
        } catch (error) {
            console.error('Failed to add anime to watchlist:', error);
        }
    };
};

export const remove_anime_watchList = (animeId) => {
    return async (dispatch) => {
        try {
            const result = await deleteAnimeWatch(animeId);
            console.log(result);
            dispatch({
                type: REMOVE_ANIME_WATCHLIST,
                animeId,
            });
        } catch (error) {
            console.error('Failed to remove anime:', error);
        }
    };
};

export const fetch_anime_watch = () => {
    return async dispatch => {
        try {
            const result = await fetchAnimeWatch();
            console.log(result);
            dispatch({
                type: FETCH_ANIME_WATCH,
                animeWatch: result.rows._array,
            });
        } catch (error) {
            console.error('Failed to fetch watch anime:', error);
        }
    };
};