import { ADD_ANIME_WATCHLIST, REMOVE_ANIME_WATCHLIST } from "../actions/watchList.action";

const initialState = {
    watchListAnimes: [],
};

const WatchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ANIME_WATCHLIST:
            const removeAnime = [...state.watchListAnimes].filter(
                anime => anime.id !== action.animeId
            );
            return { ...state, watchListAnimes: removeAnime};
        case ADD_ANIME_WATCHLIST:
            const indexItem = state.watchListAnimes.findIndex(
                anime => anime.id === action.anime.id
            );
            if (indexItem === -1) {
                const anime = { ...action.anime};
                const updateWatchList = [...state.watchListAnimes, anime];
                return { ...state, watchListAnimes: updateWatchList};
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default WatchListReducer;