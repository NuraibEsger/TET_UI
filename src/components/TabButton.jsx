import { useState } from "react";
import classes from "../assets/css/questions.module.css";
import plusIcon from "../assets/images/Plus.png";

export default function TabButton({ children, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className={classes.question}>
        <p>{children}</p>
        <button onClick={toggleOpen}>
          <img src={plusIcon} alt="" />
        </button>
      </li>
      {isOpen && <div className={classes.additionalContent}>{text}</div>}
    </>
  );
}
