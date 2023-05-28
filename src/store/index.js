import { combineReducers, createStore } from "redux";

import AnimeReducer from "./reducers/anime.reducer";

const RootReducer = combineReducers({
    animes: AnimeReducer,
});

export default createStore(RootReducer);