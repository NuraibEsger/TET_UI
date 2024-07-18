import { NavLink } from "react-router-dom";


const liStyle = { display: "flex", alignItems: "center", gap: "var(--spacing-sm, 8px)", alignSelf: "stretch" }

export default function LButton({ children }) {
    return <li style={{ liStyle }}>
        <NavLink style={{ textDecoration: "underline" }}>{children}</NavLink>
    </li>
}