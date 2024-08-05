import BackgroundImage from "../assets/images/Background.png";
import classes from "../assets/css/header.module.css";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div className={classes.logo}>
        <img src={BackgroundImage} alt="TET" />
        <p>TET</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={classes.list} end>
              Ana Səhifə
            </NavLink>
          </li>
          <li>
            <NavLink to="/prices" className={classes.list}>
              Qiymətlər
            </NavLink>
          </li>
          <li>
            <NavLink to="/cabinet" className={classes.list}>
              Kabinetim
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={classes.list}>
              Əlaqə
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={classes.list}>
              Tərcüməçi ol
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.buttons}>
        <NavLink type="button" to='/login' className={classes.login}><p>Daxil ol</p></NavLink>
        <NavLink type="button" to='/register' className={classes.translate}><p>Tərcümə et</p></NavLink>
      </div>
    </header>
  );
}
