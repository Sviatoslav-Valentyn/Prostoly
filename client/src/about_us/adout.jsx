import '../App.css';
import Header from '../templates/Header';
import Timer from '../templates/Timer';

const About = () => {
    return (
        <div className="main-wrap">
            <Header />

            <div className="content-home">
                <Timer />
                <h1>About</h1>


            </div>
        </div>
    );
}

export default About;