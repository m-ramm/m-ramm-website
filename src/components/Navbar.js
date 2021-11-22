import Navlink from './Navlink.js'

const Navbar = () => {
    return(
        <nav>
            <Navlink text='Home' link='/' icon='home' />
            <Navlink text='Projects' link='/projects' icon='description' />
            <div id="nav-footer">
                <Navlink text='Contact Me' link='/contact' icon='mail' style={{textDecoration:'none', position:'absolute', bottom: 0}} />
            </div>
        </nav>
    );
}

export default Navbar;