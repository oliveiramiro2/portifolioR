import { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Vite + React</h1>
            <div className="card">
                <button type="button" onClick={() => setCount(v => v + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
};

export default App;
