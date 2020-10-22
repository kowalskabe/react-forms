import React from 'react';
import './App.css';
import StandardForm from "./Standard-Form/StandardForm";
import ReactHookForm from "./React-Hook-Form/ReactHookForm";

function App() {
    return (
    <div className="App">
        <div className="container">
            <div className="row mt-5" style={{display: 'flex', justifyContent: 'space-around' }}>
                <div className="col-md-5 border p-5" style={{backgroundColor: 'pink'}}>
                    <StandardForm />
                </div>
                <div className="col-md-5 border p-5" style={{backgroundColor: 'rosybrown'}}>
                    <ReactHookForm />
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
