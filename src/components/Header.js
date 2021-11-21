
function Header( {text} ) {
    return(
        <header>
            <h1>{text}</h1>
        </header>
    );
}

Header.defaultProps = {
    text: 'Header',
}

export default Header