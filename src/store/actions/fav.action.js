export const ADD_ANIME_FAV = "ADD_ANIME_FAV"
export const REMOVE_ANIME_FAV = "REMOVE_ANIME_FAV"

export const add_anime_fav = anime => ({
    type: ADD_ANIME_FAV,
    anime,
});

export const remove_anime_fav = animeId => ({
    type: REMOVE_ANIME_FAV,
    animeId,
});