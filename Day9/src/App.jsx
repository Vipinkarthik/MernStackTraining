import React, { useState, useRef } from 'react';

function App() {
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // Start the countdown timer
  const startTimer = () => {
    if (isTimerRunning) return;
    setIsTimerRunning(true);
    timerRef.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          setIsTimerRunning(false);
          setMessage("Time's Up!");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Stop the countdown timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
    setMessage("Timer Stopped");
  };

  // Reset the timer back to 10 seconds
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
    setTimer(10);
    setMessage('');
  };

  // Focus the input box
  const focusBox = () => {
    inputRef.current.focus();
  };

  return (
    <div className="app-container flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="box p-6 bg-white shadow-lg rounded-lg text-center w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Magical Timer & Input Box</h1>

        <input
          ref={inputRef}
          type="text"
          className="p-3 border border-gray-300 rounded-lg mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type something..."
        />
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={focusBox}
          >
            Focus Box
          </button>
          
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ${isTimerRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={startTimer}
            disabled={isTimerRunning}
          >
            Start Timer
          </button>
          
          <button
            className={`bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ${!isTimerRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={stopTimer}
            disabled={!isTimerRunning}
          >
            Stop Timer
          </button>
          
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
            onClick={resetTimer}
          >
            Reset Timer
          </button>
        </div>

        <div className="text-4xl font-bold">
          {timer > 0 ? timer : <span className="text-red-500">{message}</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
