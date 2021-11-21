import Navlink from './Navlink.js'

const Navbar = () => {
    return(
        <nav>
            <Navlink text='Home' link='/' icon='home' />
            <Navlink text='Projects' link='/projects' icon='description' />
            <Navlink />
        </nav>
    );
}

export default Navbar;