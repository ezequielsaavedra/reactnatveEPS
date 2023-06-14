import { applyMiddleware, combineReducers, createStore } from "redux";

import AnimeReducer from "./reducers/anime.reducer";
import AvatarReducer from "./reducers/avatar.reducer";
import FavReducer from "./reducers/fav.reducer";
import FinishedReducer from "./reducers/finished.reducer";
import WatchListReducer from "./reducers/watchList.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    animes: AnimeReducer,
    favAnimes: FavReducer,
    watchListAnimes: WatchListReducer,
    finishedAnimes: FinishedReducer,
    avatar: AvatarReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));