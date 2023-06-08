export const ADD_ANIME_FINISHED = "ADD_ANIME_FINISHED"
export const REMOVE_ANIME_FINISHED = "REMOVE_ANIME_FINISHED"

export const add_anime_finished = anime => ({
    type: ADD_ANIME_FINISHED,
    anime,
});

export const remove_anime_finished = animeId => ({
    type: REMOVE_ANIME_FINISHED,
    animeId,
});