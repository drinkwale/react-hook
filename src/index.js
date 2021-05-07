import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target);
    };
    return { value };
};

const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name}></input>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
