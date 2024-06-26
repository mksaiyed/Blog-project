import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="min-h-screen flex flex-wrap content-between relative">
                    <div className="w-full block">
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
