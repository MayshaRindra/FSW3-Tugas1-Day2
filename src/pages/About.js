import Banner from "../assets/banner2.png";
import "../styles/About.css";
function About()  {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Banner})`}}>
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas sem nec scelerisque consequat. In at euismod sem, a vestibulum dui. Ut ac turpis ut ante finibus mattis. Praesent mollis justo in urna mollis,
                quis rutrum velit finibus. Cras ultrices tincidunt dapibus. Maecenas euismod elit ligula, sit amet fringilla magna facilisis ac. Mauris egestas dui ac pulvinar vehicula. Proin volutpat tellus vitae feugiat interdum. Phasellus gravida augue ut tortor finibus, id tincidunt magna fringilla. Integer a pellentesque urna, vel ultrices metus.
                </p>
            </div>
        </div>
    );
}

export default About
