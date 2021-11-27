
const GithubCard = ( { imagePath, goto, text, fade } ) => {
    return(
        <a className={fade} href={goto} target="_blank">
            <img src={imagePath} style={{paddingRight:'10px', maxHeight:'30px',maxWidth:'30px'}}></img>
            <div style={{fontWeight:'bold'}}>{text}</div>
        </a>
    )
}

GithubCard.defaultProps = {
    imagePath: 'favicon.ico',
    goto: 'https://github.com/m-ramm',
    text: 'link',
    fade:'contact-card fade-in-bottom'
}

export default GithubCard