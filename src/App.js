import { useState } from 'react';
import './App.css'
import RecipeGenerator from './components/RecipeGenerator.js';
import AskAI from './components/AskAI.js'

function App() {

  const [activeTab, setActiveTab] = useState('AskAI');

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <button className={activeTab === 'AskAI' ? 'active' : ''} onClick={() => setActiveTab('AskAI')}>AskAI</button>
          <button className={activeTab === 'recipe-generator' ? 'active' : ''} onClick={() => setActiveTab('recipe-generator')}>Generate Recipe</button>
        </div>
        
        <div>
          {activeTab === 'AskAI' && <AskAI></AskAI>}
          {activeTab === 'recipe-generator' && <RecipeGenerator></RecipeGenerator>}
        </div>
      </header>
    </div>
  );
}

export default App;
