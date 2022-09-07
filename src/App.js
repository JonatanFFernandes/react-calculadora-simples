import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [oldnumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();

  const clear = () => {
    setNumber(0);
  };

  const backSpace = () => {
    setNumber(number.slice(0, -1));
    if (number === "") {
      setNumber(0);
    }
  };

  const handleClick = (e) => {
    var input = e.target.name;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  };

  const operatorCalcs = (e) => {
    var operatorIn = e.target.value;
    setOperator(operatorIn);
    setOldNumber(number);
    setNumber(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNumber(parseFloat(oldnumber) / parseFloat(number));
    } else if (operator === "x") {
      setNumber(parseFloat(oldnumber) * parseFloat(number));
    } else if (operator === "+") {
      setNumber(parseFloat(oldnumber) + parseFloat(number));
    } else if (operator === "-") {
      setNumber(parseFloat(oldnumber) - parseFloat(number));
    }
  };

  return (
    <>
      <div className="container">
        <h1>Calculadora Simples</h1>
        <form>
          <input type="text" value={number} />
        </form>
        <div className="keyPad">
          <button class="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button class="highlight" onClick={backSpace} id="backSpace">
            C
          </button>
          <button class="highlight" name="/" onClick={operatorCalcs} value="/">
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button class="highlight" name="*" onClick={operatorCalcs} value="x">
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button class="highlight" name="-" onClick={operatorCalcs} value="-">
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button class="highlight" name="+" onClick={operatorCalcs} value="+">
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button class="highlight" name="=" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
