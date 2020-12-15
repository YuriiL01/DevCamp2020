import Logo from "./logo/Logo";
import AddArticle from "./addArticle/AddArticle";
import Profile from "./profile/Profile";

function Header() {
    return (
        <>
            <Logo />
            <AddArticle />
            <Profile />
        </>
    );
}

export default Header;