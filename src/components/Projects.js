import project1 from '../images/Project-1.png'
import project2 from '../Images/Project-2.PNG'
import project3 from '../Images/Project-3.png'

function Projects() {
    return(
        <div style={{fontFamily: "sans-serif"}}>
            <h1 style={{margin: "30px", clear: 'both'}}>Projects...</h1>
            <div>
                <p style={{fontSize: "26px", margin: "45px"}}>These are my first three major projects that I worked on. Each pitcure acts as a hyperlink that will take you to the deployed enviroments of the apps.</p>
            </div>
            <div style={{dislplay: 'flex', justifyContent: 'space-around'}}>
                <a href="https://lizedelman.github.io/bopsnbooze/"><img src={project1} alt="screenshot of my first project" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img></a> 
                <a href="https://boiling-ridge-38547.herokuapp.com/homepage"><img src={project1} alt="theBeholder" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img></a> 
                <a href="https://video-game-trivia.herokuapp.com/"><img src={project1} alt="VGT" style={{margin: 'auto', maxWidth: '300px', borderRadius: '25px'}}></img></a> 
            </div>
        </div>
    );
};

export default Projects;