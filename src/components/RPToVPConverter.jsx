import { useState } from "react";

const VP_PER_RP = 70;

export default function RPToVPConverter() {
  const [rpValue, setRpValue] = useState("");
  const [vpResult, setVpResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const convertRPtoVP = () => {
    const rp = parseFloat(rpValue);
    if (rp && rp > 0) {
      const vp = rp * VP_PER_RP;
      setVpResult(vp);
      setShowModal(true);
    } else {
      setVpResult("invalid");
      setShowModal(false);
    }
  };

  const closeModal = () => setShowModal(false);

  const goBack = () => {
    setRpValue("");
    setVpResult(null);
    setShowModal(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Radiants to VP Converter</h2>
      <input
        type="number"
        placeholder="Enter RP"
        value={rpValue}
        onChange={(e) => setRpValue(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={convertRPtoVP} style={buttonStyle}>
        Convert
      </button>

      {vpResult === "invalid" && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Please enter a valid RP amount.
        </p>
      )}

      {vpResult && vpResult !== "invalid" && (
        <>
          <p style={{ marginTop: "1rem" }}>
            {rpValue} RP is approximately worth {vpResult} VP
          </p>
          <button onClick={goBack} style={backButtonStyle}>
            Back
          </button>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>Conversion Successful!</h3>
            <p>
              You entered: {rpValue} RP!
              <br />
              This is approximately worth: {vpResult} VP!
            </p>
            <button onClick={closeModal} style={buttonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Basic styles
const buttonStyle = {
  padding: "0.5rem 1rem",
  background: "#ff4655",
  border: "none",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

const backButtonStyle = {
  ...buttonStyle,
  marginTop: "1rem",
  background: "#555",
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "#fff",
  color: "#000",
  padding: "2rem",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
};
