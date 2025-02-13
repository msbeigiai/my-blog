import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen">
        <Navbar />
        <main className="w-full">
          <AppRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
