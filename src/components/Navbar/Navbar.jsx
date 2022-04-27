import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux/lib";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={`/profile/${props.auth.userId}`} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>*/}
            {/*</div>*/}

        </nav>
    )
}
const NavbarContainer = connect((state)=>({auth:state.auth}), {})(Navbar)
export default NavbarContainer