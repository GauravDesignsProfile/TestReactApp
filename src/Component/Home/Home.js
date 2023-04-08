import Navigation from "../Navigation/Navigation";
import BackImage from "../Images/Background.png";
import card_image from "../Images/pexels-august-de-richelieu-4427611.jpg";
import "./Home.css";

function Home() {
    return(
        <div>
            <Navigation/>
            <div className="LandingBack" style={{backgroundImage: `url(${BackImage})`}}>
                <h1>Great lawyers aren’t born, they’re made</h1>
            </div>
            <div className="FDiv">
                <h3>Featured Notes</h3>
                <div className="Featured">
                    <img src={card_image} alt="" />
                    <div style={{padding: `2%`, display: `flex`, flexDirection: `column`, justifyContent: `space-around`}}>
                        <h3>Land Laws: MRTP Act, 1966| define development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p style={{textAlign: `end`}}>New Stories</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;