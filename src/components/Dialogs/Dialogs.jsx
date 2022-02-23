import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Dimych' id='6'/>
            </div>
            <div className={s.messages}>
                <Message text='Hi'/>
                <Message text='How are you?'/>
                <Message text='Yo'/>
                <Message text='Yo'/>
                <Message text='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs