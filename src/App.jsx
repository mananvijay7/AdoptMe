import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";


const App = () => {
      <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese"/>
            <Pet name="Casper" animal="Dog" breed="Golden Retriever"/>
            <Pet name="Leo" animal="Cat" breed="Irish Cat"/>
      </div>
} 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);