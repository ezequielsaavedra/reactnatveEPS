import { ANIME } from "../../data/anime";
import { SELECTED_ANIME } from "../actions/anime.action";

const initialState = {
    animes: ANIME,
    selected: null
};

const AnimeReducer = (state = initialState, action) => {
    if (action.type === SELECTED_ANIME) {
        const { animeId } = action;
        return {
            ...state,
            selected: state.animes.find(anime => anime.id === animeId),
        };
    }

    return state;
};

export default AnimeReducer;