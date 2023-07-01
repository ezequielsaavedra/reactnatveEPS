import { ADD_ANIME_FAV, FETCH_ANIME_FAV, REMOVE_ANIME_FAV } from "../actions/fav.action";

const initialState = {
    favAnimes: []
};

const FavReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ANIME_FAV:
            const removeAnime = state.favAnimes.filter(
                anime => anime.id !== action.animeId
            );
            return { ...state, favAnimes: removeAnime };
        case ADD_ANIME_FAV:
            const indexItem = state.favAnimes.findIndex(
                anime => anime.id === action.anime.id
            );
            if (indexItem === -1) {
                const anime = { ...action.anime };
                const updateFav = [...state.favAnimes, anime];
                return { ...state, favAnimes: updateFav };
            } else {
                return state;
            }
        case FETCH_ANIME_FAV:
            return {
                ...state,
                favAnimes: action.animes,
            };
        default:
            return state;
    }
};

export default FavReducer;