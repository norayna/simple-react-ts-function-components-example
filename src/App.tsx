import './App.css';
import Main from "./Main";
import Navbar from './Navbar'

function App() {
    const user = 'rayna'

    return (
        <div className="App">
            <Navbar user={user}/>
            <Main user={user}/>
        </div>
    );
}

export default App;
