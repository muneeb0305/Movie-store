export const ADDMOVIE = (movie) => {
    return {
        type: 'ADD',
        payload: movie
    }
}
export const DELETEMOVIE = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}
export const UPDATEMOVIE = (id) => {
    return {
        type: 'UPDATE',
        payload: id
    }
}