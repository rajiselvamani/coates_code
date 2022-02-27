import * as actionTypes from './types';
const INITIAL_STATE = {
    messages: [], //{body,subject,to,cc,bcc,provider}
    selectedMessage: {},
    messageCount: 0,
    composeWindowState: false
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            state.messageCount += 1;
            const data = { ...action.payload, id: state.messageCount };
            return {
                ...state,
                messages: [...state.messages, data]
            };
        case actionTypes.SET_SELECTED_MESSAGE:
            return {
                ...state,
                selectedMessage: action.payload
            };
        case actionTypes.REMOVE_MESSAGE:
            const newMessages = state.messages.filter((value) => value.id !== action.id);
            state.messageCount -= 1;
            return {
                ...state,
                messages: newMessages
            };
        case actionTypes.SET_COMPOSE_WINDOW_STATE:
            return {
                ...state,
                composeWindowState: action.status
            };
        default:
            return state;
    }
};
export default reducer;
