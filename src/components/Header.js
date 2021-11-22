import Navlink from "./Navlink";

function Header( {text} ) {
    return(
        <header>
            <h1 className='HeaderTitle'>{text}</h1>
        </header>
    );
}

Header.defaultProps = {
    text: 'Max Ramm',
}

export default Header