import '../styles/Theme.css';
import KyleImage from '../assets/ImgKyle.jpg';

function AboutKyle() {

    return (
        <div>
            <h1 className="header">Kyle Gilbert</h1>
            <h3 className="header">Backend Lead</h3>
            <p>Hello, my name is Kyle and I'm a transfer student at SFSU studying Computer
                Science. I'll be working as the backend lead for this assignment. We currently
                plan to use JavaScript, Express, and a MySQL database for the backend. Below
                is a normal photo of me.
            </p>
            <img src={KyleImage} alt="pic" height="500px" width="375px"/>
        </div>
    );
}

export default AboutKyle;