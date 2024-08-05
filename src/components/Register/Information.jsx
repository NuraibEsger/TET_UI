import { useState } from "react";
import classes from "../../assets/css/register.module.css";
import PlusImg from "../../assets/images/PlusCircle.png";
import Modal from "../Modal";

export default function Information() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={classes.inputs}>
        <label htmlFor="gender">Tərcümə sahəsində təcrübəniz</label>
        <select className={classes.customSelect} name="" id="gender">
          <option value="" disabled selected>
            Seçilməyib
          </option>
          <option value="man">Kişi</option>
          <option value="woman">Qadın</option>
        </select>
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
      <button type="button" className={classes.addLanguage} onClick={openModal}>
        <img src={PlusImg} alt="Dil əlavə edin" />
        <p>Dil biliklərinizi əlavə edin</p>
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}
