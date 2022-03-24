import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/lib";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBodyCreator(body))
//         },
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         }
//     }
// }
const DialogsContainer = connect(
    mapStateToProps,
    {updateNewMessageBody, sendMessage,})
(Dialogs)

export default DialogsContainer
