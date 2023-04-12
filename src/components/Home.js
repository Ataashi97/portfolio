import image from '../Images/ataashi-love.png'

function Home() {
    return(
        <div style={{fontFamily: "sans"}}>
            <div>
                <h1 style={{margin: "30px", clear: 'both'}}>About Me...</h1>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                <p style={{fontSize: "25px", margin: "40px"}}>I'm a newly minted full stack developer who just graduated from a coding bootcamp hosted by DU. I still have a lot to learn and hope to continue down this career path.</p>
                <img src={image} alt="image of Max Tribble" style={{margin: 'auto', maxWidth: '400px', borderRadius: '25px'}}></img>
            </div>
        </div>
    );
};

export default Home;