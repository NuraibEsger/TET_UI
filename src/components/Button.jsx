const style = {
  display: "flex",
  padding: "16px 20px",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderRadius: "8px",
  background: "var(--Foundation-Main-main-500, #0E6AC7)",
};

const textStyle = {
  color: "var(--Neutral-White, #FFF)",
  fontFamily: "Public Sans",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "140%",
  letterSpacing: "0.2px",
};

export default function Button({ children }) {
  return (
    <button style={style}>
      <p style={textStyle}>{children}</p>
    </button>
  );
}
