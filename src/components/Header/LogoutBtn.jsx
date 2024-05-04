import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { Button } from "../";

function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <Button
            onClick={handleLogout}
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        >
            Logout
        </Button>
    );
}

export default LogoutBtn;
