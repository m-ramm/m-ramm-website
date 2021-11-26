const Card = ( { fade }) => {
    return(

    <div className={fade}>
         <img className='card-img'></img>
         <div className='card-desc'>lorem ipsum</div>
    </div>
    )
}

Card.defaultProps = {
    fade:'card fade-in-bottom'
}
export default Card