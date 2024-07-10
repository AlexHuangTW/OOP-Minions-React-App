import React, { useEffect, useRef } from 'react';

function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chosenCharacter = JSON.parse(localStorage.getItem('chosenCharacter'));
    if (chosenCharacter) {
      const img = new Image();
      img.src = chosenCharacter.imgSrc;
      img.onload = () => {
        startGame(img);
      };
    }
  }, []);

  const startGame = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const FR = 10;
    const S = 20;
    const T = canvas.width / S;
    let pos = { x: 10, y: 10 };
    let vel = { x: 0, y: 0 };
    let minion = [{ x: pos.x, y: pos.y }];
    let food = { x: Math.floor(Math.random() * T), y: Math.floor(Math.random() * T) };

    const gameLoop = () => {
      if (vel.x || vel.y) {
        let newHead = { x: minion[0].x + vel.x, y: minion[0].y + vel.y };
        if (newHead.x < 0 || newHead.x >= T || newHead.y < 0 || newHead.y >= T || minion.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          alert("Game Over!");
          document.location.reload();
          return;
        }
        if (newHead.x === food.x && newHead.y === food.y) {
          minion.push({});
          food = { x: Math.floor(Math.random() * T), y: Math.floor(Math.random() * T) };
        } else {
          minion.pop();
        }
        minion.unshift(newHead);
      }
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      minion.forEach(segment => ctx.drawImage(img, segment.x * S, segment.y * S, S, S));
      ctx.drawImage(img, food.x * S, food.y * S, S, S);
      setTimeout(gameLoop, 1000 / FR);
    };

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowUp': if (vel.y === 0) vel = { x: 0, y: -1 }; break;
        case 'ArrowDown': if (vel.y === 0) vel = { x: 0, y: 1 }; break;
        case 'ArrowLeft': if (vel.x === 0) vel = { x: -1, y: 0 }; break;
        case 'ArrowRight': if (vel.x === 0) vel = { x: 1, y: 0 }; break;
        default: break;
      }
    });

    gameLoop();
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <canvas ref={canvasRef} width="400" height="400" className="border-5 border-white rounded-lg"></canvas>
    </div>
  );
}

export default Game;
