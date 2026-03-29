import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CropCalendar from './pages/CropCalendar';
import Market from "./pages/Market";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
          <Route path="/crop-calendar" element={<ProtectedRoute> <CropCalendar /> </ProtectedRoute>} />
          <Route path="/market" element={<ProtectedRoute> <Market /> </ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;