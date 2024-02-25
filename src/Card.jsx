import profilePic from './assets/WIN_20231119_23_45_51_Pro.jpg'

function Card() {
    return(
        <div className= "card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make Youtube videos and play video games </p>
        </div>
    );
}

export default Card