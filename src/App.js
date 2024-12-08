import React, { useState } from 'react';
import CodeGenerator from './components/CodeGenerator';
import CodeHistory from './components/CodeHistory';
import './styles/global.css'; // Adjust the path if necessary



const App = () => {
    const [history, setHistory] = useState([]);

    const addToHistory = (code) => {
        setHistory((prevHistory) => [code, ...prevHistory]);
    };

    return (
        <div className="app">
            <CodeGenerator addToHistory={addToHistory} />
            <CodeHistory history={history} />
        </div>
    );
};

export default App;
