import React from "react";

const Buttons = (props) => {
  const handleClick = (e) => {
    const val = e.target.value;
    props.data(val);
  };
  return (
    <div>
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="/" onClick={handleClick} className="opt">
        /
      </button>

      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="-" onClick={handleClick} className="opt">
        -
      </button>

      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="+" onClick={handleClick} className="opt">
        +
      </button>

      <button value="del" onClick={handleClick}>
        del
      </button>
      <button value="." onClick={handleClick}>
        .
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button value="=" onClick={handleClick} className="opt">
        =
      </button>
    </div>
  );
};

export default Buttons;
