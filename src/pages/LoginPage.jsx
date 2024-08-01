import { NavLink } from "react-router-dom";
import classes from "../assets/css/login.module.css";
import Button from "../components/Button";
import useSignIn from "../hooks/useSignIn";

export default function Login() {
  const { formik } = useSignIn();

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
              name="number"
              id="number"
              value={formik.values.number}
              onChange={(e) => {
                const newValue = e.target.value;
                // Only allow digits after +994
                if (/^\+994\d*$/.test(newValue)) {
                  formik.setFieldValue("number", newValue);
                }
              }}
              onBlur={() => {
                // Optional: Format phone number on blur
                if (!formik.values.number.startsWith("+994")) {
                  formik.setFieldValue("number", "+994");
                }
              }}
            />
            {formik.errors.number && formik.touched.number && (
                <span style={{ color: "red" }}>{formik.errors.number}</span>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Şifrə</label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
            {formik.errors.password && formik.touched.password && (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
            )}
          </div>
          <div className={classes.forgotPassword}>
            <NavLink>Şifrənizi unutmusunuz?</NavLink>
          </div>
          <Button type="submit" onClick={formik.handleSubmit}>Daxil ol</Button>
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
