import { NavLink } from "react-router-dom";
import classes from "../assets/css/login.module.css";
import Button from "../components/Button";

export default function Login() {
  return (
    <div className={classes.login}>
      <section className={classes.container}>
        <form>
          <div className={classes.inputs}>
            <div className={classes.header}>
              <h1>Artıq qeydiyyatdan keçmisiz?</h1>
              <p>Davam etmək üçün mobil nömrənizi və şifrənizi daxil edin.</p>
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="tel">Mobil nömrə</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              defaultValue="+994 XX XXX XX XX"
              onFocus={(e) => {
                // Check if the value is the default, then clear X placeholders
                if (e.target.value === "+994 XX XXX XX XX") {
                  e.target.value = "+994 ";
                }
              }}
              onBlur={(e) => {
                // If the value is still only +994, restore the default value
                if (e.target.value === "+994 ") {
                  e.target.value = "+994 XX XXX XX XX";
                }
              }}
              onInput={(e) => {
                // Ensure the input value only contains allowed characters
                e.target.value = e.target.value.replace(+/[^0-9]/g, "");
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Şifrə</label>
            <input
              type="text"
              name="password"
              id="password"
              defaultValue="Şifrəniz"
              onFocus={(e) => {
                e.target.type = "password";
                if (e.target.value === "Şifrəniz") {
                  e.target.value = "";
                }
              }}
              onBlur={(e) => {
                e.target.type = "password";
                if (e.target.value === "") {
                  e.target.value = "Şifrəniz";
                }
              }}
            />
          </div>
          <div className={classes.forgotPassword}>
            <NavLink>Şifrənizi unutmusunuz?</NavLink>
          </div>
          <Button>Daxil ol</Button>
        </form>
        <div className={classes.register}>
          <div className={classes.registerHeader}>
            <h1>Hələ üzv deyilsiniz? İndi qoşulun!</h1>
          </div>
          <NavLink to="/register">Qeydiyyatdan keç</NavLink>
        </div>
      </section>
    </div>
  );
}
