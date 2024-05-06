import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container, LogoutBtn, Logo } from "..";
import { Link } from "react-router-dom";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            title: "Home",
            slug: "/",
            active: true,
        },
        {
            title: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            title: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            title: "All posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            title: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 shadow bg-transparent">
            <Container>
                <nav className="flex">
                    <Link to="/">
                        <div className="mr-4">
                            <Logo width="70px" />
                        </div>
                    </Link>
                    <ul className="flex ml-auto">
                        {navItems.map((item) =>
                            item.active ? (
                                <>
                                    <li key={item.slug}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className="inline-block px-6 py-2 duration-200 hover:text-primary"
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                </>
                            ) : null
                        )}
                    </ul>
                    {authStatus && <LogoutBtn />}
                </nav>
            </Container>
        </header>
    );
}

export default Header;
