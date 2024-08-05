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
      <div className={classes.inputs}>
        <label htmlFor="birthday">Doğum tarixi</label>
        <input type="date" id="birthday" />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="gender">Cins</label>
        <select className={classes.customSelect} name="" id="gender">
          <option value="" disabled selected>
            Cinsiniz
          </option>
          <option value="man">Kişi</option>
          <option value="woman">Qadın</option>
        </select>
      </div>
      <div className={classes.inputs}>
        <label htmlFor="nationality">Milliyət</label>
        <input type="text" id="nationality" placeholder="Milliyətiniz" />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="tel">Mobil nömrə</label>
        <input type="tel" name="number" id="number" />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="email">E-poçt</label>
        <input type="email" id="email" placeholder="E-poçtunuz" />
      </div>
    </>
  );
}
