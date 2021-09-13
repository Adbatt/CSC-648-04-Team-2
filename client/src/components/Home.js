import '../styles/Theme.css';
import axios from '../helpers/axios';

function Home() {

    const handleTestAPI = () => {
        axios.get('/test').then(response => console.log(response.data)).catch(err => console.log(err));
    }

    return (
        <div>
            <h1 className="header">CSC 648 Software Engineering class SFSU</h1>
            <h1 className="header">Fall 2021</h1>
            <h1 className="header">Section 04</h1>
            <h1 className="header">Team 02</h1>

            <div style={{ display: 'flex', margin: 'auto', width: '200px', gap: '20px', flexDirection: 'column' }}>
                <button onClick={() => window.location.replace('/faisal')}>Faisal Hakimi</button>
                <button onClick={() => window.location.replace('/kyle')}>Kyle Gilbert</button>
                <button onClick={() => window.location.replace('/alvin')}>Alvin To</button>
                <button onClick={() => window.location.replace('/islom')}>Islombek Abdulakhatov</button>
                <button onClick={() => window.location.replace('/jib')}>Jibraeel Abdelwahhab</button>
            </div>

            <button onClick={handleTestAPI}>Test API</button>
        </div>
    );
}

export default Home;