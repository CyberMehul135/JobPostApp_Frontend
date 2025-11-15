import useToastPopupContext from "../../contexts/ToastPopupContext";

export default function DefaultPopup() {
  const { defaultPopupVisible, defaultPopupText } = useToastPopupContext();
  return (
    <div
      style={{
        position: "fixed",
        bottom: `${defaultPopupVisible ? "20px" : "-50px"}`,
        right: "40px",
        zIndex: "100",
        width: "300px",
        backgroundColor: "white",
        boxShadow: "2px 2px 12px -4px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        transition: "all 0.3s ease",
      }}
    >
      <span>✅</span>
      <p style={{ margin: "0" }}>{defaultPopupText} Successfully</p>
    </div>
  );
}
