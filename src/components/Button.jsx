export default function Button({ classes, children, onClick, img }) {
  const buttonStyle = {
    borderRadius: "8px",
    background: "var(--Foundation-Main-main-500, #0E6AC7)",
  };
  return (
    <button style={buttonStyle}>
      <p>{children}</p>
      {img ? <img src={img} alt="Arrow" /> : undefined}
    </button>
  );
}
