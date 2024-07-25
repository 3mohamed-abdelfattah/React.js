import { useState } from 'react';

export default function AppTwo() {

    function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }

    const [inputText, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }


    return (
        <div>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>
            <hr />
            <div>
                <input value={inputText} onChange={handleChange} />
                <p>You typed: {inputText}</p>
                <button onClick={() => setText('hello')}>
                    Reset
                </button>
            </div>
        </div>
    );
}


