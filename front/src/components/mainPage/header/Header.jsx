import Logo from "./logo/Logo";
import AddArticle from "./addArticle/AddArticle";
import Profile from "./profile/Profile";

function Header() {
    return (
        <>
            <header>
                <Logo />
                <AddArticle />
                <Profile />
            </header>
        </>
    );
}

export default Header;