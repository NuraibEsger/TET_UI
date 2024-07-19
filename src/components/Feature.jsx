import { NavLink } from "react-router-dom";

export default function Feature({ classes, img, header, paragraph }) {
  return (
    <div className={classes.feature}>
      <img src={img} alt="" />
      <div className={classes.frame}>
        <h1>{header}</h1>
        <p>{paragraph}</p>
      </div>
      <NavLink to={"/"}>
        <p>Daha çox</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.75 12H20.25"
            stroke="#3E3E3E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 5.25L20.25 12L13.5 18.75"
            stroke="#3E3E3E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NavLink>
    </div>
  );
}
