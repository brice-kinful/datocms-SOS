import React from "react";

const Board = (props) => {
  const board = props.content;
  const boardArr = board.names.split(/\r?\n/);
  // console.log(names);
  return (
    <section className="board gray-bg">
      <div className="wrapper lg content center-text">
        <h2 className="nobel-font uppercase">{board.title}</h2>
        <ul class="flex wrap">
          {boardArr.map((person, index) => {
            return (
              <li key={index} className="one-third">
                <span>{person.replace("* ", "")}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Board;
