import classes from "../assets/css/register.module.css";
import CloseIcon from "../assets/images/close.png";
import Button from "./Button";

export default function Modal({onClose}) {
  return (
    <dialog className={classes.modal}>
      <div className={classes.container}>
        <div className={classes.header}>
          <p>Əlavə edin</p>
          <button onClick={onClose} type="button">
            <img src={CloseIcon} alt="Bağla" />
          </button>
        </div>
        <div className={classes.inputs}>
          <label htmlFor="gender">Mövcudluq</label>
          <select className={classes.customSelect} name="" id="gender">
            <option value="" disabled selected>
              Seçilməyib
            </option>
            <option value="man">Kişi</option>
            <option value="woman">Qadın</option>
          </select>
        </div>
        <div className={classes.inputs}>
          <input type="checkbox" id="level" />
          <label htmlFor="level">Mövcudluq</label>
        </div>
      </div>

      <Button type="button">Yadda saxla</Button>
    </dialog>
  );
}
