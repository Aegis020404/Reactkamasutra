import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return <Dialogs
        updateNewMessageBody={updateNewMessageBody}
        sendMessage={sendMessage}
        dialogsPage={state}
    />
}

export default DialogsContainer