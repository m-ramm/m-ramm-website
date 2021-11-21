import { Link } from "react-router-dom";

const Navlink = ({ text, link, icon }) => {
    return(
    //     <div className='btn-container'>
    //         <span className='material-icons icon'>{icon}</span>
    //         <Link to={link} style={linkStyling} className='btn'>{text}</Link>
    //     </div>

        <Link to={link} style={linkStyling} className='btn-container'>
            <span className='material-icons icon'>{icon}</span>
            <span className='btn'>{text}</span>
        </Link>
            
    );
}

const linkStyling = {
    textDecoration:'none',
};

Navlink.defaultProps = {
    text: 'Placeholder',
    icon: 'help',
    link: '/'
}
export default Navlink
