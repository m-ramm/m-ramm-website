import Card from './Card.js'

const Projects = () => {
    return (
        <div style={{overflowY:'auto'}}>
            <h1 className='appear' style={{marginBottom:'50px'}}>Projects</h1>
            <div className='container'>
                <Card fade='card fade-in-bottom'/>
                <Card fade='card fade-in-bottom-medium'/>  
            </div>
        </div>
    )
}

export default Projects