import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "blue" }}>404 Not Found</h1>
        <button
          id="backToHomeButton"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
