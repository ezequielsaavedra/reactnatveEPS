import { ADD_ANIME_FINISHED, FETCH_ANIME_FINISHED, REMOVE_ANIME_FINISHED } from "../actions/finished.action";

const initialState = {
    finishedAnimes: []
};

const FinishedReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ANIME_FINISHED:
            const removeAnime = [...state.finishedAnimes].filter(
                anime => anime.id !== action.animeId
            );
            return { ...state, finishedAnimes: removeAnime };
        case ADD_ANIME_FINISHED:
            const indexItem = state.finishedAnimes.findIndex(
                anime => anime.id === action.anime.id
            );
            if (indexItem === -1) {
                const anime = { ...action.anime };
                const updateFinished = [...state.finishedAnimes, anime];
                return { ...state, finishedAnimes: updateFinished };
            } else {
                return state;
            }
        case FETCH_ANIME_FINISHED:
            return {
                ...state,
                finishedAnimes: action.animeFinished,
            };
        default:
            return state;
    }
};


export default FinishedReducer;