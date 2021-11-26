import GithubCard from "./GithubCard";
const Home = () => {
    return(
        <div>
            <div id='contact-card-container'>
                <GithubCard imagePath='GitHub-Mark-64px.png' goto="https://github.com/m-ramm" text='My Github'/>
                <GithubCard imagePath='Linkedin-logo-icon-png.png' goto="https://www.linkedin.com/in/max-ramm-2563071b4/" text='My LinkedIn' fade='contact-card fade-in-bottom-medium'/>
            </div>
            <h1 className='appear'>Home</h1>
        </div>
    );
}

export default Home