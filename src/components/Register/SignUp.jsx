import classes from "../../assets/css/register.module.css";

export default function SignUp() {
  return (
    <>
      <div className={classes.inputs}>
        <label htmlFor="name">Ad</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="surname">Soyad</label>
        <input type="text" id="surname" />
      </div>
    </>
  );
}
