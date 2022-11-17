import '../App.css';
import logo from '../Images/logo.png';

const Header = () => {
    return (
        <div class="header_inner">
            <div class="header__logo"> <img src={logo} alt="" /> Help Ukraine</div>
            <div className="menu">
                <nav class="nav">
                    <a class="nav__link"
                        href="./">Home</a>
                    <a class="nav__link" href="https://www.ukr.net/news/main.html">News</a>
                    <a class="nav__link"
                        href="./about">About
                        Us</a>
                    <a class="nav__link"
                        href="./comment">Comment</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;