import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}