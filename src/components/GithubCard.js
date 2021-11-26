
const GithubCard = ( { imagePath, goto, text, fade } ) => {
    return(
        <a className={fade} href={goto} target="_blank">
            <img src={imagePath} style={{paddingRight:'10px', maxHeight:'30px',maxWidth:'30px'}}></img>
            <div style={{fontWeight:'bold'}}>{text}</div>
        </a>
    )
}
// make sure to style as fixed in top right corner
GithubCard.defaultProps = {
    imagePath: 'favicon.ico',
    text: 'link',
    fade:'contact-card fade-in-bottom'
}

export default GithubCard