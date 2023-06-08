export const ADD_ANIME_WATCHLIST = "ADD_ANIME_WATCHLIST"
export const REMOVE_ANIME_WATCHLIST = "REMOVE_ANIME_WATCHLIST"

export const add_anime_watchList = anime => ({
    type: ADD_ANIME_WATCHLIST,
    anime,
});

export const remove_anime_watchList = animeId => ({
    type: REMOVE_ANIME_WATCHLIST,
    animeId,
});