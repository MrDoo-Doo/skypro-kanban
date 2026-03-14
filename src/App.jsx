import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
