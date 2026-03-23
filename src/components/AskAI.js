import React, { useState } from "react";

function AskAI() {
    const [response, setResponse] = useState('');
    const [query, setQuery] = useState('');

    const askAI = async () => {
        try {
            const response = await fetch("http://localhost:8080/ask-ai?prompt=" + query);
            const data = response.text();
            setResponse(data);
        } catch(ex) {
            console.error(ex);
        }
    };
    
    return (
        <div>
            <h3>Ask me anything!</h3>

            <input type="text" placeholder="Enter your query" value={query} onChange={e => setQuery(e.target.value)}></input>
            <button onClick={askAI}>Ask</button>

            <div className="output">
                <p>{response}</p>
            </div>
        </div>
    );
}

export default AskAI;