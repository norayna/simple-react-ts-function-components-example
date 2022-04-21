import './App.css';
import Main from "./Main";
import Navbar from './Navbar'
import {useState} from "react";

function App() {
    const [user, setUser] = useState('rayna')

    return (
        <div className="App">
            <Navbar user={user}/>
            <Main user={user}/>
        </div>
    );
}

export default App;
