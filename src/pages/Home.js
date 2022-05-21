import { Link } from "react-router-dom";
import BannerImage from "../assets/banner2.png";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1> DearBee</h1>
                <br></br>
                <p>Taking care of your skin is more important than covering it up</p>
                <Link to="/menu">
                    <button> Shop Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
