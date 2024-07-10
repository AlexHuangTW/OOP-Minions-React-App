import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const minions = [
  { name: 'Stuart', imgSrc: 'images/minions/Stuart.svg' },
  { name: 'Kevin', imgSrc: 'images/minions/Kevin.svg' },
  { name: 'Bob', imgSrc: 'images/minions/Bob.svg' }
];

function CharacterMenu() {
  const [selectedMinion, setSelectedMinion] = useState(null);
  const navigate = useNavigate();

  const handleCharacterClick = (minion) => {
    setSelectedMinion(minion);
  };

  const handleStartGame = () => {
    if (selectedMinion) {
      localStorage.setItem('chosenCharacter', JSON.stringify(selectedMinion));
      navigate('/game');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 bg-diagonal-stripes p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mt-5 mb-5">Minions Game</h1>
      </header>
      <main className="mt-8">
        <div className="text-center mb-4">
          <p className="text-2xl">Choose your Minion</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {minions.map((minion) => (
            <div
              key={minion.name}
              className={`p-4 border rounded-lg transition-transform transform hover:scale-110 cursor-pointer ${selectedMinion?.name === minion.name ? 'border-blue-500' : ''}`}
              onClick={() => handleCharacterClick(minion)}
            >
              <img src={minion.imgSrc} alt={minion.name} className="w-full h-full p-4 bg-cover rounded-lg" />
            </div>
          ))}
        </div>
        {selectedMinion && (
          <div className="mt-4 text-center">
            <p className="text-xl">{selectedMinion.name} selected</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white text-2xl rounded hover:bg-green-500 transition-colors" onClick={handleStartGame}>
              Start Game
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default CharacterMenu;
