
import './App.css';
import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case '=': {
        try {
          const evalAnswer = eval(question);
          setAnswer(evalAnswer === undefined ? '' : evalAnswer);
        } catch (error) {
          setAnswer('Invalid input');
        }
        break;
      }
      case 'C': {
        setQuestion('');
        setAnswer('');
        break;
      }
      case 'CE': {
        setQuestion(question.slice(0, -1));
        break;
      }
      default: {
        setQuestion(question + value);
        break;
      }
    }
  };

  return (
    <div className="calculator">
      <h1> Calculator</h1>
      <div className="output-screen">
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClick} value="C">Clear</button>
        <button onClick={handleClick} value="CE">Delete</button>
        <button onClick={handleClick} value=".">.</button>
        <button onClick={handleClick} value="/">/</button>
        
        <button onClick={handleClick} value="7">7</button>
        <button onClick={handleClick} value="8">8</button>
        <button onClick={handleClick} value="9">9</button>
        <button onClick={handleClick} value="+">+</button>
       
        <button onClick={handleClick} value="4">4</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="6">6</button>
        <button onClick={handleClick} value="-">-</button>

        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="2">2</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="*">*</button>
        <button onClick={handleClick} value=""></button>
        <button onClick={handleClick} value="0">0</button>
        
        <button onClick={handleClick} value="=">=</button>
        
      </div>
    </div>
  );
}

export default App;
