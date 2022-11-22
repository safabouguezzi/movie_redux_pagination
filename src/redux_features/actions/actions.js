import {SEARCH, RATING, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "../constants/actions-types"

export const search = (event) => {
    return {
        type : SEARCH,
        payload : event,
    }
}

export const rating = (event) => {
    return {
        type : RATING,
        payload : event,
    }
}

export const addMovie = (event) => {
    return {
        type : ADD_MOVIE,
        payload : event,
    }
}

export const deleteMovie = (event) => {
    return {
        type : DELETE_MOVIE,
        payload : event,
    }
}

export const updateMovie = (event) => {
    return {
        type : UPDATE_MOVIE,
        payload : event,
    }
}