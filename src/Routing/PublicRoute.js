import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function PublicRoute({ children }) {
    const isLoggedIn = useAuth();

    return !isLoggedIn ? children : <Navigate to="/SignIn" />;
}