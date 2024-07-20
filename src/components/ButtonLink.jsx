import { NavLink } from "react-router-dom";

export default function Button({ children, img, to }) {
  const buttonStyle = {
    borderRadius: "8px",
    background: "var(--Foundation-Main-main-500, #0E6AC7)",
    textDocarati: "none",
  };
  return (
    <NavLink to={to} style={buttonStyle}>
      <p>{children}</p>
      {img ? <img src={img} alt="Arrow" /> : undefined}
    </NavLink>
  );
}
