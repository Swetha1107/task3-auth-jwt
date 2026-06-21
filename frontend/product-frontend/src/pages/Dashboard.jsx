import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Product Management System</h1>

        <p style={styles.subtitle}>
          Manage, add, update and organize your products efficiently.
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => navigate("/")}
          >
            📦 View Products
          </button>

          <button
            style={styles.button}
            onClick={() => navigate("/add")}
          >
            ➕ Add Product
          </button>

          <button
            style={styles.logoutButton}
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "450px",
    backgroundColor: "#111",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid #333",
    boxShadow: "0 0 20px rgba(255,0,0,0.2)",
    textAlign: "center",
  },

  title: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "30px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#bbb",
    marginBottom: "35px",
    fontSize: "15px",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  button: {
    padding: "14px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  logoutButton: {
    padding: "14px",
    backgroundColor: "#222",
    color: "white",
    border: "1px solid red",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Dashboard;