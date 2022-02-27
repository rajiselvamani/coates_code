import * as actionTypes from './types';
export const addmessage = (message) => {
    return {
        type: actionTypes.ADD_MESSAGE,
        payload: message
    };
};
export const setSelectedMessage = (message) => {
    return {
        type: actionTypes.SET_SELECTED_MESSAGE,
        payload: message
    };
};
export const removeSelectedMessage = (id) => {
    return {
        type: actionTypes.REMOVE_MESSAGE,
        id
    };
};
export const setComposeWindowState = (status) => {
    return {
        type: actionTypes.SET_COMPOSE_WINDOW_STATE,
        status
    };
};
