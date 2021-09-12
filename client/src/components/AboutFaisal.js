import '../styles/Theme.css';
import FaisalPFP from '../assets/aboutFaisalPFP.jpg';

function AboutFaisal() {

    return (
        <div style={{ width: '600px', height: '500px', margin: 'auto' }}>
            <img src={FaisalPFP} alt="About Faisal" style={{ display:'block', margin:'auto', width: 200, height: 250 }} />
            <h2 className="header">Faisal Hakimi</h2>
            <h3 className="header">Team Lead</h3>
            <p  style={{ margin:'auto', width:'500px', textAlign:'center'}}>Hey, my name is Faisal Hakimi and I am the Team Lead.
                My job is to communicate with everyone to assure everything is going well.</p>
        </div>
    );
}

export default AboutFaisal;