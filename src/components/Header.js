
function Header( {text} ) {
    return(
        <header>
            <h1>{text}</h1>
        </header>
    );
}

Header.defaultProps = {
    text: 'hello',
}

export default Header