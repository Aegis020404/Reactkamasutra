import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}

export default Message