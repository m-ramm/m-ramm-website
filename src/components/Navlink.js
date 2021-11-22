import { Link } from "react-router-dom";

const Navlink = ({ text, link, icon, style }) => {
    return(
    //     <div className='btn-container'>
    //         <span className='material-icons icon'>{icon}</span>
    //         <Link to={link} style={linkStyling} className='btn'>{text}</Link>
    //     </div>

        <Link to={link} style={style} className='btn-container'>
            <span className='material-icons icon'>{icon}</span>
            <span className='btn'>{text}</span>
        </Link>
            
    );
}

Navlink.defaultProps = {
    text: '',
    icon: 'help',
    link: '/',
    style: {textDecoration:'none'}
}
export default Navlink
