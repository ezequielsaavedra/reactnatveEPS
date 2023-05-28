import { ANIME } from "../../data/anime";
import { SELECTED_ANIME } from "../actions/anime.action";

const initialState = {
    animes: ANIME,
    selected: null
}

const AnimeReducer = (state = initialState, action) => {
    switch (action.type) {
            case SELECTED_ANIME:
                return {
                    ...state, 
                    selected: state.animes.find(
                        anime => anime.id === action.animeId
                    ),
                };
    // switch (action.type) {
    //     case SELECTED_ANIME:
    //         const IndexAnime = state.animes.findIndex(
    //             anime => anime.id === action.animeId
    //         ); 
    //         if (IndexAnime === -1)
    //             return state;
    //         return {
    //             ...state,
    //             selected: state.animes[IndexAnime]
    //         };
        default:
            return state;
    }
}

export default AnimeReducer