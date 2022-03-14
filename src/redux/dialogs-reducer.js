const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    newMessageBody: ''
}

const dialogsReducer  = (state = initialState, action) => {
    let stateCopy = { ...state, messages: [...state.messages] };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;