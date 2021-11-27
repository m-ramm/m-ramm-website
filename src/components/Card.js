const Card = ( { imagePath, gitRepo, projLink, fade, viewHide }) => {
    let hide;
    if (viewHide == true) {
        hide = {display:'none'}
    }
    return(
    <div className={fade}>
         <img className='card-img' src={imagePath}></img>
         <div className='card-desc'>lorem ipsum loreum ijdfaljsflkajdslfkjsldkfjlaskjdf</div>
         <div className='proj-btn-container'>
            <a className='proj-btn' href={projLink} target="_blank" style={hide}>View Project</a>
            <a className='proj-btn' href={gitRepo} target="_blank">GitHub Repo</a>
         </div>
    </div>
    )
}

Card.defaultProps = {
    imagePath: 'favicon.ico',
    gitRepo: "https://github.com/m-ramm",
    fade:'card fade-in-bottom',
    viewHide:false

}
export default Card