import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circleIcon from "../Assets/circle.png";
import crossIcon from "../Assets/cross.png";
import Amaan from "../Assets/Amaan.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // even odd concept just to alternate user based on count & +1 for making it alternate.
  const toggle = (e, num) => {
    if (lock) {
      return 0; //user wins so don't execute below object
    }
    if (count % 2 === 0) {
      //even
      e.target.innerHTML = `<img src='${crossIcon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      //odd
      e.target.innerHTML = `<img src='${circleIcon}'>`;
      data[num] = "o";
      setCount(++count);
    }

    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const resetBoard = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`;
    boxArray.map((box) => {
      box.current.innerHTML = "";
      return 0;
    });
  };

  const won = (winner) => {
    setLock(true); // data can't be modified
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src='${crossIcon}'><span className="win">Wins</span>`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='${circleIcon}'><span className="win">Wins</span>`;
    }
  };

  return (
    <div className="container">
      <h1 ref={titleRef} className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            ref={box1}
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            ref={box2}
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            ref={box3}
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            ref={box4}
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            ref={box5}
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            ref={box6}
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            ref={box7}
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            ref={box8}
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            ref={box9}
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          resetBoard();
        }}
      >
        Reset
      </button>
      <hr />
      <div className="contact">
        <a href="https://www.linkedin.com/in/amaan-naseh/">
          <img src={Amaan} alt="Amaan Naseh" />
        </a>
        <h1 className="contact__details">
          Developed by{" "}
          <span>
            {" "}
            <a href="https://github.com/AmaanNaseh">Amaan Naseh</a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TicTacToe;
